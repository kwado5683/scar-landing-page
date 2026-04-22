/*
DESCRIPTION: Lead form API endpoint with email notifications.
- Validates lead form data using Zod schema
- Saves lead data to Supabase database
- Sends email notification to configured recipient
- Handles errors gracefully and returns appropriate responses

WHAT EACH PART DOES:
1. Data validation - Uses Zod to validate form input
2. Database storage - Saves lead to Supabase leads table
3. Email notification - Sends email using Resend service
4. Error handling - Returns consistent error responses
5. Success response - Confirms successful submission

PSEUDOCODE:
- Parse and validate incoming form data
- Save validated data to Supabase database
- Send email notification with lead details
- Return success response or handle errors
*/

import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { sendLeadNotificationEmail } from "@/app/lib/email";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  message: z.string().min(1).max(1000),
});

export async function POST(req) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase env vars are not configured");
      return NextResponse.json(
        { ok: false, error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const data = await req.json();
    const parsed = schema.parse(data);

    // Save lead data to database
    const { error } = await supabase.from("leads").insert(parsed);
    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });
    }

    // Send email notification
    const emailResult = await sendLeadNotificationEmail(parsed);
    
    if (emailResult.skipped) {
      console.warn('Email notification skipped:', emailResult.reason);
    } else if (!emailResult.success) {
      console.error('Email notification failed:', emailResult.error);
      // Don't fail the entire request if email fails, just log it
    } else {
      console.log('Email notification sent successfully');
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Lead form submission error:', err);
    return NextResponse.json({ ok: false, error: err.message ?? "Invalid payload" }, { status: 400 });
  }
}
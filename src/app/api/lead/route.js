import { NextResponse } from "next/server";
import { z } from "zod";
import { sendLeadNotificationEmail } from "@/app/lib/email";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  message: z.string().min(1).max(1000),
});

export async function POST(req) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.LEAD_NOTIFICATION_EMAIL) {
      console.error("Email notification env vars are not configured");
      return NextResponse.json(
        { ok: false, error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const data = await req.json();
    const parsed = schema.parse(data);

    const emailResult = await sendLeadNotificationEmail(parsed);

    if (emailResult.skipped) {
      console.error("Email notification skipped:", emailResult.reason);
      return NextResponse.json(
        { ok: false, error: "Could not send message" },
        { status: 500 }
      );
    }

    if (!emailResult.success) {
      console.error("Email notification failed:", emailResult.error);
      return NextResponse.json(
        { ok: false, error: emailResult.error ?? "Could not send message" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead form submission error:", err);
    return NextResponse.json(
      { ok: false, error: err.message ?? "Invalid payload" },
      { status: 400 }
    );
  }
}

# Email Notification Setup

This document explains how to set up email notifications for contact form submissions on the Zayn Group site.

## Overview

When someone fills out the lead form and submits it, the site sends you an email via Resend. Submissions are not stored in a database.

The notification includes:
- Lead's name and contact information
- Company (if provided)
- Message content (if provided)
- Timestamp of submission
- Quick reply links

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration (Resend)
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=Zayn Group <noreply@yourdomain.com>

# Lead Notification Settings
LEAD_NOTIFICATION_EMAIL=your_email@example.com

# Company Information
COMPANY_NAME=Zayn Group
```

## Setting Up Resend

1. **Create a Resend account**: Go to [resend.com](https://resend.com) and sign up
2. **Get your API key**: 
   - Go to your Resend dashboard
   - Navigate to API Keys section
   - Create a new API key
   - Copy the key and add it to your `.env.local` file
3. **Configure your domain** (optional but recommended):
   - Add your domain in Resend dashboard
   - Update `RESEND_FROM_EMAIL` to use your domain
   - Example: `Zayn Group <noreply@yourdomain.com>`

## Configuration Details

### Required Variables

- **`RESEND_API_KEY`**: Your Resend API key for sending emails
- **`LEAD_NOTIFICATION_EMAIL`**: The email address where you want to receive lead notifications

### Optional Variables

- **`RESEND_FROM_EMAIL`**: The "from" email address for notifications (defaults to a generic address)
- **`COMPANY_NAME`**: Your company name used in email templates (defaults to "Zayn Group")

## Email Template Features

The email notification includes:

### Professional Design
- Responsive HTML email template
- Company branding and colors
- Clean, easy-to-read layout

### Lead Information
- Contact details (name, email, company)
- Message content (if provided)
- Submission timestamp
- Quick action buttons

### Quick Actions
- **Reply to Lead**: Direct mailto link to respond to the lead
- **Quick Reply**: Pre-filled email with a standard response template

### Next Steps Section
- Guidance on how to follow up with the lead
- Best practices for lead management

## Testing the Setup

1. **Start your development server**: `npm run dev`
2. **Fill out the lead form** on your landing page
3. **Check your email** for the notification
4. **Verify the email content** includes all lead information

## Troubleshooting

### Email Not Sending
- Check that `RESEND_API_KEY` is correctly set
- Verify `LEAD_NOTIFICATION_EMAIL` is a valid email address
- Check the server console for error messages
- Ensure your Resend account has sufficient credits

### Email Going to Spam
- Configure SPF, DKIM, and DMARC records for your domain
- Use a verified domain in `RESEND_FROM_EMAIL`
- Avoid spam trigger words in email content

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment-specific API keys for production
- Regularly rotate your Resend API keys
- Monitor your email sending limits and costs

## Support

If you encounter any issues with the email setup:
1. Check the server console logs for error messages
2. Verify all environment variables are set correctly
3. Test your Resend API key independently
4. Ensure your domain is properly configured in Resend

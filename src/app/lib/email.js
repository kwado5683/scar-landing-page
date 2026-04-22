/*
DESCRIPTION: Email utility for lead form notifications using Resend service.
- Sends professional HTML emails when lead forms are submitted
- Includes sender details and message content in email template
- Graceful error handling and logging
- Uses Resend API for reliable email delivery

WHAT EACH PART DOES:
1. Resend client - Configured with API key from environment variables
2. sendLeadNotificationEmail - Main function to send lead form notifications
3. generateLeadEmailContent - Creates HTML and text email templates
4. Error handling - Logs errors and returns consistent responses
5. Email validation - Checks for required environment variables

PSEUDOCODE:
- Import Resend and create client with API key
- Create email template with lead form data
- Generate professional HTML and text content
- Send email to configured recipient
- Return success/error responses with logging
*/

import { Resend } from "resend";

/**
 * Send email notification when a lead form is submitted
 * 
 * @param {Object} leadData - Lead form data
 * @param {string} leadData.name - Lead's name
 * @param {string} leadData.email - Lead's email address
 * @param {string} leadData.organization - Lead's organization (optional)
 * @param {string} leadData.message - Lead's message (optional)
 * @returns {Promise<Object>} Email sending result
 */
export async function sendLeadNotificationEmail(leadData) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured, skipping email send");
      return { skipped: true, reason: "API key not configured" };
    }

    // Check if recipient email is configured
    if (!process.env.LEAD_NOTIFICATION_EMAIL) {
      console.warn("LEAD_NOTIFICATION_EMAIL not configured, skipping email send");
      return { skipped: true, reason: "Recipient email not configured" };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const companyName = process.env.COMPANY_NAME || "Zayn Group";
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Zayn Group <noreply@example.com>'
    const toEmail = process.env.LEAD_NOTIFICATION_EMAIL

    // Generate email content
    const emailContent = generateLeadEmailContent({
      ...leadData,
      companyName
    })

    // Send email via Resend
    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `Zayn Group contact: ${leadData.name}`,
      html: emailContent.html,
      text: emailContent.text
    })

    console.log(`Lead notification email sent to ${toEmail} for lead: ${leadData.name}`)
    return { success: true, result }

  } catch (error) {
    console.error('Error sending lead notification email:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Generate HTML and text content for lead form notification email
 * 
 * @param {Object} data - Lead data and company info
 * @returns {Object} HTML and text email content
 */
function generateLeadEmailContent({ name, email, organization, message, companyName }) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New contact — Zayn Group</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 32px 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
            New contact form submission
          </h1>
          <p style="color: #fecaca; margin: 8px 0 0 0; font-size: 16px;">
            ${companyName}
          </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 32px 24px;">
          <h2 style="color: #1f2937; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">
            Contact details
          </h2>
          
          <p style="color: #4b5563; margin: 0 0 24px 0; font-size: 16px; line-height: 1.6;">
            Someone submitted the contact form on the Zayn Group website.
          </p>
          
          <!-- Lead Details -->
          <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
            <h3 style="color: #1e40af; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              Contact Details
            </h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #1f2937;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #1f2937;">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${organization ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Company:</td>
                <td style="padding: 8px 0; color: #1f2937;">${organization}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #374151;">Submitted:</td>
                <td style="padding: 8px 0; color: #1f2937;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          ${message ? `
          <!-- Message Details -->
          <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
            <h3 style="color: #92400e; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
              Message
            </h3>
            <p style="color: #92400e; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <!-- Action Buttons -->
          <div style="text-align: center; margin: 32px 0;">
            <a href="mailto:${email}" style="background-color: #3b82f6; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; margin-right: 12px;">
              Reply to Lead
            </a>
            <a href="mailto:${email}?subject=Re: Your message to ${companyName}&body=Hi ${name},%0A%0AThank you for contacting ${companyName}. We'll get back to you shortly.%0A%0ABest regards,%0A${companyName}" style="background-color: #059669; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
              Quick Reply
            </a>
          </div>
          
          <!-- Instructions -->
          <div style="background-color: #f3f4f6; border-left: 4px solid #6b7280; padding: 16px; margin: 24px 0; border-radius: 0 8px 8px 0;">
            <h4 style="color: #374151; margin: 0 0 8px 0; font-size: 16px; font-weight: 600;">
              Next Steps
            </h4>
            <ul style="color: #374151; margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6;">
              <li>Review the contact details and message</li>
              <li>Reply when you can — timely responses build trust</li>
              <li>Log the enquiry in your CRM if you use one</li>
              <li>Follow up with next steps for staffing or software as relevant</li>
            </ul>
          </div>
          
          <!-- Footer -->
          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px; margin-top: 32px; text-align: center;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              Automated notification from ${companyName}.
            </p>
            <p style="color: #6b7280; margin: 8px 0 0 0; font-size: 14px;">
              Submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
NEW CONTACT FORM SUBMISSION
${companyName}

Someone submitted the contact form on the Zayn Group website.

Name: ${name}
Email: ${email}
${organization ? `Company: ${organization}` : ''}
Submitted: ${new Date().toLocaleString()}

${message ? `
MESSAGE:
${message}
` : ''}

QUICK ACTIONS:
- Reply: mailto:${email}
- Quick reply template: mailto:${email}?subject=Re: Your message to ${companyName}&body=Hi ${name},%0A%0AThank you for contacting ${companyName}. We'll get back to you shortly.%0A%0ABest regards,%0A${companyName}

NEXT STEPS:
- Review the contact details and message
- Reply when you can
- Log in CRM if needed
- Follow up on staffing or software as relevant

Automated notification from ${companyName}.
Submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
  `

  return { html, text }
}

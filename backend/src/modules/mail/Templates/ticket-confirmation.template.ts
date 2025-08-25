export function ticketConfirmationTemplate(
  firstName: string,
  eventDate: string,
  venue: string,
  ticketType: string,
  transactionId: string,
  supportEmail: string,
  logoUrl: string,
): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ticket Confirmation</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color: #f5f7fa;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f5f7fa">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table width="600" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
          style="border-radius: 8px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
          
          <!-- Header with Logo (Left aligned) -->
          <tr>
            <td style="padding: 20px; text-align: left;">
              <img src="${logoUrl}" alt="Event Logo" style="max-height: 50px; display: block;" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 30px; text-align: center; font-size: 16px; color: #333;">
              <h2 style="color: #007BFF; margin-top: 0;">
                Your DevFest Ibadan 2025 Ticket is Confirmed! 🎉
              </h2>
              <p>Hi <strong>${firstName}</strong>,</p>
              <p>Your payment for <strong>DevFest Ibadan 2025</strong> has been successfully processed. We're excited to welcome you to the biggest developer festival in Ibadan!</p>
              
              <p style="line-height: 1.8;">
                <strong>Event:</strong> DevFest Ibadan 2025<br/>
                <strong>Date:</strong> ${eventDate}<br/>
                <strong>Venue:</strong> ${venue}<br/>
                <strong>Ticket Type:</strong> ${ticketType}<br/>
                <strong>Reference:</strong> ${transactionId}
              </p>

              <p><strong>💡 What to Expect:</strong><br/>Tech talks, hands-on sessions, swags, networking, and fun with the community!</p>

              <p>Need help? Contact us at 
                <a href="mailto:${supportEmail}" style="color:#007BFF; text-decoration:none;">
                  ${supportEmail}
                </a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px; text-align: center; font-size: 12px; color: #888; background-color: #f1f3f4;">
              &copy; ${new Date().getFullYear()} DevFest Ibadan. All rights reserved.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// Plain Text Function
function getText(name, email, contactNumber, message) {
  return `
      You have a new contact-us form submission:
  
      Name: ${name}
      Email: ${email}
      Contact Number: ${contactNumber}
      Message: ${message}
  
      Best regards,
      CoEdit Service Team
    `;
}

// HTML Function
function getHTML(name, email, contactNumber, message) {
  return `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <h2 style="text-align: center; color: #4CAF50;">New Contact-Us Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a></p>
            <p><strong>Contact Number:</strong> ${contactNumber}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9f9f9; border-left: 4px solid #4CAF50; padding: 10px; font-style: italic;">${message}</p>
            <hr style="border: 0; border-top: 1px solid #ddd;" />
            <p style="text-align: center; font-size: 12px; color: #888;">This message was sent from the contact-us form on CoEdit Service.</p>
          </div>
        </body>
      </html>
    `;
}

module.exports = { getText, getHTML };

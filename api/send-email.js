const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { to, subject, ...formData } = req.body;
  const recipient = to || 'niazi@loadguard.io'; // Default recipient

  // Create a string of the form data
  const formDataText = Object.entries(formData)
    .map(([key, value]) => {
      // Capitalize first letter of the key and add spaces for readability
      const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
      return `${formattedKey}: ${value}`;
    })
    .join('');

  // Create a transporter object using SMTP transport
  // You must configure these environment variables in your Vercel project settings
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"LoadGuard Website" <${process.env.SMTP_USER}>`, // sender address
      to: recipient, // list of receivers
      subject: subject || 'New Form Submission', // Subject line
      text: `You have a new form submission:\n\n${formDataText}`, // plain text body
      html: `<p>You have a new form submission:</p><pre>${formDataText}</pre>`, // html body
    });

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ message: 'Failed to send message.' });
  }
}
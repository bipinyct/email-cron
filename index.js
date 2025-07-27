require('dotenv').config();
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const { emails, getEmailTemplate } = require('./emailTemplates');

// Configure transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Cron job to run every minute
cron.schedule('* * * * *', async () => {
  console.log(`[${new Date().toLocaleString()}] Sending emails...`);

  for (const user of emails) {
    const { subject, html } = getEmailTemplate(user);

    try {
      await transporter.sendMail({
        from: `"bipinyct Bot" <${process.env.EMAIL_USER}>`,
        to: user.email,
        subject,
        html,
      });
      console.log(`✅ Sent email to ${user.email}`);
    } catch (err) {
      console.error(`❌ Failed to send to ${user.email}`, err.message);
    }
  }
});

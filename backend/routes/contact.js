'use strict';

const express = require('express');
const rateLimit = require('express-rate-limit');
const router = express.Router();

// Stricter limiter for the contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { error: 'TOO_MANY_CONTACT_REQUESTS' },
});

/* ============================================================
   POST /api/contact
   Body: { name, email, subject, message }
   ============================================================ */
router.post('/', contactLimiter, async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Valid email required.';
  if (!message || message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ error: 'VALIDATION_FAILED', fields: errors });
  }

  // If SMTP is configured, send the email
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"NEURAL_ARCHIVE Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECIPIENT || process.env.SMTP_USER,
        replyTo: email,
        subject: `[NEURAL_ARCHIVE] ${subject || 'New Contact Message'}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br>')}</p>`,
      });

      console.log(`[CONTACT] Message from ${email} sent.`);
    } catch (err) {
      console.error('[CONTACT] Email send failed:', err.message);
      return res.status(500).json({ error: 'EMAIL_SEND_FAILED' });
    }
  } else {
    // No SMTP — log to console (development mode)
    console.log('[CONTACT] No SMTP configured. Message received:');
    console.log({ name, email, subject, message });
  }

  res.json({ success: true, message: 'TRANSMISSION_RECEIVED' });
});

module.exports = router;

'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const rateLimit = require('express-rate-limit');

const contactRoute = require('./routes/contact');
const cvRoute = require('./routes/cv');
const projectsRoute = require('./routes/projects');

const app = express();
const PORT = process.env.PORT || 3000;

/* ============================================================
   MIDDLEWARE
   ============================================================ */
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST'],
}));

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false }));

// Serve static frontend files
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');
app.use(express.static(FRONTEND_DIR));

// Global rate limiter
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'TOO_MANY_REQUESTS' },
});
app.use('/api', globalLimiter);

/* ============================================================
   ROUTES
   ============================================================ */
app.use('/api/contact', contactRoute);
app.use('/api/cv', cvRoute);
app.use('/api/projects', projectsRoute);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ONLINE',
    timestamp: new Date().toISOString(),
    uptime: Math.floor(process.uptime()),
  });
});

// SPA fallback — serve index.html for any unknown route
app.get('*', (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

/* ============================================================
   ERROR HANDLER
   ============================================================ */
app.use((err, req, res, _next) => {
  console.error('[ERROR]', err.message);
  res.status(err.status || 500).json({ error: err.message || 'INTERNAL_SERVER_ERROR' });
});

/* ============================================================
   START
   ============================================================ */
app.listen(PORT, () => {
  console.log(`[NEURAL_ARCHIVE] Server running on http://localhost:${PORT}`);
});

module.exports = app;

'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

const CV_PATH = path.join(__dirname, '..', 'data', 'cv.pdf');

/* ============================================================
   GET /api/cv/download
   Serves the CV PDF file for download.
   Place your actual CV at backend/data/cv.pdf
   ============================================================ */
router.get('/download', (req, res) => {
  if (!fs.existsSync(CV_PATH)) {
    return res.status(404).json({ error: 'CV_FILE_NOT_FOUND' });
  }

  console.log('[CV] Download requested from', req.ip);

  res.download(CV_PATH, 'NEURAL_ARCHIVE_CV.pdf', (err) => {
    if (err && !res.headersSent) {
      console.error('[CV] Download error:', err.message);
      res.status(500).json({ error: 'DOWNLOAD_FAILED' });
    }
  });
});

module.exports = router;

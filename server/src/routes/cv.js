/**
 * src/routes/cv.js — CV download route
 */

const express = require('express');
const { downloadCV } = require('../controllers/cvController');

const router = express.Router();

// GET /api/download-cv — Streams cv.pdf as a download
router.get('/', downloadCV);

module.exports = router;

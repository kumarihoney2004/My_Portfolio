/**
 * src/routes/experience.js — Experience API routes
 */

const express = require('express');
const { getExperience, getExperienceById } = require('../controllers/experienceController');

const router = express.Router();

// GET /api/experience      — All experience entries
router.get('/', getExperience);

// GET /api/experience/:id  — Single experience entry by ID
router.get('/:id', getExperienceById);

module.exports = router;

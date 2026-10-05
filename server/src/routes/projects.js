/**
 * src/routes/projects.js — Projects API routes
 */

const express = require('express');
const { getProjects, getProjectById } = require('../controllers/projectsController');

const router = express.Router();

// GET /api/projects            — All projects (supports ?category=&featured=true)
router.get('/', getProjects);

// GET /api/projects/:id        — Single project by ID
router.get('/:id', getProjectById);

module.exports = router;

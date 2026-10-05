/**
 * src/controllers/projectsController.js
 * Returns the list of projects from the local JSON data file.
 */

const projects = require('../data/projects.json');

/**
 * GET /api/projects
 * Returns all projects, optionally filtered by ?category=Frontend|Backend|Full+Stack
 */
const getProjects = (req, res, next) => {
  try {
    const { category, featured } = req.query;

    let filtered = [...projects];

    // Filter by category (case-insensitive)
    if (category && category.toLowerCase() !== 'all') {
      filtered = filtered.filter(
        p => p.category && p.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by featured flag
    if (featured === 'true') {
      filtered = filtered.filter(p => p.featured === true);
    }

    return res.status(200).json({
      success: true,
      count: filtered.length,
      data: filtered,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/projects/:id
 * Returns a single project by ID.
 */
const getProjectById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const project = projects.find(p => p.id === id);

    if (!project) {
      const err = new Error(`Project with ID ${id} not found.`);
      err.statusCode = 404;
      return next(err);
    }

    return res.status(200).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProjects, getProjectById };

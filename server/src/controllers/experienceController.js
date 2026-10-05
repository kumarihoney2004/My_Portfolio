/**
 * src/controllers/experienceController.js
 * Controller for retrieving work experience data.
 */

const experience = require('../data/experience.json');

/**
 * GET /api/experience
 * Returns all work experience entries
 */
const getExperience = (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      count: experience.length,
      data: experience,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * GET /api/experience/:id
 * Returns a single experience entry by ID
 */
const getExperienceById = (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const item = experience.find(e => e.id === id);

    if (!item) {
      const err = new Error(`Experience entry with ID ${id} not found.`);
      err.statusCode = 404;
      return next(err);
    }

    return res.status(200).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
};

module.exports = { getExperience, getExperienceById };

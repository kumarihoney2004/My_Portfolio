/**
 * src/controllers/cvController.js
 * Serves Honey Kumari's CV as a downloadable PDF file.
 */

const path = require('path');
const fs = require('fs');

/**
 * GET /api/download-cv
 * Serves server/assets/Honey_Kumari_CV.pdf using res.download()
 */
const downloadCV = (req, res, next) => {
  const cvPath = path.join(__dirname, '..', '..', 'assets', 'Honey_Kumari_CV.pdf');

  // Check if the file exists before attempting to serve it
  if (!fs.existsSync(cvPath)) {
    return res.status(404).json({
      success: false,
      message: 'CV file not found on the server. Please place your CV at server/assets/Honey_Kumari_CV.pdf',
    });
  }

  // Serve file as download attachment
  return res.download(cvPath, 'Honey_Kumari_CV.pdf', (err) => {
    if (err && !res.headersSent) {
      next(err);
    }
  });
};

module.exports = { downloadCV };

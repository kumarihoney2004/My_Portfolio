/**
 * src/middleware/errorHandler.js — Centralized error handling middleware
 */

const errorHandler = (err, req, res, next) => {
  // Log full error in development
  if (process.env.NODE_ENV !== 'production') {
    console.error('─── ERROR ────────────────────────────────');
    console.error(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    console.error(err.stack || err.message);
    console.error('──────────────────────────────────────────');
  }

  // Determine status code
  const statusCode = err.statusCode || err.status || 500;

  res.status(statusCode).json({
    success: false,
    message: statusCode === 500 && process.env.NODE_ENV === 'production'
      ? 'An internal server error occurred. Please try again later.'
      : err.message || 'Something went wrong.',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
  });
};

module.exports = errorHandler;

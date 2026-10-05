/**
 * src/app.js — Express application setup
 * Configures middleware, routes, and error handling.
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Route imports
const projectsRoutes = require('./routes/projects');
const experienceRoutes = require('./routes/experience');
const cvRoutes = require('./routes/cv');

// Middleware imports
const errorHandler = require('./middleware/errorHandler');

const app = express();

// ─── Security Middleware ────────────────────────────────────────────────────
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }, // Allow CV file downloads
}));

// ─── CORS ───────────────────────────────────────────────────────────────────
const allowedOrigins = process.env.CLIENT_URL
  ? process.env.CLIENT_URL.split(',').map(o => o.trim())
  : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. Postman, curl, server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: Origin "${origin}" not allowed.`));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true,
}));

// ─── Body Parsing ────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ─── Static Assets (CV PDF) ──────────────────────────────────────────────────
app.use('/public', express.static(path.join(__dirname, '..', 'public'), {
  dotfiles: 'deny',
}));

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use('/api/projects', projectsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/download-cv', cvRoutes);

// ─── 404 Handler ────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found.` });
});

// ─── Centralized Error Handler (must be last) ────────────────────────────────
app.use(errorHandler);

module.exports = app;

/**
 * utils/api.js — Axios instance configured with base URL and interceptors.
 */

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

// Response interceptor — normalise errors
api.interceptors.response.use(
  response => response,
  error => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'An unexpected error occurred.';
    return Promise.reject(new Error(message));
  }
);

/* ── API helpers ────────────────────────────────────────────────────────── */

export const fetchProjects = (params = {}) =>
  api.get('/projects', { params }).then(r => r.data);

export const fetchExperience = (params = {}) =>
  api.get('/experience', { params }).then(r => r.data);

export const downloadCV = () =>
  api.get('/download-cv', { responseType: 'blob' }).then(r => r.data);

export default api;

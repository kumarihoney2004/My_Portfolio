# Honey Kumar — Personal Portfolio

> Full Stack Developer portfolio built with **React + Vite** (frontend) and **Node.js + Express** (backend).

---

## 🚀 Tech Stack

| Layer     | Technologies                                                  |
|-----------|---------------------------------------------------------------|
| Frontend  | React 18, Vite, Tailwind CSS v3, Framer Motion, react-hook-form |
| Backend   | Node.js, Express, Nodemailer, express-validator, Helmet, CORS |
| Database  | PostgreSQL (optional — contact messages)                      |
| Hosting   | Vercel (client) · Render / Railway (server)                   |

---

## 📁 Project Structure

```
Honey Portfolio/
├── client/                     # React + Vite frontend
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # UI components (Navbar, Hero, About, …)
│   │   ├── context/            # ThemeContext (dark/light mode)
│   │   ├── data/               # Local data (projects, skills)
│   │   ├── hooks/              # Custom hooks (useTypingEffect, useActiveSection)
│   │   ├── utils/              # Axios API helpers
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css           # Global Tailwind + custom styles
│   ├── index.html              # SEO meta tags
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── vercel.json             # Vercel SPA routing
│   └── package.json
│
└── server/                     # Node.js + Express backend
    ├── public/                 # Place your cv.pdf here!
    ├── src/
    │   ├── controllers/        # contactController, projectsController, cvController
    │   ├── middleware/         # errorHandler, rateLimiter
    │   ├── routes/             # contact, projects, cv routes
    │   └── data/               # projects.json
    ├── src/app.js              # Express app setup
    ├── server.js               # Entry point
    ├── .env.example
    └── package.json
```

---

## ⚡ Quick Start (Local Development)

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- A Gmail account with an **App Password** (for email sending)

---

### 1. Clone & navigate

```bash
# If using git
git clone <your-repo-url>
cd "Honey Portfolio"
```

---

### 2. Set up the Backend

```bash
cd server
copy .env.example .env     # Windows
# cp .env.example .env     # macOS/Linux
```

Edit `server/.env`:

```env
PORT=5000
NODE_ENV=development

# Gmail App Password setup:
# 1. Enable 2FA at myaccount.google.com/security
# 2. Visit myaccount.google.com/apppasswords
# 3. Create an app password for "Mail" → "Windows Computer"
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=xxxx xxxx xxxx xxxx    # 16-char app password (no spaces needed)
EMAIL_TO=kumarihoney170.08@gmail.com

CLIENT_URL=http://localhost:5173
```

**Place your CV:**
```
server/public/cv.pdf      ← put your CV PDF here
```

Start the server:
```bash
npm run dev    # uses nodemon for auto-reload
```

The API will be running at **http://localhost:5000**

---

### 3. Set up the Frontend

```bash
cd ../client
copy .env.example .env     # Windows
# cp .env.example .env     # macOS/Linux
```

The default `.env` works without changes for local dev (Vite proxies `/api` → `localhost:5000`).

Start the dev server:
```bash
npm run dev
```

Open **http://localhost:5173** 🎉

---

## 🔌 API Endpoints

| Method | Endpoint              | Description                              |
|--------|-----------------------|------------------------------------------|
| GET    | `/api/health`         | Health check                             |
| POST   | `/api/contact`        | Send contact form (rate-limited to 5/15min) |
| GET    | `/api/projects`       | All projects (`?category=&featured=true`)|
| GET    | `/api/projects/:id`   | Single project by ID                     |
| GET    | `/api/download-cv`    | Download CV PDF                          |

### Contact Request Body
```json
{
  "name":    "John Doe",
  "email":   "john@example.com",
  "message": "Hello, I'd love to chat!"
}
```

---

## 🌐 Deployment

### Frontend → Vercel

1. Push `client/` to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) → Import project
3. Set **Root Directory** to `client`
4. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com/api`
5. Deploy — Vercel auto-builds with `npm run build` and serves `dist/`

The `vercel.json` handles SPA routing (all paths → `index.html`).

---

### Backend → Render

1. Push `server/` to GitHub (or use the same repo)
2. Go to [render.com](https://render.com) → New Web Service
3. Set:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Add all environment variables from `.env.example`
5. Set `NODE_ENV=production`
6. Deploy

**Update CORS**: After deploying the frontend, add your Vercel URL to `CLIENT_URL` in Render:
```
CLIENT_URL=https://your-portfolio.vercel.app
```

---

### Backend → Railway

1. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
2. Select the `server/` directory
3. Add environment variables
4. Railway auto-detects Node.js and starts with `npm start`

---

## 📦 Available Scripts

### Client
```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

### Server
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start without nodemon (production)
```

---

## 🛠️ Customisation

### Adding Projects
Edit `server/src/data/projects.json` to add real projects. The frontend fetches from this file via the API, with a local fallback in `client/src/data/projects.js`.

### Changing the Accent Color
The primary colour is `#6366f1` (indigo). To change it, update the `primary` palette in `client/tailwind.config.js`.

### Adding Experience Section
Uncomment the `<Experience />` import in `App.jsx` and fill in your experience data in `client/src/data/projects.js`.

---

## 📄 License

MIT © Honey Kumar

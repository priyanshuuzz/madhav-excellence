# 🎓 Madhav Excellence — Full Stack Web App

> Where Knowledge Meets Excellence

A complete React + Node.js full-stack website for Madhav Excellence — a global holistic education platform.

---

## 🗂️ Project Structure

```
madhav-excellence/
├── client/                  ← React + Vite (frontend)
│   └── src/
│       ├── components/      ← Navbar, Hero, Programs, DemoForm, Sections, Footer
│       ├── pages/           ← Home.jsx, Admin.jsx
│       ├── hooks/           ← useFadeIn.js
│       └── constants/       ← tokens.js (colors/styles), data.js (all content)
│
├── server/                  ← Node.js + Express (backend)
│   ├── index.js             ← Express app entry
│   ├── models/db.js         ← SQLite database
│   ├── routes/              ← bookings.js, contact.js
│   └── controllers/         ← mailer.js (email confirmations)
│
└── package.json             ← Root workspace scripts
```

---

## 🚀 Quick Start

### 1. Install all dependencies
```bash
npm run install:all
```

### 2. Configure environment
```bash
cd server
cp .env.example .env
# Edit .env and fill in your Gmail App Password
```

### 3. Run in development
```bash
# From root — runs both server + client together
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **Admin panel**: http://localhost:5173/admin

---

## 🔧 Environment Variables (server/.env)

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 5000) |
| `CLIENT_URL` | Frontend URL for CORS |
| `MAIL_USER` | Your Gmail address |
| `MAIL_PASS` | Gmail App Password ([get one here](https://myaccount.google.com/apppasswords)) |
| `ADMIN_EMAIL` | Where booking alerts are sent |

> **Gmail App Password**: Go to Google Account → Security → 2-Step Verification → App Passwords. Generate one for "Mail".

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/bookings` | Submit a demo class booking |
| `GET` | `/api/bookings` | List all bookings (admin) |
| `PATCH` | `/api/bookings/:id/status` | Update booking status |
| `POST` | `/api/contact` | Submit a contact message |
| `GET` | `/api/health` | Server health check |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6, Vite |
| Backend | Node.js, Express 4 |
| Database | SQLite (via better-sqlite3) |
| Email | Nodemailer (Gmail) |
| Validation | express-validator |
| Rate Limiting | express-rate-limit |

---

## 📱 Pages

- **`/`** — Full marketing website (Hero, Programs, Testimonials, Demo Form, FAQ)
- **`/admin`** — Admin dashboard with booking management (filter, search, update status)

---

## ✏️ Customization

- **Content** → Edit `client/src/constants/data.js`
- **Colors** → Edit `client/src/constants/tokens.js`
- **Email template** → Edit `server/controllers/mailer.js`
- **Add new routes** → `server/routes/` + register in `server/index.js`

---

## 📦 Available Scripts

```bash
npm run install:all   # Install all dependencies (server + client)
npm run dev           # Run both server + client concurrently
npm run dev:server    # Run server only
npm run dev:client    # Run client only
npm run build         # Build client for production
npm run start         # Start production server
```

---

© 2026 Madhav Excellence — geeksokgeeks@gmail.com | +91 92755 45964

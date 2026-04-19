require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const bookingRoutes = require("./routes/bookings");
const contactRoutes = require("./routes/contact");
const { initDB } = require("./models/db");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173", credentials: true }));
app.use(express.json());

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100, message: { error: "Too many requests, please try again later." } });
app.use("/api", limiter);

// ── Init DB ─────────────────────────────────────────────────────────────────
initDB();

// ── Routes ──────────────────────────────────────────────────────────────────
app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => res.json({ status: "ok", timestamp: new Date().toISOString() }));

// ── 404 Handler ─────────────────────────────────────────────────────────────
app.use((req, res) => res.status(404).json({ error: "Route not found" }));

// ── Error Handler ───────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

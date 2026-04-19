const express = require("express");
const { body, validationResult } = require("express-validator");
const { getDB } = require("../models/db");
const { sendBookingConfirmation } = require("../controllers/mailer");

const router = express.Router();

const validateBooking = [
  body("studentName").trim().notEmpty().withMessage("Student name is required"),
  body("grade").trim().notEmpty().withMessage("Grade is required"),
  body("curriculum").trim().notEmpty().withMessage("Curriculum is required"),
  body("subject").trim().notEmpty().withMessage("Subject is required"),
  body("parentName").trim().notEmpty().withMessage("Parent name is required"),
  body("phone").trim().notEmpty().withMessage("Phone is required"),
  body("email").isEmail().withMessage("Valid email is required"),
];

// POST /api/bookings — create a new demo booking
router.post("/", validateBooking, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const { studentName, grade, curriculum, subject, parentName, phone, email } = req.body;

  try {
    const db = getDB();
    const stmt = db.prepare(`
      INSERT INTO bookings (student_name, grade, curriculum, subject, parent_name, phone, email)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(studentName, grade, curriculum, subject, parentName, phone, email);

    // Send confirmation email (non-blocking)
    sendBookingConfirmation({ studentName, grade, curriculum, subject, parentName, phone, email }).catch(console.error);

    res.status(201).json({ success: true, id: result.lastInsertRowid, message: "Demo class booked successfully! We'll contact you within 24 hours." });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ error: "Failed to save booking" });
  }
});

// GET /api/bookings — list all bookings (admin)
router.get("/", (req, res) => {
  try {
    const db = getDB();
    const bookings = db.prepare("SELECT * FROM bookings ORDER BY created_at DESC").all();
    res.json({ bookings, total: bookings.length });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// PATCH /api/bookings/:id/status — update booking status
router.patch("/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const validStatuses = ["pending", "confirmed", "completed", "cancelled"];
  if (!validStatuses.includes(status)) return res.status(400).json({ error: "Invalid status" });

  try {
    const db = getDB();
    db.prepare("UPDATE bookings SET status = ? WHERE id = ?").run(status, id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to update status" });
  }
});

module.exports = router;

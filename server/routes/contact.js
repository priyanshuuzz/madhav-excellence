const express = require("express");
const { body, validationResult } = require("express-validator");
const { getDB } = require("../models/db");

const router = express.Router();

router.post("/", [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("message").trim().isLength({ min: 10 }).withMessage("Message must be at least 10 characters"),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

  const { name, email, message } = req.body;
  try {
    const db = getDB();
    db.prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)").run(name, email, message);
    res.status(201).json({ success: true, message: "Message received! We'll get back to you soon." });
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

module.exports = router;

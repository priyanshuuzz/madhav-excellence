const nodemailer = require("nodemailer");

function createTransporter() {
  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS, // Gmail App Password
    },
  });
}

async function sendBookingConfirmation({ studentName, grade, curriculum, subject, parentName, phone, email }) {
  if (!process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.log("📧 Mail not configured — skipping email. Set MAIL_USER and MAIL_PASS in .env");
    return;
  }

  const transporter = createTransporter();

  // Email to admin
  await transporter.sendMail({
    from: `"Madhav Excellence" <${process.env.MAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || process.env.MAIL_USER,
    subject: `📅 New Demo Booking — ${studentName} (${grade})`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0D1F4E;padding:24px;border-radius:12px 12px 0 0">
          <h1 style="color:#fff;margin:0;font-size:1.4rem">🎓 New Demo Class Booking</h1>
        </div>
        <div style="background:#f9f9f9;padding:24px;border-radius:0 0 12px 12px;border:1px solid #eee">
          <table style="width:100%;border-collapse:collapse">
            ${[["Student Name", studentName],["Grade", grade],["Curriculum", curriculum],["Subject", subject],["Parent Name", parentName],["Phone", phone],["Email", email]].map(([k,v]) => `<tr><td style="padding:8px;color:#6B7280;font-size:.9rem">${k}</td><td style="padding:8px;font-weight:600;color:#0D1F4E">${v}</td></tr>`).join("")}
          </table>
        </div>
      </div>
    `,
  });

  // Confirmation to parent
  await transporter.sendMail({
    from: `"Madhav Excellence" <${process.env.MAIL_USER}>`,
    to: email,
    subject: `✅ Demo Class Confirmed — Madhav Excellence`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#0D1F4E;padding:24px;border-radius:12px 12px 0 0;text-align:center">
          <h1 style="color:#fff;margin:0">🎓 Madhav Excellence</h1>
          <p style="color:#F97316;margin:.5rem 0 0">Where Knowledge Meets Excellence</p>
        </div>
        <div style="padding:32px;background:#fff">
          <h2 style="color:#0D1F4E">Hello ${parentName},</h2>
          <p style="color:#6B7280;line-height:1.7">Thank you for booking a free demo class for <strong>${studentName}</strong>! We're thrilled to have you.</p>
          <div style="background:#FDF8F2;border-left:4px solid #F97316;padding:16px;border-radius:0 8px 8px 0;margin:24px 0">
            <p style="margin:0;font-weight:600;color:#0D1F4E">📋 Booking Summary</p>
            <p style="margin:.5rem 0 0;color:#6B7280">Grade: ${grade} · Curriculum: ${curriculum} · Subject: ${subject}</p>
          </div>
          <p style="color:#6B7280;line-height:1.7">Our team will contact you at <strong>${phone}</strong> within <strong>24 hours</strong> to schedule your demo class.</p>
          <p style="color:#6B7280">Meanwhile, feel free to reach us on WhatsApp: <a href="https://wa.me/message/42YXAX6YGHJ6E1" style="color:#F97316">Chat with us</a></p>
        </div>
        <div style="background:#f1f1f1;padding:16px;text-align:center;border-radius:0 0 12px 12px">
          <p style="color:#9CA3AF;font-size:.8rem;margin:0">© 2026 Madhav Excellence · geeksokgeeks@gmail.com · +91 92755 45964</p>
        </div>
      </div>
    `,
  });
}

module.exports = { sendBookingConfirmation };

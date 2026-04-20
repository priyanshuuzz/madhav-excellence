import { C } from "../constants/tokens";
import { CONTACT } from "../constants/data";

const QUICK_LINKS = [["#about","About Us"],["#programs","Our Programs"],["#why","Why Choose Us"],["#testimonials","Success Stories"],["#faq","FAQ"],["#demo","Book Demo Class"]];
const PROGRAMS = ["Academic Tutoring","Olympiad Training","IB / GCSE / CBSE / ICSE","Meditation Program","Counseling & Mentorship","Value-Based Learning"];
const CONTACTS = [
  { icon: "📧", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`, label: CONTACT.email, external: true },
  { icon: "📞", href: `tel:${CONTACT.phone1.replace(/\s/g,"")}`, label: CONTACT.phone1 },
  { icon: "📞", href: `tel:${CONTACT.phone2.replace(/\s/g,"")}`, label: CONTACT.phone2 },
  { icon: "💬", href: CONTACT.whatsapp, label: "WhatsApp Us", external: true },
];

export default function Footer() {
  const linkStyle = { fontSize: ".83rem", color: "rgba(255,255,255,.6)", textDecoration: "none" };
  const h4Style = { fontSize: ".82rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: "1rem" };

  return (
    <footer style={{ background: C.navy, color: "rgba(255,255,255,.75)", padding: "60px 5vw 30px" }}>
      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
        {/* Brand */}
        <div>
          <img 
            src="/logo.png" 
            alt="Madhav Excellence Logo" 
            style={{ 
              height: 70, 
              width: "auto", 
              objectFit: "contain",
              marginBottom: "1rem"
            }} 
          />
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff" }}>
            Madhav Excellence
            <span style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: ".7rem", fontWeight: 400, color: C.saffron, letterSpacing: ".08em", marginTop: ".1rem" }}>Where Knowledge Meets Excellence</span>
          </div>
          <p style={{ fontSize: ".85rem", lineHeight: 1.7, marginTop: ".8rem", maxWidth: 260 }}>
            A global learning platform providing high-quality education across all subjects, grades, and curricula — with a focus on holistic development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={h4Style}>Quick Links</h4>
          <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: ".55rem" }}>
            {QUICK_LINKS.map(([href, label]) => (
              <li key={href}><a href={href} style={linkStyle}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 style={h4Style}>Programs</h4>
          <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: ".55rem" }}>
            {PROGRAMS.map((p) => <li key={p}><span style={linkStyle}>{p}</span></li>)}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={h4Style}>Contact Us</h4>
          {CONTACTS.map(({ icon, href, label, external }) => (
            <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: ".5rem", fontSize: ".83rem", color: "rgba(255,255,255,.65)", marginBottom: ".6rem" }}>
              {icon}{" "}
              <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} style={{ color: C.gold, textDecoration: "none" }}>{label}</a>
            </div>
          ))}
          <div style={{ fontSize: ".83rem", color: "rgba(255,255,255,.65)", marginTop: ".5rem" }}>🌍 Serving students in 15+ countries</div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: ".5rem" }}>
        <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.4)" }}>© 2026 Madhav Excellence. All rights reserved.</p>
        <p style={{ fontSize: ".78rem", color: "rgba(255,255,255,.4)" }}>Developed with ❤️ for students worldwide</p>
      </div>
    </footer>
  );
}

import { useState } from "react";
import FadeIn from "./FadeIn";
import { C, S } from "../constants/tokens";
import { CONTACT } from "../constants/data";

const INITIAL = { studentName: "", grade: "", curriculum: "IB (International Baccalaureate)", subject: "Mathematics", parentName: "", phone: "", email: "" };

const PERKS = [
  "One-on-one personalized tutoring available",
  "Small batch classes (4–5 students only)",
  "Customized learning plan for your child",
  "No obligation — completely free demo",
  "Available for all grades and subjects",
  "All boards: IB, IGCSE, CBSE, ICSE & more",
];

export default function DemoForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const update = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setFieldErrors((fe) => ({ ...fe, [e.target.name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.studentName.trim()) errs.studentName = "Required";
    if (!form.grade.trim()) errs.grade = "Required";
    if (!form.parentName.trim()) errs.parentName = "Required";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) { setFieldErrors(errs); return; }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Booking confirmed! We'll contact you within 24 hours.");
        setForm(INITIAL);
        // Also open WhatsApp
        setTimeout(() => window.open(CONTACT.whatsapp, "_blank"), 800);
      } else {
        setStatus("error");
        if (data.errors) {
          const map = {};
          data.errors.forEach((e) => { map[e.path] = e.msg; });
          setFieldErrors(map);
          setMessage("Please fix the errors above.");
        } else {
          setMessage(data.error || "Something went wrong. Please try again.");
        }
      }
    } catch {
      setStatus("error");
      setMessage("Network error — please check your connection and try again.");
    }
  };

  const inp = (name, placeholder, type = "text") => ({
    name, type, placeholder, value: form[name], onChange: update,
    style: { ...S.input, borderColor: fieldErrors[name] ? "#ef4444" : "#E5E7EB" },
  });

  const btnBg = status === "loading" ? "#9ca3af" : status === "success" ? "#22c55e" : C.saffron;

  return (
    <section id="demo" style={{ ...S.section, background: `linear-gradient(135deg,${C.navy} 0%,#0d2d6b 100%)`, color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "rgba(249,115,22,.08)", pointerEvents: "none" }} />

      <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", position: "relative", zIndex: 1 }}>
        {/* Left */}
        <FadeIn>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 700, marginBottom: "1rem" }}>
            Book Your <em style={{ fontStyle: "italic", color: C.saffron }}>Free Demo Class</em> Today!
          </h2>
          <p style={{ opacity: .75, lineHeight: 1.7, fontSize: ".95rem", marginBottom: "1.8rem" }}>
            Experience our personalized teaching approach and see the difference quality education makes — zero obligation, completely free.
          </p>
          <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: ".7rem" }}>
            {PERKS.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: ".7rem", fontSize: ".88rem", opacity: .85 }}>
                <span style={{ background: C.saffron, width: 20, height: 20, borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: ".7rem", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {p}
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* Right — Form */}
        <FadeIn>
          <div style={{ background: "#fff", borderRadius: 20, padding: "2.2rem", boxShadow: "0 24px 64px rgba(0,0,0,.3)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: C.navy, marginBottom: ".3rem" }}>Get Started Today</h3>
            <p style={{ fontSize: ".82rem", color: C.muted, marginBottom: "1.5rem" }}>Fill the form and we'll contact you within 24 hours</p>

            {/* Row 1 */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".8rem", marginBottom: ".8rem" }}>
              <div>
                <label style={S.label}>Student Name *</label>
                <input {...inp("studentName", "Enter student name")} />
                {fieldErrors.studentName && <span style={{ fontSize: ".72rem", color: "#ef4444" }}>{fieldErrors.studentName}</span>}
              </div>
              <div>
                <label style={S.label}>Grade *</label>
                <input {...inp("grade", "e.g. Grade 8")} />
                {fieldErrors.grade && <span style={{ fontSize: ".72rem", color: "#ef4444" }}>{fieldErrors.grade}</span>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".8rem", marginBottom: ".8rem" }}>
              <div>
                <label style={S.label}>Curriculum *</label>
                <select name="curriculum" value={form.curriculum} onChange={update} style={S.input}>
                  {["IB (International Baccalaureate)","IGCSE / Cambridge","CBSE","ICSE","State Board","Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label style={S.label}>Subject *</label>
                <select name="subject" value={form.subject} onChange={update} style={S.input}>
                  {["Mathematics","Science","English","All Subjects","Other"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>

            {/* Parent */}
            <div style={{ marginBottom: ".8rem" }}>
              <label style={S.label}>Parent / Guardian Name *</label>
              <input {...inp("parentName", "Enter parent name")} />
              {fieldErrors.parentName && <span style={{ fontSize: ".72rem", color: "#ef4444" }}>{fieldErrors.parentName}</span>}
            </div>

            {/* Row 3 */}
            <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: ".8rem", marginBottom: ".8rem" }}>
              <div>
                <label style={S.label}>Phone *</label>
                <input {...inp("phone", "+91 92755 45964", "tel")} />
                {fieldErrors.phone && <span style={{ fontSize: ".72rem", color: "#ef4444" }}>{fieldErrors.phone}</span>}
              </div>
              <div>
                <label style={S.label}>Email *</label>
                <input {...inp("email", "your@email.com", "email")} />
                {fieldErrors.email && <span style={{ fontSize: ".72rem", color: "#ef4444" }}>{fieldErrors.email}</span>}
              </div>
            </div>

            {/* Status message */}
            {message && (
              <div style={{ padding: ".75rem 1rem", borderRadius: 8, marginBottom: ".8rem", background: status === "success" ? "rgba(34,197,94,.1)" : "rgba(239,68,68,.1)", color: status === "success" ? "#166534" : "#991b1b", fontSize: ".85rem", fontWeight: 500 }}>
                {status === "success" ? "✅ " : "⚠️ "}{message}
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{ ...S.btnPrimary, width: "100%", justifyContent: "center", marginTop: ".5rem", background: btnBg, opacity: status === "loading" ? .8 : 1 }}
            >
              {status === "loading" ? "⏳ Booking..." : status === "success" ? "✅ Booked! Opening WhatsApp..." : "📅 Book Free Demo Class"}
            </button>

            <p style={{ fontSize: ".72rem", color: C.muted, textAlign: "center", marginTop: ".6rem" }}>
              By submitting, you agree to our terms & privacy policy. We'll never spam.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

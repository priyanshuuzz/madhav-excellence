import { useState } from "react";
import FadeIn from "./FadeIn";
import { C, S } from "../constants/tokens";
import { BOARDS, ABOUT_FEATURES, ABOUT_STATS, HOLISTIC_PILLARS, WHY_CARDS, TESTIMONIALS, COUNSEL_ITEMS, HOLISTIC_TAGS, FAQ_DATA, CONTACT } from "../constants/data";

export function Boards() {
  return (
    <div style={{ background: C.white, padding: "1.5rem 5vw", borderBottom: `1px solid ${C.border}` }}>
      <div className="hide-scrollbar" style={{ display: "flex", alignItems: "center", gap: "1rem", overflowX: "auto" }}>
        <span style={{ fontSize: ".78rem", fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: ".1em", whiteSpace: "nowrap", flexShrink: 0 }}>Boards We Cover</span>
        {BOARDS.map(b => (
          <div key={b} style={{ background: C.cream, border: `1.5px solid ${C.border}`, borderRadius: 100, padding: ".4rem 1.1rem", fontSize: ".82rem", fontWeight: 600, color: C.navy, whiteSpace: "nowrap", flexShrink: 0 }}>{b}</div>
        ))}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" style={{ ...S.section, background: C.white }}>
      <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        <FadeIn>
          <p style={S.sectionLabel}>About Us</p>
          <h2 style={S.sectionTitle}>Building Tomorrow's Leaders Through <em style={{ fontStyle: "italic", color: C.saffron }}>Quality Education</em></h2>
          <p style={{ color: C.muted, lineHeight: 1.8, fontSize: ".95rem" }}>Madhav Excellence is a global learning platform combining academic tutoring, daily meditation, Bhagavad Gita wisdom, and professional counseling — helping every student become confident, knowledgeable, and grounded.</p>
          <div className="feat-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "2rem" }}>
            {ABOUT_FEATURES.map(([icon, title, desc]) => (
              <div key={title} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", padding: "1rem", background: C.cream, borderRadius: 12 }}>
                <div style={{ fontSize: "1.3rem", flexShrink: 0 }}>{icon}</div>
                <div><strong style={{ display: "block", fontSize: ".88rem", fontWeight: 600, color: C.navy, marginBottom: ".2rem" }}>{title}</strong><span style={{ fontSize: ".8rem", color: C.muted }}>{desc}</span></div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
            {ABOUT_STATS.map(({ num, label, desc, bg }) => (
              <div key={label} style={{ borderRadius: 16, padding: "1.8rem 1.5rem", color: "#fff", background: bg, position: "relative", overflow: "hidden" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.4rem", fontWeight: 900, display: "block", marginBottom: ".2rem" }}>{num}</span>
                <div style={{ fontSize: ".8rem", opacity: .85, fontWeight: 500 }}>{label}</div>
                <div style={{ fontSize: ".72rem", opacity: .65, marginTop: ".2rem" }}>{desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function Holistic() {
  return (
    <section id="holistic" style={{ ...S.section, background: C.white }}>
      <FadeIn style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={S.sectionLabel}>Our Unique Approach</p>
        <h2 style={{ ...S.sectionTitle, textAlign: "center" }}>A Complete <em style={{ fontStyle: "italic", color: C.saffron }}>Holistic System</em></h2>
        <p style={{ ...S.sectionSub, margin: "0 auto" }}>Every program integrates four powerful pillars that go far beyond traditional tutoring.</p>
      </FadeIn>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" }}>
          {HOLISTIC_PILLARS.map(([icon, title, desc]) => (
            <div key={title} style={{ background: C.cream, borderRadius: 16, padding: "1.8rem", textAlign: "center", border: `1.5px solid ${C.border}` }}>
              <span style={{ fontSize: "2.5rem", marginBottom: "1rem", display: "block" }}>{icon}</span>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem", fontWeight: 700, color: C.navy, marginBottom: ".5rem" }}>{title}</div>
              <div style={{ fontSize: ".83rem", color: C.muted, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export function WhyUs() {
  return (
    <section id="why" style={{ ...S.section, background: C.navy }}>
      <FadeIn style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={{ ...S.sectionLabel, color: C.gold }}>Why Choose Us</p>
        <h2 style={{ ...S.sectionTitle, color: "#fff", textAlign: "center" }}>We Go Beyond <em style={{ fontStyle: "italic", color: C.saffron }}>Traditional Tutoring</em></h2>
        <p style={{ ...S.sectionSub, color: "rgba(255,255,255,.65)", margin: "0 auto" }}>Everything we do is designed to build not just academic excellence — but complete human excellence.</p>
      </FadeIn>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
          {WHY_CARDS.map(([num, title, desc]) => (
            <div key={num} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 16, padding: "1.8rem" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, color: "rgba(249,115,22,.2)", lineHeight: 1, marginBottom: ".8rem" }}>{num}</div>
              <div style={{ fontSize: "1rem", fontWeight: 600, color: "#fff", marginBottom: ".5rem" }}>{title}</div>
              <div style={{ fontSize: ".83rem", color: "rgba(255,255,255,.6)", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" style={{ ...S.section, background: C.cream }}>
      <FadeIn style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={S.sectionLabel}>Student Success Stories</p>
        <h2 style={{ ...S.sectionTitle, textAlign: "center" }}>What Parents & Students <em style={{ fontStyle: "italic", color: C.saffron }}>Are Saying</em></h2>
        <p style={{ ...S.sectionSub, margin: "0 auto" }}>Thousands of families trust Madhav Excellence to shape their child's future.</p>
      </FadeIn>
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem" }}>
          {TESTIMONIALS.map(({ initials, name, role, text }) => (
            <div key={name} style={S.card}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", color: C.saffron, opacity: .2, lineHeight: 1, marginBottom: "-.3rem" }}>"</div>
              <div style={{ color: C.gold, fontSize: ".85rem", marginBottom: ".8rem" }}>★★★★★</div>
              <p style={{ fontSize: ".88rem", color: C.muted, lineHeight: 1.7, marginBottom: "1.2rem", fontStyle: "italic" }}>{text}</p>
              <div style={{ display: "flex", alignItems: "center", gap: ".8rem" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: C.navy, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: ".9rem", flexShrink: 0 }}>{initials}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: ".88rem", color: C.navy }}>{name}</div>
                  <div style={{ fontSize: ".78rem", color: C.muted }}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <p style={{ color: C.muted, fontSize: ".9rem", marginBottom: "1rem" }}>Watch real student transformations on our YouTube channel</p>
          <a href={CONTACT.youtube} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", background: "#FF0000", color: "#fff", padding: ".75rem 1.6rem", borderRadius: 10, fontWeight: 600, fontSize: ".95rem", textDecoration: "none" }}>▶ Watch Success Stories on YouTube</a>
        </div>
      </FadeIn>
    </section>
  );
}

export function Counseling() {
  return (
    <section id="counseling" style={{ ...S.section, background: C.white }}>
      <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <FadeIn>
          <p style={S.sectionLabel}>Mentorship Program</p>
          <h2 style={S.sectionTitle}>Counseling & Mentorship <em style={{ fontStyle: "italic", color: C.saffron }}>For Every Student</em></h2>
          <p style={{ color: C.muted, lineHeight: 1.7 }}>Academic success starts with the right mindset. Our counseling program ensures every student has the direction, stability, and confidence to thrive.</p>
          <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1.5rem" }}>
            {COUNSEL_ITEMS.map(([icon, title, desc]) => (
              <li key={title} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", padding: "1rem 1.2rem", background: C.cream, borderRadius: 12, borderLeft: `3px solid ${C.saffron}` }}>
                <div style={{ fontSize: "1.3rem", flexShrink: 0 }}>{icon}</div>
                <div><strong style={{ display: "block", fontSize: ".9rem", color: C.navy, marginBottom: ".2rem" }}>{title}</strong><p style={{ fontSize: ".85rem", color: C.muted, lineHeight: 1.5, margin: 0 }}>{desc}</p></div>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn>
          <div style={{ background: `linear-gradient(135deg,${C.navy},${C.navyL})`, borderRadius: 24, padding: "2.5rem", color: "#fff", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🧠</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "1rem" }}>Complete Holistic System</h3>
            <p style={{ fontSize: ".88rem", opacity: .75, lineHeight: 1.7, marginBottom: "1.5rem" }}>Every program includes our proven four-pillar system that builds not just grades — but character, clarity, and confidence.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", justifyContent: "center", marginBottom: "1.8rem" }}>
              {HOLISTIC_TAGS.map(t => <span key={t} style={{ background: "rgba(255,255,255,.12)", borderRadius: 100, padding: ".35rem .9rem", fontSize: ".78rem", color: "rgba(255,255,255,.9)" }}>{t}</span>)}
            </div>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" style={{ ...S.btnPrimary, justifyContent: "center", width: "100%" }}>💬 Chat on WhatsApp</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" style={{ ...S.section, background: C.cream }}>
      <FadeIn style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={S.sectionLabel}>FAQ</p>
        <h2 style={{ ...S.sectionTitle, textAlign: "center" }}>Frequently Asked <em style={{ fontStyle: "italic", color: C.saffron }}>Questions</em></h2>
        <p style={{ ...S.sectionSub, margin: "0 auto" }}>Everything you need to know before enrolling your child.</p>
      </FadeIn>
      <FadeIn>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", flexDirection: "column", gap: ".75rem" }}>
          {FAQ_DATA.map(([q, a], i) => (
            <div key={i} style={{ background: C.white, borderRadius: 12, border: `1.5px solid ${C.border}`, overflow: "hidden" }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.4rem", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: ".92rem", fontWeight: 600, color: C.navy, fontFamily: "inherit" }}>
                {q}
                <span style={{ fontSize: "1.2rem", color: C.saffron, transition: "transform .3s", transform: open === i ? "rotate(45deg)" : "rotate(0)", flexShrink: 0 }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? 300 : 0, overflow: "hidden", transition: "max-height .4s ease" }}>
                <p style={{ padding: "0 1.4rem 1.1rem", fontSize: ".88rem", color: C.muted, lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export function WAFab() {
  return (
    <>
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" style={{ position: "fixed", bottom: 28, right: 28, width: 58, height: 58, background: "#25D366", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(37,211,102,.45)", zIndex: 999, textDecoration: "none", animation: "waPulse 2.5s infinite" }}>
        <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <style>{`@keyframes waPulse{0%,100%{box-shadow:0 8px 24px rgba(37,211,102,.45)}50%{box-shadow:0 8px 32px rgba(37,211,102,.7),0 0 0 10px rgba(37,211,102,.1)}}`}</style>
    </>
  );
}

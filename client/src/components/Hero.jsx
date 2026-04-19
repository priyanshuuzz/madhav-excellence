import { useState, useEffect, useRef } from "react";
import { C, S } from "../constants/tokens";

export default function Hero() {
  const [counts, setCounts] = useState({ a: 0, b: 0, c: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const targets = { a: 98, b: 15, c: 5 };
        let frame = 0;
        const steps = 60;
        const timer = setInterval(() => {
          frame++;
          setCounts({
            a: Math.min(Math.round((targets.a / steps) * frame), targets.a),
            b: Math.min(Math.round((targets.b / steps) * frame), targets.b),
            c: Math.min(Math.round((targets.c / steps) * frame), targets.c),
          });
          if (frame >= steps) clearInterval(timer);
        }, 1500 / steps);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const numStyle = { fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: C.navy };
  const lblStyle = { display: "block", fontSize: ".75rem", color: C.muted, fontWeight: 500, textTransform: "uppercase", letterSpacing: ".05em" };

  return (
    <section style={{ minHeight: "100vh", padding: "110px 5vw 80px", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center", gap: "4rem", background: `linear-gradient(135deg,${C.cream} 60%,#FEE8D6 100%)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(249,115,22,.08) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: ".5rem", background: "rgba(249,115,22,.1)", border: "1px solid rgba(249,115,22,.25)", borderRadius: 100, padding: ".3rem .9rem", fontSize: ".78rem", fontWeight: 600, color: C.saffron, marginBottom: "1.2rem" }}>⭐ Trusted by Students in 15+ Countries</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.4rem,4.5vw,3.8rem)", fontWeight: 900, color: C.navy, lineHeight: 1.1, marginBottom: "1.2rem" }}>
          Holistic Learning for <em style={{ fontStyle: "italic", color: C.saffron }}>Academic Excellence</em>
        </h1>
        <p style={{ fontSize: "1.05rem", color: C.muted, lineHeight: 1.7, maxWidth: 480, marginBottom: "2rem" }}>
          Academics + Meditation + Bhagavad Gita Wisdom + Counseling — a complete program for every student, grades 1–12, across all global curricula.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <a href="#demo" style={S.btnPrimary}>📅 Book Free Demo Class</a>
          <a href="#programs" style={S.btnOutline}>Explore Programs →</a>
        </div>
        <div ref={ref} style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}><span style={numStyle}>{counts.a}%</span><span style={lblStyle}>Success Rate</span></div>
          <div style={{ textAlign: "center" }}><span style={numStyle}>{counts.b}+</span><span style={lblStyle}>Countries</span></div>
          <div style={{ textAlign: "center" }}><span style={numStyle}>{counts.c}.0⭐</span><span style={lblStyle}>Parent Rating</span></div>
          <div style={{ textAlign: "center" }}><span style={numStyle}>4–5</span><span style={lblStyle}>Batch Size</span></div>
        </div>
      </div>

      <div className="hero-visual" style={{ position: "relative" }}>
        <div style={{ background: C.white, borderRadius: 20, boxShadow: "0 16px 48px rgba(13,31,78,.16)", position: "relative" }}>
          <div style={{ width: "100%", aspectRatio: "4/3", background: `linear-gradient(135deg,${C.navy} 0%,${C.navyL} 100%)`, borderRadius: 20, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: ".8rem", color: "rgba(255,255,255,.75)", fontSize: ".95rem" }}>
            <div style={{ fontSize: "4.5rem" }}>📚</div>
            <div>Expert-led learning, every day</div>
          </div>
          <div style={{ position: "absolute", top: -16, right: -16, background: C.white, borderRadius: 12, boxShadow: "0 4px 24px rgba(13,31,78,.10)", padding: ".6rem 1rem", display: "flex", alignItems: "center", gap: ".6rem", fontSize: ".82rem", fontWeight: 600, color: C.navy }}>🌟 5.0 Rating from Parents</div>
          <div style={{ position: "absolute", bottom: 20, left: -20, background: C.white, borderRadius: 12, boxShadow: "0 4px 24px rgba(13,31,78,.10)", padding: ".6rem 1rem", display: "flex", alignItems: "center", gap: ".6rem", fontSize: ".82rem", fontWeight: 600, color: C.navy }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e" }} />Live Sessions Available
          </div>
        </div>
      </div>
    </section>
  );
}

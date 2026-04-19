import { useState } from "react";
import FadeIn from "./FadeIn";
import { C, S } from "../constants/tokens";
import { PROGRAMS, PROGRAM_TABS, CONTACT } from "../constants/data";

function ProgramCard({ grade, badge, name, includes, outcome }) {
  return (
    <div style={{ ...S.card, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: C.saffron, borderRadius: "4px 0 0 4px" }} />
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: C.navy }}>{grade}</div>
        <div style={{ background: "rgba(249,115,22,.1)", color: C.saffron, fontSize: ".72rem", fontWeight: 700, padding: ".25rem .6rem", borderRadius: 100, textTransform: "uppercase" }}>{badge}</div>
      </div>
      <div style={{ fontSize: ".82rem", fontWeight: 600, color: C.saffron, marginBottom: ".8rem" }}>{name}</div>
      <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: ".4rem", marginBottom: "1rem" }}>
        {includes.map((item, i) => (
          <li key={i} style={{ fontSize: ".82rem", color: C.muted, display: "flex", alignItems: "flex-start", gap: ".5rem", lineHeight: 1.4 }}>
            <span style={{ color: "#22c55e", fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
          </li>
        ))}
      </ul>
      <div style={{ background: "linear-gradient(135deg,rgba(249,115,22,.08),rgba(13,31,78,.05))", borderRadius: 10, padding: ".75rem 1rem", fontSize: ".8rem", color: C.navy, fontWeight: 500, marginBottom: "1rem" }}>
        <strong style={{ color: C.saffron }}>🎯 Outcome:</strong> {outcome}
      </div>
      <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: ".4rem", fontSize: ".85rem", fontWeight: 600, color: C.saffron, textDecoration: "none" }}>Know More →</a>
    </div>
  );
}

export default function Programs() {
  const [active, setActive] = useState("primary");

  return (
    <section id="programs" style={{ ...S.section, background: C.cream }}>
      <FadeIn style={{ textAlign: "center", marginBottom: "3.5rem" }}>
        <p style={S.sectionLabel}>Our Programs</p>
        <h2 style={{ ...S.sectionTitle, textAlign: "center" }}>
          Find the Right Program <em style={{ fontStyle: "italic", color: C.saffron }}>For Your Child</em>
        </h2>
        <p style={{ ...S.sectionSub, margin: "0 auto" }}>
          Board-aligned programs with integrated holistic development — for every grade and curriculum.
        </p>
      </FadeIn>

      <FadeIn>
        <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2.5rem" }}>
          {PROGRAM_TABS.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                padding: ".55rem 1.2rem", borderRadius: 100,
                border: `1.5px solid ${active === key ? C.navy : C.border}`,
                background: active === key ? C.navy : C.white,
                color: active === key ? "#fff" : C.muted,
                fontSize: ".85rem", fontWeight: 600, cursor: "pointer",
                fontFamily: "inherit", whiteSpace: "nowrap", transition: "all .2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
          {PROGRAMS[active].map((p, i) => <ProgramCard key={i} {...p} />)}
        </div>
      </FadeIn>
    </section>
  );
}

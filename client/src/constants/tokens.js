export const C = {
  navy: "#0D1F4E",
  navyL: "#1A3070",
  saffron: "#F97316",
  gold: "#E8A020",
  cream: "#FDF8F2",
  white: "#FFFFFF",
  muted: "#6B7280",
  border: "#E5E7EB",
};

export const S = {
  section: { padding: "80px 5vw" },
  sectionLabel: { fontSize: ".75rem", fontWeight: 700, color: C.saffron, textTransform: "uppercase", letterSpacing: ".12em", marginBottom: ".8rem" },
  sectionTitle: { fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 700, color: C.navy, marginBottom: "1rem", lineHeight: 1.2 },
  sectionSub: { color: C.muted, fontSize: "1rem", lineHeight: 1.7, maxWidth: 560 },
  btnPrimary: { display: "inline-flex", alignItems: "center", gap: ".5rem", background: C.saffron, color: "#fff", padding: ".8rem 1.6rem", borderRadius: 10, fontWeight: 600, fontSize: ".95rem", border: "none", cursor: "pointer", fontFamily: "inherit", transition: "transform .2s, box-shadow .2s" },
  btnOutline: { display: "inline-flex", alignItems: "center", gap: ".5rem", border: `2px solid ${C.navy}`, color: C.navy, padding: ".78rem 1.6rem", borderRadius: 10, fontWeight: 600, fontSize: ".95rem", background: "transparent", cursor: "pointer", fontFamily: "inherit" },
  card: { background: "#fff", borderRadius: 16, padding: "1.8rem", border: `1.5px solid #E5E7EB` },
  input: { padding: ".65rem .9rem", border: "1.5px solid #E5E7EB", borderRadius: 8, fontSize: ".88rem", fontFamily: "inherit", color: "#1a1a2e", width: "100%", outline: "none" },
  label: { fontSize: ".78rem", fontWeight: 600, color: "#0D1F4E", display: "block", marginBottom: ".35rem" },
};

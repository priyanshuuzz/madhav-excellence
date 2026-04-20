import { useState, useEffect } from "react";
import { C, S } from "../constants/tokens";

const NAV_LINKS = [["#about","About"],["#programs","Programs"],["#why","Why Us"],["#testimonials","Reviews"],["#faq","FAQ"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999, padding: "0 5vw", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,.96)", backdropFilter: "blur(12px)", borderBottom: `1px solid rgba(13,31,78,.08)`, boxShadow: scrolled ? "0 4px 24px rgba(13,31,78,.10)" : "none", transition: "box-shadow .3s" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img 
            src="/logo.png" 
            alt="Madhav Excellence Logo" 
            style={{ 
              height: 45, 
              width: 45, 
              objectFit: "contain",
              flexShrink: 0
            }} 
          />
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: C.navy, lineHeight: 1.1 }}>
            Madhav Excellence
            <span style={{ display: "block", fontFamily: "'DM Sans', sans-serif", fontSize: ".65rem", fontWeight: 400, color: C.saffron, letterSpacing: ".08em" }}>Where Knowledge Meets Excellence</span>
          </div>
        </a>

        {/* Desktop */}
        <ul className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}><a href={href} style={{ fontSize: ".88rem", fontWeight: 500, color: C.navy, opacity: .8, textDecoration: "none" }}>{label}</a></li>
          ))}
          <li><a href="#demo" style={{ background: C.saffron, color: "#fff", padding: ".45rem 1.1rem", borderRadius: 8, fontWeight: 600, fontSize: ".88rem", textDecoration: "none" }}>Book Free Demo</a></li>
        </ul>

        {/* Mobile toggle */}
        <button className="nav-mobile-toggle" onClick={() => setMenuOpen(o => !o)} style={{ display: "none", flexDirection: "column", gap: 5, cursor: "pointer", padding: 4, background: "none", border: "none" }}>
          {[0,1,2].map(i => <span key={i} style={{ width: 24, height: 2, background: C.navy, borderRadius: 2, display: "block" }} />)}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: 70, left: 0, right: 0, background: "#fff", borderBottom: `1px solid ${C.border}`, padding: "1.5rem 5vw", zIndex: 998, display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[...NAV_LINKS, ["#demo", "📅 Book Free Demo"]].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{ color: href === "#demo" ? C.saffron : C.navy, fontWeight: href === "#demo" ? 700 : 500, fontSize: ".95rem", padding: ".5rem 0", borderBottom: `1px solid ${C.border}`, textDecoration: "none" }}>{label}</a>
          ))}
        </div>
      )}
    </>
  );
}

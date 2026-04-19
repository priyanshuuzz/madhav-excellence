import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <Routes>
      {/* Public website */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <main style={{ paddingTop: 70 }}>
              <Home />
            </main>
          </>
        }
      />

      {/* Admin dashboard — no navbar */}
      <Route path="/admin" element={<Admin />} />

      {/* 404 */}
      <Route
        path="*"
        element={
          <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", fontFamily: "'DM Sans', sans-serif" }}>
            <div style={{ fontSize: "4rem" }}>🎓</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#0D1F4E" }}>Page Not Found</h1>
            <a href="/" style={{ color: "#F97316", fontWeight: 600 }}>← Go back home</a>
          </div>
        }
      />
    </Routes>
  );
}

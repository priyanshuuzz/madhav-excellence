import { useState, useEffect } from "react";
import { C, S } from "../constants/tokens";

const STATUS_COLORS = {
  pending:   { bg: "#fef9c3", color: "#854d0e" },
  confirmed: { bg: "#dcfce7", color: "#166534" },
  completed: { bg: "#dbeafe", color: "#1e40af" },
  cancelled: { bg: "#fee2e2", color: "#991b1b" },
};

const STATUSES = ["pending", "confirmed", "completed", "cancelled"];

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [updating, setUpdating] = useState(null);

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      setBookings(data.bookings || []);
    } catch {
      setError("Failed to load bookings. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchBookings(); }, []);

  const updateStatus = async (id, status) => {
    setUpdating(id);
    try {
      await fetch(`/api/bookings/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      setBookings((bs) => bs.map((b) => b.id === id ? { ...b, status } : b));
    } catch {
      alert("Failed to update status");
    } finally {
      setUpdating(null);
    }
  };

  const filtered = bookings.filter((b) => {
    const matchFilter = filter === "all" || b.status === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || b.student_name.toLowerCase().includes(q) || b.parent_name.toLowerCase().includes(q) || b.email.toLowerCase().includes(q) || b.phone.includes(q);
    return matchFilter && matchSearch;
  });

  const counts = STATUSES.reduce((acc, s) => ({ ...acc, [s]: bookings.filter((b) => b.status === s).length }), {});

  if (loading) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: C.cream }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>⏳</div>
        <p style={{ color: C.muted }}>Loading bookings...</p>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: C.cream }}>
      {/* Header */}
      <div style={{ background: C.navy, padding: "0 5vw", height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 38, height: 38, background: C.saffron, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#fff", fontSize: "1rem" }}>Madhav Excellence</div>
            <div style={{ fontSize: ".7rem", color: C.saffron }}>Admin Dashboard</div>
          </div>
        </div>
        <a href="/" style={{ color: "rgba(255,255,255,.7)", textDecoration: "none", fontSize: ".85rem" }}>← Back to Website</a>
      </div>

      <div style={{ padding: "2.5rem 5vw" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", color: C.navy, marginBottom: "0.3rem" }}>Demo Bookings</h1>
        <p style={{ color: C.muted, marginBottom: "2rem" }}>Manage and track all incoming demo class requests</p>

        {error && (
          <div style={{ background: "#fee2e2", border: "1px solid #fca5a5", borderRadius: 10, padding: "1rem 1.2rem", color: "#991b1b", marginBottom: "1.5rem" }}>⚠️ {error}</div>
        )}

        {/* Stat cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[["all", "Total", bookings.length, C.navy], ...STATUSES.map((s) => [s, s.charAt(0).toUpperCase() + s.slice(1), counts[s], STATUS_COLORS[s].color])].map(([key, label, count, color]) => (
            <button key={key} onClick={() => setFilter(key)} style={{ background: filter === key ? C.navy : "#fff", border: `2px solid ${filter === key ? C.navy : C.border}`, borderRadius: 12, padding: "1rem", textAlign: "left", cursor: "pointer", fontFamily: "inherit", transition: "all .2s" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 700, color: filter === key ? "#fff" : color, fontFamily: "'Playfair Display', serif" }}>{count}</div>
              <div style={{ fontSize: ".78rem", fontWeight: 600, color: filter === key ? "rgba(255,255,255,.7)" : C.muted, textTransform: "capitalize", marginTop: ".2rem" }}>{label}</div>
            </button>
          ))}
        </div>

        {/* Search + filter bar */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="🔍  Search by name, email or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ ...S.input, maxWidth: 360, padding: ".6rem 1rem" }}
          />
          <button onClick={fetchBookings} style={{ ...S.btnOutline, padding: ".6rem 1.2rem", fontSize: ".85rem" }}>↻ Refresh</button>
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "3rem", color: C.muted }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📭</div>
            <p>{bookings.length === 0 ? "No bookings yet. They'll appear here when students submit the demo form." : "No bookings match your search."}</p>
          </div>
        ) : (
          <div style={{ overflowX: "auto", borderRadius: 12, border: `1px solid ${C.border}`, background: "#fff" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: ".85rem" }}>
              <thead>
                <tr style={{ background: C.cream, borderBottom: `1.5px solid ${C.border}` }}>
                  {["ID", "Student", "Grade", "Curriculum", "Subject", "Parent", "Phone", "Email", "Status", "Date", "Action"].map((h) => (
                    <th key={h} style={{ padding: ".8rem 1rem", textAlign: "left", fontSize: ".75rem", fontWeight: 700, color: C.muted, textTransform: "uppercase", letterSpacing: ".05em", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((b, i) => (
                  <tr key={b.id} style={{ borderBottom: `1px solid ${C.border}`, background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <td style={{ padding: ".85rem 1rem", color: C.muted, fontWeight: 600 }}>#{b.id}</td>
                    <td style={{ padding: ".85rem 1rem", fontWeight: 600, color: C.navy, whiteSpace: "nowrap" }}>{b.student_name}</td>
                    <td style={{ padding: ".85rem 1rem", color: C.muted }}>{b.grade}</td>
                    <td style={{ padding: ".85rem 1rem", color: C.muted, maxWidth: 130, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{b.curriculum}</td>
                    <td style={{ padding: ".85rem 1rem", color: C.muted }}>{b.subject}</td>
                    <td style={{ padding: ".85rem 1rem", whiteSpace: "nowrap" }}>{b.parent_name}</td>
                    <td style={{ padding: ".85rem 1rem", whiteSpace: "nowrap" }}>
                      <a href={`tel:${b.phone}`} style={{ color: C.saffron, textDecoration: "none" }}>{b.phone}</a>
                    </td>
                    <td style={{ padding: ".85rem 1rem" }}>
                      <a href={`mailto:${b.email}`} style={{ color: C.saffron, textDecoration: "none" }}>{b.email}</a>
                    </td>
                    <td style={{ padding: ".85rem 1rem" }}>
                      <span style={{ background: STATUS_COLORS[b.status]?.bg, color: STATUS_COLORS[b.status]?.color, padding: ".25rem .7rem", borderRadius: 100, fontSize: ".75rem", fontWeight: 700, textTransform: "capitalize" }}>{b.status}</span>
                    </td>
                    <td style={{ padding: ".85rem 1rem", color: C.muted, whiteSpace: "nowrap" }}>
                      {new Date(b.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td style={{ padding: ".85rem 1rem" }}>
                      <select
                        value={b.status}
                        disabled={updating === b.id}
                        onChange={(e) => updateStatus(b.id, e.target.value)}
                        style={{ padding: ".3rem .6rem", border: `1px solid ${C.border}`, borderRadius: 6, fontSize: ".78rem", fontFamily: "inherit", cursor: "pointer", background: "#fff" }}
                      >
                        {STATUSES.map((s) => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <p style={{ color: C.muted, fontSize: ".8rem", marginTop: "1rem" }}>
          Showing {filtered.length} of {bookings.length} booking{bookings.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}

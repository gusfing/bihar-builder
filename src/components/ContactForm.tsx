"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: "var(--ground)", border: "1px solid var(--accent)", padding: "36px", textAlign: "center" }}>
        <div className="mono-tag live" style={{ marginBottom: "12px", color: "var(--accent)" }}>
          INQUIRY TRANSMITTED
        </div>
        <h4 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--ink)", marginBottom: "8px" }}>
          Project Brief Received
        </h4>
        <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "20px" }}>
          Thank you. Principal Architect Ar. Imran Ahmad and our structural engineering team will review your project parameters and contact you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-outline"
          style={{ padding: "8px 20px" }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
      <div>
        <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>FULL NAME *</label>
        <input
          type="text"
          className="form-input"
          style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }}
          placeholder="e.g. Rameshwar Kumar"
          required
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        <div>
          <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>PHONE NUMBER *</label>
          <input
            type="tel"
            className="form-input"
            style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }}
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </div>
        <div>
          <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>EMAIL ADDRESS</label>
          <input
            type="email"
            className="form-input"
            style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }}
            placeholder="name@domain.com"
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
        <div>
          <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>LOCATION / CITY *</label>
          <input
            type="text"
            className="form-input"
            style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }}
            placeholder="e.g. Araria, Patna, Purnea"
            required
          />
        </div>
        <div>
          <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>TYPOLOGY / SERVICE *</label>
          <select
            className="form-select"
            style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }}
            defaultValue="Residential Architecture"
          >
            <option value="Residential Architecture">Residential Architecture & 3D Plans</option>
            <option value="Residential Construction">Turnkey Residential Construction</option>
            <option value="Commercial Architecture & Build">Commercial Architecture & Complex Build</option>
            <option value="Hospital Healthcare Planning">Hospital / Healthcare Facility</option>
            <option value="School Educational Campus">School / Educational Campus</option>
            <option value="Interior & Modular Kitchen">Luxury Interior & Modular Kitchen</option>
            <option value="Godown & Industrial PEB">Godown / Industrial PEB Structure</option>
            <option value="Estimation & BOQ">Detailed Itemized BOQ Estimation</option>
            <option value="Exterior Landscaping">Exterior Design & Landscaping</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>PLOT SIZE OR ESTIMATED BUILT-UP AREA</label>
        <input
          type="text"
          className="form-input"
          style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }}
          placeholder="e.g. 3,500 sq.ft. or 15 Katha"
        />
      </div>

      <div>
        <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>PROJECT SCOPE & TIMELINE REQUIREMENTS</label>
        <textarea
          className="form-textarea"
          rows={4}
          style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }}
          placeholder="Describe plot coordinates, architectural aspirations, or questions for Ar. Imran Ahmad..."
        />
      </div>

      <button type="submit" className="btn btn-primary" style={{ padding: "14px", marginTop: "8px" }}>
        Transmit Project Parameters ↗
      </button>
    </form>
  );
}

import Link from "next/link";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Works & Architectural Portfolio | BIHAR BUILDERS",
  description: "Browse 150+ completed architectural and turnkey civil projects designed and constructed by Bihar Builders across Bihar and Delhi NCR.",
};

export default function ProjectsPage() {
  const { projects } = siteData;

  return (
    <div className="santal-page-wrapper">
      {/* 01. PAGE HERO */}
      <section className="santal-section" style={{ padding: "clamp(56px, 7vw, 96px) 0 clamp(40px, 5vw, 64px)" }}>
        <div className="santal-container">
          <span className="santal-hero-eyebrow">
            Architectural Portfolio &bull; 150+ Executions
          </span>
          <h1 className="santal-hero-title">
            <span>Selected</span>
            <span>Architectural Works</span>
          </h1>

          <div className="santal-hero-subtitle-row" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: "none" }}>
            <div className="santal-hero-tagline">
              Permanence, Light, and Context
            </div>
            <div className="santal-hero-desc">
              From waterfront cantilevered residences on the River Ganga to climate-responsive central courtyard bungalows and multi-tier healthcare facilities across Bihar and Delhi NCR.
            </div>
          </div>
        </div>
      </section>

      {/* 02. PROJECTS ARCHIVE GRID */}
      <section className="santal-section">
        <div className="santal-container">
          <div className="santal-cornerstones-grid">
            {projects.map((proj, idx) => (
              <div key={proj.id} className="santal-cornerstone-cell">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
                  <span className="santal-cornerstone-index">0{idx + 1} / {proj.category}</span>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>
                    Completed {proj.year}
                  </span>
                </div>

                <h2 className="santal-cornerstone-title" style={{ fontSize: "clamp(1.6rem, 1.2rem + 1vw, 2.4rem)" }}>
                  {proj.title}
                </h2>

                <div style={{ fontSize: "0.86rem", color: "var(--accent)", fontWeight: 500, marginBottom: "16px" }}>
                  {proj.location}
                </div>

                <p className="santal-cornerstone-p" style={{ marginBottom: "24px" }}>
                  {proj.description}
                </p>

                {/* Highlights */}
                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "18px", marginTop: "auto", marginBottom: "24px" }}>
                  <div style={{ fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "10px" }}>
                    Technical Specifications
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {proj.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: "0.86rem", color: "var(--ink-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ color: "var(--accent)" }}>&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ paddingTop: "16px", borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Link href="/contact" className="santal-work-link" style={{ fontSize: "0.86rem" }}>
                    Inquire On Typology <span>↗</span>
                  </Link>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Lead: Ar. Imran Ahmad
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. CTA */}
      <section className="santal-section" style={{ borderBottom: "none" }}>
        <div className="santal-container" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="santal-approach-eyebrow">Commission Architecture</span>
          <h2 style={{ fontSize: "var(--t-santal-h2)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: "18px" }}>
            Design Your Next Landmark with Bihar Builders
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", lineHeight: "1.75", marginBottom: "36px" }}>
            Direct engagement with Principal Architect Ar. Imran Ahmad for land inspections, structural evaluations, and itemized BOQ estimations.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="santal-btn-enquire"
              style={{ padding: "14px 28px", fontSize: "0.92rem", backgroundColor: "var(--ink)", color: "#FFFFFF" }}
            >
              Book Site Survey ↗
            </Link>
            <a
              href={`tel:${siteData.contact.phones[0].replace(/\s+/g, '')}`}
              className="santal-btn-enquire"
              style={{ padding: "14px 28px", fontSize: "0.92rem" }}
            >
              Call Direct: {siteData.contact.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

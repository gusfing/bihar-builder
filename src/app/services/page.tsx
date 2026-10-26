import Link from "next/link";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architectural & Civil Disciplines | BIHAR BUILDERS",
  description: "Complete directory of architectural design, civil construction, interior design, and estimation services by Bihar Builders.",
};

export default function ServicesPage() {
  const arch = siteData.services.filter(s => s.category === "architecture");
  const constr = siteData.services.filter(s => s.category === "construction");
  const interior = siteData.services.filter(s => s.category === "interior");
  const spec = siteData.services.filter(s => s.category === "specialized");

  return (
    <div className="santal-page-wrapper">
      {/* 01. PAGE HERO STAGE */}
      <section className="santal-section" style={{ padding: "clamp(56px, 7vw, 96px) 0 clamp(40px, 5vw, 64px)" }}>
        <div className="santal-container">
          <span className="santal-hero-eyebrow">
            Architectural Studio Capabilities &bull; Turnkey Practice
          </span>
          <h1 className="santal-hero-title">
            <span>Disciplines</span>
            <span>&amp; Capabilities</span>
          </h1>

          <div className="santal-hero-subtitle-row" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: "none" }}>
            <div className="santal-hero-tagline">
              From Concept to Structural Handover
            </div>
            <div className="santal-hero-desc">
              Every discipline is executed under the direct unbroken supervision of <strong>Ar. Imran Ahmad (B. Arch., Jamia Millia Islamia, 2012)</strong> and certified civil engineers adhering strictly to NBC 2016 Seismic Zone V codes.
            </div>
          </div>
        </div>
      </section>

      {/* 02. DIVISION 01: ARCHITECTURAL DESIGN */}
      <section className="santal-section" id="architecture">
        <div className="santal-container">
          <div className="santal-approach-header">
            <span className="santal-approach-eyebrow">Division 01 / Spatial Planning</span>
            <h2 className="santal-approach-statement">
              Architectural Design &amp; Masterplanning
            </h2>
            <p className="santal-approach-sub">
              Daylight-driven orientation, passive thermal cooling, Vastu harmony, and complete statutory authority clearances.
            </p>
          </div>

          <div className="santal-cornerstones-grid">
            {arch.map((s, idx) => (
              <div key={s.id} className="santal-cornerstone-cell">
                <span className="santal-cornerstone-index">0{idx + 1} / Spatial Typology</span>
                <h3 className="santal-cornerstone-title">{s.title}</h3>
                <p className="santal-cornerstone-p" style={{ marginBottom: "20px" }}>
                  {s.shortDescription}
                </p>
                <div style={{ fontSize: "0.86rem", color: "var(--muted)", marginBottom: "24px", lineHeight: "1.6" }}>
                  <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Scope: </strong>
                  {s.scope.slice(0, 3).join(" &bull; ")}
                </div>
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href={`/${s.category}/${s.slug.replace('-architecture', '')}`}
                    className="santal-work-link"
                    style={{ fontSize: "0.86rem" }}
                  >
                    View Typology Blueprint &amp; Specs <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. DIVISION 02: CIVIL ENGINEERING */}
      <section className="santal-section" id="construction">
        <div className="santal-container">
          <div className="santal-approach-header">
            <span className="santal-approach-eyebrow">Division 02 / Structural Permanence</span>
            <h2 className="santal-approach-statement">
              Turnkey Civil Construction
            </h2>
            <p className="santal-approach-sub">
              Engineered for Seismic Zone V with primary TMT 550D rebar, batch-mixed concrete, and mandatory cube compression testing.
            </p>
          </div>

          <div className="santal-cornerstones-grid">
            {constr.map((s, idx) => (
              <div key={s.id} className="santal-cornerstone-cell">
                <span className="santal-cornerstone-index">0{idx + 1} / Civil Typology</span>
                <h3 className="santal-cornerstone-title">{s.title}</h3>
                <p className="santal-cornerstone-p" style={{ marginBottom: "20px" }}>
                  {s.shortDescription}
                </p>
                <div style={{ fontSize: "0.86rem", color: "var(--muted)", marginBottom: "24px", lineHeight: "1.6" }}>
                  <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Engineering: </strong>
                  {s.scope.slice(0, 3).join(" &bull; ")}
                </div>
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href={`/${s.category}/${s.slug.replace('-construction', '')}`}
                    className="santal-work-link"
                    style={{ fontSize: "0.86rem" }}
                  >
                    Structural Scope &amp; Quality Codes <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. DIVISION 03: INTERIOR JOINERY */}
      <section className="santal-section" id="interior">
        <div className="santal-container">
          <div className="santal-approach-header">
            <span className="santal-approach-eyebrow">Division 03 / Material Tactility</span>
            <h2 className="santal-approach-statement">
              Interior Architecture &amp; Custom Joinery
            </h2>
            <p className="santal-approach-sub">
              Natural Italian travertine, acoustic timber fluting, BWP-grade marine joinery, and tailored lighting environments.
            </p>
          </div>

          <div className="santal-cornerstones-grid">
            {interior.map((s, idx) => (
              <div key={s.id} className="santal-cornerstone-cell">
                <span className="santal-cornerstone-index">0{idx + 1} / Interior Scope</span>
                <h3 className="santal-cornerstone-title">{s.title}</h3>
                <p className="santal-cornerstone-p" style={{ marginBottom: "20px" }}>
                  {s.shortDescription}
                </p>
                <div style={{ fontSize: "0.86rem", color: "var(--muted)", marginBottom: "24px", lineHeight: "1.6" }}>
                  <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Materials: </strong>
                  {s.scope.slice(0, 3).join(" &bull; ")}
                </div>
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href={`/${s.category}/${s.slug.replace('-interior', '')}`}
                    className="santal-work-link"
                    style={{ fontSize: "0.86rem" }}
                  >
                    Millwork &amp; Finish Specifications <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. DIVISION 04: SPECIALIZED CAPABILITIES */}
      <section className="santal-section">
        <div className="santal-container">
          <div className="santal-approach-header">
            <span className="santal-approach-eyebrow">Division 04 / Specialized Practice</span>
            <h2 className="santal-approach-statement">
              Cost Engineering &amp; Landscape Architecture
            </h2>
            <p className="santal-approach-sub">
              Scientific line-by-line itemized BOQ estimations and climate-adapted indigenous landscape masterplans.
            </p>
          </div>

          <div className="santal-cornerstones-grid">
            {spec.map((s, idx) => (
              <div key={s.id} className="santal-cornerstone-cell">
                <span className="santal-cornerstone-index">0{idx + 1} / Specialized</span>
                <h3 className="santal-cornerstone-title">{s.title}</h3>
                <p className="santal-cornerstone-p" style={{ marginBottom: "20px" }}>
                  {s.shortDescription}
                </p>
                <div style={{ marginTop: "auto" }}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="santal-work-link"
                    style={{ fontSize: "0.86rem" }}
                  >
                    Explore Specialized Discipline <span>↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. INITIATION CTA */}
      <section className="santal-section" style={{ borderBottom: "none" }}>
        <div className="santal-container" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="santal-approach-eyebrow">Project Consultation</span>
          <h2 style={{ fontSize: "var(--t-santal-h2)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: "18px" }}>
            Ready to Commission Your Architectural Build?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", lineHeight: "1.75", marginBottom: "36px" }}>
            Direct engagement with Principal Architect Ar. Imran Ahmad for plot inspections, structural feasibility, and locked-rate BOQ estimations.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              className="santal-btn-enquire"
              style={{ padding: "14px 28px", fontSize: "0.92rem", backgroundColor: "var(--ink)", color: "#FFFFFF" }}
            >
              Request Architectural Consultation ↗
            </Link>
            <a
              href={`tel:${siteData.contact.phones[0].replace(/\s+/g, '')}`}
              className="santal-btn-enquire"
              style={{ padding: "14px 28px", fontSize: "0.92rem" }}
            >
              Call Studio: {siteData.contact.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

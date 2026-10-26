import Link from "next/link";
import { siteData } from "@/data/siteContent";
import type { Metadata } from "next";
import {
  SectionElevationSvg,
  SeismicFrameSvg,
  ArchitectSealSvg,
  ContourSurveySvg,
} from "@/components/ArchitecturalIllustrations";

export const metadata: Metadata = {
  title: "Practice Profile & Founder Ar. Imran Ahmad | BIHAR BUILDERS",
  description: "Learn about Bihar Builders and founder Ar. Imran Ahmad (B.Arch, Jamia Millia Islamia, Delhi). 20+ years construction heritage, architectural manifesto, vision, and regional hubs in Araria, Delhi, and Kishanganj.",
};

export default function CompanyProfilePage() {
  const { company, contact } = siteData;

  return (
    <div className="santal-page-wrapper">
      {/* 01. PAGE HERO */}
      <section className="santal-section" style={{ padding: "clamp(56px, 7vw, 96px) 0 clamp(40px, 5vw, 64px)" }}>
        <div className="santal-container">
          <span className="santal-hero-eyebrow">
            Practice Profile &bull; Founded 2012 &bull; Eastern India &amp; Delhi NCR
          </span>
          <h1 className="santal-hero-title">
            <span>Integrated Studio</span>
            <span>Architecture &amp; Civil Execution</span>
          </h1>

          <div className="santal-hero-subtitle-row" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: "none" }}>
            <div className="santal-hero-tagline">
              Bold presence. Quiet execution.
            </div>
            <div className="santal-hero-desc">
              Bihar Builders unites visionary architectural planning with certified turnkey structural engineering under the unbroken direct supervision of <strong>Ar. Imran Ahmad (B. Arch., Jamia Millia Islamia Central University, New Delhi, 2012)</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* 02. EDITORIAL FOUNDATION & FOUNDER CARD */}
      <section className="santal-section">
        <div className="santal-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
            <div>
              <span className="santal-approach-eyebrow">Architectural Foundation // 2012&ndash;Present</span>
              <h2 className="santal-approach-statement" style={{ fontSize: "clamp(1.8rem, 1.2rem + 1.8vw, 2.8rem)", marginBottom: "28px" }}>
                Closing the Void Between Visionary Design and Civil Reality.
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", lineHeight: "1.8", marginBottom: "20px" }}>
                <strong>Bihar Builders</strong> was established under the architectural helm of <strong>Ar. Imran Ahmad</strong> following his graduation from the prestigious Bachelor of Architecture program at Jamia Millia Islamia Central University, New Delhi in 2012.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", lineHeight: "1.8", marginBottom: "20px" }}>
                Having led multidisciplinary design teams for national and multinational architecture conglomerates across India, Ar. Imran Ahmad observed a critical void in Eastern India: clients were constantly forced to choose between design studios that lacked construction logistical discipline, or crude civil contractors who could not interpret complex architectural drawings.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--ink-secondary)", lineHeight: "1.8", marginBottom: "32px" }}>
                Bihar Builders was engineered as an integrated design-build practice to close this gap forever. We unite preliminary conceptual modeling, Vastu alignment, structural seismic analysis, and turnkey on-site execution under one certified architectural roof.
              </p>

              <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "24px", margin: "32px 0" }}>
                <p style={{ fontSize: "1.2rem", fontStyle: "italic", color: "var(--ink)", lineHeight: "1.6" }}>
                  &ldquo;Offering you the finest services is our vision; our executed landmarks are our published mission. We place each brick on the foundation of trust.&rdquo;
                </p>
                <span style={{ display: "block", marginTop: "12px", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>
                  &mdash; Ar. Imran Ahmad, Principal Architect
                </span>
              </div>
            </div>

            {/* Founder Profile Plate */}
            <div style={{ border: "1px solid var(--line)", background: "var(--ground-card)", padding: "clamp(32px, 4vw, 44px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span className="santal-cornerstone-index">Principal Architect</span>
                <ArchitectSealSvg size={44} color="var(--accent)" />
              </div>

              <h3 style={{ fontSize: "1.8rem", fontWeight: 500, letterSpacing: "-0.02em", color: "var(--ink)", marginBottom: "6px" }}>
                {company.founder.name}
              </h3>
              <div style={{ fontSize: "0.86rem", color: "var(--accent)", fontWeight: 500, marginBottom: "20px" }}>
                {company.founder.qualification}
              </div>

              <p style={{ fontSize: "0.94rem", color: "var(--ink-secondary)", lineHeight: "1.7", marginBottom: "28px" }}>
                {company.founder.bio}
              </p>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.86rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--muted)" }}>Statutory Body:</span>
                  <span style={{ color: "var(--ink)", fontWeight: 500 }}>Council of Architecture (CA/2012)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--muted)" }}>Structural Standard:</span>
                  <span style={{ color: "var(--ink)", fontWeight: 500 }}>NBC 2016 Zone V Compliant</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--muted)" }}>Direct Desk:</span>
                  <a href="mailto:ar.imran@outlook.com" style={{ color: "var(--accent)", fontWeight: 500 }}>
                    ar.imran@outlook.com ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. INSTITUTIONAL PILLARS */}
      <section className="santal-section">
        <div className="santal-container">
          <div className="santal-approach-header">
            <span className="santal-approach-eyebrow">Institutional Pillars // Core Creed</span>
            <h2 className="santal-approach-statement">
              The Principles That Govern Every Structure
            </h2>
          </div>

          <div className="santal-cornerstones-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="santal-cornerstone-cell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">01 / Vision</span>
                <SectionElevationSvg size={38} color="var(--accent)" />
              </div>
              <h3 className="santal-cornerstone-title">Strategic Vision</h3>
              <p className="santal-cornerstone-p">{company.vision}</p>
            </div>

            <div className="santal-cornerstone-cell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">02 / Mission</span>
                <ContourSurveySvg size={38} color="var(--accent)" />
              </div>
              <h3 className="santal-cornerstone-title">Operational Mission</h3>
              <p className="santal-cornerstone-p">{company.mission}</p>
            </div>

            <div className="santal-cornerstone-cell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">03 / Quality</span>
                <SeismicFrameSvg size={38} color="var(--accent)" />
              </div>
              <h3 className="santal-cornerstone-title">Structural Quality Policy</h3>
              <p className="santal-cornerstone-p">{company.qualityPolicy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. PHYSICAL NETWORK HUBS */}
      <section className="santal-section" style={{ borderBottom: "none" }}>
        <div className="santal-container">
          <div className="santal-approach-header">
            <span className="santal-approach-eyebrow">Studio Network // 3 Regional Hubs</span>
            <h2 className="santal-approach-statement">
              Physical Practice Across Bihar and Delhi NCR
            </h2>
          </div>

          <div className="santal-cornerstones-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {contact.offices.map((off, idx) => (
              <div key={idx} className="santal-cornerstone-cell">
                <span className="santal-cornerstone-index">Hub 0{idx + 1} &bull; {off.type}</span>
                <h3 className="santal-cornerstone-title">{off.city}</h3>
                <p className="santal-cornerstone-p" style={{ marginBottom: "20px" }}>
                  {off.address}
                </p>
                <div style={{ marginTop: "auto", paddingTop: "16px", borderTop: "1px solid var(--line)" }}>
                  <span style={{ fontSize: "0.86rem", color: "var(--ink)", fontWeight: 500 }}>
                    Direct Phone: {off.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

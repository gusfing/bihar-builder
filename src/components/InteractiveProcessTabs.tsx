"use client";

import { useState } from "react";

interface Stage {
  num: string;
  title: string;
  lead: string;
  scope: string[];
  deliverables: string[];
  duration: string;
}

const stages: Stage[] = [
  {
    num: "01",
    title: "Concept & Site Feasibility",
    lead: "Every project begins with geological, zoning, and spatial truth. We establish the architectural direction and structural feasibility before sketching.",
    scope: [
      "Soil strata bearing capacity testing (SPT test)",
      "Topographic contour & boundary laser survey",
      "Municipal zoning bylaws and setback verification",
      "Client functional requirements & spatial zoning matrix",
      "Preliminary investment envelope and schedule framework"
    ],
    deliverables: ["Geotechnical Soil Report", "Zoning Clearance Dossier", "Site Sun-Path & Wind Diagram", "Preliminary Project Charter"],
    duration: "Week 01 – 02"
  },
  {
    num: "02",
    title: "Ideation & Architectural 3D Modeling",
    lead: "Spatial layouts, daylight orientation, and Vastu alignment develop into photorealistic 3D elevations and structural volumes.",
    scope: [
      "Vastu-compliant residential and commercial floor layouts",
      "Passive solar architecture maximizing natural cross-ventilation",
      "Photorealistic 3D external elevations & twilight visual walkthroughs",
      "Material language selection (travertine stone, glass, louvers, steel)",
      "Interior spatial planning and room volume harmonization"
    ],
    deliverables: ["Full Architectural Blueprint Set", "High-Resolution 3D Renderings", "Facade Elevation Drawings", "Vastu Compliance Certificate"],
    duration: "Week 03 – 05"
  },
  {
    num: "03",
    title: "Structural Engineering & Itemized BOQ",
    lead: "Engineering calculations replace guesswork. We produce certified structural drawings and itemize every single kilogram of steel and bag of cement.",
    scope: [
      "Seismic Zone V structural analysis and foundation design",
      "TMT 550D rebar bar bending schedules (BBS)",
      "Mechanical, Electrical, and Plumbing (MEP) schematics",
      "Itemized Bill of Quantities (BOQ) with guaranteed rate lock",
      "Bank loan project estimation formats and milestone billing schedule"
    ],
    deliverables: ["Stamped Structural Engineering Drawings", "Complete Itemized BOQ Schedule", "Detailed MEP Schematics", "Contractor Tender Book"],
    duration: "Week 06 – 08"
  },
  {
    num: "04",
    title: "Turnkey Civil Execution & Handover",
    lead: "Our engineers and certified artisans take possession of the site, turning blueprints into enduring concrete reality with zero delays.",
    scope: [
      "Deep foundation excavation and subterranean anti-termite treatment",
      "Precision vibrated RCC frame with certified 43/53 grade concrete",
      "7-day and 28-day concrete cube compressive strength laboratory tests",
      "Multi-tier waterproofing on basements, sunken slabs, and terrace decks",
      "Bespoke interior fit-outs, modular millwork, and final occupancy audit"
    ],
    deliverables: ["Cube Test Lab Certifications", "Waterproofing Warranty Bond", "As-Built Electrical & Plumbing Drawings", "Occupancy Handover Key & Dossier"],
    duration: "Milestone-Based Execution"
  }
];

export default function InteractiveProcessTabs() {
  const [activeStage, setActiveStage] = useState(0);
  const current = stages[activeStage];

  return (
    <div>
      {/* Stage Selectors */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--line)", border: "1px solid var(--line)", marginBottom: "30px" }}>
        {stages.map((stage, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={stage.num}
              type="button"
              onClick={() => setActiveStage(idx)}
              style={{
                padding: "clamp(16px, 2.5vw, 28px)",
                background: isActive ? "var(--ground-elevated)" : "var(--ground)",
                border: "none",
                borderTop: isActive ? "3px solid var(--accent)" : "3px solid transparent",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <span className="mono-tag" style={{ color: isActive ? "var(--accent)" : "var(--muted)", fontWeight: 700 }}>
                  STAGE {stage.num}
                </span>
                <span className="mono-tag" style={{ fontSize: "0.68rem" }}>{stage.duration}</span>
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: isActive ? "var(--ink)" : "var(--muted)", letterSpacing: "-0.015em" }}>
                {stage.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Breakdown Panel */}
      <div style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", padding: "clamp(24px, 4vw, 44px)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--line)", paddingBottom: "18px", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
          <div>
            <span className="mono-tag" style={{ color: "var(--accent)", marginBottom: "4px", display: "block" }}>
              STAGE {current.num} SPECIFICATION BREAKDOWN
            </span>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              {current.title}
            </h3>
          </div>
          <span className="mono-tag" style={{ color: "var(--ink)", border: "1px solid var(--line)", padding: "6px 12px" }}>
            ESTIMATED TIMELINE: {current.duration}
          </span>
        </div>

        <p style={{ fontSize: "1.1rem", color: "var(--ink-secondary)", lineHeight: "1.65", marginBottom: "32px", maxWidth: "880px" }}>
          {current.lead}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: " clamp(24px, 4vw, 48px)" }}>
          {/* Scope Checklist */}
          <div>
            <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "14px" }}>
              DISCIPLINARY SCOPE OF WORK
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {current.scope.map((item, i) => (
                <li key={i} style={{ fontSize: "0.92rem", color: "var(--ink)", display: "flex", alignItems: "baseline", gap: "10px" }}>
                  <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hard Deliverables */}
          <div style={{ background: "var(--ground)", border: "1px solid var(--line)", padding: "24px" }}>
            <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "12px" }}>
              CLIENT DELIVERABLES & SIGN-OFFS
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
              {current.deliverables.map((del, i) => (
                <li key={i} style={{ fontSize: "0.85rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "var(--accent)" }}>✓</span>
                  <span>{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

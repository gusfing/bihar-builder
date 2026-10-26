"use client";

import { useState } from "react";
import Link from "next/link";

interface BOQScenario {
  id: string;
  name: string;
  scale: string;
  timeline: string;
  description: string;
  breakdown: {
    category: string;
    specification: string;
    sharePercent: number;
  }[];
}

const scenarios: BOQScenario[] = [
  {
    id: "residential-villa",
    name: "Luxury Independent Villa",
    scale: "Approx. 4,200 sq.ft G+2",
    timeline: "10–12 Months Handover",
    description: "Full turnkey architectural and civil execution with earthquake-resistant RCC frame, Italian marble flooring, and custom teak joinery.",
    breakdown: [
      { category: "Structural Civil Core", specification: "M25 Grade Concrete, Primary Tata/Jindal Fe 550D TMT, Soil Stabilization", sharePercent: 38 },
      { category: "Brickwork & Insulation", specification: "First-Class Red Clay Bricks, Cavity Wall Insulation, Waterproof Plaster", sharePercent: 16 },
      { category: "Architectural Finishes", specification: "Imported Travertine/Marble, Thermal Glazing, Teak Slat Facade", sharePercent: 24 },
      { category: "MEP & Electrical", specification: "Finolex/Havells Concealed Conduit, Kohler/Jaquar Plumbing, Solar Prep", sharePercent: 14 },
      { category: "Architectural Oversight", specification: "Daily Site Supervision by Ar. Imran Ahmad's Team, Cube Testing Reports", sharePercent: 8 }
    ]
  },
  {
    id: "commercial-complex",
    name: "Commercial Complex & Retail",
    scale: "Approx. 15,000 sq.ft G+4",
    timeline: "14–16 Months Handover",
    description: "High footfall commercial shopping and office complex with high clear heights, high-speed elevator shafts, and heavy structural load capacity.",
    breakdown: [
      { category: "Heavy Civil Frame", specification: "Raft Foundation, Seismic Zone V Shear Core, M30 Ready-Mix Concrete", sharePercent: 44 },
      { category: "Facade & Glazing", specification: "DGU Acoustic Curtain Wall, Aluminum Composite Panel (ACP) Accents", sharePercent: 20 },
      { category: "Public Common Areas", specification: "Anti-Skid Granite Flooring, Automated Fire Sprinklers, High-Bay Lighting", sharePercent: 15 },
      { category: "HVAC & Electrical HT", specification: "Dual Backup Diesel Gen-Set Lines, Central Chiller Ducting Conduits", sharePercent: 14 },
      { category: "Structural BOQ Audit", specification: "Certified Third-Party NDT Testing & Structural Stability Certification", sharePercent: 7 }
    ]
  },
  {
    id: "hospital-facility",
    name: "Hospital & Medical Infrastructure",
    scale: "Approx. 28,000 sq.ft Multispecialty",
    timeline: "18 Months Handover",
    description: "Engineered specifically for NABH medical standards, vibration-free imaging suites, positive pressure operating theatres, and antimicrobial wall surfaces.",
    breakdown: [
      { category: "Medical-Grade RCC", specification: "Vibration-Isolated Foundation for MRI/CT, High-Density Lead-Lined Walls", sharePercent: 40 },
      { category: "Cleanroom & OT Finishes", specification: "Seamless Anti-Bacterial Vinyl, Hermetically Sealed OT Doors", sharePercent: 22 },
      { category: "Medical Gas Pipeline (MGPS)", specification: "Oxygen, Vacuum, Nitrous Oxide Pipeline Reticulation System", sharePercent: 18 },
      { category: "Emergency Power & HVAC", specification: "HEPA Filtration System, 100% Uninterrupted Power Redundancy", sharePercent: 14 },
      { category: "Statutory Healthcare Audits", specification: "Fire NOC, Atomic Energy Regulatory Board (AERB) Shielding Clearance", sharePercent: 6 }
    ]
  },
  {
    id: "peb-godown",
    name: "Industrial PEB Godown / Shed",
    scale: "Approx. 20,000 sq.ft Clear-Span",
    timeline: "4–6 Months Handover",
    description: "High-yield agro-storage godown with clear span steel trusses, laser-leveled Tremix VDF industrial flooring, and heavy truck docking aprons.",
    breakdown: [
      { category: "Pre-Engineered Steel (PEB)", specification: "High-Tensile 345 MPa Primary Portal Frames, Zincalume Roof Sheeting", sharePercent: 48 },
      { category: "Laser Tremix VDF Flooring", specification: "M25 Reinforced Concrete with Hardener, 5 Ton/sq.m Load Capacity", sharePercent: 26 },
      { category: "Boundary & Heavy Aprons", specification: "Peripheral Brickwork Plinth Wall, Reinforced Heavy Truck Aprons", sharePercent: 14 },
      { category: "Ventilation & Drainage", specification: "Ridge Turbovents, Heavy Rain Gutters with Sump Discharge Channels", sharePercent: 8 },
      { category: "Certified Erection Quality", specification: "High-Strength Torque-Checked Bolt Fastenings, Ultrasonic Weld Testing", sharePercent: 4 }
    ]
  }
];

export default function InteractiveBOQPreview() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("residential-villa");

  const current = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  return (
    <div className="boq-widget-plate">
      {/* Scope Selector Header */}
      <div className="boq-header">
        <div>
          <span className="boq-overtitle">Cost Transparency Guarantee</span>
          <h3 className="boq-main-title">Itemized BOQ Cost Engineering Matrix</h3>
          <p className="boq-intro-text">
            Bihar Builders eliminates unexpected budget escalations. Below is how Ar. Imran Ahmad breaks down every project into scientific line items before construction starts.
          </p>
        </div>

        {/* Buttons to switch typology */}
        <div className="boq-pills-row">
          {scenarios.map(sc => (
            <button
              key={sc.id}
              onClick={() => setActiveScenarioId(sc.id)}
              className={`boq-pill-btn ${sc.id === activeScenarioId ? "active" : ""}`}
              type="button"
            >
              {sc.name}
            </button>
          ))}
        </div>
      </div>

      {/* Breakdown Display */}
      <div className="boq-body-grid">
        {/* Left Side: Summary Card */}
        <div className="boq-summary-card">
          <div className="boq-typology-title">{current.name}</div>
          <div className="boq-badge-meta">{current.scale}</div>
          <div className="boq-timeline-row">
            <span className="boq-label">Estimated Delivery:</span>
            <span className="boq-val">{current.timeline}</span>
          </div>
          <p className="boq-scenario-desc">
            {current.description}
          </p>

          <div className="boq-pledge-box">
            <div className="boq-pledge-title">Our Locked Rate Contract:</div>
            <p className="boq-pledge-desc">
              Once Ar. Imran Ahmad calculates the itemized Bill of Quantities (BOQ), all material unit rates and labour margins are legally locked. You never pay unexpected surcharges.
            </p>
          </div>

          <div style={{ marginTop: "20px" }}>
            <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Request Custom BOQ for Your Land &rarr;
            </Link>
          </div>
        </div>

        {/* Right Side: Scientific Material Allocation */}
        <div className="boq-items-table">
          <div className="boq-table-header">
            <span>Engineering Discipline &amp; Material Grade</span>
            <span>Budget Allocation</span>
          </div>

          <div className="boq-rows-container">
            {current.breakdown.map((row, idx) => (
              <div key={idx} className="boq-row-item">
                <div className="boq-row-top">
                  <span className="boq-row-name">{row.category}</span>
                  <span className="boq-row-percent">{row.sharePercent}% of Build</span>
                </div>
                <div className="boq-row-spec">{row.specification}</div>
                {/* Visual Bar Indicator */}
                <div className="boq-bar-bg">
                  <div
                    className="boq-bar-fill"
                    style={{ width: `${row.sharePercent * 1.8}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="boq-table-footer">
            <span>All materials verified through laboratory cube test reports &amp; mill test certificates (MTC).</span>
          </div>
        </div>
      </div>
    </div>
  );
}

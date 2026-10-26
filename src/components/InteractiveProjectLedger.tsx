"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectData {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
  specs: string[];
}

const projects: ProjectData[] = [
  {
    id: "river-view-villa",
    title: "River View Villa",
    category: "Luxury Residential Architecture",
    location: "Bhagalpur, Bihar",
    year: "2024",
    description: "Perched near the banks of the River Ganga, this estate features expansive cantilevered decks, panoramic glass walls, and native stone facade masonry.",
    image: "/images/river_villa.jpg",
    specs: ["5,200 sq.ft. Built-Up Area", "Cantilevered Glulam Decks", "Zone V Seismic RCC Core", "Vastu Riverfront Orientation"]
  },
  {
    id: "courtyard-bungalow",
    title: "Courtyard Bungalow",
    category: "Brutalist Residential Architecture",
    location: "Muzaffarpur, Bihar",
    year: "2023",
    description: "An urban residence designed around an open-to-sky central courtyard that infuses natural daylight into every room while preserving serene acoustic privacy.",
    image: "/images/courtyard_house.jpg",
    specs: ["Landscaped Water Courtyard", "Terracotta Perforated Jali", "Exposed Concrete Slabs", "Passive Climate Cooling"]
  },
  {
    id: "green-oasis",
    title: "Green Oasis Residence",
    category: "Sustainable Modern Residence",
    location: "Patna, Bihar",
    year: "2023",
    description: "A flagship modern eco-residence that seamlessly blends natural greenery with contemporary structural geometry, solar harvesting, and thermal glazing.",
    image: "/images/hero_architecture.jpg",
    specs: ["3,800 sq.ft. Living Space", "Smart Home Automation", "Rainwater Harvesting Pit", "Bespoke Modular Millwork"]
  },
  {
    id: "apex-commercial",
    title: "Apex Commercial Hub",
    category: "Commercial Civil Construction",
    location: "Araria, Bihar",
    year: "2022",
    description: "A 4-storey commercial shopping complex featuring a double-height retail atrium, underground customer parking, and post-tensioned slabs.",
    image: "/images/hero_architecture.jpg",
    specs: ["18,000 sq.ft. Retail Floor Space", "Heavy Post-Tensioned Slabs", "Capsule Elevator Shaft", "NBC 2016 Fire Sprinkler Grid"]
  },
  {
    id: "lifeline-clinic",
    title: "Lifeline Specialty Clinic",
    category: "Hospital Architecture & OT Planning",
    location: "Kishanganj, Bihar",
    year: "2023",
    description: "A 50-bed multispecialty hospital planned with sterile surgical corridors, radiation-shielded digital X-ray suite, and trauma emergency bays.",
    image: "/images/courtyard_house.jpg",
    specs: ["NABH Guidelines Compliant", "Laminar Airflow Operating Suites", "Dual Medical Gas Risers", "Barium Radiation Shielding"]
  }
];

export default function InteractiveProjectLedger() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeProject = projects[activeIdx];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "clamp(30px, 4vw, 60px)", alignItems: "start" }}>
      {/* Project Rows Table */}
      <div className="project-ledger">
        {projects.map((proj, idx) => {
          const isActive = activeIdx === idx;
          return (
            <div
              key={proj.id}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(idx)}
              className="ledger-row"
              style={{
                cursor: "pointer",
                backgroundColor: isActive ? "var(--ground-elevated)" : "transparent",
                borderLeft: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                paddingLeft: isActive ? "16px" : "8px",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <span className="ledger-num" style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}>
                0{idx + 1}
              </span>
              <div>
                <div className="ledger-title" style={{ color: isActive ? "var(--ink)" : "var(--ink-secondary)" }}>
                  {proj.title}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--muted)", marginTop: "2px" }}>
                  📍 {proj.location}
                </div>
              </div>
              <span className="ledger-typology">
                {proj.category}
              </span>
              <span className="ledger-year">
                [{proj.year}]
              </span>
              <span className="ledger-arrow" style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}>
                ↗
              </span>
            </div>
          );
        })}

        <div style={{ paddingTop: "24px" }}>
          <Link href="/projects" className="btn btn-outline" style={{ fontSize: "0.78rem" }}>
            View Complete 150+ Project Archive ↗
          </Link>
        </div>
      </div>

      {/* Floating Dynamic Architectural Showcase Stage */}
      <div style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", position: "sticky", top: "120px" }}>
        {/* Visual Preview */}
        <div style={{ position: "relative", width: "100%", height: "300px", overflow: "hidden" }}>
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,13,14,0.95) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: "16px", left: "20px", right: "20px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <span className="mono-tag" style={{ color: "var(--accent)", fontSize: "0.7rem", marginBottom: "4px", display: "block" }}>
                SELECTED ARCHITECTURAL WORK
              </span>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em" }}>
                {activeProject.title}
              </h3>
            </div>
            <span className="mono-tag" style={{ color: "#ffffff", background: "rgba(0,0,0,0.6)", padding: "4px 8px" }}>
              [{activeProject.year}]
            </span>
          </div>
        </div>

        {/* Spec Card Details */}
        <div style={{ padding: "24px" }}>
          <p style={{ fontSize: "0.92rem", color: "var(--muted)", lineHeight: "1.6", marginBottom: "20px" }}>
            {activeProject.description}
          </p>

          <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "10px" }}>
            STRUCTURAL HIGHLIGHTS
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px", marginBottom: "24px" }}>
            {activeProject.specs.map((spec, i) => (
              <li key={i} style={{ fontSize: "0.84rem", color: "var(--ink-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>—</span>
                <span>{spec}</span>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn btn-primary" style={{ width: "100%", padding: "10px", fontSize: "0.8rem" }}>
            Inquire About Similar Typology ↗
          </Link>
        </div>
      </div>
    </div>
  );
}

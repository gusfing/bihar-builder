"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectDossier {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  typology: string;
  image: string;
  spatialStory: string;
  specs: {
    foundation: string;
    seismicRating: string;
    materials: string;
    climatology: string;
    boqStatus: string;
  };
}

const dossiers: ProjectDossier[] = [
  {
    id: "river-villa",
    title: "River View Villa",
    subtitle: "Cantilevered Ganga Waterfront Estate",
    location: "Near Bhagalpur, Bihar",
    year: "2024",
    typology: "Private Residential Estate",
    image: "/images/river_villa.jpg",
    spatialStory:
      "Perched on an elevated plateau overlooking the River Ganga, this estate uses deep cantilevered teak decks and floor-to-ceiling panoramic thermal glass to embrace sweeping water views while shielding interior living spaces from western summer heat.",
    specs: {
      foundation: "Deep Bored Cast-in-Situ Concrete Piles (14m into alluvial strata)",
      seismicRating: "IS 1893:2016 Zone V Compliant / Ductile Detailing IS 13920",
      materials: "Native Chiseled Sandstone Facade, Exposed M30 RCC, Seasoned Teak",
      climatology: "North-East Living Axis harnessing river breezes with cross-ventilation",
      boqStatus: "Zero Budget Escalation — Handover executed strictly on locked BOQ rates"
    }
  },
  {
    id: "courtyard-bungalow",
    title: "The Courtyard Bungalow",
    subtitle: "Passive Thermal Cooling Urban Residence",
    location: "Muzaffarpur, Bihar",
    year: "2023",
    typology: "Contemporary Urban Villa",
    image: "/images/courtyard_house.jpg",
    spatialStory:
      "A sanctuary of quietude planned around a central landscaped open-to-sky courtyard with custom terracotta jali brick screens. Induces natural stack-effect buoyancy ventilation that cools interior chambers by up to 5°C without energy consumption.",
    specs: {
      foundation: "Reinforced Concrete Raft Foundation with crystalline waterproofing",
      seismicRating: "NBC 2016 Seismic Zone IV/V Dual Shear Wall Frame",
      materials: "Local Kiln Terracotta Jali, Fluted Lime Plaster, Teak Joinery",
      climatology: "Central courtyard micro-climate with native shade trees and rain catch",
      boqStatus: "Completed 18 days ahead of schedule within itemized BOQ capital allocation"
    }
  },
  {
    id: "green-oasis",
    title: "Green Oasis Pavilion",
    subtitle: "Sustainable Living Residence",
    location: "Patna, Bihar",
    year: "2023",
    typology: "Modern Eco-Residence",
    image: "/images/hero_architecture.jpg",
    spatialStory:
      "A flagship contemporary residence uniting board-formed architectural concrete with native stone masonry. Features double-height living volumes opening into reflection ponds, rooftop solar integration, and groundwater recharge pits.",
    specs: {
      foundation: "Continuous Isolated Footings with Grade Beams on stabilized soil",
      seismicRating: "IS 1893:2016 Zone IV High Ductility Moment Resisting Frame",
      materials: "Fair-Faced Board-Formed Concrete, Hand-Dressed Stone, Insulated Glass",
      climatology: "Deep overhangs (2.4m cantilever) blocking high summer sun paths",
      boqStatus: "Itemized Bill of Quantities certified by Chartered Quantity Surveyor"
    }
  }
];

export default function InteractiveProjectDossier() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"visual" | "specs">("visual");

  const project = dossiers[activeIdx];

  return (
    <div className="dossier-wrapper">
      {/* Project Selector Tabs */}
      <div className="dossier-nav-bar">
        <div className="dossier-tabs-list">
          {dossiers.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`dossier-tab-btn ${idx === activeIdx ? "active" : ""}`}
              type="button"
            >
              <span className="dossier-tab-num">0{idx + 1}</span>
              <span className="dossier-tab-title">{item.title}</span>
            </button>
          ))}
        </div>

        {/* View Mode Toggle Switch */}
        <div className="dossier-mode-toggle">
          <button
            onClick={() => setViewMode("visual")}
            className={`dossier-mode-btn ${viewMode === "visual" ? "active" : ""}`}
            type="button"
          >
            Spatial View
          </button>
          <button
            onClick={() => setViewMode("specs")}
            className={`dossier-mode-btn ${viewMode === "specs" ? "active" : ""}`}
            type="button"
          >
            Structural &amp; BOQ Dossier
          </button>
        </div>
      </div>

      {/* Main Showcase Plate */}
      <div className="dossier-stage-plate">
        {/* Left Side: Dynamic Display (Image or Technical Ledger) */}
        <div className="dossier-visual-pane">
          {viewMode === "visual" ? (
            <div className="dossier-image-holder">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
                priority
              />
              <div className="dossier-image-badge">
                <span>{project.location}</span>
                <span className="dossier-dot">&bull;</span>
                <span>Completed {project.year}</span>
              </div>
            </div>
          ) : (
            <div className="dossier-specs-table">
              <div className="dossier-specs-header">
                <span className="dossier-specs-label">Structural Engineering &amp; Material Ledger</span>
                <span className="dossier-specs-cert">NBC 2016 / IS 1893:2016 Certified</span>
              </div>

              <div className="dossier-specs-grid">
                <div className="dossier-spec-row">
                  <div className="dossier-spec-k">Subsurface Foundation</div>
                  <div className="dossier-spec-v">{project.specs.foundation}</div>
                </div>
                <div className="dossier-spec-row">
                  <div className="dossier-spec-k">Seismic Design Standard</div>
                  <div className="dossier-spec-v">{project.specs.seismicRating}</div>
                </div>
                <div className="dossier-spec-row">
                  <div className="dossier-spec-k">Primary Noble Materials</div>
                  <div className="dossier-spec-v">{project.specs.materials}</div>
                </div>
                <div className="dossier-spec-row">
                  <div className="dossier-spec-k">Climatological Strategy</div>
                  <div className="dossier-spec-v">{project.specs.climatology}</div>
                </div>
                <div className="dossier-spec-row">
                  <div className="dossier-spec-k">Cost &amp; BOQ Governance</div>
                  <div className="dossier-spec-v dossier-highlight">{project.specs.boqStatus}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Architectural Commentary */}
        <div className="dossier-narrative-pane">
          <div className="dossier-eyebrow">{project.typology}</div>
          <h3 className="dossier-project-title">{project.title}</h3>
          <div className="dossier-project-sub">{project.subtitle}</div>

          <p className="dossier-story-p">
            {project.spatialStory}
          </p>

          <div className="dossier-meta-card">
            <div className="dossier-meta-item">
              <span className="dossier-meta-label">Location</span>
              <span className="dossier-meta-val">{project.location}</span>
            </div>
            <div className="dossier-meta-item">
              <span className="dossier-meta-label">Execution</span>
              <span className="dossier-meta-val">Architectural Design &amp; Turnkey Build</span>
            </div>
            <div className="dossier-meta-item">
              <span className="dossier-meta-label">Supervision</span>
              <span className="dossier-meta-val">Ar. Imran Ahmad (COA Certified)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";

interface TypologyOption {
  id: string;
  name: string;
  steelPerSqft: number; // kg per sqft
  concretePerSqft: number; // cum per sqft
  durationPer1kSqft: number; // months per 1000 sqft
  baseCostPerSqft: number; // INR
}

const typologies: TypologyOption[] = [
  {
    id: "residential",
    name: "Luxury Residential Villa & Duplex",
    steelPerSqft: 3.8,
    concretePerSqft: 0.045,
    durationPer1kSqft: 1.8,
    baseCostPerSqft: 2200
  },
  {
    id: "commercial",
    name: "Commercial Shopping Complex",
    steelPerSqft: 4.5,
    concretePerSqft: 0.052,
    durationPer1kSqft: 1.4,
    baseCostPerSqft: 2600
  },
  {
    id: "hospital",
    name: "Hospital & Medical OT Facility",
    steelPerSqft: 5.2,
    concretePerSqft: 0.060,
    durationPer1kSqft: 2.2,
    baseCostPerSqft: 3400
  },
  {
    id: "godown",
    name: "Industrial PEB Godown / Warehouse",
    steelPerSqft: 2.8,
    concretePerSqft: 0.035,
    durationPer1kSqft: 0.8,
    baseCostPerSqft: 1450
  },
  {
    id: "interior",
    name: "Complete Luxury Interior Fit-Out",
    steelPerSqft: 0.0,
    concretePerSqft: 0.0,
    durationPer1kSqft: 0.9,
    baseCostPerSqft: 1600
  }
];

export default function StructuralEstimator() {
  const [selectedTypology, setSelectedTypology] = useState<string>("residential");
  const [areaSqft, setAreaSqft] = useState<number>(3500);
  const [finishGrade, setFinishGrade] = useState<"premium" | "ultra">("premium");

  const currentTypology = typologies.find(t => t.id === selectedTypology)!;

  const multiplier = finishGrade === "ultra" ? 1.35 : 1.0;
  const totalCost = Math.round(areaSqft * currentTypology.baseCostPerSqft * multiplier);
  const steelTonnes = ((areaSqft * currentTypology.steelPerSqft) / 1000).toFixed(1);
  const concreteCum = Math.round(areaSqft * currentTypology.concretePerSqft);
  const estimatedMonths = Math.max(4, Math.round((areaSqft / 1000) * currentTypology.durationPer1kSqft));

  const formatLakhs = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(val / 100000).toFixed(1)} Lakhs`;
  };

  return (
    <div style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", padding: "clamp(24px, 4vw, 48px)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--line)", paddingBottom: "18px", marginBottom: "32px", flexWrap: "wrap", gap: "10px" }}>
        <div>
          <span className="mono-tag" style={{ color: "var(--accent)", marginBottom: "4px", display: "block" }}>
            ENGINEERING TOOL // ESTIMATION ENGINE
          </span>
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--ink)" }}>
            Instant Structural & BOQ Budget Estimator
          </h3>
        </div>
        <span className="mono-tag live">
          RATES CALIBRATED FOR BIHAR & DELHI NCR
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: " clamp(30px, 4vw, 60px)", alignItems: "center" }}>
        {/* Controls */}
        <div>
          {/* Typology Select */}
          <div style={{ marginBottom: "24px" }}>
            <label className="mono-tag" style={{ display: "block", marginBottom: "8px" }}>
              01 // SELECT PROJECT TYPOLOGY
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
              {typologies.map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTypology(t.id)}
                  style={{
                    padding: "10px 14px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.78rem",
                    textAlign: "left",
                    cursor: "pointer",
                    border: selectedTypology === t.id ? "1px solid var(--accent)" : "1px solid var(--line)",
                    background: selectedTypology === t.id ? "var(--ground-subtle)" : "var(--ground)",
                    color: selectedTypology === t.id ? "var(--ink)" : "var(--muted)",
                    transition: "all 0.2s ease"
                  }}
                >
                  {selectedTypology === t.id ? "• " : ""}{t.name}
                </button>
              ))}
            </div>
          </div>

          {/* Built-up Area Slider */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
              <label className="mono-tag">02 // ESTIMATED BUILT-UP AREA</label>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 700, color: "var(--accent)" }}>
                {areaSqft.toLocaleString()} SQ. FT.
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={25000}
              step={500}
              value={areaSqft}
              onChange={e => setAreaSqft(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "var(--accent)",
                cursor: "pointer"
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted)", marginTop: "4px" }}>
              <span>1,000 sq.ft. (Compact)</span>
              <span>12,000 sq.ft. (Mid-Scale)</span>
              <span>25,000+ sq.ft. (Commercial/PEB)</span>
            </div>
          </div>

          {/* Finish Grade Toggle */}
          <div>
            <label className="mono-tag" style={{ display: "block", marginBottom: "8px" }}>
              03 // FINISH SPECIFICATION LEVEL
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <button
                type="button"
                onClick={() => setFinishGrade("premium")}
                style={{
                  padding: "12px",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  border: finishGrade === "premium" ? "1px solid var(--accent)" : "1px solid var(--line)",
                  background: finishGrade === "premium" ? "var(--ground-subtle)" : "var(--ground)",
                  color: finishGrade === "premium" ? "var(--ink)" : "var(--muted)"
                }}
              >
                Standard Premium (NBC Grade)
              </button>
              <button
                type="button"
                onClick={() => setFinishGrade("ultra")}
                style={{
                  padding: "12px",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  border: finishGrade === "ultra" ? "1px solid var(--accent)" : "1px solid var(--line)",
                  background: finishGrade === "ultra" ? "var(--ground-subtle)" : "var(--ground)",
                  color: finishGrade === "ultra" ? "var(--ink)" : "var(--muted)"
                }}
              >
                Ultra Luxury (Imported Finishes)
              </button>
            </div>
          </div>
        </div>

        {/* Calculated Results Display */}
        <div style={{ border: "1px solid var(--line)", background: "var(--ground)", padding: "30px" }}>
          <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "6px" }}>
            PRELIMINARY BOQ OUTPUT
          </div>

          <div style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: "4px" }}>
            {formatLakhs(totalCost)}
          </div>
          <div className="mono-tag" style={{ fontSize: "0.72rem", marginBottom: "24px" }}>
            ESTIMATED TURNKEY INVESTMENT RANGE
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", borderTop: "1px solid var(--line)", paddingTop: "18px", marginBottom: "24px" }}>
            {selectedTypology !== "interior" && (
              <>
                <div>
                  <div className="mono-tag" style={{ fontSize: "0.68rem" }}>ESTIMATED TMT 550D</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)" }}>{steelTonnes} Metric Tons</div>
                </div>
                <div>
                  <div className="mono-tag" style={{ fontSize: "0.68rem" }}>CONCRETE M25/M30</div>
                  <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)" }}>{concreteCum} Cu. Meters</div>
                </div>
              </>
            )}
            <div>
              <div className="mono-tag" style={{ fontSize: "0.68rem" }}>TIMELINE TO HANDOVER</div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)" }}>~{estimatedMonths} Months</div>
            </div>
            <div>
              <div className="mono-tag" style={{ fontSize: "0.68rem" }}>CODE COMPLIANCE</div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)" }}>IS 1893:2016 Zone V</div>
            </div>
          </div>

          <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: "1.5", marginBottom: "20px" }}>
            * This estimation represents scientific preliminary modeling. Exact figures are drafted via itemized structural Bill of Quantities (BOQ) following site soil inspection.
          </p>

          <Link href="/contact" className="btn btn-primary" style={{ width: "100%", padding: "12px" }}>
            Request Certified Stamped BOQ ↗
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";

interface ArchSvgProps {
  className?: string;
  size?: number;
  color?: string;
}

// 01. Orthographic Section Elevation (Cantilevered slab & structural columns)
export function SectionElevationSvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <line x1="4" y1="56" x2="60" y2="56" strokeWidth="1.5" />
      <rect x="10" y="50" width="16" height="6" strokeDasharray="2 2" />
      <rect x="38" y="50" width="16" height="6" strokeDasharray="2 2" />
      <line x1="18" y1="50" x2="18" y2="16" />
      <line x1="46" y1="50" x2="46" y2="28" />
      <rect x="12" y="38" width="48" height="3" fill="none" />
      <rect x="6" y="24" width="46" height="3.5" fill="none" />
      <line x1="4" y1="12" x2="34" y2="12" strokeWidth="1.5" />
      <line x1="4" y1="12" x2="8" y2="16" />
      <line x1="34" y1="12" x2="30" y2="16" />
      <circle cx="18" cy="16" r="1.5" fill={color} />
      <circle cx="46" cy="28" r="1.5" fill={color} />
      <line x1="56" y1="24" x2="56" y2="38" strokeDasharray="1 3" />
      <line x1="54" y1="31" x2="58" y2="31" />
    </svg>
  );
}

// 02. Floor Plan & Spatial Circulation Diagram (Drafting walls, door swing, room module)
export function FloorPlanSvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <rect x="6" y="6" width="52" height="52" strokeWidth="1.5" />
      <rect x="9" y="9" width="46" height="46" strokeWidth="0.75" />
      <line x1="28" y1="9" x2="28" y2="40" strokeWidth="1.5" />
      <line x1="28" y1="40" x2="55" y2="40" strokeWidth="1.5" />
      <path d="M 17,9 A 11,11 0 0,1 28,20" strokeDasharray="1.5 2" />
      <line x1="17" y1="9" x2="28" y2="9" />
      <line x1="6" y1="22" x2="6" y2="38" strokeWidth="2.5" />
      <line x1="38" y1="55" x2="48" y2="55" strokeWidth="2.5" />
      <line x1="28" y1="28" x2="28" y2="32" strokeWidth="0.75" />
      <line x1="26" y1="30" x2="30" y2="30" strokeWidth="0.75" />
      <line x1="2" y1="6" x2="6" y2="6" />
      <line x1="2" y1="58" x2="6" y2="58" />
      <line x1="4" y1="6" x2="4" y2="58" strokeWidth="0.75" strokeDasharray="2 3" />
    </svg>
  );
}

// 03. Seismic Zone V Ductile Structural Frame (Column rebar ties & beam cross-sections)
export function SeismicFrameSvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="10" width="48" height="46" strokeWidth="1.5" />
      <rect x="8" y="10" width="8" height="8" fill="none" strokeWidth="1.25" />
      <rect x="48" y="10" width="8" height="8" fill="none" strokeWidth="1.25" />
      <rect x="8" y="48" width="8" height="8" fill="none" strokeWidth="1.25" />
      <rect x="48" y="48" width="8" height="8" fill="none" strokeWidth="1.25" />
      <line x1="16" y1="48" x2="48" y2="18" strokeDasharray="3 3" />
      <line x1="48" y1="48" x2="16" y2="18" strokeDasharray="3 3" />
      <line x1="4" y1="56" x2="20" y2="56" strokeWidth="2" />
      <line x1="44" y1="56" x2="60" y2="56" strokeWidth="2" />
      <circle cx="32" cy="33" r="3" strokeWidth="1" />
      <circle cx="32" cy="33" r="1" fill={color} />
    </svg>
  );
}

// 04. Terracotta Perforated Jali & Passive Climate Ventilation
export function ClimateJaliSvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="8" width="48" height="48" strokeWidth="1.5" />
      <polygon points="20,12 26,18 20,24 14,18" />
      <polygon points="32,12 38,18 32,24 26,18" />
      <polygon points="44,12 50,18 44,24 38,18" />

      <polygon points="20,24 26,30 20,36 14,30" />
      <polygon points="32,24 38,30 32,36 26,30" />
      <polygon points="44,24 50,30 44,36 38,30" />

      <polygon points="20,36 26,42 20,48 14,42" />
      <polygon points="32,36 38,42 32,48 26,42" />
      <polygon points="44,36 50,42 44,48 38,42" />

      <path d="M 58,50 Q 61,32 58,14" strokeDasharray="2 2" />
      <polyline points="56,18 58,14 62,17" />
    </svg>
  );
}

// 05. Travertine & Fluted Timber Joinery Detail
export function JoineryDetailSvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="8" width="16" height="48" strokeWidth="1.5" />
      <line x1="8" y1="24" x2="24" y2="24" />
      <line x1="8" y1="40" x2="24" y2="40" />
      <line x1="28" y1="8" x2="28" y2="56" strokeWidth="0.75" strokeDasharray="1 2" />
      <rect x="32" y="8" width="5" height="48" fill="none" />
      <rect x="39" y="8" width="5" height="48" fill="none" />
      <rect x="46" y="8" width="5" height="48" fill="none" />
      <rect x="53" y="8" width="5" height="48" fill="none" />
      <line x1="32" y1="8" x2="37" y2="13" strokeWidth="0.75" />
      <line x1="39" y1="8" x2="44" y2="13" strokeWidth="0.75" />
      <line x1="46" y1="8" x2="51" y2="13" strokeWidth="0.75" />
      <line x1="53" y1="8" x2="58" y2="13" strokeWidth="0.75" />
    </svg>
  );
}

// 06. Geometric Compass & True North Orientation
export function CompassAzimuthSvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="24" strokeWidth="1" />
      <circle cx="32" cy="32" r="20" strokeWidth="0.5" strokeDasharray="2 3" />
      <polygon points="32,10 36,32 32,28" fill={color} stroke="none" />
      <polygon points="32,10 28,32 32,28" fill="none" strokeWidth="1" />
      <polygon points="32,54 36,32 32,36" fill="none" strokeWidth="1" />
      <polygon points="32,54 28,32 32,36" fill="none" strokeWidth="1" />
      <line x1="12" y1="32" x2="52" y2="32" strokeWidth="0.75" />
      <circle cx="32" cy="32" r="2" fill={color} />
      <text x="32" y="7" textAnchor="middle" fontSize="6" fontWeight="600" fill={color} stroke="none">N</text>
    </svg>
  );
}

// 07. Monumental Hero Architectural Blueprint Vignette (Wide format banner illustration)
export function HeroBlueprintWatermarkSvg({ className = "", color = "rgba(27, 25, 23, 0.08)" }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 520 220"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="square"
      className={className}
      aria-hidden="true"
      style={{ overflow: "visible" }}
    >
      {/* Structural Datum Axis */}
      <line x1="10" y1="190" x2="510" y2="190" strokeWidth="2" />
      {/* Foundation Grid */}
      <line x1="60" y1="190" x2="60" y2="215" strokeDasharray="2 3" />
      <line x1="180" y1="190" x2="180" y2="215" strokeDasharray="2 3" />
      <line x1="320" y1="190" x2="320" y2="215" strokeDasharray="2 3" />
      <line x1="440" y1="190" x2="440" y2="215" strokeDasharray="2 3" />
      <rect x="45" y="210" width="30" height="8" strokeDasharray="1 2" />
      <rect x="165" y="210" width="30" height="8" strokeDasharray="1 2" />
      <rect x="305" y="210" width="30" height="8" strokeDasharray="1 2" />
      <rect x="425" y="210" width="30" height="8" strokeDasharray="1 2" />

      {/* Main Multi-Floor Massing */}
      <rect x="60" y="70" width="260" height="120" />
      {/* Cantilevered Wing */}
      <polygon points="320,70 480,70 480,130 320,130" strokeWidth="1.5" />
      {/* Cantilever Tension Cables */}
      <line x1="320" y1="30" x2="480" y2="70" strokeDasharray="3 3" />
      <line x1="320" y1="30" x2="400" y2="70" strokeDasharray="3 3" />
      {/* Central Roof Tower & Louvers */}
      <rect x="180" y="30" width="140" height="40" strokeWidth="1.5" />
      <line x1="200" y1="40" x2="300" y2="40" />
      <line x1="200" y1="50" x2="300" y2="50" />
      <line x1="200" y1="60" x2="300" y2="60" />

      {/* Floor Slabs */}
      <line x1="60" y1="130" x2="320" y2="130" strokeWidth="2" />
      {/* Thermal Fenestrations / Window Mullions */}
      <rect x="80" y="85" width="35" height="35" />
      <line x1="97" y1="85" x2="97" y2="120" strokeWidth="0.75" />
      <rect x="135" y="85" width="35" height="35" />
      <line x1="152" y1="85" x2="152" y2="120" strokeWidth="0.75" />
      <rect x="340" y="85" width="120" height="35" />
      <line x1="380" y1="85" x2="380" y2="120" strokeWidth="0.75" />
      <line x1="420" y1="85" x2="420" y2="120" strokeWidth="0.75" />

      {/* Drafting Dimension Arc & Coordinates */}
      <path d="M 480,70 A 50,50 0 0,1 480,130" strokeDasharray="2 3" />
      <circle cx="320" cy="70" r="4" fill="none" strokeWidth="1.5" />
      <circle cx="480" cy="70" r="3" fill="currentColor" stroke="none" />
      <circle cx="480" cy="130" r="3" fill="currentColor" stroke="none" />
      <line x1="20" y1="70" x2="50" y2="70" strokeDasharray="2 2" />
      <line x1="20" y1="130" x2="50" y2="130" strokeDasharray="2 2" />
      <line x1="25" y1="70" x2="25" y2="130" strokeWidth="0.75" />
    </svg>
  );
}

// 08. Structural Quantity Estimation / Isometric Cubes (BOQ)
export function QuantitySurveySvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      {/* Isometric Cube 01 (Bottom Left) */}
      <polygon points="20,40 32,33 44,40 32,47" />
      <polygon points="20,40 32,47 32,58 20,51" />
      <polygon points="44,40 32,47 32,58 44,51" />

      {/* Isometric Cube 02 (Top Middle) */}
      <polygon points="20,22 32,15 44,22 32,29" />
      <polygon points="20,22 32,29 32,40 20,33" />
      <polygon points="44,22 32,29 32,40 44,33" />

      {/* Itemized Grid Calculation Lines */}
      <line x1="48" y1="18" x2="58" y2="18" strokeDasharray="1 2" />
      <line x1="48" y1="28" x2="58" y2="28" strokeDasharray="1 2" />
      <line x1="48" y1="38" x2="58" y2="38" strokeDasharray="1 2" />
      <line x1="48" y1="48" x2="58" y2="48" strokeDasharray="1 2" />
      {/* Drafting Checkmark */}
      <polyline points="10,28 14,32 22,20" strokeWidth="1.5" />
    </svg>
  );
}

// 09. Site Topography & Contour Survey (Geotechnical terrain mapping)
export function ContourSurveySvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      {/* Boundary Frame */}
      <rect x="8" y="8" width="48" height="48" strokeWidth="1.5" />
      {/* Topographic Elevation Curves */}
      <path d="M 8,46 Q 24,38 36,44 T 56,40" strokeWidth="1.2" />
      <path d="M 8,34 Q 22,26 38,32 T 56,26" strokeWidth="1.2" />
      <path d="M 12,22 Q 26,14 42,20 T 56,14" strokeWidth="1.2" />
      {/* Bench Mark Crosshair */}
      <circle cx="34" cy="32" r="3" strokeWidth="1" />
      <circle cx="34" cy="32" r="1" fill={color} />
      <line x1="34" y1="26" x2="34" y2="38" strokeWidth="0.75" />
      <line x1="28" y1="32" x2="40" y2="32" strokeWidth="0.75" />
      {/* Spot Elevation Value Text */}
      <text x="44" y="48" fontSize="5" fontWeight="600" fill={color} stroke="none">+42.5m</text>
    </svg>
  );
}

// 10. Turnkey Construction Stamp / Certified Seal
export function ArchitectSealSvg({ className = "", size = 64, color = "currentColor" }: ArchSvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="1.25"
      strokeLinecap="square"
      className={className}
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="26" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="22" strokeWidth="0.75" strokeDasharray="3 2" />
      {/* Center Drafting Triangle */}
      <polygon points="32,18 44,38 20,38" strokeWidth="1.25" fill="none" />
      <circle cx="32" cy="28" r="2" fill={color} />
      <line x1="32" y1="38" x2="32" y2="44" strokeWidth="1.5" />
      <text x="32" y="50" textAnchor="middle" fontSize="4.5" fontWeight="700" letterSpacing="0.1em" fill={color} stroke="none">COA CA/2012</text>
    </svg>
  );
}

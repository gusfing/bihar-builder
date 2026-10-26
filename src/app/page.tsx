import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/data/siteContent";
import SantalInteractiveWorks from "@/components/SantalInteractiveWorks";
import {
  SectionElevationSvg,
  FloorPlanSvg,
  SeismicFrameSvg,
  ClimateJaliSvg,
  JoineryDetailSvg,
  CompassAzimuthSvg,
  HeroBlueprintWatermarkSvg,
  QuantitySurveySvg,
  ContourSurveySvg,
  ArchitectSealSvg,
} from "@/components/ArchitecturalIllustrations";

export default function HomePage() {
  return (
    <>
      {/* 01. SANTALARCH HERO STAGE */}
      <section className="santal-hero-section" id="hero" style={{ position: "relative", overflow: "hidden" }}>
        {/* Floating Subtle Blueprint Watermark Illustration */}
        <div style={{ position: "absolute", right: "2%", top: "8%", width: "min(500px, 45vw)", opacity: 0.5, pointerEvents: "none", zIndex: 0 }}>
          <HeroBlueprintWatermarkSvg />
        </div>

        <div className="santal-container" style={{ position: "relative", zIndex: 1 }}>
          <span className="santal-hero-eyebrow">
            Architectural Studio Built on Uncompromising Precision and Intent
          </span>

          <h1 className="santal-hero-title">
            <span>Architecture</span>
            <span>Shapes Perception</span>
          </h1>

          <div className="santal-hero-subtitle-row">
            <div className="santal-hero-tagline">
              Bold presence. Quiet execution.
            </div>
            <div className="santal-hero-desc">
              Founded and directed by <strong>Ar. Imran Ahmad (B. Arch., Jamia Millia Islamia Central University, New Delhi, 2012)</strong>, Bihar Builders translates spatial vision into structural permanence across Eastern India and the capital region. We unite pure architectural design with certified turnkey civil construction.
            </div>
          </div>

          <div className="santal-hero-meta-bar">
            <span>Scroll to discover</span>
            <span>Studio: Araria HQ &bull; New Delhi &bull; Kishanganj</span>
          </div>

          {/* Monumental Hero Frame */}
          <div className="santal-hero-frame">
            <Image
              src="/images/hero_architecture.jpg"
              alt="Cantilevered Villa Architecture by Bihar Builders"
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              style={{ objectFit: "cover" }}
              priority
            />
            <div className="santal-hero-plaque">
              <div>
                <div className="santal-plaque-title">The Cantilevered Villa &amp; Water Pavilion</div>
              </div>
              <div className="santal-plaque-meta">
                Patna, Bihar &bull; Architecture &amp; Turnkey Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. SANTALARCH THREE TENETS (TRIPTYCH GRID WITH ARCHITECTURAL DRAFTING SVGS) */}
      <section className="santal-tenets-section" id="philosophy">
        <div className="santal-container">
          <div className="santal-tenets-grid">
            {/* Tenet 1 */}
            <div className="santal-tenet-col">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span className="santal-tenet-num">01 / Stance</span>
                <SectionElevationSvg size={48} color="var(--accent)" />
              </div>
              <h2 className="santal-tenet-title">Bold</h2>
              <p className="santal-tenet-p">
                A clear visual position, formed through strength, precision, and emotional gravity — a presence that stays beneath the surface and commands respect without decorative noise.
              </p>
            </div>

            {/* Tenet 2 */}
            <div className="santal-tenet-col">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span className="santal-tenet-num">02 / System</span>
                <SeismicFrameSvg size={48} color="var(--accent)" />
              </div>
              <h2 className="santal-tenet-title">Confident</h2>
              <p className="santal-tenet-p">
                A precise system of decisions, where every structural beam is resolved to NBC 2016 Seismic Zone V standards, creating absolute reliability, cost clarity, and lasting performance.
              </p>
            </div>

            {/* Tenet 3 */}
            <div className="santal-tenet-col">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span className="santal-tenet-num">03 / Presence</span>
                <ClimateJaliSvg size={48} color="var(--accent)" />
              </div>
              <h2 className="santal-tenet-title">Quiet</h2>
              <p className="santal-tenet-p">
                A quiet presence, formed through restraint and spatial balance — architecture that responds to climate, shade, and light, that does not shout, yet continues to resonate across generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03. OUR APPROACH / PHILOSOPHY (4 CORNERSTONES WITH ORTHOGRAPHIC DRAWINGS) */}
      <section className="santal-section">
        <div className="santal-container">
          <div className="santal-approach-header">
            <span className="santal-approach-eyebrow">Our Approach</span>
            <h2 className="santal-approach-statement">
              Inspiration defines direction — engineering secures it.
            </h2>
            <p className="santal-approach-sub">
              We translate architectural vision into physical reality through a structured development methodology under the unbroken direct supervision of Ar. Imran Ahmad.
            </p>
          </div>

          <div className="santal-cornerstones-grid">
            {/* Cornerstone 1 */}
            <div className="santal-cornerstone-cell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">01 / Logic</span>
                <FloorPlanSvg size={42} color="var(--ink)" />
              </div>
              <h3 className="santal-cornerstone-title">Intent Before Image</h3>
              <p className="santal-cornerstone-p">
                Every project begins with a clear architectural direction defined through proportion, hierarchy, sun orientation, and spatial logic. Form must remain coherent under structural and technical evaluation before any aesthetic layer is applied.
              </p>
            </div>

            {/* Cornerstone 2 */}
            <div className="santal-cornerstone-cell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">02 / Structure</span>
                <SeismicFrameSvg size={42} color="var(--ink)" />
              </div>
              <h3 className="santal-cornerstone-title">Engineering as Foundation</h3>
              <p className="santal-cornerstone-p">
                Structural systems, subsurface soil bearing tolerances, and interdisciplinary MEP coordination are resolved early. Architecture must be buildable, rational, and exact — not merely expressive.
              </p>
            </div>

            {/* Cornerstone 3 */}
            <div className="santal-cornerstone-cell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">03 / Materiality</span>
                <JoineryDetailSvg size={42} color="var(--ink)" />
              </div>
              <h3 className="santal-cornerstone-title">Material Intelligence</h3>
              <p className="santal-cornerstone-p">
                Materials are selected for performance, longevity, tactility, and light interaction. Local kiln terracotta jali, native Gangetic sandstone, cast-in-place concrete, and seasoned teak. Every surface must justify its presence structurally and atmospherically.
              </p>
            </div>

            {/* Cornerstone 4 */}
            <div className="santal-cornerstone-cell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">04 / Precision</span>
                <CompassAzimuthSvg size={42} color="var(--ink)" />
              </div>
              <h3 className="santal-cornerstone-title">Detail as Discipline</h3>
              <p className="santal-cornerstone-p">
                Junctions, transitions, alignments, rebar schedules, and finishing tolerances are refined through multiple development stages. Ambiguity and budget variances are eliminated before construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. OUR FEATURED PROJECTS (SIGNATURE AWWWARDS INTERACTIVE WORKS LEDGER) */}
      <section className="santal-section" id="works">
        <div className="santal-container">
          <div className="santal-works-header">
            <div>
              <span className="santal-works-eyebrow">Works Archive</span>
              <h2 className="santal-works-title">Selected Projects</h2>
            </div>
            <div style={{ fontSize: "0.95rem", color: "var(--muted)", maxWidth: "440px" }}>
              Private waterfront residences, thermal courtyard homes, and institutional complexes across Bihar and Delhi NCR. Hover rows to view architectural specs.
            </div>
          </div>

          {/* Interactive Floating Cursor Follower Ledger */}
          <SantalInteractiveWorks />

          {/* Monograph Dual Visual Feature Plates */}
          <div style={{ marginTop: "clamp(60px, 8vw, 100px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(24px, 3.5vw, 48px)" }}>
            <div style={{ position: "relative", border: "1px solid var(--line)", overflow: "hidden" }}>
              <div style={{ position: "relative", height: "420px", width: "100%" }}>
                <Image
                  src="/images/river_villa.jpg"
                  alt="River View Villa Waterfront Architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px 28px", backgroundColor: "var(--ground-card)", borderTop: "1px solid var(--line)" }}>
                <span style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Plate 01 &bull; Waterfront Estate</span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 500, margin: "8px 0 6px", color: "var(--ink)" }}>River View Villa</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", lineHeight: "1.6" }}>
                  Deep bored alluvial pile foundations, cantilevered timber terraces, and floor-to-ceiling thermal envelope glazing facing the River Ganga.
                </p>
              </div>
            </div>

            <div style={{ position: "relative", border: "1px solid var(--line)", overflow: "hidden" }}>
              <div style={{ position: "relative", height: "420px", width: "100%" }}>
                <Image
                  src="/images/courtyard_house.jpg"
                  alt="Courtyard Bungalow Thermal Architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "24px 28px", backgroundColor: "var(--ground-card)", borderTop: "1px solid var(--line)" }}>
                <span style={{ fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600 }}>Plate 02 &bull; Passive Climate Villa</span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 500, margin: "8px 0 6px", color: "var(--ink)" }}>The Courtyard Bungalow</h3>
                <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", lineHeight: "1.6" }}>
                  Central open-to-sky courtyard with perforated terracotta jali, generating passive chimney stack buoyancy cooling throughout summer months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. SERVICES ("WHAT WE DO" WITH ARCHITECTURAL ILLUSTRATIONS) */}
      <section className="santal-section" id="services">
        <div className="santal-container">
          <div className="santal-services-grid">
            <div className="santal-services-bigtitle">
              <span>What</span>
              <span>We Do</span>
              <div style={{ marginTop: "32px", opacity: 0.35 }}>
                <HeroBlueprintWatermarkSvg />
              </div>
            </div>

            <div className="santal-services-list">
              {/* Service 01 */}
              <div className="santal-service-item">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="santal-service-num">01 / Architecture</span>
                  <FloorPlanSvg size={38} color="var(--accent)" />
                </div>
                <h3 className="santal-service-title">Spatial Planning &amp; Architectural Design</h3>
                <p className="santal-service-p">
                  Bespoke residential estates, high-density healthcare infrastructure, commercial complexes, and institutional masterplans. Formulated through climate response, daylight orientation, and Vastu logic.
                </p>
              </div>

              {/* Service 02 */}
              <div className="santal-service-item">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="santal-service-num">02 / Civil</span>
                  <SeismicFrameSvg size={38} color="var(--accent)" />
                </div>
                <h3 className="santal-service-title">Turnkey Civil Construction</h3>
                <p className="santal-service-p">
                  Certified civil execution under direct architect supervision. Engineered for NBC 2016 Seismic Zone V, utilizing primary TMT 550D rebar, batch-mixed concrete, and mandatory laboratory cube compression testing.
                </p>
              </div>

              {/* Service 03 */}
              <div className="santal-service-item">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="santal-service-num">03 / Interiors</span>
                  <JoineryDetailSvg size={38} color="var(--accent)" />
                </div>
                <h3 className="santal-service-title">Interior Architecture &amp; Custom Joinery</h3>
                <p className="santal-service-p">
                  Seamless interior environments designed alongside structural walls. Italian travertine cladding, custom acoustic ceilings, fluted teak wood panelling, and bespoke modular kitchen systems.
                </p>
              </div>

              {/* Service 04 */}
              <div className="santal-service-item">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span className="santal-service-num">04 / Economics</span>
                  <QuantitySurveySvg size={38} color="var(--accent)" />
                </div>
                <h3 className="santal-service-title">Itemized BOQ Cost Engineering</h3>
                <p className="santal-service-p">
                  Scientific line-by-line Bill of Quantities (BOQ) with legally locked rate contracts. Complete capital transparency down to cement bags and steel tonnage, eliminating contractor inflation and budget creep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. PROCESS (THE 6-STAGE FRAMEWORK WITH ARCHITECTURAL BLUEPRINTS) */}
      <section className="santal-section" id="process">
        <div className="santal-container">
          <div className="santal-process-header">
            <span className="santal-process-eyebrow">Process</span>
            <h2 className="santal-process-title">
              Every project is structured through a sequence of clearly defined stages.
            </h2>
          </div>

          <div className="santal-process-grid">
            {/* Stage 1 */}
            <div className="santal-process-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span className="santal-process-num">Stage 01</span>
                <ContourSurveySvg size={34} color="var(--accent)" />
              </div>
              <h3 className="santal-process-name">Strategic Consulting</h3>
              <p className="santal-process-desc">
                We establish the spatial, architectural, and visual direction of the project. Soil bearing analysis, contour surveying, zoning bylaws, and preliminary capital framework.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="santal-process-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span className="santal-process-num">Stage 02</span>
                <CompassAzimuthSvg size={34} color="var(--accent)" />
              </div>
              <h3 className="santal-process-name">Alignment Session</h3>
              <p className="santal-process-desc">
                Functional relationships, circulation, proportions, material language, atmosphere, and key design principles are aligned before detailed technical development begins.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="santal-process-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span className="santal-process-num">Stage 03</span>
                <FloorPlanSvg size={34} color="var(--accent)" />
              </div>
              <h3 className="santal-process-name">Design Foundation</h3>
              <p className="santal-process-desc">
                Spatial organization, Vastu harmony, daylight optimization, and photorealistic 3D external and internal elevation models defining how the building will feel.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="santal-process-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span className="santal-process-num">Stage 04</span>
                <QuantitySurveySvg size={34} color="var(--accent)" />
              </div>
              <h3 className="santal-process-name">Project Development</h3>
              <p className="santal-process-desc">
                Certified structural drawings for NBC 2016 Seismic Zone V, ductile rebar schedules, MEP coordination, and scientific itemized Bill of Quantities with locked rates.
              </p>
            </div>

            {/* Stage 5 */}
            <div className="santal-process-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span className="santal-process-num">Stage 05</span>
                <SeismicFrameSvg size={34} color="var(--accent)" />
              </div>
              <h3 className="santal-process-name">Delivery Support</h3>
              <p className="santal-process-desc">
                Supervised on-site civil casting with certified TMT 550D rebar, concrete cube compression testing reports, and multi-tier crystalline waterproofing.
              </p>
            </div>

            {/* Stage 6 */}
            <div className="santal-process-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span className="santal-process-num">Stage 06</span>
                <ArchitectSealSvg size={34} color="var(--accent)" />
              </div>
              <h3 className="santal-process-name">Turnkey Handover</h3>
              <p className="santal-process-desc">
                Final architectural inspection, statutory completion clearances, waterproofing warranties, and turnkey delivery of the finished structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 07. LEADERSHIP & COMPANY */}
      <section className="santal-section" id="company">
        <div className="santal-container">
          <div className="santal-team-header">
            <span className="santal-team-eyebrow">Company</span>
            <h2 className="santal-team-statement">
              Our studio is united by attention to detail, high standards, and uncompromising expectations of results.
            </h2>
          </div>

          <div className="santal-team-grid">
            {/* Ar. Imran Ahmad */}
            <div className="santal-member-cell">
              <h3 className="santal-member-name">Ar. Imran Ahmad</h3>
              <div className="santal-member-role">Founder &amp; Principal Architect</div>
              <p className="santal-member-desc">
                Graduated from the Faculty of Architecture, Jamia Millia Islamia Central University, New Delhi (2012 Batch). Council of Architecture registered. Over two decades of collective practice leading luxury estates, healthcare complexes, and civic masterplans.
              </p>
            </div>

            {/* Er. S. K. Verma */}
            <div className="santal-member-cell">
              <h3 className="santal-member-name">Er. S. K. Verma</h3>
              <div className="santal-member-role">Chief Structural Engineer</div>
              <p className="santal-member-desc">
                Specialist in IS 1893:2016 Seismic Zone V ductile detailing, deep bored pile foundations in alluvial soil, and pre-engineered steel buildings (PEB).
              </p>
            </div>

            {/* Ar. N. Parveen */}
            <div className="santal-member-cell">
              <h3 className="santal-member-name">Ar. N. Parveen</h3>
              <div className="santal-member-role">Lead Interior Architect</div>
              <p className="santal-member-desc">
                Directs spatial joinery, natural stone curation, acoustic engineering, and bespoke interior architecture for private residences and corporate headquarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 08. STUDIO INQUIRY & THREE OFFICES */}
      <section className="santal-section" style={{ borderBottom: "none" }}>
        <div className="santal-container" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <span className="santal-approach-eyebrow">Initiate Project</span>
          <h2 style={{ fontSize: "var(--t-santal-h2)", fontWeight: 500, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: "20px" }}>
            Discuss Your Architecture or Civil Execution
          </h2>
          <p style={{ fontSize: "1.08rem", color: "var(--ink-secondary)", lineHeight: "1.75", marginBottom: "36px" }}>
            Direct consultation with Ar. Imran Ahmad for luxury private villas, healthcare infrastructure, and commercial edifices in Bihar and Delhi NCR.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="santal-btn-enquire" style={{ padding: "14px 28px", fontSize: "0.92rem", backgroundColor: "var(--ink)", color: "#FFFFFF" }}>
              Request Architectural Consultation &nearr;
            </Link>
            <a href={`tel:${siteData.contact.phones[0].replace(/\s+/g, '')}`} className="santal-btn-enquire" style={{ padding: "14px 28px", fontSize: "0.92rem" }}>
              Call Studio: {siteData.contact.phones[0]}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

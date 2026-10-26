import Link from "next/link";
import { ServiceItem, siteData } from "@/data/siteContent";

interface Props {
  service: ServiceItem;
}

export default function ServiceDetailView({ service }: Props) {
  const relatedServices = siteData.services
    .filter(s => s.category === service.category && s.id !== service.id)
    .slice(0, 4);

  return (
    <div>
      {/* Precision Header */}
      <div className="section" style={{ padding: "40px 0 30px", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "10px" }}>
            <div className="mono-tag">
              <Link href="/" style={{ color: "var(--muted)" }}>STUDIO</Link>
              <span>/</span>
              <Link href="/services" style={{ color: "var(--muted)" }}>DISCIPLINES</Link>
              <span>/</span>
              <span style={{ color: "var(--accent)", textTransform: "uppercase" }}>{service.category}</span>
            </div>
            <span className="mono-tag">REF ID: {service.id.toUpperCase()}</span>
          </div>

          <h1 style={{ fontSize: "var(--t-display)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            {service.title}
          </h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="section">
        <div className="container service-detail-stage">
          {/* Main Column */}
          <div>
            <div style={{ marginBottom: "36px" }}>
              <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "12px" }}>
                DISCIPLINE PROFILE // {service.category.toUpperCase()}
              </div>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.7", color: "var(--ink)", letterSpacing: "-0.01em", marginBottom: "24px" }}>
                {service.fullDescription}
              </p>
            </div>

            {/* Key Engineering Specifications */}
            <div style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", padding: "36px", marginBottom: "36px" }}>
              <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "16px" }}>
                STRUCTURAL & ARCHITECTURAL DELIVERABLES
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {service.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "baseline", gap: "12px", fontSize: "0.95rem", color: "var(--ink-secondary)" }}>
                    <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>0{idx + 1}</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope of Work */}
            <div style={{ marginBottom: "36px" }}>
              <div className="mono-tag" style={{ marginBottom: "14px" }}>
                TYPOLOGIES & SCOPE OF ENGAGEMENT
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {service.scope.map((item, idx) => (
                  <span key={idx} style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", padding: "8px 16px", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--ink)" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Advantages */}
            <div style={{ marginBottom: "36px" }}>
              <div className="mono-tag" style={{ marginBottom: "14px" }}>
                STRATEGIC VALUE & PERFORMANCE
              </div>
              <div className="spec-list-grid">
                {service.benefits.map((b, idx) => (
                  <div key={idx} className="spec-item-box">
                    <strong>Value Metric 0{idx + 1}</strong>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Commitment Callout */}
            <div style={{ border: "1px solid var(--line-strong)", background: "var(--ground-subtle)", padding: "30px" }}>
              <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "8px" }}>
                GOVERNANCE // CODE COMPLIANCE
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: "1.65" }}>
                Every build under {service.title} is directly supervised by certified structural engineers and vetted by Principal Architect Ar. Imran Ahmad. We provide stamped structural calculations, soil bearing validation, and milestone warranties without cost creep.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            {/* Quick Consultation Form */}
            <div style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", padding: "30px" }}>
              <div className="mono-tag" style={{ color: "var(--accent)", marginBottom: "10px" }}>
                PROJECT CONSULTATION
              </div>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                Discuss This Discipline
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "20px" }}>
                Inquire about site visits, architectural drawings, or itemized BOQ estimation.
              </p>
              <form action="/contact" method="GET">
                <input type="hidden" name="service" value={service.title} />
                <div style={{ marginBottom: "14px" }}>
                  <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>YOUR NAME *</label>
                  <input type="text" className="form-input" style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }} placeholder="e.g. Anand Sharma" required />
                </div>
                <div style={{ marginBottom: "14px" }}>
                  <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>PHONE NUMBER *</label>
                  <input type="tel" className="form-input" style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }} placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <label className="mono-tag" style={{ display: "block", marginBottom: "6px" }}>SITE LOCATION / CITY *</label>
                  <input type="text" className="form-input" style={{ background: "var(--ground)", color: "var(--ink)", border: "1px solid var(--line)" }} placeholder="e.g. Araria, Patna, Delhi" required />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Request Consultation ↗
                </button>
              </form>
            </div>

            {/* Direct Studio Desk */}
            <div style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", padding: "26px" }}>
              <div className="mono-tag" style={{ marginBottom: "10px" }}>
                DIRECT ARCHITECTURAL DESK
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                <a href="tel:919911113818" style={{ color: "var(--ink)" }}>
                  T: +91 9911113818
                </a>
                <a href="tel:919911112818" style={{ color: "var(--ink)" }}>
                  T: +91 9911112818
                </a>
                <a href="mailto:ar.imran@outlook.com" style={{ color: "var(--accent)" }}>
                  E: ar.imran@outlook.com ↗
                </a>
              </div>
            </div>

            {/* Related Disciplines */}
            {relatedServices.length > 0 && (
              <div style={{ border: "1px solid var(--line)", background: "var(--ground-elevated)", padding: "26px" }}>
                <div className="mono-tag" style={{ marginBottom: "14px" }}>
                  RELATED DISCIPLINES
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {relatedServices.map(rel => {
                    const path = rel.category === "specialized" 
                      ? `/services/${rel.slug}` 
                      : `/${rel.category}/${rel.slug.replace(`-${rel.category}`, '')}`;
                    return (
                      <li key={rel.id}>
                        <Link href={path} style={{ fontSize: "0.88rem", color: "var(--muted)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span>{rel.title}</span>
                          <span className="mono-tag" style={{ color: "var(--accent)" }}>↗</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}

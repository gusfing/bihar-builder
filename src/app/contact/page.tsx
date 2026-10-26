import Link from "next/link";
import { siteData } from "@/data/siteContent";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import {
  CompassAzimuthSvg,
  ContourSurveySvg,
  ArchitectSealSvg,
  QuantitySurveySvg,
} from "@/components/ArchitecturalIllustrations";

export const metadata: Metadata = {
  title: "Contact & Studio Locations | BIHAR BUILDERS",
  description: "Direct contact with Bihar Builders. Headquarters in Araria, Bihar, capital branch in Malviya Nagar, New Delhi, and Kishanganj regional office. Call +91 9911113818 or email ar.imran@outlook.com.",
};

export default function ContactPage() {
  const { contact } = siteData;

  return (
    <div className="santal-page-wrapper">
      {/* 01. PAGE HERO */}
      <section className="santal-section" style={{ padding: "clamp(56px, 7vw, 96px) 0 clamp(40px, 5vw, 64px)" }}>
        <div className="santal-container">
          <span className="santal-hero-eyebrow">
            Direct Architectural Engagement &bull; Studio Consultation
          </span>
          <h1 className="santal-hero-title">
            <span>Studio Contacts</span>
            <span>&amp; Consultations</span>
          </h1>

          <div className="santal-hero-subtitle-row" style={{ marginBottom: 0, paddingBottom: 0, borderBottom: "none" }}>
            <div className="santal-hero-tagline">
              Plot Inspections, Structural Audits &amp; BOQ Estimates
            </div>
            <div className="santal-hero-desc">
              Schedule an in-person blueprint review, structural consultation, or on-site soil survey across our 3 interconnected studio locations in Bihar and Delhi NCR.
            </div>
          </div>
        </div>
      </section>

      {/* 02. MAIN CONTACT MATRIX & INTAKE FORM */}
      <section className="santal-section" style={{ borderBottom: "none" }}>
        <div className="santal-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "clamp(40px, 6vw, 80px)", alignItems: "start" }}>
            {/* Left Column: The 3 Studio Hubs */}
            <div>
              <span className="santal-approach-eyebrow">Studio Network // Regional Offices</span>
              <h2 className="santal-approach-statement" style={{ fontSize: "clamp(1.8rem, 1.2rem + 1.8vw, 2.8rem)", marginBottom: "36px" }}>
                Connect Directly With Our Architectural Team
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                {/* Araria HQ */}
                <div style={{ border: "1px solid var(--line)", background: "var(--ground-card)", padding: "clamp(28px, 3.5vw, 40px)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                    <span className="santal-cornerstone-index">01 // Headquarters</span>
                    <ContourSurveySvg size={38} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 500, color: "var(--ink)", marginBottom: "8px" }}>
                    Araria, Bihar
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--ink-secondary)", lineHeight: "1.6", marginBottom: "16px" }}>
                    {contact.offices[0].address}
                  </p>
                  <div style={{ fontSize: "0.88rem", color: "var(--ink)", fontWeight: 500 }}>
                    Direct Telephone: <a href={`tel:${contact.offices[0].phone.replace(/\s+/g, '')}`} style={{ color: "var(--accent)" }}>{contact.offices[0].phone}</a>
                  </div>
                </div>

                {/* Delhi Branch */}
                <div style={{ border: "1px solid var(--line)", background: "var(--ground-card)", padding: "clamp(28px, 3.5vw, 40px)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                    <span className="santal-cornerstone-index">02 // Capital Branch</span>
                    <CompassAzimuthSvg size={38} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 500, color: "var(--ink)", marginBottom: "8px" }}>
                    New Delhi
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--ink-secondary)", lineHeight: "1.6", marginBottom: "16px" }}>
                    {contact.offices[1].address}
                  </p>
                  <div style={{ fontSize: "0.88rem", color: "var(--ink)", fontWeight: 500 }}>
                    Direct Telephone: <a href={`tel:${contact.offices[1].phone.replace(/\s+/g, '')}`} style={{ color: "var(--accent)" }}>{contact.offices[1].phone}</a>
                  </div>
                </div>

                {/* Kishanganj Regional */}
                <div style={{ border: "1px solid var(--line)", background: "var(--ground-card)", padding: "clamp(28px, 3.5vw, 40px)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                    <span className="santal-cornerstone-index">03 // Regional Office</span>
                    <QuantitySurveySvg size={38} color="var(--accent)" />
                  </div>
                  <h3 style={{ fontSize: "1.45rem", fontWeight: 500, color: "var(--ink)", marginBottom: "8px" }}>
                    Kishanganj, Bihar
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--ink-secondary)", lineHeight: "1.6", marginBottom: "16px" }}>
                    {contact.offices[2].address}
                  </p>
                  <div style={{ fontSize: "0.88rem", color: "var(--ink)", fontWeight: 500 }}>
                    Direct Telephone: <a href={`tel:${contact.offices[2].phone.replace(/\s+/g, '')}`} style={{ color: "var(--accent)" }}>{contact.offices[2].phone}</a>
                  </div>
                </div>

                {/* Direct Principal Desk Information */}
                <div style={{ borderTop: "1px solid var(--line)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.92rem" }}>
                  <div>
                    <span style={{ color: "var(--muted)" }}>Principal Desk: </span>
                    <a href="mailto:ar.imran@outlook.com" style={{ color: "var(--accent)", fontWeight: 500 }}>
                      ar.imran@outlook.com ↗
                    </a>
                  </div>
                  <div>
                    <span style={{ color: "var(--muted)" }}>Consultation Hours: </span>
                    <span style={{ color: "var(--ink)" }}>{contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Intake Form Plate */}
            <div style={{ border: "1px solid var(--line-strong)", background: "var(--ground-card)", padding: "clamp(32px, 4.5vw, 52px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                <span className="santal-cornerstone-index">Direct Transmission</span>
                <ArchitectSealSvg size={42} color="var(--accent)" />
              </div>

              <h3 style={{ fontSize: "1.6rem", fontWeight: 500, color: "var(--ink)", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                Project Intake Parameters
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--ink-secondary)", marginBottom: "28px", lineHeight: "1.6" }}>
                Submit your site specifications below for a confidential architectural review and itemized BOQ assessment under Ar. Imran Ahmad.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

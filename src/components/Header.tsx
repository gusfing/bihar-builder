"use client";

import { useState } from "react";
import Link from "next/link";
import { siteData } from "@/data/siteContent";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="santal-header">
        <div className="santal-header-inner">
          {/* Brand Wordmark */}
          <Link href="/" className="santal-brand" onClick={closeMenu}>
            <span className="santal-brand-name">BIHAR BUILDERS</span>
            <span className="santal-brand-dot">&bull;</span>
            <span className="santal-brand-sub">STUDIO</span>
          </Link>

          {/* Minimalist Editorial Navigation with Awwwards Letter Roll */}
          <nav className="santal-nav" aria-label="Main Navigation">
            <Link href="/#philosophy" className="santal-nav-link">
              <span className="roll">
                <span>Philosophy</span>
                <span aria-hidden="true">Philosophy</span>
              </span>
            </Link>
            <Link href="/projects" className="santal-nav-link">
              <span className="roll">
                <span>Works</span>
                <span aria-hidden="true">Works</span>
              </span>
            </Link>
            <Link href="/services" className="santal-nav-link">
              <span className="roll">
                <span>Services</span>
                <span aria-hidden="true">Services</span>
              </span>
            </Link>
            <Link href="/#process" className="santal-nav-link">
              <span className="roll">
                <span>Process</span>
                <span aria-hidden="true">Process</span>
              </span>
            </Link>
            <Link href="/company-profile" className="santal-nav-link">
              <span className="roll">
                <span>Company</span>
                <span aria-hidden="true">Company</span>
              </span>
            </Link>
            <Link href="/contact" className="santal-nav-link">
              <span className="roll">
                <span>Contact</span>
                <span aria-hidden="true">Contact</span>
              </span>
            </Link>
          </nav>

          {/* Direct Action */}
          <div className="santal-header-actions">
            <a
              href={`tel:${siteData.contact.phones[0].replace(/\s+/g, "")}`}
              className="santal-call-link hide-mobile"
            >
              {siteData.contact.phones[0]}
            </a>
            <Link href="/contact" className="santal-btn-enquire">
              <span className="roll">
                <span>Enquire ↗</span>
                <span aria-hidden="true">Enquire ↗</span>
              </span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="santal-burger-btn"
              onClick={toggleMenu}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`santal-burger-line ${mobileMenuOpen ? "open" : ""}`} />
              <span className={`santal-burger-line ${mobileMenuOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`santal-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="santal-drawer-inner">
          <div className="santal-drawer-meta">
            <span>BIHAR BUILDERS &bull; NAVIGATION</span>
          </div>

          <nav className="santal-drawer-nav">
            <Link href="/#philosophy" onClick={closeMenu} className="santal-drawer-link">
              <span className="santal-drawer-num">01</span>
              <span>Philosophy</span>
            </Link>
            <Link href="/projects" onClick={closeMenu} className="santal-drawer-link">
              <span className="santal-drawer-num">02</span>
              <span>Selected Works</span>
            </Link>
            <Link href="/services" onClick={closeMenu} className="santal-drawer-link">
              <span className="santal-drawer-num">03</span>
              <span>Services &amp; Scope</span>
            </Link>
            <Link href="/#process" onClick={closeMenu} className="santal-drawer-link">
              <span className="santal-drawer-num">04</span>
              <span>6-Stage Process</span>
            </Link>
            <Link href="/company-profile" onClick={closeMenu} className="santal-drawer-link">
              <span className="santal-drawer-num">05</span>
              <span>Company &amp; Ar. Imran Ahmad</span>
            </Link>
            <Link href="/contact" onClick={closeMenu} className="santal-drawer-link">
              <span className="santal-drawer-num">06</span>
              <span>Contact Studio</span>
            </Link>
          </nav>

          <div className="santal-drawer-footer">
            <div>
              <div className="santal-drawer-label">Direct Studio Contact</div>
              <a
                href={`tel:${siteData.contact.phones[0].replace(/\s+/g, "")}`}
                className="santal-drawer-contact-val"
              >
                {siteData.contact.phones[0]}
              </a>
              <a
                href={`mailto:${siteData.contact.emails[0]}`}
                className="santal-drawer-contact-val"
              >
                {siteData.contact.emails[0]}
              </a>
            </div>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="santal-btn-enquire"
              style={{ textAlign: "center", justifyContent: "center", marginTop: "16px" }}
            >
              Start Architectural Consultation &nearr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

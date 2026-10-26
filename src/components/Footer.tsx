import Link from "next/link";
import { siteData } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="santal-footer" id="contact">
      <div className="santal-container">
        {/* Top Section: Four-Column Architectural Grid */}
        <div className="santal-footer-grid">
          {/* Column 1: Studio Position */}
          <div className="santal-footer-col">
            <div className="santal-footer-eyebrow">Studio Practice</div>
            <p className="santal-footer-p">
              Founded and directed by <strong>Ar. Imran Ahmad (B. Arch., Jamia Millia Islamia Central University, New Delhi, 2012)</strong>, Bihar Builders operates an integrated architectural design and turnkey civil engineering studio across Bihar and Delhi NCR.
            </p>
            <div className="santal-footer-creed">
              &ldquo;Bold presence. Quiet execution.&rdquo;
            </div>
          </div>

          {/* Column 2: Direct Inquiries */}
          <div className="santal-footer-col">
            <div className="santal-footer-eyebrow">Enquiries</div>
            <div className="santal-footer-links">
              <a href="mailto:ar.imran@outlook.com">ar.imran@outlook.com</a>
              <a href="mailto:biharbuilders@yahoo.com">biharbuilders@yahoo.com</a>
              <a href={`tel:${siteData.contact.phones[0].replace(/\s+/g, '')}`}>
                +91 9911113818 (Delhi NCR)
              </a>
              <a href={`tel:${siteData.contact.phones[1].replace(/\s+/g, '')}`}>
                +91 9911112818 (Bihar HQ)
              </a>
              <span className="santal-footer-hours">Monday &ndash; Saturday: 10:00 &ndash; 20:00 IST</span>
            </div>
          </div>

          {/* Column 3: The Three Studio Locations */}
          <div className="santal-footer-col">
            <div className="santal-footer-eyebrow">Studio Locations</div>
            <div className="santal-office-block">
              <div className="santal-office-city">Araria Headquarters</div>
              <div className="santal-office-detail">{siteData.contact.offices[0].address}</div>
            </div>
            <div className="santal-office-block">
              <div className="santal-office-city">New Delhi Branch</div>
              <div className="santal-office-detail">{siteData.contact.offices[1].address}</div>
            </div>
            <div className="santal-office-block">
              <div className="santal-office-city">Kishanganj Regional Office</div>
              <div className="santal-office-detail">{siteData.contact.offices[2].address}</div>
            </div>
          </div>

          {/* Column 4: Quality & Integrity Standards */}
          <div className="santal-footer-col">
            <div className="santal-footer-eyebrow">Standards</div>
            <div className="santal-footer-standards">
              <div><strong>Architectural Council:</strong> COA Certified Architect CA/2012</div>
              <div><strong>Structural Code:</strong> NBC 2016 / IS 1893:2016 Zone V</div>
              <div><strong>Cost Governance:</strong> 100% Itemized BOQ Locked-Rate Contracts</div>
              <div><strong>Steel &amp; Concrete:</strong> Primary Fe 550D TMT / M25&ndash;M30 Concrete</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="santal-footer-bottom">
          <div className="santal-footer-copy">
            &copy; 2005&ndash;2026 Bihar Builders SA &bull; All Rights Reserved &bull; Principal Architect: Ar. Imran Ahmad
          </div>

          <div className="santal-footer-nav">
            <a href="#philosophy">Philosophy</a>
            <a href="#works">Works</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#company">Company</a>
            <Link href="/contact">Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

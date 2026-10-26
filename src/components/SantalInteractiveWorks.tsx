"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkItem {
  id: string;
  num: string;
  title: string;
  typology: string;
  location: string;
  year: string;
  image: string;
  spec: string;
  href: string;
}

const works: WorkItem[] = [
  {
    id: "river-villa",
    num: "01",
    title: "River View Villa",
    typology: "Waterfront Residence",
    location: "Bhagalpur, Bihar",
    year: "2024",
    image: "/images/river_villa.jpg",
    spec: "Cantilevered Teak Decks & Chiseled Ganga Sandstone",
    href: "/projects"
  },
  {
    id: "courtyard-bungalow",
    num: "02",
    title: "The Courtyard Bungalow",
    typology: "Thermal Cooling Villa",
    location: "Muzaffarpur, Bihar",
    year: "2023",
    image: "/images/courtyard_house.jpg",
    spec: "Open-to-Sky Terracotta Jali & Stack Ventilation",
    href: "/projects"
  },
  {
    id: "green-oasis",
    num: "03",
    title: "Green Oasis Pavilion",
    typology: "Sustainable Architecture",
    location: "Patna, Bihar",
    year: "2023",
    image: "/images/hero_architecture.jpg",
    spec: "Board-Formed Concrete, Reflection Pool, Solar Core",
    href: "/projects"
  },
  {
    id: "travertine-studio",
    num: "04",
    title: "Travertine & Teak Studio",
    typology: "Interior Joinery",
    location: "Delhi NCR / Patna",
    year: "2024",
    image: "/images/architectural_interior.jpg",
    spec: "Natural Travertine, Acoustic Timber & Slatted Joinery",
    href: "/services#interior"
  }
];

export default function SantalInteractiveWorks() {
  const [activeItem, setActiveItem] = useState<WorkItem | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [smoothCoords, setSmoothCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse move tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Smooth cursor follower physics (lerp)
  useEffect(() => {
    let animId: number;
    const loop = () => {
      setSmoothCoords((prev) => ({
        x: prev.x + (coords.x - prev.x) * 0.15,
        y: prev.y + (coords.y - prev.y) * 0.15,
      }));
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [coords]);

  return (
    <div
      ref={containerRef}
      className="santal-works-ledger"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setActiveItem(null)}
    >
      {/* Table Header */}
      <div className="santal-ledger-header">
        <span className="santal-col-index">Index</span>
        <span className="santal-col-title">Project &bull; Typology</span>
        <span className="santal-col-loc hide-tablet">Location</span>
        <span className="santal-col-year">Year</span>
        <span className="santal-col-action">Case Study</span>
      </div>

      {/* Rows */}
      <div className="santal-ledger-rows">
        {works.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="santal-ledger-row"
            onMouseEnter={() => setActiveItem(item)}
            onFocus={() => setActiveItem(item)}
            onBlur={() => setActiveItem(null)}
          >
            <div className="santal-col-index">
              <span className="santal-row-num">{item.num}</span>
            </div>

            <div className="santal-col-title">
              <div className="santal-row-name">
                <span className="roll">
                  <span>{item.title}</span>
                  <span aria-hidden="true">{item.title}</span>
                </span>
              </div>
              <div className="santal-row-spec">{item.spec}</div>
            </div>

            <div className="santal-col-loc hide-tablet">
              <span className="santal-row-loc">{item.location}</span>
            </div>

            <div className="santal-col-year">
              <span className="santal-row-year">{item.year}</span>
            </div>

            <div className="santal-col-action">
              <span className="santal-arrow-chip">&nearr;</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Magnetic Image Preview (Awwwards Signature Follower) */}
      <div
        className={`santal-cursor-preview ${activeItem ? "visible" : ""}`}
        style={{
          transform: `translate3d(${smoothCoords.x}px, ${smoothCoords.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {activeItem && (
          <div className="santal-preview-box">
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              fill
              sizes="360px"
              style={{ objectFit: "cover" }}
            />
            <div className="santal-preview-caption">
              <span>{activeItem.title}</span>
              <span>{activeItem.location}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

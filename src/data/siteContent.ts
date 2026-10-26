export interface ServiceItem {
  id: string;
  slug: string;
  category: 'architecture' | 'construction' | 'interior' | 'specialized';
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  scope: string[];
  benefits: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  highlights: string[];
}

export const siteData = {
  company: {
    name: "Bihar Builders",
    tagline: "Quality Construction, Honest Services, Great Value",
    slogan: "Transforming Landscapes, Creating Timeless Spaces",
    established: "2012",
    experienceYears: "20+",
    founder: {
      name: "Ar. Imran Ahmad",
      title: "Principal Architect & Founder",
      qualification: "Bachelor of Architecture (B. Arch.), Jamia Millia Islamia University, New Delhi (2012 Batch)",
      bio: "Imran Ahmad earned his Bachelor of Architecture (B. Arch.) from the prestigious Jamia Millia Islamia Central University, New Delhi in 2012. He commenced his professional architectural journey collaborating with top national and multinational architectural practices across India, leading complex projects in luxury residential developments, five-star hospitality, multispecialty healthcare, high-density commercial complexes, auditoriums, and institutional campuses. Driven by a vision to bring cutting-edge architectural excellence and structural integrity to Eastern India, he established Bihar Builders. Today, Bihar Builders stands as an integrated design-build practice fusing aesthetic ingenuity, rigorous structural engineering, transparent itemized estimation, and turnkey delivery."
    },
    vision: "To surface as the premier, trusted construction and architecture conglomerate in Bihar and Eastern India, maintaining top-tier quality benchmarks, ethical craftsmanship, and delivering sustainable, future-ready infrastructure.",
    mission: "To turn every client's vision into tangible, aesthetically striking, and structurally resilient reality. We place each brick on the foundation of trust, transparent cost management, and client collaboration, ensuring safe job sites and uncompromised excellence.",
    qualityPolicy: "Quality is treated with apex significance. Every structure designed and constructed by Bihar Builders unfailingly exhibits stringent structural safety, premium material selection, meticulous craftsmanship, and compliance with national building codes without exception."
  },

  contact: {
    phones: ["+91 9911113818", "+91 9911112818"],
    emails: ["ar.imran@outlook.com"],
    workingHours: "Monday – Saturday: 10:00 AM – 8:00 PM (Sunday by Appointment)",
    offices: [
      {
        type: "Headquarters / Corporate Office",
        address: "Ward No. 3, Sirsia Kalan, Dunbhadur Chakia, Near Bank of Baroda, Bhargama, Araria, Bihar – 854334",
        city: "Araria, Bihar",
        phone: "+91 9911113818"
      },
      {
        type: "Delhi Branch Office",
        address: "80/21 Ground Floor, Gurudwara Road, Malviya Nagar, New Delhi – 110017",
        city: "New Delhi",
        phone: "+91 9911113818"
      },
      {
        type: "Kishanganj Regional Office",
        address: "Kabir Chowk, Kajlamani Road, Kishanganj, Bihar – 855108",
        city: "Kishanganj, Bihar",
        phone: "+91 9911112818"
      }
    ]
  },

  processes: [
    {
      step: "01",
      title: "Concept & Feasibility",
      description: "Comprehensive site inspection, soil analysis, client briefing, zoning analysis, functional requirement gathering, and preliminary budget framework."
    },
    {
      step: "02",
      title: "Ideation & Architectural Design",
      description: "Development of spatial layouts, Vastu compliance, climate-responsive building orientation, 3D photorealistic architectural visualizations, and elevation styling."
    },
    {
      step: "03",
      title: "Structural Engineering & BOQ Estimation",
      description: "Precise structural analysis, MEP (mechanical, electrical, plumbing) schematics, detailed documentation, itemized Bill of Quantities (BOQ), and transparent cost scheduling."
    },
    {
      step: "04",
      title: "Turnkey Execution & Quality Handover",
      description: "End-to-end on-site civil execution, rigorous safety checks, high-grade material assimilation, interior fit-outs, and timely handover with complete structural warranties."
    }
  ],

  services: [
    // Architecture
    {
      id: "residential-arch",
      slug: "residential-architecture",
      category: "architecture",
      title: "Residential Architecture",
      shortDescription: "Custom luxury villas, duplexes, contemporary urban homes, and eco-sustainable apartments designed for comfort and elegance.",
      fullDescription: "Residential architecture at Bihar Builders is designed to turn your dream home into an inspiring living sanctuary. Our architectural team crafts bespoke layouts that optimize natural daylight, cross-ventilation, and thermal comfort while balancing modern minimalist aesthetics with cultural regional elements. From compact urban plots to expansive luxury farmhouses, we deliver tailored blueprints, 3D structural elevations, and Vastu-aligned floor plans that maximize space efficiency and enhance the homeowner's lifestyle.",
      features: [
        "Vastu-compliant residential floor layouts",
        "Passive solar architecture and natural daylight maximization",
        "Modern elevations with customized stone, wood, and glass elements",
        "Detailed 3D walkthroughs and photorealistic renderings",
        "Structural drawings vetted for seismic safety (Zone IV/V compliance)"
      ],
      scope: ["Independent Villas", "Duplex & Triplex Homes", "Apartment Complexes", "Farmhouses", "Ancestral Home Restorations"],
      benefits: ["Maximized usable square footage", "Reduced electricity consumption through climate-conscious design", "Substantial property appreciation", "Seamless indoor-outdoor connection"]
    },
    {
      id: "commercial-arch",
      slug: "commercial-architecture",
      category: "architecture",
      title: "Commercial Architecture",
      shortDescription: "High-yield commercial complexes, shopping centers, corporate headquarters, and retail spaces engineered for brand presence and heavy footfall.",
      fullDescription: "Our commercial architecture division conceives iconic, high-impact business environments designed to drive commerce and elevate brand visibility. We manage complex zoning requirements, circulation pathways, vertical transportation, facade aesthetics, and compliance with local municipal bylaws. Whether planning a multi-storey shopping plaza, an IT office park, or a mixed-use commercial development in Bihar, our designs blend efficient spatial utilization with striking curb appeal.",
      features: [
        "High-visibility facade engineering and dynamic glazing systems",
        "Optimized customer circulation and footfall flow analysis",
        "Dedicated basement and multi-level parking calculations",
        "Integrated fire safety, HVAC, and disability access compliance",
        "Scalable modular structural grids for flexible retail/office partitions"
      ],
      scope: ["Shopping Malls & Retail Plazas", "Corporate Office Towers", "Commercial Showrooms", "Business Hubs & Coworking Parks"],
      benefits: ["Maximized commercial rental yields", "Enhanced customer dwelling time", "Lower lifecycle maintenance overhead", "Instant civic landmark recognition"]
    },
    {
      id: "hotel-arch",
      slug: "hotel-architecture",
      category: "architecture",
      title: "Hotel & Hospitality Architecture",
      shortDescription: "Boutique hotels, luxury resorts, banquet complexes, and highway motels tailored for exceptional guest journeys and smooth back-of-house operations.",
      fullDescription: "Hospitality architecture demands an exquisite balance between captivating guest experiences and rigorous operational logistics. Bihar Builders crafts hotels and resorts that evoke warmth, luxury, and cultural resonance. We engineer seamless segregation between front-of-house guest circulation (grand lobbies, suites, dining halls) and back-of-house logistics (commercial kitchens, laundry corridors, service elevators, staff lockers), guaranteeing effortless hospitality operations.",
      features: [
        "Distinctive grand reception lobbies and luxury suite layouts",
        "Efficient separation of guest zones from service & supply corridors",
        "Acoustic insulation between rooms, banquet halls, and public lounges",
        "Landscape-integrated resort master planning and swimming pool zones",
        "High-capacity MEP infrastructure designed for 24/7 uptime"
      ],
      scope: ["Boutique & Heritage Hotels", "Highway Motels & Lodges", "Destination Resorts", "Banquet & Convention Centers"],
      benefits: ["Superior guest review scores and loyalty", "Reduced service transit times for staff", "Energy-efficient central plant operations", "Flexible event hosting adaptability"]
    },
    {
      id: "school-arch",
      slug: "school-architecture",
      category: "architecture",
      title: "School & Educational Institution Architecture",
      shortDescription: "Modern schools, university campuses, laboratories, and auditoriums designed for child safety, interactive learning, and collaborative growth.",
      fullDescription: "Educational architecture directly influences pedagogical outcomes and student well-being. Bihar Builders designs schools, colleges, and training academies that stimulate curiosity and provide safe, inclusive learning environments. Our designs incorporate age-appropriate ergonomic spaces, ample natural daylight, acoustic-treated classrooms, modern STEM laboratories, sports pavilions, and safe dispersal corridors conforming to stringent school safety regulations.",
      features: [
        "Child-safe, barrier-free accessible campus architecture",
        "Acoustically engineered smart classrooms and lecture halls",
        "Specialized layouts for physics, chemistry, biology, and robotic labs",
        "Wide corridors, multi-exit stairwells, and secure perimeter zoning",
        "Integrated sports grounds, indoor activity arenas, and open amphitheatres"
      ],
      scope: ["K-12 CBSE/ICSE Schools", "Colleges & Higher Learning Institutes", "Technical Training Centers", "Student Hostels & Campus Dining"],
      benefits: ["Enhanced student focus and cognitive engagement", "Strict compliance with statutory educational boards", "Safe and rapid emergency evacuation routes", "Durable low-maintenance finishes"]
    },
    {
      id: "hospital-arch",
      slug: "hospital-architecture",
      category: "architecture",
      title: "Hospital & Healthcare Architecture",
      shortDescription: "Multispecialty hospitals, diagnostic centers, and clinics planned to minimize infection risks, streamline patient transit, and house heavy medical equipment.",
      fullDescription: "Hospitals represent the most functionally intricate architectural typology. At Bihar Builders, our healthcare architects possess specialized expertise in clinical zoning, sterile containment, and barrier-free patient movement. We plan diagnostic imaging centers (MRI, CT, X-ray radiation shielding), modular operation theatres (OTs) with laminar airflow, ICU units with direct nurse visibility, emergency triage bays, and isolation wings conforming to NABH and international clinical standards.",
      features: [
        "Infection control zoning: Clean, semi-sterile, and ultra-sterile corridors",
        "Structural reinforcement and radiation shielding for diagnostic suites",
        "Central medical gas pipeline (MGPS) routing and uninterrupted power grids",
        "Dedicated emergency ambulance docks with immediate triage access",
        "Touchless sanitary facilities and specialized biomedical waste routes"
      ],
      scope: ["Multispecialty & Super Specialty Hospitals", "Diagnostic Centers & Path Labs", "Trauma Centers & Emergency Clinics", "Eye & Dental Day-Care Hospitals"],
      benefits: ["Reduced hospital-acquired infection (HAI) rates", "Decreased critical transit minutes for doctors and patients", "Hassle-free statutory healthcare accreditations (NABH/NABL)", "Scalable floor plates for future medical technology additions"]
    },

    // Construction
    {
      id: "residential-const",
      slug: "residential-construction",
      category: "construction",
      title: "Residential Building Construction",
      shortDescription: "High-grade civil construction for villas, independent bungalows, and multi-storey housing with certified steel, cement, and turnkey execution.",
      fullDescription: "A home is often a once-in-a-lifetime investment and a cornerstone of family pride. Bihar Builders provides complete turnkey civil construction services in Bihar. From deep foundation excavation, anti-termite soil treatment, earthquake-resistant RCC framed structures, to brick masonry, waterproofing, plastering, and premium finishes, our qualified civil engineers and supervisory team execute every stage with certified testing and photographic progress reports.",
      features: [
        "TMT 550D grade steel and 43/53 grade OPC/PPC certified cement",
        "Precision vibrated RCC slabs, columns, and plinth beams",
        "Multi-layer subterranean waterproofing and chemical terrace treatment",
        "Stringent slump tests and 7-day/28-day concrete cube compressive strength tests",
        "Transparent milestone billing with no surprise hidden costs"
      ],
      scope: ["Individual Luxury Bungalows", "Duplexes & Triplexes", "Multi-Unit Residential Flats", "Housing Societies"],
      benefits: ["Structural longevity exceeding 60+ years", "Damp-free walls with zero seepage guarantee", "On-schedule milestone completion", "Full safety compliance on site"]
    },
    {
      id: "commercial-const",
      slug: "commercial-construction",
      category: "construction",
      title: "Commercial Building Construction",
      shortDescription: "Robust, heavy-load commercial complexes, retail markets, corporate buildings, and institutional edifices built for maximum utility and durability.",
      fullDescription: "Executing commercial construction requires rigorous logistics management, high-volume concrete handling, structural heavy-load capabilities, and strict adhesion to construction deadlines. Bihar Builders utilizes industrial-grade machinery, automated batching plants, steel shuttering systems, and tower cranes to deliver commercial structures across Bihar that stand as benchmarks of durability and engineering integrity.",
      features: [
        "Heavy-load post-tensioned / RCC slab construction",
        "Advanced perimeter retaining walls and deep basement civil works",
        "High-traffic vitrified and industrial epoxy flooring installations",
        "Heavy-duty utility risers for HVAC, electrical transformers, and STP plants",
        "Strict site safety protocols (PPE, scaffolding safety, crane inspections)"
      ],
      scope: ["Shopping Complexes & Bazaars", "Corporate Headquarters", "Commercial Showrooms & Banks", "Mixed-Use Commercial Towers"],
      benefits: ["Rapid structural completion minimizing capital lock-up", "Low ongoing structural maintenance requirements", "High floor load tolerances for heavy merchandise and machinery", "Clear legal occupancy clearances"]
    },
    {
      id: "hotel-const",
      slug: "hotel-construction",
      category: "construction",
      title: "Hotel & Hospitality Construction",
      shortDescription: "Precision civil works and structural builds for hotels, resorts, banquets, and leisure complexes requiring immaculate craftsmanship.",
      fullDescription: "Hospitality construction demands superior acoustic management, high-density MEP coordination, and premium material finishes. Bihar Builders constructs hotels and leisure facilities with meticulous attention to detail, integrating acoustic slab decouplers, expansive column-free banquet spans, durable pool waterproofing, and heavy-duty industrial kitchen foundations.",
      features: [
        "Long-span prestressed girders for column-free grand banquet halls",
        "Acoustic concrete blockwork for supreme inter-room soundproofing",
        "Specialized water retaining structures for swimming pools and water features",
        "Heavy grease-trap and drainage civil construction for central kitchens",
        "Backup generator plant civil enclosures with acoustic baffling"
      ],
      scope: ["Hotels & Luxury Lodges", "Resort Cottages & Villas", "Highway Way-side Plazas", "Large Banquet & Convention Halls"],
      benefits: ["Unrivaled acoustic comfort for hotel patrons", "Zero leak risk in high-end wet areas and pools", "Long-lasting structural resilience under 24/7 commercial occupancy", "Accelerated commercial opening timeline"]
    },
    {
      id: "schools-const",
      slug: "schools-construction",
      category: "construction",
      title: "Schools & College Building Construction",
      shortDescription: "Safe, durable, earthquake-engineered educational campuses, academic blocks, laboratories, and student residences built for generational longevity.",
      fullDescription: "We construct educational infrastructure designed to withstand heavy daily student activity while ensuring absolute safety. Our construction protocols emphasize non-slip safety staircases, wide corridor spans, robust fire exit networks, durable boundary walls, well-ventilated laboratory wings, and reinforced sports complexes built using weather-resistant materials.",
      features: [
        "Reinforced earthquake-resistant concrete framing (IS 1893 standards)",
        "Heavy-duty wear-resistant terrazzo and granite floor installations",
        "Safe rounded-edge wall corners in high-speed pupil transit zones",
        "Reinforced concrete roof decks ready for future vertical floor additions",
        "Weatherproof exterior textured coatings resisting regional climatic extremes"
      ],
      scope: ["Primary & Secondary School Buildings", "College Academic Blocks", "Science & Computer Labs", "Auditoriums & Indoor Stadiums"],
      benefits: ["Maximum physical safety for young students and faculty", "Long-term durability against extreme wear and tear", "Modular design enabling future floor expansions without structural disruption", "Environmentally clean construction methods"]
    },
    {
      id: "hospitals-const",
      slug: "hospitals-construction",
      category: "construction",
      title: "Hospitals & Medical Center Construction",
      shortDescription: "Specialized clinical civil construction with lead-lined imaging enclosures, sterile HVAC ducting infrastructure, and medical gas integration.",
      fullDescription: "Building a hospital is an engineering feat that demands absolute cleanliness, specialized structural provisions, and fail-safe utility installations. Bihar Builders constructs hospitals with high-density concrete walls for radiological protection, anti-microbial epoxy wall coatings, vibration-damped foundation pads for sensitive diagnostics, and redundant emergency utility lines.",
      features: [
        "High-density barium concrete and lead-lined structural shielding for X-ray/CT rooms",
        "Seamless anti-bacterial vinyl and coved wall finishes in surgical zones",
        "Heavy foundation plinths for high-tonnage HVAC chillers and oxygen tanks",
        "Continuous wastewater treatment and biomedical effluent separation plants",
        "Multi-tier earthing systems for sensitive life-support electronics"
      ],
      scope: ["Surgical Hospitals", "Diagnostic Centers", "Specialized Care Clinics", "Emergency Trauma Facilities"],
      benefits: ["Full alignment with atomic energy and medical regulatory boards", "Zero radiological leakage or acoustic contamination", "Continuous operational reliability for life-support machinery", "Effortless sterile sanitation maintenance"]
    },
    {
      id: "godown-structure",
      slug: "godown-structure-construction",
      category: "construction",
      title: "Godown & Industrial PEB Structure Construction",
      shortDescription: "Pre-engineered buildings (PEB), heavy steel godowns, agro-storage warehouses, and logistics hubs built for maximum volume and cost efficiency.",
      fullDescription: "Bihar is rapidly expanding as a major agricultural and logistics hub. Bihar Builders provides turnkey design, fabrication, and erection of Pre-Engineered Steel Buildings (PEB), agro-storage godowns, cold storages, and commercial industrial sheds. We construct large column-free spans, laser-leveled Tremix VDF industrial flooring, high-tensile steel truss framing, insulated roofing sheets, and heavy-duty loading bays.",
      features: [
        "High-tensile structural steel fabrication with anti-corrosive primer coating",
        "Vacuum Dewatered Concrete (VDF / Tremix) industrial heavy-load flooring",
        "Insulated sandwich puff roofing panels for thermal regulation",
        "Elevated truck loading docks with heavy concrete approach ramps",
        "Turbo-ventilators, natural polycarbonate skylight strips, and rain gutter systems"
      ],
      scope: ["Grain & Agro Storage Godowns", "Logistics Warehouses & FMCG Depots", "Manufacturing & Assembly Sheds", "Cold Storage Civil Enclosures"],
      benefits: ["Huge column-free clear floor areas", "Rapid construction speed (up to 40% faster than traditional concrete)", "High floor-load capacity for forklifts and stacked pallets", "Weather-tight, rodent-proof, and fire-resistant storage"]
    },

    // Interior
    {
      id: "residential-int",
      slug: "residential-interior",
      category: "interior",
      title: "Residential Interior & Modular Kitchen",
      shortDescription: "Bespoke home interiors, modular kitchens, luxury wardrobes, false ceilings, and ambient mood lighting tailored to your personality.",
      fullDescription: "Your home's interior is where comfort meets personality. Bihar Builders Interior division transforms ordinary rooms into luxurious, practical sanctuaries. We design and install factory-finished modular kitchens with marine-grade waterproof plywood, custom wardrobes with soft-close German hardware, artistic designer false ceilings, and layered ambient lighting systems that elevate every moment spent at home.",
      features: [
        "100% boiling water-proof (BWP) calibrated plywood modular kitchens",
        "Concealed electrical planning with flush appliance integrations",
        "Designer gypsum false ceilings with warm cove and architectural spot lights",
        "Custom TV media units, vanity counters, and walk-in wardrobe closets",
        "Premium PU, acrylic, laminate, and veneer surface finishes"
      ],
      scope: ["Full Apartment Interiors", "Bespoke Modular Kitchens", "Master Bedroom Suites", "Living & Dining Room Decor", "Kids' Rooms"],
      benefits: ["Flawless factory finish without messy on-site carpentry", "Smart corner pull-outs and 100% space optimization", "Damp and termite-proof cabinetry", "Sophisticated upscale look within designated budget"]
    },
    {
      id: "retails-int",
      slug: "retails-interior",
      category: "interior",
      title: "Retail & Store Interior",
      shortDescription: "High-conversion retail store interiors, display gondolas, point-of-sale desks, and directional lighting that drives product sales.",
      fullDescription: "Retail interiors must capture shopper attention and facilitate seamless browsing. We design retail shop environments that showcase merchandise in its best light. From fashion boutiques and electronics retail to grocery supermarkets, our interior fit-outs optimize customer walking paths, visual merchandising racks, security points, and checkout transaction stations.",
      features: [
        "Merchandise display racks with integrated LED accent profile lights",
        "Custom cashier and point-of-sale checkout counters",
        "Durable, scratch-resistant flooring suited for thousands of footsteps",
        "Strategic customer pathway zoning to expose high-margin products",
        "Modern branding backdrops and storefront window display vitrines"
      ],
      scope: ["Fashion Boutiques", "Supermarkets & Convenience Stores", "Electronics & Gadget Stores", "Jewellery Showrooms"],
      benefits: ["Increased sales conversion and average basket value", "Uncluttered, comfortable browsing experience for shoppers", "Quick fit-out completion reducing store downtime", "Durable materials built for commercial retail abuse"]
    },
    {
      id: "showroom-int",
      slug: "showroom-interior",
      category: "interior",
      title: "Showroom Interior Design",
      shortDescription: "Expansive automobile, ceramic tile, sanitaryware, and furniture showroom interiors with grand showcase lighting and VIP customer lounges.",
      fullDescription: "Showrooms require dramatic scale, spotlight illumination, and sophisticated seating areas where premium purchases are concluded. Bihar Builders crafts showroom interiors with high ceiling clearances, structural turntables or pedestals, glare-free spotlighting, VIP client discussion cabins, and elegant hospitality bars.",
      features: [
        "High-lumen CRI 90+ track lighting for accurate product color rendition",
        "Reinforced floor structures for vehicle displays and heavy machinery",
        "Acoustic glass-partitioned executive consultation and closing cabins",
        "Grand welcome reception lounges with hospitality coffee bars",
        "Digital video wall backdrops and illuminated brand signage"
      ],
      scope: ["Automobile Dealerships", "Sanitaryware & Tile Showrooms", "Luxury Furniture Galleries", "Appliance Display Centers"],
      benefits: ["Prestige brand presentation that justifies premium pricing", "Comfortable, confidential negotiation environments", "Flexible display fixtures easily rearranged for new seasonal launches", "Superior aesthetic curb appeal through glass facades"]
    },
    {
      id: "office-int",
      slug: "office-interior",
      category: "interior",
      title: "Office Interior & Furnishing",
      shortDescription: "Ergonomic corporate workstations, CEO executive suites, acoustic conference rooms, and collaborative breakout zones.",
      fullDescription: "Modern workplaces must foster productivity, talent retention, and brand pride. Bihar Builders delivers comprehensive commercial office fit-outs. We design ergonomic workstation clusters, private executive cabins, video-conference boardrooms with acoustic wall panels, cafeteria spaces, and welcoming reception desks engineered with concealed wire management.",
      features: [
        "Modular ergonomic workstations with built-in power & data raceways",
        "Sound-damped meeting rooms with double-glazed glass partitions",
        "Executive director suites featuring custom veneer desks and private lounges",
        "Biophilic design elements with indoor greenery and natural wood textures",
        "Commercial carpet tiles and acoustic ceiling baffles for noise reduction"
      ],
      scope: ["Corporate Offices", "IT & BPO Facilities", "Banking Branches & Financial Suites", "Coworking Spaces"],
      benefits: ["Measurable boost in employee focus and morale", "Clean wire-free aesthetics with smart cable management", "Impressive corporate setting that instills confidence in visiting clients", "Energy savings via intelligent presence-sensor lighting"]
    },
    {
      id: "hotel-int",
      slug: "hotel-interior",
      category: "interior",
      title: "Hotel & Resort Interior",
      shortDescription: "Opulent hotel lobbies, serene guest suites, themed fine-dining restaurants, and ambient corridors crafted for lasting memory.",
      fullDescription: "The interior ambiance of a hotel defines the guest's hospitality experience. Bihar Builders crafts hotel interiors that exude luxury, serenity, and warmth. From custom upholstered headboards, blackout curtain treatments, luxury ensuite bathrooms with rain showers, to intricately carved lobby reception consoles, we deliver five-star hospitality aesthetics.",
      features: [
        "Custom-manufactured contract hospitality furniture and upholstered beds",
        "Mood-enhancing dimmable lighting scenes for morning, evening, and night",
        "Luxury marble, quartz, and anti-slip tile bathroom fit-outs",
        "Soundproof double-rebated guest room doors with magnetic card locks",
        "Themed all-day dining and specialty restaurant interior decors"
      ],
      scope: ["Hotel Guest Rooms & Suites", "Grand Lobby & Waiting Lounges", "Multi-Cuisine Restaurants & Cafes", "Cocktail Lounges & Bars"],
      benefits: ["Photogenic spaces that generate organic social media promotion", "Heavy-duty commercial fabrics resistant to staining", "Effortless cleaning and maintenance for housekeeping teams", "Consistent luxury brand identity across all touchpoints"]
    },
    {
      id: "spa-int",
      slug: "spa-interior",
      category: "interior",
      title: "Spa & Wellness Interior",
      shortDescription: "Tranquil massage therapy rooms, sauna cabins, aromatic treatment suites, and gentle water features for deep rejuvenation.",
      fullDescription: "Spa architecture and interior design are dedicated to sensory relaxation. We create peaceful wellness environments utilizing warm natural timbers, muted earth tones, soft indirect cove lighting, soothing water cascades, steam & sauna enclosures, and dedicated aromatic therapy chambers with integrated soundscapes.",
      features: [
        "Aromatherapy-compatible ventilation and humidity control systems",
        "Indirect warm amber lighting with zero glare directly over massage beds",
        "Cedar and pine wood dry saunas and waterproof steam bath enclosures",
        "Gentle indoor stone water fountains creating calming acoustic masking",
        "Private changing rooms with heated towel warmers and luxury lockers"
      ],
      scope: ["Luxury Day Spas", "Ayurvedic Treatment Centers", "Hotel Wellness Sanctuaries", "Salon & Beauty Lounges"],
      benefits: ["Instant sensory detachment from outside noise and chaos", "Durable mold-resistant and moisture-resistant building materials", "High guest relaxation and repeat treatment bookings", "Soothing, hygienic sanctuary environment"]
    },
    {
      id: "gym-int",
      slug: "gym-interior",
      category: "interior",
      title: "Gym & Fitness Center Interior",
      shortDescription: "High-energy fitness studios, shock-absorbent rubber flooring, panoramic mirrors, ventilation systems, and motivating lighting.",
      fullDescription: "A gym interior must inspire physical energy, withstand extreme mechanical impacts, and maintain fresh air circulation. Bihar Builders designs dynamic fitness facilities with heavy-duty shock-absorbing rubber tile flooring, floor-to-ceiling distortion-free mirrors, cardio theater zones, crossfit rigs, and modern locker-shower amenities.",
      features: [
        "High-density vulcanized rubber flooring for free-weight drop zones",
        "Floor-to-ceiling safety-backed mirrors with edge LED illumination",
        "High-volume air exchange ventilation to eliminate stale humidity",
        "Industrial chic ceilings with neon accents and motivating graphics",
        "Hygienic locker rooms with digital locks and pressurized showers"
      ],
      scope: ["Commercial Gyms & Fitness Clubs", "Crossfit & Functional Training Boxes", "Yoga & Pilates Studios", "Residential Society Club Gyms"],
      benefits: ["Prevention of floor slab damage from dropped weights", "Zero stale odors through calculated CFM air changes", "Vibrant, motivating workout atmosphere that drives memberships", "Safe, non-slip training zones"]
    },
    {
      id: "banquet-hall-int",
      slug: "banquet-hall-interior",
      category: "interior",
      title: "Banquet Hall & Event Space Interior",
      shortDescription: "Majestic grand chandeliers, acoustic walls, customizable mood lighting, and bridal green rooms for weddings and conventions.",
      fullDescription: "Banquet halls host life's biggest celebrations and milestone corporate galas. Bihar Builders designs majestic event spaces with grand crystal chandeliers, motorized ambient RGBW color-changing lighting arrays, acoustic fabric wall paneling that eliminates echo during DJ performances, luxury bridal green rooms, and expansive stage backdrops.",
      features: [
        "Acoustic fabric wall paneling and acoustic ceiling clouds for crisp audio",
        "DMX-controlled intelligent LED lighting systems for customizable event themes",
        "Grand bridal and VIP dressing suites with luxury private powder rooms",
        "Heavy-duty buffet counters with integrated food warming power points",
        "Wide service doors for discreet catering and banquet furniture staging"
      ],
      scope: ["Wedding Banquet Halls", "Corporate Convention Centers", "Community Function Centers", "Party Lounges & Auditoriums"],
      benefits: ["Exceptional acoustics without ear-piercing echo or reverberation", "Transformable lighting themes to match weddings, birthdays, or corporate summits", "High guest comfort during 500+ person events", "High booking rates through stunning visual appeal"]
    },
    {
      id: "exhibitions-int",
      slug: "exhibitions-interior",
      category: "interior",
      title: "Exhibition & Stall Interior",
      shortDescription: "Custom modular exhibition pavilions, expo booths, and temporary brand showcases engineered for quick setup and maximum footfall.",
      fullDescription: "Exhibition stands must command attention in crowded trade show halls. We build bespoke exhibition pavilions, product display kiosks, and trade expo stalls featuring lightweight modular frames, illuminated graphics, interactive digital kiosks, and welcoming discussion areas.",
      features: [
        "Quick-assembly modular framing systems for rapid expo setup & teardown",
        "Backlit tension fabric lightboxes and high-resolution brand murals",
        "Elevated platform flooring with concealed electrical cable runs",
        "Semi-private meeting pods for business negotiations and contracts",
        "Lockable storage counters for product samples and marketing literature"
      ],
      scope: ["Trade Fair Booths", "Government & Industrial Expo Stalls", "Brand Roadshow Displays", "Mall Activation Kiosks"],
      benefits: ["Maximum brand visibility and attendee footfall", "Quick turnaround within tight venue handover windows", "Reusable components for multiple trade shows across India", "Professional presentation that outshines competitors"]
    },

    // Specialized
    {
      id: "exterior-landscaping",
      slug: "exterior-design-and-landscaping",
      category: "specialized",
      title: "Exterior Design & Soft/Hard Landscaping",
      shortDescription: "Stunning outdoor living spaces, lawn landscaping, stone pathways, boundary facade treatments, and weather-resistant structures.",
      fullDescription: "Having living space outdoors that instigates peace and joy should not be a luxury. At Bihar Builders, our exterior design and landscaping division harmoniously blends hardscaping (stone walkways, gazebos, boundary retaining walls, decorative pergolas, and water fountains) with softscaping (native flowering flora, lush green lawns, shade trees, and vertical green walls). We study your soil and climate carefully to ensure outdoor creations remain lush, functional, and visually captivating through all seasons.",
      features: [
        "Comprehensive landscape master planning with 3D elevation renders",
        "Hardscaping with natural sandstone, granite cobbles, and decorative pavers",
        "Automated drip irrigation and pop-up lawn sprinkler systems",
        "Weatherproof architectural facade enhancements (ACP, HPL louvers, stone cladding)",
        "Atmospheric outdoor garden lighting (bollards, spike lights, underwater pool lights)"
      ],
      scope: ["Private Residential Gardens & Lawns", "Commercial Plaza Courtyards", "Resort Landscape Grounds", "Terrace Gardens & Rooftop Gazebos"],
      benefits: ["Creates an idyllic outdoor asylum away from city noise", "Increases total usable living and entertainment space", "Substantially increases property curb value", "Eco-friendly rainwater retention and micro-climate cooling"]
    },
    {
      id: "estimation-boq",
      slug: "architectural-design-and-estimation",
      category: "specialized",
      title: "Architectural Estimation, BOQ & Cost Scheduling",
      shortDescription: "Precise itemized Bill of Quantities (BOQ), material estimation, schedule of rates, and financial planning that eliminates budget surprises.",
      fullDescription: "Construction budget overruns are the single biggest frustration for property owners. Bihar Builders removes this anxiety through transparent, scientific architectural estimation and detailed Bills of Quantities (BOQ). Our quantity surveyors break down every single component—from steel weight, cement bags, sand cubic feet, brick counts, plumbing fixtures, electrical points, to labor hours. With 20+ years of regional construction knowledge, we give you accurate, dependable project budgets before a single rupee is spent.",
      features: [
        "Itemized Bill of Quantities (BOQ) with detailed specifications",
        "Accurate steel reinforcement bar bending schedules (BBS)",
        "Material consumption forecasting per construction milestone",
        "Cash-flow scheduling aligned with project phase completion",
        "Value-engineering alternatives to reduce costs without compromising safety"
      ],
      scope: ["Pre-Construction Feasibility Budgets", "Detailed Contractor Tender Documents", "Bank Loan & Project Finance Estimations", "Phase-Wise Execution Billing Schedules"],
      benefits: ["Zero surprise mid-construction cost spikes", "Unambiguous transparency between client and builder", "Easy financing approval with bank-certified estimation formats", "Maximum cost efficiency through bulk material planning"]
    }
  ] as ServiceItem[],

  projects: [
    {
      id: "green-oasis",
      title: "Green Oasis Residence",
      category: "Residential Architecture & Construction",
      location: "Patna, Bihar",
      year: "2023",
      description: "A flagship modern eco-residence that seamlessly blends natural greenery with contemporary structural geometry. Incorporates solar harvesting, rainwater recharge, and floor-to-ceiling thermal glazing.",
      highlights: ["3,800 sq.ft. built-up area", "Courtyard micro-climate cooling", "Smart home automated lighting", "Bespoke modular kitchen & interiors"]
    },
    {
      id: "river-view-villa",
      title: "River View Villa",
      category: "Luxury Residential Architecture",
      location: "Near Bhagalpur, Bihar",
      year: "2024",
      description: "Perched gracefully near the banks of the River Ganga, this luxury villa features expansive panoramic cantilevered decks, traditional high-ceiling verandas, and native stone facade cladding.",
      highlights: ["5,200 sq.ft. luxury estate", "Panoramic river-facing glass facade", "Private swimming pool & gazebo", "Vastu-compliant spatial planning"]
    },
    {
      id: "courtyard-bungalow",
      title: "Courtyard Bungalow",
      category: "Residential Architecture & Interior",
      location: "Muzaffarpur, Bihar",
      year: "2023",
      description: "An urban residence designed around an open-to-sky central courtyard that infuses natural daylight into every room while providing serene privacy from bustling city streets.",
      highlights: ["Centrally landscaped courtyard", "Perforated brick jali screen for airflow", "Minimalist teakwood interiors", "Custom lighting accents"]
    },
    {
      id: "commercial-araria",
      title: "Apex Commercial Hub",
      category: "Commercial Construction",
      location: "Araria, Bihar",
      year: "2022",
      description: "A 4-storey commercial shopping complex featuring a double-height retail atrium, underground customer parking, heavy-duty post-tensioned slabs, and modern structural glazing.",
      highlights: ["18,000 sq.ft. commercial floor space", "Seismic Zone V compliant RCC framework", "High-speed capsule elevator", "Integrated fire sprinkler network"]
    },
    {
      id: "kallissery-renovation",
      title: "Kallissery Estate Renovation",
      category: "Renovation & Interior Design",
      location: "Bihar",
      year: "2021",
      description: "Comprehensive structural retrofitting, electrical rewiring, exterior facade modernization, and luxury interior overhaul of an expansive heritage family property.",
      highlights: ["Complete structural strengthening", "Modern modular kitchen addition", "Restoration of original wooden rafters", "Landscape & driveway reconstruction"]
    },
    {
      id: "kishanganj-hospital",
      title: "Lifeline Specialty Clinic",
      category: "Hospital Architecture & Planning",
      location: "Kishanganj, Bihar",
      year: "2023",
      description: "A 50-bed multispecialty hospital planned with sterile surgical corridors, radiation-shielded digital X-ray suite, emergency trauma bay, and oxygen pipeline ducting.",
      highlights: ["NABH guidelines compliant layout", "Dual medical gas pipeline risers", "Barium-dense lead lined diagnostic rooms", "Barrier-free ramp and bed lift access"]
    }
  ],

  testimonials: [
    {
      name: "Dr. A. K. Verma",
      role: "Medical Director, Patna",
      quote: "Ar. Imran and the Bihar Builders team planned and built our medical facility with impeccable precision. Their knowledge of hospital zoning, clean corridors, and statutory regulations saved us months of delay."
    },
    {
      name: "Rajeshwar Prasad Singh",
      role: "Homeowner, Araria",
      quote: "Building a home in Bihar often comes with worries of material theft or cost escalations. Bihar Builders gave us an itemized BOQ on day one and delivered our dream villa with zero cost deviation. Outstanding craftsmanship!"
    },
    {
      name: "Md. Tarique Anwar",
      role: "Commercial Property Investor, Purnea",
      quote: "Our shopping complex built by Bihar Builders stands out as a landmark in the city. The elevation design attracted top retail brands, and the structural quality of the building is second to none."
    },
    {
      name: "Sunita Choudhary",
      role: "Villa Owner, Muzaffarpur",
      quote: "The courtyard bungalow design is a masterpiece. We get natural breeze and sunlight in every corner of our home. Their interior team completed our modular kitchen and bedrooms with flawless factory finishing."
    }
  ]
};

# DESIGN.md — Bihar Builders (Award-Caliber Architectural Direction)

> Inspired by the architectural discipline, quiet monumentality, and Swiss precision of **[santalarch.com](https://santalarch.com/)**, engineered to the standard of **Awwwards Site of the Day**.

---

## Phase 0: Brief

| Parameter | Specification |
|:---|:---|
| **Subject** | **Bihar Builders** — Premier architectural design, structural engineering, and turnkey construction conglomerate founded by **Ar. Imran Ahmad** (B. Arch., Jamia Millia Islamia University, New Delhi, 2012). |
| **Audience** | Discerning residential villa owners, commercial real estate developers, healthcare directors, institutional boards, and institutional clients seeking uncompromising structural integrity and refined modern design in Eastern India and Delhi NCR. |
| **The Site’s Job** | Position Bihar Builders not as an ordinary local contractor, but as a premier, intellectually rigorous architecture and engineering studio with deep regional mastery, absolute transparent cost engineering (BOQ), and award-level spatial design. |
| **Aesthetic Benchmark** | **Santal Architects (`santalarch.com`)**: Monumental architectural typography, generous negative space, austere monochrome/mineral palette, four-corner metadata, sequential numbered project processes, tactile structural textures, and smooth inertia motion. |
| **Stack** | **Next.js 16+ (App Router, Turbopack, TypeScript)** + **GSAP** + **Lenis** (smooth inertia scroll) + Vanilla CSS Design Tokens. |

---

## Phase 1: Concept Exploration & Selection

### The Three Concept Territories

1. **Territory A (The Regional Quarry & Silt): "Gangetic Monolith"**
   - *Idea*: The architecture emerges out of the alluvial earth and stone of Bihar through solid monolithic blocks and negative space carving.
   - *Anchor*: Regional geological soil stabilization, heavy deep foundation engineering, and alluvial brickwork.
   - *Score*: Originality: 3.8/5 | Fit: 4.2/5 | Feasibility: 4.6/5 | Portability: 2.2/5

2. **Territory B (The Blueprint & Precision Engineering): "The T-Square Matrix" (Selected)**
   - *Idea*: A rigorous, high-contrast architectural canvas where technical draftsmanship, millimeter-precise gridlines, and bold editorial photography intersect.
   - *Anchor*: Ar. Imran Ahmad’s Jamia Millia Islamia design methodology, where every line is a structural calculation and every project begins with an itemized Bill of Quantities (BOQ). Borrowing the strict Swiss architectural cadence of `santalarch.com` while grounding it in Indian civic scale.
   - *Signature Moment*: **Interactive Blueprint-to-Reality Curtain Reveal**: Hovering or scrubbing through project frames peels back the finished architectural render/facade to expose the underlying technical CAD wireframe, structural grid coordinates, and engineering specifications.
   - *Emotion*: Authoritative, calm, impeccably orderly, monumental, and trustworthy within the first 3 seconds.
   - *Motion Verb*: **"Glide and Settle"** — Elements move with the measured weight of limestone slabs and architectural tracing vellum, settling precisely onto strict grid baselines with zero jitter.
   - *Screenshot Frame*: The Hero section paused at 50% scroll: the monumental wordmark `BIHAR BUILDERS` pinned behind a cantilevered concrete pavilion, with floating coordinates `[26.1517° N, 87.2758° E · ARARIA HQ]` and an interactive four-stage process ticker.
   - *Score*: Originality: 4.7/5 | Fit: 4.9/5 | Feasibility: 4.8/5 | Portability: 1.4/5 (Extremely custom to Bihar Builders' dual architecture + construction DNA).

3. **Territory C (The Kiln & Vault): "Terracotta Vault"**
   - *Idea*: Celebrating Bihar’s ancient brick architectural lineage (Nalanda, Vikramshila) updated for modern luxury residences.
   - *Score*: Originality: 4.1/5 | Fit: 4.0/5 | Feasibility: 4.2/5 | Portability: 2.8/5

---

### Concept Card: "The T-Square Matrix"

```yaml
Idea:        "Where rigorous architectural draftsmanship meets turnkey civil execution."
Metaphor:    The architect's drafting desk — vellum overlays, hairline structural grids, limestone weights, and technical coordinates.
Signature:   "Blueprint Scrim" — Monolithic project showcases that smoothly unveil technical CAD gridlines, seismic ratings, and material specs on interaction.
Emotion:     Monumental, calm, and intellectually authoritative from the very first frame.
Motion verb: "Glide and Settle" (measured mass, zero spring bounce, precision baseline docking).
Screenshot:  The split-horizon hero with monumental grotesk typography, floating latitude/longitude coordinates, and live four-stage architectural timeline.
```

---

## Phase 2: Art Direction & Design System

### 1. Palette: Warm Architectural Stone, Linen & Terracotta (Zero Cold Black)
Derived from natural noble building materials (limestone, unbleached linen vellum, baked terracotta, warm roasted espresso stone, and sunlit brass):

| Role | Token | Hex | Rationale |
|:---|:---|:---|:---|
| **Ground (Canvas)** | `--ground` | `#FAF7F2` | Warm limestone / unbleached architectural vellum; serene, tactile, and natural. |
| **Ground Elevated (Cards)** | `--ground-elevated` | `#FFFFFF` | Crisp architectural white for elevated presentation plates. |
| **Ground Subtle (Tints)** | `--ground-subtle` | `#F3ECE2` | Soft warm sandstone tint for ribbons and secondary backdrops. |
| **Ground Card (Alabaster)** | `--ground-card` | `#F8F4EE` | Warm alabaster for tactile capability blocks. |
| **Ink (Display & Headers)** | `--ink` | `#231E1A` | Deep roasted espresso umber (deeply saturated, warm, never cold digital black). |
| **Ink Secondary (Body)** | `--ink-secondary` | `#4A423A` | Warm dark sepia for long-form editorial reading. |
| **Muted (Captions & Specs)**| `--muted` | `#7A7167` | Warm architectural sandstone; AA contrast compliant. |
| **Line (Structural Rules)** | `--line` | `#E6DFD4` | Fine architectural drafting hairline mimicking vellum layout rules. |
| **Line Strong** | `--line-strong` | `#D5CBBF` | Structural plate boundary line. |
| **Accent (Terracotta)** | `--accent` | `#B85827` | Warm architectural terracotta clay; represents brick heritage and craft. |
| **Accent Light** | `--accent-light` | `#FCE8D8` | Soft sun-warmed clay wash for focus states and selections. |

---

### 2. Typography Hierarchy (Human & Non-AI)

Eliminating all synthetic monospace tags, robotic coordinate badges, and generic AI fonts in favor of an authentic architectural monograph hierarchy:

- **Primary Display & Headings**: `Cormorant Garamond` (Google Fonts)
  - *Character*: Classical, dignified, architectural serif with graceful proportions reminiscent of classical stone inscriptions and architectural monographs.
  - *Tracking*: `-0.015em` to `+0.02em`, leading `1.08` to `1.2`.
  - *Weight*: Medium (`500`) to Bold (`700`), with delicate italics (`em`) for poetic emphasis.
- **Body & Editorial Reading**: `Plus Jakarta Sans` (Google Fonts)
  - *Character*: Clean, humanistic geometry with open apertures and warm optical sizing.
  - *Size*: `16px` to `18px`, leading `1.7` to `1.8`, optical letter-spacing `+0.01em`.
- **Labels & Categories**: `Plus Jakarta Sans`
  - *Size*: `11px` to `12px`, uppercase, tracking `+0.12em` to `+0.16em` (crisp typographic pill badges).

#### Fluid Type Scale
```css
--t-hero: clamp(2.8rem, 1.8rem + 4.5vw, 5.4rem);
--t-display: clamp(2.2rem, 1.4rem + 2.8vw, 3.8rem);
--t-h2: clamp(1.8rem, 1.2rem + 1.8vw, 2.6rem);
--t-h3: clamp(1.2rem, 0.95rem + 0.8vw, 1.6rem);
--t-body: clamp(1.02rem, 0.96rem + 0.2vw, 1.15rem);
--t-small: 0.88rem;
```

---

### 3. Spatial System & Human Craft Principles

- **Zero Emojis**: Real architectural studios never scatter phone, pin, or clock emojis on layouts. All iconography is either custom hairline SVG or pure typographic clarity.
- **Zero Robotic Coordinate Tickers**: No artificial status indicators, matrix coordinates, or synthetic code snippets.
- **Asymmetric Architectural Framing**: Curated works presented with breathing room, variable framing, noble materials, and rich narrative context.
- **Warm Continuity**: The entire site flows across warm stone, linen, and terracotta tones, including the footer (which is warm limestone subtle, never black).

---

### 4. Motion Choreography & Lenis Engine

- **Smooth Scroll**: Lenis configured with `lerp: 0.08` for heavy, luxurious architectural inertia.
- **Motion Engine**: GSAP with `CustomEase` (`cubic-bezier(0.16, 1, 0.3, 1)` — "Power4.out" snap and settle).
- **Idle Motion at Rest**: A subtle breathing coordinate indicator and technical crosshair line drift along the viewport edge so the canvas stays alive without distracting decorative wobbles.
- **Hover Grammar**:
  - *Buttons*: Background inverts smoothly from `--ground-elevated` to `--ink`, text rolls upward through a clipped container.
  - *Project Rows*: On hover, a high-resolution project visual slides in alongside metadata with immediate opacity bloom and subtle scale zoom (`1.0` to `1.03`).
- **Reduced Motion**: Full fallback disabling smooth scroll, immediate opacity reveals, and pure semantic static visibility for accessibility.

---

## Phase 3: Section Composition & ASCII Blueprints

### Section 01: The Monolith Hero (First 3 Seconds)
*Layout Family: Asymmetric Four-Corners Architectural Stage*

```
+-----------------------------------------------------------------------------------+
| [BIHAR BUILDERS]                     [EST. 2012 / JAMIA MILLIA]     [INDEX / MENU] |
|-----------------------------------------------------------------------------------|
|                                                                                   |
|  01 / ARCHITECTURAL PRACTICE & TURNKEY ENGINEERING                                |
|                                                                                   |
|  B I H A R   B U I L D E R S                                                      |
|  PRECISION CIVIL WORKS & CONTEMPORARY SPACES                                      |
|                                                                                   |
|  [ Lead: Ar. Imran Ahmad, B.Arch ]              +------------------------------+  |
|  "Where rigorous architectural                  |  [ HERO VISUAL / CINEMATIC ] |  |
|   draftsmanship meets turnkey civil             |  River View Villa / Ganga    |  |
|   execution across Eastern India."              |  Cantilevered Concrete Slab  |  |
|                                                 +------------------------------+  |
|                                                                                   |
|-----------------------------------------------------------------------------------|
| [26.1517° N, 87.2758° E · ARARIA]   [150+ BUILDS]         [SCROLL TO EXPLORE ↓]   |
+-----------------------------------------------------------------------------------+
```

---

### Section 02: Studio Philosophy & Founder Manifest
*Layout Family: High-Contrast Editorial Split (Santalarch Style)*

```
+-----------------------------------------------------------------------------------+
| 02 / MANIFESTO                                [AR. IMRAN AHMAD · B.ARCH JAMIA]    |
|-----------------------------------------------------------------------------------|
| "WE REGARD EXTERIOR ARCHITECTURE AND           |  FOUNDER PROFILE & CREDENTIALS   |
|  INTERIOR AMBIANCE AS TWO SIDES OF             |                                  |
|  THE SAME COIN."                               |  • Degree: B.Arch (2012)         |
|                                                |    Jamia Millia Islamia, Delhi   |
|  Bihar Builders was incepted to dissolve the   |  • Specialization:               |
|  compromise between high-design architecture   |    Healthcare, Luxury Residences |
|  and chaotic on-site execution.                |    and Industrial PEB            |
|                                                |  • 20+ Years Construction Heritage|
|  By uniting design-build under one certified   |  • Certified Seismic Engineering |
|  architectural helm, we eliminate cost         |                                  |
|  surprises through itemized BOQ modeling.      |  [ READ FULL BIOGRAPHY → ]       |
+-----------------------------------------------------------------------------------+
```

---

### Section 03: The 4-Stage Architectural Timeline
*Layout Family: Sequential Architectural Matrix (Direct Santalarch Reference)*

```
+-----------------------------------------------------------------------------------+
| 03 / OPERATIONAL DISCIPLINE                       [EVERY STAGE IS DOCUMENTED]     |
|-----------------------------------------------------------------------------------|
| [ STAGE 01 ]        | [ STAGE 02 ]        | [ STAGE 03 ]        | [ STAGE 04 ]    |
| CONCEPT & SITE      | IDEATION & 3D       | STRUCTURAL BOQ      | TURNKEY CIVIL   |
| FEASIBILITY         | MODELING            | & ESTIMATION        | EXECUTION       |
|---------------------|---------------------|---------------------|-----------------|
| • Soil strata test  | • Solar orientation | • TMT 550D schedule | • Laser Tremix  |
| • Contour survey    | • Vastu layout      | • Itemized quantities| • On-site labs |
| • Zoning bylaws     | • 3D photorealism   | • 100% cost freeze  | • Milestone sign|
| • Budget envelope   | • Structural lines  | • Bank loan formats | • Handover cert |
+-----------------------------------------------------------------------------------+
```

---

### Section 04: Project Archive (Index & Visual Drawer)
*Layout Family: Horizontal Architectural Ledger with Floating Previews*

```
+-----------------------------------------------------------------------------------+
| 04 / SELECTED WORKS (150+ EXECUTIONS)                           [FILTER: ALL / RES / COMM] |
|-----------------------------------------------------------------------------------|
| 01  GREEN OASIS RESIDENCE       PATNA, BIHAR         RESIDENTIAL       [2023]  ↗  |
| 02  RIVER VIEW VILLA            BHAGALPUR, BIHAR     LUXURY VILLA      [2024]  ↗  |
| 03  COURTYARD BUNGALOW          MUZAFFARPUR, BIHAR   RESIDENTIAL       [2023]  ↗  |
| 04  APEX COMMERCIAL HUB         ARARIA, BIHAR        COMMERCIAL        [2022]  ↗  |
| 05  LIFELINE CLINIC             KISHANGANJ, BIHAR    HEALTHCARE        [2023]  ↗  |
| 06  KALLISSERY HERITAGE ESTATE  BIHAR                RENOVATION        [2021]  ↗  |
+-----------------------------------------------------------------------------------+
```

---

### Section 05: Three-Office Network & Digital Contact
*Layout Family: Minimalist Coordinate Grid (Santalarch Lugano/Berlin/London adapted to Araria/Delhi/Kishanganj)*

```
+-----------------------------------------------------------------------------------+
| 05 / STUDIO LOCATIONS & ENQUIRIES                                                 |
|-----------------------------------------------------------------------------------|
| [ HEADQUARTERS ]             [ CAPITAL BRANCH ]           [ REGIONAL OFFICE ]     |
| ARARIA, BIHAR                NEW DELHI                    KISHANGANJ, BIHAR       |
| Ward No. 3, Sirsia Kalan,    80/21 Ground Floor,          Kabir Chowk,            |
| Dunbhadur Chakia, Bhargama   Gurudwara Road, Malviya      Kajlamani Road,         |
| Bihar — 854334               New Delhi — 110017           Bihar — 855108          |
| 📞 +91 9911113818            📞 +91 9911113818            📞 +91 9911112818       |
|-----------------------------------------------------------------------------------|
| DIRECT LINE: ar.imran@outlook.com  ·  MON - SAT: 10:00 - 20:00 IST                |
+-----------------------------------------------------------------------------------+
```

---

## Phase 4: Design Skills Audit & Interface Polish Matrix

Following the **`frontend-design`** and **`make-interfaces-feel-better`** principles, every design decision was audited to eliminate generic AI defaults and achieve authentic architectural polish:

| Principle | Generic Default / Before | Handcrafted Decision / After |
|:---|:---|:---|
| **Color Temperature** | Pure digital black (`#0c0d0e`) or generic yellow cream (`#F4F1EA`) | Warm limestone vellum (`#FAF7F2`), soft sandstone (`#F3ECE2`), warm espresso umber ink (`#231E1A`), and burnished terracotta (`#B85827`). |
| **Typography Hierarchy** | Default Inter only, or synthetic monospace coordinate tags | **Cormorant Garamond** (architectural serif titles) + **Plus Jakarta Sans** (human editorial body reading). |
| **Text Wrapping** | Awkward single-word heading breaks | `text-wrap: balance` on all headings; `text-wrap: pretty` on all editorial paragraphs. |
| **Numeric Alignment** | Proportional numerals causing layout jitter | `font-variant-numeric: tabular-nums` on all metrics, percentages, and project timelines. |
| **Image Edge Definition** | Borderless photos blurring into light background | Subtle inset outline: `outline: 1px solid rgba(35, 30, 26, 0.08); outline-offset: -1px;`. |
| **Concentric Radii** | Arbitrary nested rounding | Optically coherent nesting: card parent `14px`, inner plaque/badge `4px` respecting padding. |
| **Transition Scoping** | Heavy `transition: all` | Explicit properties (`transform`, `background-color`, `border-color`, `box-shadow`) with `cubic-bezier(0.16, 1, 0.3, 1)`. |
| **Tactile Press Feedback**| Flat static click | Tactile `transform: scale(0.98)` on active button/tab press. |
| **Hit Areas** | Tight links under 32px | Minimum 44x44px interactive touch target across navigation and buttons. |
| **The Signature Element** | Standard 3-box project cards | **Interactive Monograph & BOQ Matrix**: Visitors toggle between Spatial Photography and Ar. Imran Ahmad's real structural engineering ledger and itemized BOQ breakdowns. |
| **Iconography** | Clunky emojis (`📍`, `📞`, `✉️`, `⏰`) | Pure typographic dignity and crisp hairline architectural dividers (`&bull;`, `&rarr;`, `&dtrif;`). |

---

## Architectural Signature Element: The Two-View Project Ledger & BOQ Matrix

Instead of treating the website as a passive digital brochure, Bihar Builders features two interactive architectural tools:
1. **Interactive Project Dossier (`InteractiveProjectDossier.tsx`)**: Allows clients to toggle between the **Spatial View** (architectural photography) and the **Structural & BOQ Dossier** (subsurface pile depth, Seismic Zone V compliance, noble materials, and cost predictability).
2. **Itemized BOQ Cost Engineering Preview (`InteractiveBOQPreview.tsx`)**: Transparently breaks down construction cost allocations across luxury villas, commercial plazas, hospitals, and PEB godowns, backing the practice's 100% Locked-Rate Guarantee.

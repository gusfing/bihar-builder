import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/company-profile.php", destination: "/company-profile", permanent: true },
      { source: "/about-us", destination: "/company-profile", permanent: true },
      { source: "/contact-us.php", destination: "/contact", permanent: true },
      { source: "/residential-architecture.php", destination: "/architecture/residential", permanent: true },
      { source: "/commercial-architecture.php", destination: "/architecture/commercial", permanent: true },
      { source: "/hotel-architecture.php", destination: "/architecture/hotel", permanent: true },
      { source: "/school-architecture.php", destination: "/architecture/schools", permanent: true },
      { source: "/hospital-architecture.php", destination: "/architecture/hospitals", permanent: true },
      { source: "/residential-construction.php", destination: "/construction/residential", permanent: true },
      { source: "/commercial-construction.php", destination: "/construction/commercial", permanent: true },
      { source: "/hotel-construction.php", destination: "/construction/hotel", permanent: true },
      { source: "/schools-construction.php", destination: "/construction/schools", permanent: true },
      { source: "/hospitals-construction.php", destination: "/construction/hospitals", permanent: true },
      { source: "/godown-structure-construction.php", destination: "/construction/godown-structure", permanent: true },
      { source: "/residential-interior.php", destination: "/interior/residential", permanent: true },
      { source: "/retails-interior.php", destination: "/interior/retails", permanent: true },
      { source: "/showroom-interior.php", destination: "/interior/showroom", permanent: true },
      { source: "/office-interior.php", destination: "/interior/office", permanent: true },
      { source: "/hotel-interior.php", destination: "/interior/hotel", permanent: true },
      { source: "/spa-interior.php", destination: "/interior/spa", permanent: true },
      { source: "/gym-interior.php", destination: "/interior/gym", permanent: true },
      { source: "/banquet-hall-interior.php", destination: "/interior/banquet-hall", permanent: true },
      { source: "/exhibitions-interior.php", destination: "/interior/exhibitions", permanent: true },
      { source: "/architectural-design-and-estimation", destination: "/services/estimation-boq", permanent: true },
      { source: "/exterior-design-and-landscaping", destination: "/services/exterior-landscaping", permanent: true },
      { source: "/projects.php", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;

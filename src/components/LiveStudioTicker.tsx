"use client";

import { useEffect, useState } from "react";

export default function LiveStudioTicker() {
  const [timeStr, setTimeStr] = useState<string>("16:30:00 IST");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in Indian Standard Time (IST)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeStr(`${now.toLocaleTimeString("en-GB", options)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="santal-live-ticker">
      <div className="santal-ticker-group">
        <span className="santal-live-pulse" />
        <span className="santal-ticker-item">STUDIO TELEMETRY</span>
      </div>

      <div className="santal-ticker-group">
        <span className="santal-ticker-label">LIVE:</span>
        <span className="santal-ticker-val">{timeStr}</span>
      </div>

      <div className="santal-ticker-group hide-mobile">
        <span className="santal-ticker-label">ARARIA HQ:</span>
        <span className="santal-ticker-val">26.1517&deg; N, 87.2758&deg; E</span>
      </div>

      <div className="santal-ticker-group hide-mobile">
        <span className="santal-ticker-label">NEW DELHI:</span>
        <span className="santal-ticker-val">28.5355&deg; N, 77.2066&deg; E</span>
      </div>

      <div className="santal-ticker-group hide-mobile">
        <span className="santal-ticker-label">STANDARD:</span>
        <span className="santal-ticker-val">NBC 2016 ZONE V</span>
      </div>
    </div>
  );
}

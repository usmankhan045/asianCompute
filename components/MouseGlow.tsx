"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(61, 181, 74, 0.06), transparent 50%)`,
        willChange: "background",
      }}
    />
  );
}

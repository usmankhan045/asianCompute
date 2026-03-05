"use client";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
      <div
        className="h-full w-full"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(61, 181, 74, 0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

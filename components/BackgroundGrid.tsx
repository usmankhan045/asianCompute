"use client";

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 opacity-20">
      <div
        className="h-full w-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          willChange: "auto",
        }}
      />
    </div>
  );
}

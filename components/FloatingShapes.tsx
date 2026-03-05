"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft green blob — top left */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "rgba(61, 181, 74, 0.07)" }}
        animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft blue blob — top right */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(26, 91, 182, 0.06)" }}
        animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 0.85, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Soft teal blob — bottom center */}
      <motion.div
        className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full blur-3xl"
        style={{ background: "rgba(0, 169, 157, 0.06)" }}
        animate={{ x: [0, 40, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

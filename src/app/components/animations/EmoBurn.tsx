// components/animations/Burn.tsx
"use client";
import { motion } from "framer-motion";

export default function Burn() {
  return (
    <motion.div
      className="text-6xl"
      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 0] }}
      transition={{ duration: 1.5 }}
    >
      🔥
    </motion.div>
  );
}
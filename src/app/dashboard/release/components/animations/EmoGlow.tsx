'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface EmoGlowProps {
  text: string;            // 안 씀. prop 유지만
  onComplete: () => void;  // 기존 플로우 유지
}

/**
 * EmoGlow (minimal)
 * - 이모지만 중앙에 표시
 * - 배경 없음(transparent)
 * - 1.2초 후 onComplete 호출 (필요 없으면 useEffect 지워도 됨)
 */
export default function EmoGlow({ onComplete }: EmoGlowProps) {
  useEffect(() => {
    const t = setTimeout(() => onComplete?.(), 1200);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ background: 'transparent' }}
    >
      <motion.span
        role="img"
        aria-label="Glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          fontSize: 'min(32vw, 220px)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        ☀️
      </motion.span>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { emotionCategories } from './emotionData';
import { useRouter } from 'next/navigation';

export default function ReleasePage() {
  // Stage 1: 감정 선택, Stage 2: 텍스트 입력
  const [hoveredEmotion, setHoveredEmotion] = useState<string | null>(null);

  // 1단계 -> 2단계 이동
  const handleEmotionSelect = (emotionID: string) => {
        router.push(`/dashboard/release/emotionID?id=${emotionID}`);
    };

  const router = useRouter();

    return (
      <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--color-text-dark)' }}>
              Release Your Emotions
            </h1>
            <p className="text-lg" style={{ color: 'var(--color-text-muted)' }}>
              감정을 선택하고, 마음껏 쏟아내세요. 모든 것은 흔적 없이 사라집니다.
            </p>
          </div>

          {/* Emotion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emotionCategories.map((emotion) => {
              const Icon = emotion.icon;
              const isHovered = hoveredEmotion === emotion.id;
              
              return (
                <button
                  key={emotion.id}
                  onClick={() => handleEmotionSelect(emotion.id)}
                  onMouseEnter={() => setHoveredEmotion(emotion.id)}
                  onMouseLeave={() => setHoveredEmotion(null)}
                  className="relative p-8 rounded-3xl shadow-sm transition-all duration-300 hover:scale-105 text-left overflow-hidden"
                  style={{
                    background: isHovered ? emotion.gradient : 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(16px)',
                    border: `2px solid ${isHovered ? emotion.color : 'rgba(178,139,103,0.15)'}`,
                    boxShadow: isHovered 
                      ? `0 8px 32px ${emotion.color}40` 
                      : '0 4px 20px rgba(178,139,103,0.1)'
                  }}
                >
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ 
                      backgroundColor: isHovered ? emotion.color + '30' : emotion.color + '15',
                      transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
                    }}
                  >
                    <Icon 
                      size={32} 
                      style={{ color: emotion.color }}
                    />
                  </div>

                  {/* Label */}
                  <div className="mb-4">
                    <h3 
                      className="text-2xl font-bold mb-1"
                      style={{ color: emotion.color }}
                    >
                      {emotion.key}
                    </h3>
                    <p 
                      className="text-sm font-medium"
                      style={{ color: 'var(--color-text-dark)' }}
                    >
                      {emotion.label} / {emotion.labelEn}
                    </p>
                  </div>

                  {/* Tagline */}
                  <div 
                    className="pt-4 border-t transition-all duration-300"
                    style={{ 
                      borderColor: isHovered ? emotion.color + '30' : 'rgba(178,139,103,0.1)',
                      opacity: isHovered ? 1 : 0.7
                    }}
                  >
                    <p 
                      className="text-sm font-serif italic mb-1"
                      style={{ color: 'var(--color-text-quote)' }}
                    >
                      "{emotion.tagline}"
                    </p>
                    <p 
                      className="text-xs"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {emotion.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  {isHovered && (
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${emotion.color}10 0%, transparent 70%)`,
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Bottom Info */}
          <div className="mt-12 text-center">
            <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
              💡 감정을 선택하면 자유롭게 표현할 수 있는 공간으로 이동합니다.
            </p>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    );

}


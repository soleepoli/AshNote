'use client';

import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { Flame, Droplets, Sun, CloudDrizzle, Droplet, Sparkles, User, Activity } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', value: 3 },
  { day: 'Tue', value: 2 },
  { day: 'Wed', value: 5 },
  { day: 'Thu', value: 4 },
  { day: 'Fri', value: 7 },
  { day: 'Sat', value: 6 },
  { day: 'Sun', value: 8 }
];

const StatCard = ({ icon: Icon, title, value, description, gradient }: any) => (
  <div className="p-5 rounded-3xl shadow-sm relative overflow-hidden glass-card">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-2xl" style={{ backgroundColor: gradient || 'rgba(224, 191, 165, 0.3)' }}>
        <Icon size={22} style={{ color: 'var(--color-primary)' }} />
      </div>
      <div className="relative">
        <svg width="60" height="60" className="transform -rotate-90">
          <circle cx="30" cy="30" r="26" fill="none" stroke="var(--color-secondary)" strokeWidth="4" opacity="0.3"/>
          <circle cx="30" cy="30" r="26" fill="none" stroke="var(--color-primary)" strokeWidth="4" 
                  strokeDasharray={`${value * 1.63} 163`} strokeLinecap="round"/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold" style={{ color: 'var(--color-text-dark)' }}>{value}%</span>
        </div>
      </div>
    </div>
    <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--color-text-dark)' }}>{title}</h3>
    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{description}</p>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2 text-text-dark">
            Today's Mood
          </h2>
          <p className="text-sm text-text-muted">
            A quiet space to notice your emotions.
          </p>
        </div>
        <button className="w-12 h-12 rounded-full flex items-center justify-center shadow-md glass-card">
          <User size={20} className="text-primary" />
        </button>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <StatCard 
          icon={CloudDrizzle}
          title="Calm Today"
          value={68}
          description="You felt mostly peaceful this evening."
        />
        <StatCard 
          icon={Sparkles}
          title="Small Wins"
          value={85}
          description="Joy increased by 2 times this week."
          gradient="#E6C79C30"
        />
      </div>

      {/* Quote Card */}
      <div className="mb-6 p-8 rounded-3xl text-center shadow-sm"
           style={{ 
             backgroundColor: '#FAF8F5',
             border: '1px solid rgba(178,139,103,0.1)'
           }}>
        <p className="text-xl mb-3 text-text-quote font-serif italic">
          "Let the air do the work."
        </p>
        <p className="text-sm text-text-muted">
          Anxiety fades when you breathe, not when you fight it.
        </p>
      </div>

      {/* Routine Suggestion + Growing Strength */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="p-6 rounded-3xl shadow-sm gradient-routine">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                 style={{ backgroundColor: 'rgba(201,111,74,0.2)' }}>
              <Activity size={22} style={{ color: '#C96F4A' }} />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-text-dark">
                3-minute breathing
              </h3>
              <p className="text-xs text-text-muted">
                Play EmoEase sound before bed.
              </p>
            </div>
          </div>
          <button className="w-full py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:scale-105 bg-primary shadow-button">
            Start Routine
          </button>
        </div>

        <StatCard 
          icon={Flame}
          title="Growing Strength"
          value={72}
          description="Your resilience patterns are improving."
          gradient="#C96F4A30"
        />
      </div>

      {/* Weekly Chart */}
      <div className="p-6 rounded-3xl shadow-sm mb-6 glass-card">
        <h3 className="text-lg font-semibold mb-4 text-text-dark">
          Weekly Emotion Frequency
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={weeklyData}>
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {weeklyData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 6 ? '#B28B67' : '#D4C5B5'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm mt-4 flex items-center gap-2 text-text-muted">
          <Sun size={16} style={{ color: '#E6C79C' }} />
          Joy increased by 2 times this week
        </p>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <StatCard 
          icon={Activity}
          title="Mood Stability"
          value={78}
          description="Consistent emotional balance this week."
        />
        <StatCard 
          icon={CloudDrizzle}
          title="Peace Moments"
          value={90}
          description="Found calm in 16 moments today."
          gradient="#D4E3E130"
        />
      </div>

      {/* Footer */}
      <div className="text-center pb-4">
        <p className="text-xs text-text-muted">
          All emotions are deleted after release. Only categories remain.
        </p>
      </div>
    </div>
  );
}
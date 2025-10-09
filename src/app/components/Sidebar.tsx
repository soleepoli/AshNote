'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Wind, Activity, BarChart3, Eye, Clock, Droplet, Sparkles } from 'lucide-react';

const menuItems = [
  { id: 'home', href: '/dashboard', icon: Home, label: 'Home' },
  { id: 'release', href: '/dashboard/release', icon: Wind, label: 'Release' },
  { id: 'breathe', href: '/dashboard/breathe', icon: Activity, label: 'Breathe' },
  { id: 'trace', href: '/dashboard/trace', icon: BarChart3, label: 'Trace' },
  { id: 'insight', href: '/dashboard/insight', icon: Eye, label: 'Insight' },
  { id: 'routine', href: '/dashboard/routine', icon: Clock, label: 'Routine' }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-56 flex flex-col p-6 shadow-xl glass-sidebar">
      {/* Logo */}
      <Link href="/dashboard" className="mb-12">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" 
               style={{ backgroundColor: 'var(--color-primary)' }}>
            <Droplet size={18} style={{ color: 'var(--color-bg-soft)' }} />
          </div>
          <h1 className="text-xl font-bold font-serif" style={{ color: 'var(--color-text-dark)' }}>
            AshNote
          </h1>
        </div>
      </Link>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map(item => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.id}
              href={item.href}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover-lift"
              style={{
                backgroundColor: isActive ? 'var(--color-secondary)' : 'transparent',
                color: isActive ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                boxShadow: isActive ? 'var(--shadow-active)' : 'none'
              }}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Upgrade Card */}
      <div className="mt-auto p-4 rounded-2xl relative overflow-hidden gradient-upgrade shadow-glass">
        <Sparkles size={20} style={{ color: 'var(--color-primary)' }} className="mb-2" />
        <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-dark)' }}>
          Upgrade to Pro
        </p>
        <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>
          Unlock all features
        </p>
      </div>
    </div>
  );
}
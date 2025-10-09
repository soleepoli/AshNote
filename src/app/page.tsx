import Link from 'next/link';
import { Droplet, Wind, Flame, Sparkles } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg-soft)' }}>
      {/* Header */}
      <header className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" 
               style={{ backgroundColor: 'var(--color-primary)' }}>
            <Droplet size={18} style={{ color: 'var(--color-bg-soft)' }} />
          </div>
          <h1 className="text-xl font-bold font-serif" style={{ color: 'var(--color-text-dark)' }}>
            AshNote
          </h1>
        </div>
        <Link 
          href="/dashboard"
          className="px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:scale-105"
          style={{ backgroundColor: 'var(--color-primary)', boxShadow: 'var(--shadow-button)' }}
        >
          Get Started
        </Link>
      </header>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 text-text-dark">
          A Silent Place Where<br />
          <span className="font-serif italic text-primary">Emotions Turn to Ash</span>
        </h2>
        <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
          Release your emotions without leaving a trace. Experience visual catharsis 
          and find comfort in a space that understands.
        </p>
        <Link 
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-medium text-white bg-primary shadow-button hover:scale-105 transition-all"
        >
          <Wind size={20} />
          Start Releasing
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl glass-card text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-emotion-burn bg-opacity-20">
              <Flame size={28} className="text-emotion-burn" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-text-dark">
              Emotion Recognition
            </h3>
            <p className="text-sm text-text-muted">
              AI analyzes your feelings and categorizes them into 6 emotion types for personalized comfort.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-emotion-ocean bg-opacity-20">
              <Wind size={28} className="text-emotion-ocean" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-text-dark">
              Visual Release
            </h3>
            <p className="text-sm text-text-muted">
              Watch your emotions dissolve through fire, water, or wind animations for true catharsis.
            </p>
          </div>

          <div className="p-8 rounded-3xl glass-card text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-emotion-glow bg-opacity-20">
              <Sparkles size={28} className="text-emotion-glow" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-text-dark">
              Complete Privacy
            </h3>
            <p className="text-sm text-text-muted">
              No records stored. Only local emotion patterns tracked. Your feelings, truly deleted.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-8 py-20">
        <div className="p-12 rounded-3xl text-center" style={{ backgroundColor: '#FAF8F5' }}>
          <p className="text-2xl mb-4 text-text-quote font-serif italic">
            "Fire doesn't last."
          </p>
          <p className="text-base text-text-muted">
            Emotions are temporary. Let them flow, let them go.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-8 py-12 text-center border-t border-primary border-opacity-20">
        <p className="text-sm text-text-muted">
          © 2025 AshNote. A quiet space for your loudest emotions.
        </p>
      </footer>
    </div>
  );
}
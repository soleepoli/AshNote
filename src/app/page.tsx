'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  useEffect(() => {
    // 부드러운 스크롤
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.getElementById(href.slice(1));
        targetEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(a => a.addEventListener('click', handleAnchorClick));

    // fade-in animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // 헤더 스크롤 숨김
    const header = document.querySelector('.header') as HTMLElement;
    let lastScroll = 0;
    const handleScroll = () => {
      const top = window.scrollY;
      if (top > lastScroll && top > 100) header.style.transform = 'translateY(-100%)';
      else header.style.transform = 'translateY(0)';
      lastScroll = top <= 0 ? 0 : top;
    };
    window.addEventListener('scroll', handleScroll);
    document.body.classList.add('loaded');

    return () => {
      anchors.forEach(a => a.removeEventListener('click', handleAnchorClick));
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-yellow-950">🪶 AshNote</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-700 hover:text-yellow-900">미리보기</Link>
            <Link href="#emotions" className="text-gray-700 hover:text-yellow-900">감정흐름</Link>
            <Link href="#about" className="text-gray-700 hover:text-yellow-900">소개</Link>
            <Link href="/dashboard/release" className="bg-yellow-900 text-white px-6 py-2 rounded-full hover:bg-yellow-950 transition-all">바로가기</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center to-white overflow-hidden">
        <div className="relative z-10 text-center max-w-3xl px-6 fade-in">
          <div className="inline-block bg-white/80 border border-yellow-900 rounded-full px-6 py-2 text-sm text-amber-800 mb-6">
            마음의 짐을 내려놓는 공간
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-gray-800">
            감정을 흘려보내는 <br />
            <span className="text-yellow-900">디지털 아틀리에</span> 💭
          </h1>
          <p className="text-lg text-gray-600 mb-10">
            AshNote는 당신의 감정을 기록하고, 시각적으로 흘려보내는<br />
            감정 정화 서비스입니다.
          </p>
          <Link href="/dashboard/release" className="bg-yellow-900 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 transition-all shadow-lg">
            시작하기 🌿
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 fade-in">
            <span className="inline-block bg-yellow-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              감정의 흐름을 따라
            </span>
            <h2 className="text-4xl font-bold mb-4">당신의 감정을 시각화합니다.</h2>
            <p className="text-gray-600 text-lg">
              AshNote는 여섯 가지 감정의 형태로 당신의 내면을 표현합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 fade-in">
            {[
              { emoji: '🔥', title: '분노 (Anger)', desc: '불꽃처럼 타오르는 분노를 시각화하여 내면의 열기를 식혀줍니다.' },
              { emoji: '🌊', title: '슬픔 (Sorrow)', desc: '파도처럼 밀려오는 슬픔을 물결로 흘려보내며, 감정을 정화합니다.' },
              { emoji: '🌬️', title: '불안 (Anxiety)', desc: '바람처럼 흩어지는 불안을 부드럽게 날려보내세요.' },
              { emoji: '💧', title: '후회 (Regret)', desc: '방울처럼 맺힌 후회를 떨어뜨려 마음의 무게를 덜어냅니다.' },
              { emoji: '✨', title: '기쁨 (Joy)', desc: '작은 불빛처럼 반짝이는 기쁨을 다시 찾는 경험을 선사합니다.' },
              { emoji: '😮‍💨', title: '피로 (Exhaustion)', desc: '숨처럼 내쉬며 쌓인 피로를 부드럽게 흘려보내세요.' },
            ].map((f, i) => (
                <div className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all text-center">                <div className="text-5xl mb-4">{f.emoji}</div>
                <h3 className="text-xl text-yellow-950 font-semibold mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotion Flow Demo */}
      <section id="emotions" className="py-24 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 fade-in">
            <h2 className="text-4xl font-bold mb-6 leading-snug">
              타이핑과 음성으로<br />
              감정을 기록하세요 🎙️
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              텍스트 입력 또는 음성 인식을 통해 감정을 표현하세요.<br />
              감정의 언어를 분석해 적절한 시각적 연출로 보여줍니다.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>💬 감정별 애니메이션으로 해소</li>
              <li>🎧 음성 인식으로 빠른 기록</li>
              <li>🔒 익명으로 안전하게 저장되지 않음</li>
            </ul>
          </div>
          <div className="flex-1 fade-in text-center text-8xl">
            🪞
          </div>
        </div>
      </section>

      {/* About / Value Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center fade-in">
          <h2 className="text-4xl font-bold mb-6">AshNote는 단순한 서비스가 아닙니다.</h2>
          <p className="text-lg text-gray-600 mb-10">
            누군가에게는 작은 위로가, 누군가에게는 새로운 시작이 될 수 있는 공간.  
            잿빛 감정이 사라지고 나면, 따뜻한 평온이 찾아옵니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/dashboard/release" className="bg-yellow-950 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md hover:bg-amber-800 transition">
              지금 흘려보내기 🕊️
            </Link>
            <Link href="#features" className="bg-white border border-yellow-950 text-yellow-950 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition">
              서비스 알아보기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-50 text-yellow-950 text-center fade-in">
        <h2 className="text-5xl font-bold mb-4">AshNote</h2>
        <p className="text-lg mb-8 text-yellow-900">
          감정을 기록하고 흘려보내는 새로운 루틴을 만들어보세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/dashboard/release" className="bg-white text-yellow-950 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100">
            🌿 시작하기
          </Link>
          <Link href="#features" className="bg-transparent border-4 border-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-800">
            📖 서비스 보기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-950 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AshNote</h3>
            <p>감정을 기록하고 흘려보내는 감정 해소 플랫폼</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li><Link href="/dashboard/release" className="hover:text-white">감정 흘려보내기</Link></li>
              <li><Link href="#features" className="hover:text-white">서비스 소개</Link></li>
              <li><Link href="#about" className="hover:text-white">팀 소개</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">문의</h3>
            <p>📧 help@ashnote.io</p>
            <p>© 2025 AshNote. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
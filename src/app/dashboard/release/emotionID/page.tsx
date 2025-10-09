'use client';

import React, { useState, useEffect, useRef } from 'react';
import { emotionCategories } from '../emotionData';
import { useSearchParams, useRouter } from 'next/navigation';
import { Mic, MicOff, Send, ArrowLeft } from 'lucide-react';
import EmoBurn from '../components/animations/EmoBurn';
import EmoOcean from '../components/animations/EmoOcean';
import EmoGlow from '../components/animations/EmoGlow';
import EmoEase from '../components/animations/EmoEase';
import EmoDrop from '../components/animations/EmoDrop';
import EmoBreathe from '../components/animations/EmoBreathe';

export default function EmotionInputPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emotionId = searchParams.get('id');

  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const emotion = emotionCategories.find((e) => e.id === emotionId);

  useEffect(() => {
    if (!emotion) router.push('/dashboard/release');
  }, [emotion, router]);

  if (!emotion) return null;

  // 뒤로가기
  const handleBack = () => router.push('/dashboard/release');

  // 음성인식 초기화
  useEffect(() => {
    const SR =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;

    setIsSpeechSupported(true);
    const recognition = new SR();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'ko-KR';

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
      }
      if (finalTranscript) setInputText((prev) => prev + finalTranscript);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);
    recognitionRef.current = recognition;

    return () => recognitionRef.current?.stop();
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // ✅ 감정 흘려보내기 클릭
  const handleSubmit = () => {
    if (!inputText.trim()) return;
    setShowAnimation(true);
  };

  // ✅ 애니메이션 완료 시 → 메시지 표시
  const handleAnimationComplete = () => {
    setShowAnimation(false);
    setShowMessage(true);
  };

  // ✅ 애니메이션 렌더링
  if (showAnimation) {
    switch (emotionId) {
      case 'anger':
        return <EmoBurn text={inputText} onComplete={handleAnimationComplete} />;
      case 'sorrow':
        return <EmoOcean text={inputText} onComplete={handleAnimationComplete} />;
      case 'joy':
        return <EmoGlow text={inputText} onComplete={handleAnimationComplete} />;
      case 'anxiety':
        return <EmoEase text={inputText} onComplete={handleAnimationComplete} />;
      case 'regret':
        return <EmoDrop text={inputText} onComplete={handleAnimationComplete} />;
      case 'exhaustion':
        return <EmoBreathe text={inputText} onComplete={handleAnimationComplete} />;
      default:
        return null;
    }
  }

  // ✅ 감정이 흘러간 뒤의 완료 메시지 화면
    if (showMessage) {
        return (
            <div
            className="fixed inset-0 flex flex-col items-center justify-center text-center overflow-hidden"
            style={{
                backgroundColor: 'transparent',
                color: 'var(--color-text-dark)',
            }}
            >
            <span className="text-6xl mb-6">{emotion.iconEmoji}</span>
            <h2 className="text-3xl font-bold mb-2">감정이 흘러갔습니다.</h2>
            <p className="text-sm text-text-muted mb-8">
                당신의 마음이 조금은 가벼워졌길 바랍니다.
            </p>
            <button
                onClick={() => router.push('/dashboard/release')}
                className="px-6 py-3 rounded-2xl bg-primary text-white text-lg font-semibold hover:scale-105 transition-transform"
                style={{ backgroundColor: emotion.color }}
            >
                돌아가기
            </button>
            </div>
        );
    }

  // ✅ 기본 입력 화면
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={handleBack}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            backgroundColor: 'var(--color-bg-glass)',
            border: '1px solid rgba(178, 139, 103, 0.2)',
          }}
        >
          <ArrowLeft size={20} style={{ color: 'var(--color-text-dark)' }} />
        </button>
        <div>
          <h2 className="text-3xl font-bold text-text-dark">Release Your Emotions</h2>
          <p className="text-sm text-text-muted mt-1">말하거나 적어서 감정을 흘려보내세요</p>
        </div>
      </div>

      {/* Emotion Info */}
      <div
        className="mb-6 p-6 rounded-3xl border transition-all"
        style={{
          backgroundColor: emotion.bgLight,
          borderColor: emotion.color + '40',
        }}
      >
        <div className="flex items-center gap-4 mb-3">
          <span className="text-5xl">{emotion.iconEmoji}</span>
          <div>
            <h3 className="text-2xl font-bold text-text-dark">{emotion.key}</h3>
            <p className="text-base text-text-muted">{emotion.label}</p>
          </div>
        </div>
        <p className="text-lg font-serif italic mb-1" style={{ color: emotion.color }}>
          "{emotion.tagline}"
        </p>
        <p className="text-sm text-text-muted">{emotion.fullDescription}</p>
      </div>

      {/* Input */}
      <div
        className="p-6 rounded-3xl shadow-lg mb-6"
        style={{
          backgroundColor: 'var(--color-bg-glass)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(178, 139, 103, 0.15)',
        }}
      >
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="지금 느끼는 감정을 자유롭게 표현하세요..."
            className="w-full min-h-[200px] max-h-[400px] p-4 pr-16 rounded-2xl border-none outline-none resize-none text-base leading-relaxed"
            style={{
              backgroundColor: '#FFFFFF',
              color: 'var(--color-text-dark)',
              fontFamily: 'var(--font-sans)',
            }}
          />

          {isSpeechSupported && (
            <button
              onClick={toggleListening}
              className="absolute right-4 bottom-4 w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md hover:scale-110"
              style={{
                backgroundColor: isListening ? emotion.color : 'var(--color-primary)',
                color: '#FFFFFF',
              }}
            >
              {isListening ? <MicOff size={20} /> : <Mic size={20} />}
            </button>
          )}
        </div>

        {isListening && (
          <div className="mt-4 flex items-center gap-2">
            <span className="text-sm text-text-muted">듣고 있습니다...</span>
          </div>
        )}

        <div className="mt-4 text-right">
          <span className="text-xs text-text-muted">{inputText.length} 글자</span>
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!inputText.trim()}
        className="w-full py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
        style={{
          backgroundColor: emotion.color,
          color: '#FFFFFF',
        }}
      >
        <Send size={20} />
        감정 흘려보내기
      </button>

      <div className="mt-6 text-center">
        <p className="text-xs text-text-muted leading-relaxed">
          입력한 내용은 즉시 삭제됩니다.
          <br />
          감정 카테고리만 로컬에 저장되며, 서버에는 전송되지 않습니다.
        </p>
      </div>
    </div>
  );
}
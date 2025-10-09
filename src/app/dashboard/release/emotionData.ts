// 감정 카테고리 데이터
import { Flame, Droplets, Sun, Wind, Droplet, CloudDrizzle, Mic, MicOff, Send, ArrowLeft } from 'lucide-react';

export const emotionCategories = [
  {
    id: 'anger',
    key: 'EmoBurn',
    label: '분노',
    labelEn: 'Anger',
    icon: Flame,
    iconEmoji: '🔥',
    color: '#C96F4A',
    gradient: 'linear-gradient(135deg, rgba(201,111,74,0.2) 0%, rgba(201,111,74,0.05) 100%)',
    bgLight: 'rgba(201, 111, 74, 0.1)',
    tagline: 'Fire doesn\'t last.',
    description: '불은 오래가지 않는다.',
    fullDescription: '분노는 불과 같아서 한순간 뜨겁지만, 결국 꺼진다'
  },
  {
    id: 'sorrow',
    key: 'EmoOcean',
    label: '슬픔',
    labelEn: 'Sorrow',
    icon: Droplets,
    iconEmoji: '🌊',
    color: '#A4C8DB',
    gradient: 'linear-gradient(135deg, rgba(164,200,219,0.2) 0%, rgba(164,200,219,0.05) 100%)',
    bgLight: 'rgba(164, 200, 219, 0.1)',
    tagline: 'Waves don\'t keep what they touch.',
    description: '파도는 닿은 것을 붙잡아 두지 않는다.',
    fullDescription: '슬픔은 파도처럼 덮치지만, 결국 물러가며 아무것도 남기지 않는다'
  },
  {
    id: 'joy',
    key: 'EmoGlow',
    label: '기쁨',
    labelEn: 'Joy',
    icon: Sun,
    iconEmoji: '☀️',
    color: '#E6C79C',
    gradient: 'linear-gradient(135deg, rgba(230,199,156,0.2) 0%, rgba(230,199,156,0.05) 100%)',
    bgLight: 'rgba(230, 199, 156, 0.1)',
    tagline: 'Happiness sounds better out loud.',
    description: '행복은 소리 내야 더 아름답게 들린다.',
    fullDescription: '행복은 나눌 때 더 선명해진다'
  },
  {
    id: 'anxiety',
    key: 'EmoEase',
    label: '불안',
    labelEn: 'Anxiety',
    icon: Wind,
    iconEmoji: '🌫️',
    color: '#BFB4A2',
    gradient: 'linear-gradient(135deg, rgba(191,180,162,0.2) 0%, rgba(191,180,162,0.05) 100%)',
    bgLight: 'rgba(191, 180, 162, 0.1)',
    tagline: 'Let the air do the work.',
    description: '공기에게 맡겨라.',
    fullDescription: '불안을 조용히 가라앉히는 평온'
  },
  {
    id: 'regret',
    key: 'EmoDrop',
    label: '후회',
    labelEn: 'Regret',
    icon: Droplet,
    iconEmoji: '💧',
    color: '#D4E3E1',
    gradient: 'linear-gradient(135deg, rgba(212,227,225,0.2) 0%, rgba(212,227,225,0.05) 100%)',
    bgLight: 'rgba(212, 227, 225, 0.1)',
    tagline: 'Let go before it sticks.',
    description: '달라붙기 전에 놓아버리세요.',
    fullDescription: '감정이 굳기 전에 가볍게 털어내라'
  },
  {
    id: 'exhaustion',
    key: 'EmoBreathe',
    label: '무력',
    labelEn: 'Exhaustion',
    icon: CloudDrizzle,
    iconEmoji: '💨',
    color: '#CFC1AD',
    gradient: 'linear-gradient(135deg, rgba(207,193,173,0.2) 0%, rgba(207,193,173,0.05) 100%)',
    bgLight: 'rgba(207, 193, 173, 0.1)',
    tagline: 'Every breath is a new beginning.',
    description: '모든 숨은 새로운 시작입니다.',
    fullDescription: '지금의 숨이 곧 새 출발이다'
  }
];
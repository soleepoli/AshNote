# 🌫️ AshNote - 소리없는 아우성
> **기록 없이 감정을 흘려보내는 AI 감정 해소 플랫폼**  
> “A silent place where emotions turn to ash and disappear.”

---

## 🧭 프로젝트 소개
**AshNote**는 감정을 표현하기 어려운 현대인들을 위한 **AI 감정 해소 플랫폼**입니다.  
사용자가 감정을 입력하면, AI가 이를 분석해 감정에 맞는 **시각적 정화 애니메이션**과 **위로 문장**을 제공합니다.  
기록은 남지 않으며, 감정은 **불·물·빛·바람** 등 자연의 형태로 사라집니다.

> 💬 “감정을 기록하지 않고, 시각적으로 비워내는 순간의 해방감”  
> 이것이 AshNote가 제공하는 핵심 경험입니다.

---

## 🌿 핵심 가치
| 가치 | 설명 |
|------|------|
| **익명성** | 감정이 서버에 저장되지 않음 (로컬 처리 기반) |
| **정화(Release)** | 감정을 자연 현상처럼 시각적으로 소멸시킴 |
| **위로(Warm)** | AI가 감정에 맞춘 짧은 위로 문장 제공 |
| **자기인식(Self-healing)** | 감정 카테고리 기반 주간/월간 리포트 제공 |

---

## ✨ 주요 기능

### 1️⃣ 감정 인식 및 분류 (AI Emotion Recognition)
- AI가 입력된 문장을 분석해 6대 감정으로 분류  
  (`Anger`, `Sorrow`, `Joy`, `Anxiety`, `Regret`, `Exhaustion`)  
- 감정별 고유 애니메이션 및 카피 문장 자동 연결  
- OpenAI 기반 자연어 감정 분석  

> 예시:  
> 🔥 분노 → “Fire doesn’t last.”  
> 🌊 슬픔 → “Waves don’t keep what they touch.”

---

### 2️⃣ 맞춤 위로 메시지 생성 (AI Consolation Maker)
- 감정별 **브랜딩 문체**에 맞춘 짧은 문장 1~2줄 자동 생성  
- 예외 시 기본 문구 DB에서 랜덤 제공  
- 위로 메시지는 감정 해소 직후 표시되어 정서적 완결감 제공  

---

### 3️⃣ 감정 해소 애니메이션 (Emotional Release Engine)
- 감정마다 다른 시각 효과 (Lottie / CSS Animation)  

| 감정 | 애니메이션 | 키워드 |
|------|-------------|--------|
| 🔥 분노 | 불꽃 속에 타오르며 재로 사라짐 | EmoBurn |
| 🌊 슬픔 | 파도에 씻겨 흘러감 | Emocean |
| ☀ 기쁨 | 빛으로 퍼져나감 | EmoGlow |
| 🌫 불안 | 바람에 흩어짐 | EmoEase |
| 💧 후회 | 떨어지는 물방울처럼 사라짐 | EmoDrop |
| 💨 무력 | 숨과 함께 사라짐 | EmoBreathe |

---

### 4️⃣ 감정 기록 제어 및 리포트 (Emotion Record Controller)
- **즉시 삭제(기본)** + **선택 저장(옵션)**  
- 감정 카테고리, 횟수, 시간만 로컬에 저장  
- Chart.js 기반 주간/월간 감정 분포 리포트 시각화  
- 익명성과 자기인식을 모두 보장  

---

## 🧩 시스템 아키텍처
┌────────────────────────────┐
│        Frontend (Next.js)  │
│  ┌──────────────────────┐ │
│  │ Emotion Input Screen │ │
│  │ Animation Engine     │ │
│  │ Consolation Message  │ │
│  └──────────────────────┘ │
└──────────────┬────────────┘
│ REST API
↓
┌────────────────────────────┐
│   Backend (Express + TS)   │
│  ├ EmotionController.ts    │
│  ├ MessageController.ts    │
│  └ RecordController.ts     │
└──────────────┬────────────┘
↓
┌────────────────────────────┐
│     LocalStorage / RLS     │
│  (No raw text storage)     │
└────────────────────────────┘

---

## ⚙️ 기술 스택
| 구분 | 기술 |
|------|------|
| **Frontend** | Next.js, TypeScript, Tailwind, Lottie |
| **Backend** | Node.js, Express, TypeScript |
| **AI** | OpenAI API (GPT-4o mini) |
| **Data** | LocalStorage (익명 저장), Chart.js |
| **UI/UX** | Glassmorphism, Soft Clarity Palette |
| **Version Control** | Git & GitHub |

---

## 🎨 디자인 시스템
**Tone & Manner:** Soft Clarity — *햇살 아래의 평온*  
> “햇살이 스며드는 나무 책상 위, 따뜻한 바람이 감정을 흩어주는 오후”

| 역할 | 컬러 코드 | 의미 |
|------|------------|------|
| Background | `#F5EFE6` | 따뜻한 베이지 — 안정감 |
| Primary | `#B28B67` | 내추럴 브라운 — 신뢰감 |
| Secondary | `#E0BFA5` | 클레이 베이지 — 부드러움 |
| Highlight | `#C96F4A` | 테라코타 — 감정의 여운 |
| Text | `#3B3B3B` | 진한 회색 — 집중도 |
| Muted | `#7A6F66` | 웜그레이 — 차분함 |

---

## 🧠 유저 인사이트
| Pain Point | Insight |
|-------------|----------|
| 감정을 털어놓을 공간의 부재 | 익명 기반 감정 해소 공간 필요 |
| 기록으로 남는 불안감 | 흔적 없는 감정 삭제 기능 |
| 감정 표현 후 후회 | 감정 소멸 시각화로 해방감 제공 |
| 긍정 감정의 억압 | 기쁨 공유형 UX (EmoGlow) 필요 |

---

## 🚀 향후 개선 계획
- AI 음성 인식 기반 감정 입력  
- 프리미엄 애니메이션 테마 (Sunset / Night Ver.)  
- 감정 리포트 PDF 다운로드  
- 소셜 공유: “오늘의 감정 잿빛 기록”  
- 힐링 사운드 및 명상 콘텐츠 연동  

---

## 🧑‍🤝‍🧑 팀 소개
| 역할 | 이름 |
|------|------|
| 총괄 | _(작성 예정)_ |
| 개발 | _(작성 예정)_ |
| 기획 | _(작성 예정)_ |
| 디자인 | _(작성 예정)_ |

---

## 📬 문의
**Email: soleepoli@gmail.com**   
**Made ☁️ by Soleepoli**
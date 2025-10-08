"use client";
import { useEmotionStore } from "@/store/useEmotionStore";
import { useState, useEffect } from "react";
import EmoBurn from "./components/animations/EmoBurn";

export default function Home() {
  const { emotion, setEmotion, clearEmotion } = useEmotionStore();
  const [input, setInput] = useState("");
  const [emotions, setEmotions] = useState([]);

    useEffect(() => {
      fetch("/api/emotion")
        .then((res) => res.json())
        .then(setEmotions);
    }, []);
    
  const handleSubmit = async () => {
    if (!input) return;
    setEmotion(input);
    await fetch("/api/emotion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emotion: input }),
    });
    setInput("");

    fetch("/api/emotion")
      .then((res) => res.json())
      .then(setEmotions);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">🔥 소리없는 아우성 (AshNote)</h1>

      <input
        type="text"
        placeholder="감정을 입력하세요..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-64 text-center"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        감정 저장하기
      </button>
      <EmoBurn />

      {emotion && (
        <>
          <p className="mt-4 text-lg">현재 감정: {emotion}</p>
          <button
            onClick={clearEmotion}
            className="text-sm text-gray-500 underline"
          >
            초기화
          </button>
        </>
      )}

      <section className="mt-6">
        <h2 className="font-semibold mb-2">저장된 감정 목록</h2>
        <ul className="space-y-1">
          {emotions.length > 0 ? (
            emotions.map((e: any) => (
              <li key={e.id} className="text-gray-700">
                {e.emotion}
              </li>
            ))
          ) : (
            <li className="text-gray-400">아직 저장된 감정이 없습니다.</li>
          )}
        </ul>
      </section>
    </main>
  );
}
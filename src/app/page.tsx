"use client";
import { useEmotionStore } from "@/store/useEmotionStore";
import { useState } from "react";

export default function Home() {
  const { emotion, setEmotion, clearEmotion } = useEmotionStore();
  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    if (!input) return;
    setEmotion(input);
    await fetch("/api/emotion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emotion: input }),
    });
    setInput("");
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
    </main>
  );
}
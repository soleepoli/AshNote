import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "AshNote",
  description: "소리없는 아우성 - 감정 해소 서비스",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
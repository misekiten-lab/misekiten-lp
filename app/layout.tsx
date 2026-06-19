import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ミセキテン | 小規模店舗の集客と業務を、まとめて整える",
  description:
    "Googleマップ、LINE、ホームページの集客導線から、新人教育マニュアル、タイミー受け入れ、店舗業務の仕組み化まで支援します。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

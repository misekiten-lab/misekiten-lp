import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ミセキテン | 地域店舗の集客導線を、まるごと整える",
  description:
    "ホームページ、Googleマップ、LINE導入まで。小さなお店の見つかる・伝わる・来店されるを支援する地域店舗向けWeb集客支援サービスです。",
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

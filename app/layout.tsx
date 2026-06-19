import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://misekiten.jp";
const siteTitle = "ミセキテン | 小規模店舗の集客と業務を、まとめて整える";
const siteDescription =
  "Googleマップ、LINE、ホームページの集客導線から、新人教育マニュアル、タイミー受け入れ、店舗業務の仕組み化まで支援します。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  verification: {
    google: "sD_-2A5Fc7mVHdNyqbXik9UpQ_JS_TSql7AklBWhHBc",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "ミセキテン",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/hero-operations-v2.png",
        alt: "ミセキテンの店舗支援サービス",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/hero-operations-v2.png"],
  },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ミセキテン",
    url: siteUrl,
    description: siteDescription,
    telephone: "+81-90-9982-3996",
    email: "misekiten@gmail.com",
    areaServed: {
      "@type": "Country",
      name: "日本",
    },
    serviceType: [
      "ホームページ制作・改善",
      "Googleマップ・MEO支援",
      "LINE公式アカウント導入支援",
      "店舗業務の仕組み化",
      "AI活用支援",
    ],
  };

  return (
    <html lang="ja">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}

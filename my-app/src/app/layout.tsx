import "./globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import GoogleAnalytics from "../components/api/GA";
import Adsense from "../components/api/Adsense";
import Link from "next/link";

export const metadata: Metadata = {
  openGraph: {
    title: "MHNow 魔物地圖",
    description: "歡迎上傳你看到的魔物...方便大家找怪喔",
    url: "https://mhnow.cc/",
    siteName: "MHNow 魔物地圖",
    locale: "zh_TW",
    type: "website",
    images: [
      {
        url: "/assets/og.jpg",
        width: 1200,
        height: 630,
        alt: "MHNow 魔物地圖",
      },
    ],
  },
  title: "MHNow 魔物地圖 Monster Hunter Now",
  description:
    "Monster Hunter Now 的各位獵人們 歡迎上傳你看到的魔物...方便大家找怪喔",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/assets/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/assets/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/assets/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw">
      <body>
        <Adsense />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        {children}
        <footer className="py-2 bg-slate-900 relative bottom-0 w-full">
          <div className="text-white text-center">
            <Link href="/privacy">隱私權政策</Link> |
            <Link href="/terms">使用者條款</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

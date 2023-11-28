import "./globals.css";
import "leaflet/dist/leaflet.css";
import type { Metadata } from "next";
import GoogleAnalytics from "../../components/api/GA";
import Adsense from "../../components/api/Adsense";
import Link from "next/link";
import Navbar from "@/components/UI/Navbar";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { I18nextProvider } from "react-i18next";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

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
  title: "MHNow 魔物地圖 Monster Hunter Now Map",
  description:
    "Monster Hunter Now 的各位獵人們 歡迎上傳你看到的魔物...方便大家找怪喔。芒亨Now、萌夯Now",
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
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <Adsense />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Navbar lng={lng} />
        {children}
        <footer className="py-2 bg-slate-900 relative bottom-0 w-full">
          <div className="text-white text-center">
            <Link href={`/${lng}/privacy`} locale={lng}>
              隱私權政策
            </Link>{" "}
            |
            <Link href={`/${lng}/terms`} locale={lng}>
              使用者條款
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin", "latin-ext"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin", "latin-ext"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "RALLY SOLO — Tennis không cần chờ ai",
    description: "Mô hình tập tennis một người với máy bắn bóng thông minh. Chủ động lịch, nhịp độ và mục tiêu tập luyện của riêng bạn.",
    icons: { icon: "/og.png", shortcut: "/og.png" },
    openGraph: {
      title: "RALLY SOLO — Tennis không cần chờ ai",
      description: "Tập tennis một mình với máy bắn bóng thông minh, theo nhịp của riêng bạn.",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "RALLY SOLO — Tennis không cần chờ ai" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "RALLY SOLO — Tennis không cần chờ ai",
      description: "Tập tennis một mình với máy bắn bóng thông minh, theo nhịp của riêng bạn.",
      images: [imageUrl],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}

import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./celebration.css";
import GiftPage from "./GiftPage";

const editorial = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: "400",
  style: ["normal", "italic"],
});

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Tháng Mười Thương Mến — Gửi em một mùa hoa",
  description: "Một món quà nhỏ dành riêng cho em nhân ngày Phụ nữ Việt Nam 20/10.",
  openGraph: {
    title: "Tháng Mười Thương Mến — Gửi em một mùa hoa",
    description: "Một món quà nhỏ dành riêng cho em nhân ngày Phụ nữ Việt Nam 20/10.",
    type: "website",
  },
};

export default function October20Page() {
  return <GiftPage fontClassName={editorial.variable} />;
}

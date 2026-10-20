import type { Metadata } from "next";
import "./celebration.css";
import GiftPage from "./GiftPage";

export const metadata: Metadata = {
  title: "Tháng Mười Thương Mến — Gửi bạn một mùa hoa",
  description: "Một món quà nhỏ dành riêng cho bạn nhân ngày Phụ nữ Việt Nam 20/10.",
  openGraph: {
    title: "Tháng Mười Thương Mến — Gửi bạn một mùa hoa",
    description: "Một món quà nhỏ dành riêng cho bạn nhân ngày Phụ nữ Việt Nam 20/10.",
    type: "website",
  },
};

export default function October20Page() {
  return <GiftPage />;
}

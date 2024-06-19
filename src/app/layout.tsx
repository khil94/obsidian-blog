import GlobalLayout from "@/containers/GlobalLayout";
import { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "zidru-blog",
  description: "초보 프론트엔드 개발자의 개발블로그 입니다.",
  icons: {
    icon: "/logo.png",
  },
};

const font = Noto_Serif_KR({
  weight: ["500"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}

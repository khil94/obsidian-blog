import GlobalLayout from "@/containers/GlobalLayout";
import StyledComponentsRegistry from "@/lib/registry";
import { ITheme } from "@/style/theme";
import { Analytics } from "@vercel/analytics/next";
import { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import { cookies } from "next/headers";
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
  function initTheme() {
    const cookieTheme = cookies().get("theme");
    if (cookieTheme) {
      return cookieTheme.value;
    } else {
      return "";
    }
  }
  const theme = initTheme();
  return (
    <html lang="ko">
      <body className={font.className}>
        <Analytics />
        <StyledComponentsRegistry>
          <GlobalLayout initialTheme={theme as ITheme}>{children}</GlobalLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

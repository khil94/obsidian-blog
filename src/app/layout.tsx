"use client";

import { themeStore } from "@/store";
import StyleProvider from "@/style/StyleProvider";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={themeStore}>
          <StyleProvider>{children}</StyleProvider>
        </Provider>
      </body>
    </html>
  );
}

"use client";

import { themeStore } from "@/store";
import StyleProvider from "@/style/StyleProvider";
import { Provider } from "react-redux";
import Navbar from "./Navbar";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={themeStore}>
      <StyleProvider>
        <Navbar />
        {children}
      </StyleProvider>
    </Provider>
  );
}

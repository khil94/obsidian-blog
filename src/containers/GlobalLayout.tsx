"use client";

import Flex from "@/components/Flex";
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
        <Flex justifyContent="center">{children}</Flex>
      </StyleProvider>
    </Provider>
  );
}

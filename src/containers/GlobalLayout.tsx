"use client";

import Flex from "@/components/Flex";
import { createThemeStore } from "@/store";
import StyleProvider from "@/style/StyleProvider";
import { ITheme } from "@/style/theme";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { styled } from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function GlobalLayout({
  children,
  initialTheme,
}: {
  children: React.ReactNode;
  initialTheme: ITheme;
}) {
  return (
    <Provider store={createThemeStore({ theme: initialTheme })}>
      <StyleProvider>
        <GlobalLayoutWrapper
          style={{
            minHeight: "100vh",
            flexDirection: "column",
            position: "relative",
            paddingBottom: "60px",
            alignItems: "center",
          }}
        >
          <Navbar />
          <Flex
            style={{
              justifyContent: "center",
              alignContent: "center",
              maxWidth: "768px",
              width: "100%",
            }}
          >
            <Suspense>{children}</Suspense>
          </Flex>
          <Footer />
        </GlobalLayoutWrapper>
      </StyleProvider>
    </Provider>
  );
}

const GlobalLayoutWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  overflow-x: hidden;
`;

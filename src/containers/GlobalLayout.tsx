"use client";

import Flex from "@/components/Flex";
import { createThemeStore } from "@/store";
import StyleProvider from "@/style/StyleProvider";
import { ITheme } from "@/style/theme";
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
            minHeight: "100%",
            height: "100vh",
            flexDirection: "column",
            position: "relative",
            alignItems: "center",
          }}
        >
          <Navbar />
          <Flex
            style={{
              justifyContent: "center",
              alignContent: "center",
              maxWidth: "1440px",
              width: "100%",
              height: "auto",
            }}
          >
            {children}
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

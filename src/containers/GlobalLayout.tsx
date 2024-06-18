"use client";

import Flex from "@/components/Flex";
import { themeStore } from "@/store";
import StyleProvider from "@/style/StyleProvider";
import { Provider } from "react-redux";
import { styled } from "styled-components";
import Navbar from "./Navbar";

export default function GlobalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={themeStore}>
      <StyleProvider>
        <GlobalLayoutWrapper
          style={{ height: "100vh", flexDirection: "column" }}
        >
          <Navbar />
          <Flex
            style={{
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {children}
          </Flex>
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

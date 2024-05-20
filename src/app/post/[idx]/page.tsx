"use client";
import useTheme from "@/hooks/useTheme";
import { useThemeSelector } from "@/store/useThemeSelector";
import { styled } from "styled-components";

export default function PostDetail(params: any) {
  console.log(params);
  const { toggleTheme } = useTheme();
  const { theme } = useThemeSelector((theme) => theme.theme);
  console.log("current theme", theme);

  return (
    <div>
      detail{" "}
      <div
        onClick={() => {
          toggleTheme();
          console.log(theme);
        }}
      >
        <TestDiv>TEST</TestDiv>
      </div>
    </div>
  );
}

const TestDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.background1};
`;

import { ThemeRootState } from "@/store";
import { useThemeSelector } from "@/store/useThemeSelector";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { device } from "./device";
import { palette } from "./palette";
import { darkTheme, lightTheme } from "./theme";

interface IProps {
  children: ReactNode;
}

export default function StyleProvider({ children }: IProps) {
  const { theme } = useThemeSelector((theme: ThemeRootState) => theme.theme);
  const targetTheme = theme === "dark" ? darkTheme : lightTheme;
  const targetPalette = { ...targetTheme, ...palette };
  return (
    <ThemeProvider
      theme={{
        device,
        palette: targetPalette,
      }}
    >
      {children}
    </ThemeProvider>
  );
}

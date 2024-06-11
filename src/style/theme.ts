import { palette } from "./palette";
export const lightTheme = {
  background1: "#ffffff",
  background2: "#3A536D",

  border: "#d2d4d6",

  text1: "#1f2d28",
};

export const darkTheme = {
  background1: "#0d1117",
  background2: "#24292e",

  border: "#515961",

  text1: "#e6edf3",
};

export type IPaletteTheme = typeof darkTheme & typeof palette;

export type ITheme = "light" | "dark";

export const lightTheme = {
  background1: "#ffffff",
  background2: "#3A536D",
  white: "#ffffff",
  black: "#121212",
  main: "#27D5BA",
  border: "#d2d4d6",

  text1: "#1f2d28",
};

export const darkTheme = {
  background1: "#0d1117",
  background2: "#24292e",
  white: "#fafafa",
  black: "#121212",
  border: "#515961",
  main: "#29BDA6",
  text1: "#e6edf3",
};

export type IPaletteTheme = typeof darkTheme;

export type ITheme = "light" | "dark";

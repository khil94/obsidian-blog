import { device } from "@/style/device";
import { palette } from "@/style/palette";
import { lightTheme } from "@/style/theme";

export type ICustomTheme = {
  palette: typeof palette;
  theme: typeof lightTheme;
  device: typeof device;
};

export type ITheme = "light" | "dark";

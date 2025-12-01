import { device } from "@/style/device";
import { lightTheme } from "@/style/theme";

export type ICustomTheme = {
  theme: typeof lightTheme;
  device: typeof device;
};

export type ITheme = "light" | "dark";

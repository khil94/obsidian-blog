import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ThemeRootState } from ".";

export const useThemeSelector: TypedUseSelectorHook<ThemeRootState> =
  useSelector;

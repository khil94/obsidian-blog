import { ITheme } from "@/style/theme";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export type IThemeState = {
  theme: ITheme;
};

const createThemeSlice = (initialState: IThemeState) =>
  createSlice({
    name: "theme",
    initialState,
    reducers: {
      changeTheme(state, action) {
        state.theme = action.payload;
      },
    },
  });

export function createThemeStore(initialTheme: IThemeState) {
  const themeSlice = createThemeSlice(initialTheme);

  return configureStore({
    reducer: {
      theme: themeSlice.reducer,
    },
  });
}

export type ThemeStore = ReturnType<typeof createThemeStore>;
export type ThemeRootState = ReturnType<ThemeStore["getState"]>;

export const { changeTheme } = createThemeSlice({ theme: "light" }).actions;

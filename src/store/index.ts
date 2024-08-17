import { ITheme } from "@/style/theme";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export type IThemeState = {
  theme: ITheme;
};

const initialState = {
  theme: "light",
} as IThemeState;

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const themeStore = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});

export type ThemeRootState = ReturnType<typeof themeStore.getState>;

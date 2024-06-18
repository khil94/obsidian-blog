"use client";
import { changeTheme } from "@/store";
import { useThemeSelector } from "@/store/useThemeSelector";
import { ITheme } from "@/style/theme";
import { getCookie, setCookie } from "cookies-next";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useThemeSelector((theme) => theme.theme);
  const setTheme = useCallback(
    (val: ITheme) => {
      document.documentElement.setAttribute("data-theme", val);
      dispatch(changeTheme(val));
      setCookie("theme", val);
    },
    [dispatch]
  );

  const initiateState = useCallback(() => {
    const cookieTheme = getCookie("theme");

    if (cookieTheme) {
      setTheme(cookieTheme as ITheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : ("light" as ITheme);
      setTheme(systemTheme);
    }
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [setTheme, theme]);

  useEffect(() => {
    initiateState();
  }, [setTheme]);

  return { toggleTheme };
};

export default useTheme;

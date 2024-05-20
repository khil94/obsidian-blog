"use client";
import { changeTheme } from "@/store";
import { useThemeSelector } from "@/store/useThemeSelector";
import { ITheme } from "@/style/theme";
import { getCookie } from "cookies-next";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useThemeSelector((theme) => theme.theme);
  console.log("inside useTheme", theme);
  const setTheme = useCallback(
    (val: ITheme) => {
      document.documentElement.setAttribute("data-theme", val);
      console.log("inside set theme", val);
      dispatch(changeTheme(val));
      // setCookie("theme", val);
    },
    [dispatch]
  );

  const initiateState = useCallback(() => {
    const cookieTheme = getCookie("theme");
    console.log("inside initiate", cookieTheme);

    if (cookieTheme) {
      setTheme(cookieTheme as ITheme);
    } else {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : ("light" as ITheme);
      console.log("inside initiate cookie", cookieTheme);
      setTheme(systemTheme);
    }
  }, [setTheme]);

  const toggleTheme = useCallback(() => {
    console.log("inside toggle theme", theme);
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

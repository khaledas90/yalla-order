"use client";
import { useState, useCallback } from "react";
import { MainContext, MainType } from "../context/MainContext";

export default function MainContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setThemeState] = useState<string>("restaurant");

  const setTheme = useCallback((newTheme: string) => {
    setThemeState(newTheme);
  }, []);

  const contextValue: MainType = {
    theme,
    setTheme,
  };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
}

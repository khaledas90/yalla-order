import { createContext, useContext } from "react";

export type MainType = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const MainContext = createContext<MainType | undefined>(undefined);

export default function useMainContext() {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainContextProvider");
  }
  return context;
}

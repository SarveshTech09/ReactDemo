import { createContext, useContext } from "react";

const ThemeContext = createContext({
    theme: "light", // default theme
    darkTheme: "dark",
    lightTheme: "light",
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
}
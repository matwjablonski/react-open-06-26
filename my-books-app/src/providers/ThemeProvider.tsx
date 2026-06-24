import type { Theme } from "@emotion/react";
import { ThemeContext, type ThemeContextType } from "../context/ThemeContext";
import { useState } from "react";

type ThemeProviderProps = {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light');

    const themeContextValue = {} as ThemeContextType;

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    )

}
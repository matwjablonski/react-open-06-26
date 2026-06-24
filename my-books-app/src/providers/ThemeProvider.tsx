import { ThemeContext, type Theme } from "../context/ThemeContext";
import { useMemo, useState } from "react";

type ThemeProviderProps = {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light');

    const themeContextValue = useMemo(() => ({
        theme,
        toggleTheme: () => {
            setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        }
    }), [theme]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    )

}
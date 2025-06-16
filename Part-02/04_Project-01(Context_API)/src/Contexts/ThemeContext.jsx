import { createContext, useState } from "react";

export const ThemeContext = createContext([])

export function ThemeProvider({children}) {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("darkMode")))
    
    return (
        <ThemeContext.Provider value={[isDark, setIsDark]}>
            {children}
        </ThemeContext.Provider>
    )
}

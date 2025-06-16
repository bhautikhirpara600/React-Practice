import Header from "./Components/Header"
import { Outlet } from "react-router"
import { ThemeProvider } from "./Contexts/themeContext"

export default function App() {
    
    return (
        <ThemeProvider>
            <Header />
            <Outlet />
        </ThemeProvider>
    )
}
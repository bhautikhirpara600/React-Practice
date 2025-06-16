import { useState } from "react"
import Header from "./Components/Header"
import { Outlet } from "react-router"

export default function App() {
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("darkMode")))

    return (
        <>
            <Header theme={[isDark, setIsDark]} />
            <Outlet context={isDark} />
        </>
    )
}
import { useContext } from "react"
import { Link } from "react-router"
import { ThemeContext } from "../Contexts/themeContext"

function Header() {
    const [isDark, setIsDark] = useContext(ThemeContext)

    const themeChange = () => {
        setIsDark(!isDark)
        localStorage.setItem("darkMode", !isDark)
    }

    return (
        <header className={`header-container ${isDark ? "dark" : ""}`}>
            <div className="header-content">
                <h2 className="title">
                    <Link to="/">Where in the world?</Link>
                </h2>
                <p className="theme-changer" onClick={themeChange}>
                    <i className={`fa-solid fa-${isDark ? "sun" : "moon"}`} />
                    &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
                </p>
            </div>
        </header>
    )
}

export default Header
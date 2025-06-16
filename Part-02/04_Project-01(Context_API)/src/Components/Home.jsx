import { useState } from 'react'
import '../Style/App.css'
import CountryList from './CountryList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import { useTheme } from '../Hooks/useTheme'

export default function Home() {
    const [query, setQuery] = useState("")

    const [isDark] = useTheme() 

    return (
        <>
            <main className={isDark ? "dark" : ""}>
                <div className="search-filter-container">
                    <SearchBar setQueryFun={setQuery} />
                    <SelectMenu />
                </div>
                <CountryList query={query} />
            </main>
        </>
    )
}
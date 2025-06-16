import { useSearchQuery } from "../Hooks/useSearchQuery"

function SearchBar() {

    const [_, setQuery] = useSearchQuery()

    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass" />
            <input onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchBar
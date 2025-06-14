const SearchBar = ({eventHandler}) => {
    return (
        <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input onChange={eventHandler} className="search-input" type="text" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchBar
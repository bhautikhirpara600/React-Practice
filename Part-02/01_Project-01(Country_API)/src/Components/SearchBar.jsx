function SearchBar({ setQueryFun }) 
{
    return (
        <div className="search-container">
            <i className="fa-solid fa-magnifying-glass" />
            <input onChange={(e) => setQueryFun(e.target.value)} type="text" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchBar
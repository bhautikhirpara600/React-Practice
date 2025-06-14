import { useState } from 'react'
import './Style/App.css'
import CountryList from './Components/CountryList'
import SearchBar from './Components/SearchBar'
import SelectMenu from './Components/SelectMenu'

function App() {
  const [query, setQuery] = useState("")
  
  return (
    <>
      <main>
        <div className="search-filter-container">
          <SearchBar setQueryFun={setQuery} />
          <SelectMenu />
        </div>
        <CountryList query={query} />
      </main>
    </>
)
}

export default App

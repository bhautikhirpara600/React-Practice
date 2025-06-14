import { useState } from 'react'
import './App.css'
import CountryList from './Components/CountryList'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import SelectMenu from './Components/SelectMenu'

function App() {
  const [query, setQuery] = useState("")
  
  return (
    <>
      <Header />
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

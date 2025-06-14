import './App.css'
import CountryList from './Components/CountryList'
import Header from './Components/Header'
import SearchBar from './Components/SearchBar'
import SelectMenu from './Components/SelectMenu'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <SelectMenu />
        </div>
        <CountryList />
      </main>
    </>
)
}

export default App

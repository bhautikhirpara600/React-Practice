import { useEffect, useState } from "react"
import SearchBar from './SearchBar'
import DropDownMenu from './DropDownMenu'
import CountryCard from './CountryCard'
import ShimmerEffectHomePage from "./ShimmerEffectHomePage"

const MainSection = () => {
    const [countryList, setCountryList] = useState(null)
    const [query, setQuery] = useState("")
    const [region, setRegion] = useState(false)

    const clickHandler = () => {
        document.querySelector(".dropdown-container").classList.toggle("show")
    }

    const checkRegion = (e) => {
        setRegion(true)
        if (e.target !== e.currentTarget) {
            document.querySelector("#dropdown-text").innerText = e.target.innerText
            if(e.target.innerText === "All Region") {
                location.href = "/"
            } else {
                setQuery(e.target.innerText)
            }
        } else {
            alert("Click on Region...!")
        }
        
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(res => res.json())
            .then((data) => setCountryList(data))
    }, [])

    return countryList === null ? (<ShimmerEffectHomePage />) : (
        <main>
            <div className="search-container">
                <SearchBar eventHandler={(e) => setQuery(e.target.value)} />
                <DropDownMenu clickHandler={clickHandler} checkRegion={checkRegion} />
            </div>
            <div className="country-container">
                {
                    region ?
                    countryList.filter((country) => country.region.toLowerCase().includes(query.toLowerCase())).map((country) => {
                        return ( <CountryCard 
                            flagURL={country.flags.svg}
                            key={country.name.common}
                            name={country.name.common}
                            population={country.population.toLocaleString("en-in")}
                            region={country.region}
                            capital={country.capital?.join(", ")}
                        /> )
                    }) :
                    countryList.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase())).map((country) => {
                        return ( <CountryCard 
                            flagURL={country.flags.svg}
                            key={country.name.common}
                            name={country.name.common}
                            population={country.population.toLocaleString("en-in")}
                            region={country.region}
                            capital={country.capital?.join(", ")}
                        /> )
                    })
                }
            </div>
        </main>
    )
}

export default MainSection
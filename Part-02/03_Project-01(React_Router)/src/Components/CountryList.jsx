import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function CountryList({ query }) {
    const [countryData, setCountryData] = useState([])
    const [errorOk, setErrorOk] = useState(false)

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/independent?status=true")
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
                throw new Error(`HTTP error status : ${res.status}`)
            })
            .then(data => setCountryData(data))
            .catch(err => {
                console.log("Data fetch failed::", err)
                setErrorOk(true)
            })
    }, [])

    if(errorOk) {
        return <h1>Something error occurred in fetch API</h1>
    }

    return (
        <div className="countries-container">
            {
                countryData.filter((country) => country.name.common.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((country) => <CountryCard 
                    key={country.name.common}
                    countryName={country.name.common}
                    population={country.population.toLocaleString("en-IN")}
                    imgURL={country.flags.svg}
                    region={country.region}
                    capital={country.capital?.[0]}
                />)
            }
        </div>
    )
}

export default CountryList
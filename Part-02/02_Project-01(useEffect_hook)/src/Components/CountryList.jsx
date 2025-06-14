import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function CountryList({ query }) {
    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/independent?status=true")
            .then(res => res.json())
            .then(data => setCountryData(data))
    }, [])

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
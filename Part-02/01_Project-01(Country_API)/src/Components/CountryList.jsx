import CountryCard from "./CountryCard";
import countryData from "./countriesData"

function CountryList() {
    return (
        <div className="countries-container">
            {
                countryData.map((country) => <CountryCard 
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
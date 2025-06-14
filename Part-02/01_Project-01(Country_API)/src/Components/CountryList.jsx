import CountryCard from "./CountryCard";
import countryData from "./countriesData"

function CountryList({ query }) {
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
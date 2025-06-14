import { useEffect, useState } from 'react'
import './CountryDetail.css'

const CountryDetail = () => {
    const countryName = new URLSearchParams(window.location.search).get("name")
    const [[country], setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data.filter((country) => country.name.common === countryName)))
    }, [])
    
    return country === undefined ? (<h1>Loading...</h1>) : (
        <main>
            <div className="back-btn clickable">
                <i className="fa-solid fa-arrow-left-long"></i>
                <span>Back</span>
            </div>
            <div className="country-detail-container">
                <div className="country-flag-div"><img className="country-flag" src={country.flags.svg} alt={`${country.name.common} Flag`} /></div>
                <div className="country-detail-text-container">
                    <h1 className="country-name"> {country.name.common} </h1>
                    <div className="country-detail-text">
                        <p><b>Native Name:</b> <span className="native-name"> {Object.values(country.name.nativeName)[0].common} </span></p>
                        <p><b>Population:</b> <span className="population"> {country.population.toLocaleString("en-in")} </span></p>
                        <p><b>Region:</b> <span className="region"> {country.region} </span></p>
                        <p><b>Sub Region:</b> <span className="subregion"> {country.subregion} </span></p>
                        <p><b>Capital:</b> <span className="capital"> {country.capital.join(", ")} </span></p>
                        <p><b>Top Level Domain:</b> <span className="top-level-domain"> {country.tld.join(", ")} </span></p>
                        <p><b>currencies:</b> <span className="currency"> {Object.values(country.currencies)[0].name} </span></p>
                        <p><b>Languages:</b> <span className="language"> {Object.values(country.languages).join(", ")} </span></p>
                    </div>
                    <div className="border-country">
                        <span><b>Border Countries: &nbsp;</b></span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CountryDetail
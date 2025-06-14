import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import ShimmerEffectCountryDetail from './ShimmerEffectCountryDetail'
import './CountryDetail.css'

const CountryDetail = () => {

    const params = useParams()
    const countryName = params.country

    const [country, setCountry] = useState(null)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then(res => res.json())
        .then(([data]) => setCountry(
            {
                flagURL: data.flags.svg,
                name: data.name.common,
                nativeName: Object.values(data.name.nativeName)[0].common,
                population: data.population,
                region: data.region,
                subregion: data.subregion,
                capital: data.capital.join(", "),
                tld: data.tld.join(", "),
                currency: Object.values(data.currencies).map((ele) => ele.name).join(", "),
                language: Object.values(data.languages).join(", "),
                borders: data.borders ? data.borders.map((borderCode) => {
                    return (
                        fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
                        .then(res => res.json())
                        .then(([countryName]) => countryName.name.common)
                    )
                }) : []
            })
        ).catch((error) => {
            console.log(error);
            return setNotFound(true)})
    }, [countryName])

    if(notFound) {
        return (<h1>Country Not Found</h1>)
    }

    return country === null ? <ShimmerEffectCountryDetail /> : (
        <main>
            <div onClick={() => history.back()} className="back-btn clickable">
                <i className="fa-solid fa-arrow-left-long"></i>
                <span>Back</span>
            </div>
            <div className="country-detail-container">
                <div className="country-flag-div"><img className="country-flag" src={country.flagURL} alt={`${country.name} Flag`} /></div>
                <div className="country-detail-text-container">
                    <h1 className="country-name"> {country.name} </h1>
                    <div className="country-detail-text">
                        <p><b>Native Name:</b> <span className="native-name"> {country.nativeName} </span></p>
                        <p><b>Population:</b> <span className="population"> {country.population.toLocaleString("en-in")} </span></p>
                        <p><b>Region:</b> <span className="region"> {country.region} </span></p>
                        <p><b>Sub Region:</b> <span className="subregion"> {country.subregion} </span></p>
                        <p><b>Capital:</b> <span className="capital"> {country.capital} </span></p>
                        <p><b>Top Level Domain:</b> <span className="top-level-domain"> {country.tld} </span></p>
                        <p><b>currencies:</b> <span className="currency"> {country.currency} </span></p>
                        <p><b>Languages:</b> <span className="language"> {country.language} </span></p>
                    </div>
                    {country.borders.length !== 0 && <div className="border-country">
                        <span><b>Border Countries: &nbsp;</b></span>
                        {country.borders.map((borderCountry, i) => {
                            return <Link className='clickable country-text' key={i} to={`/${borderCountry.value}`}>{borderCountry}</Link>
                        })}
                    </div>}
                </div>
            </div>
        </main>
    )
}

export default CountryDetail
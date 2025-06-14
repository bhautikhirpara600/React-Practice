function CountryCard({ countryName, population, imgURL, region, capital }) 
{
    return (
        <a className="country-card" href={`/country?name=${countryName}`}>
            <img src={imgURL} alt={`${countryName} Flag`} />
            <div className="card-text">
                <h3 className="card-title">{countryName}</h3>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </a>
    )
}

export default CountryCard
import { Link } from "react-router"

function CountryCard({ countryName, population, imgURL, region, capital }) 
{
    return (
        <Link className="country-card" to={`/${countryName}`}>
            <img src={imgURL} alt={`${countryName} Flag`} />
            <div className="card-text">
                <h3 className="card-title">{countryName}</h3>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </Link>
    )
}

export default CountryCard
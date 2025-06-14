import { Link } from "react-router"

const CountryCard = ({flagURL, name, population, region, capital}) => {
    return (
        <Link className="country-card clickable" to={`/${name}`}>
            <div className="flag-img-div">
                <img className="flag-img" src={flagURL} alt="Grenada-flag" />
            </div>
            <div className="country-card-text">
                <h3 className="country-name">{name}</h3>
                <p><b>Population:</b> <span className="population">{population}</span></p>
                <p><b>Region:</b> <span className="region">{region}</span></p>
                <p><b>Capital:</b> <span className="capital">{capital}</span></p>
            </div>
        </Link>
    )
}

export default CountryCard
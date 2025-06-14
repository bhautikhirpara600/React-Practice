function CountryCard() 
{
    return (
        <a className="country-card" href="/country.html?name=Togo">
            <img src="https://flagcdn.com/tg.svg" alt="Togo flag" />
            <div className="card-text">
                <h3 className="card-title">Togo</h3>
                <p><b>Population: </b>82,78,737 </p>
                <p><b>Region: </b>Africa</p>
                <p><b>Capital: </b>Lomé</p>
            </div>
        </a>
    )
}

export default CountryCard
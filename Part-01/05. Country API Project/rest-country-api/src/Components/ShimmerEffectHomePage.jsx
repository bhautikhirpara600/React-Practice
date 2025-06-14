const ShimmerEffectHomePage = () => {
    return (
        <main>
            <div className="search-container">
                <div className="search-bar shimmer-home-search-bar"></div>
                <div className="dropdown-container shimmer-home-dropdown"></div>
            </div>
            <div className="country-container">
                {
                    Array.from({length: 12}).map((el, i) => <div key={i} className="country-card shimmer-home"></div>)
                }
            </div>
        </main>
    )
}

export default ShimmerEffectHomePage
import "../Style/CountryListShimmer.css"
export default function CountryListShimmer() {
    return (
        <div className="countries-container">
            {
                Array.from({length: 10}).map((el, i) => <div key={i} className="country-card shimmer-card"></div>)
            }
        </div>
    )
}
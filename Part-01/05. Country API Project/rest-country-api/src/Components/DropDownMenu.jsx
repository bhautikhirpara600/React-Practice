const DropDownMenu = ({ clickHandler, checkRegion }) => {

    window.addEventListener("click", () => {
        document.querySelector(".dropdown-container")?.classList.remove("show")
    })

    return (
        <div onClick={(e) => e.stopPropagation()} className="dropdown-container">
            <div onClick={clickHandler} className="dropdown-menu">
                <span id="dropdown-text">Filter by Region</span>
                <div className="dropdown-aero"><i className="fa-solid fa-angle-up"></i></div>
            </div>
            <div onClick={checkRegion} className="dropdown-value">
                <a href="#Africa" >Africa</a>
                <a href="#America">America</a>
                <a href="#Asia">Asia</a>
                <a href="#Europe">Europe</a>
                <a href="#Oceania">Oceania</a>
                <a href="#All-Region">All Region</a>
            </div>
        </div>
    )
}

export default DropDownMenu
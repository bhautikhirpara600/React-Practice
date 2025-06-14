const AppleBasket = ({appleCount, basketName}) => {
    return (
        <div className="basket">
            <h1><span>{appleCount}</span> Apples</h1>
            <p>{basketName} {appleCount === 10 && "(full)"} {appleCount === 0 && "(empty)"} </p>
        </div>
    )
}

export default AppleBasket
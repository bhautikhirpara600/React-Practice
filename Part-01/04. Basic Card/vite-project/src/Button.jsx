const Button = ({bgBtn, imgURL, btnName, smallText, bigText}) => {
    return (
        <>
            <div className={bgBtn}>
                 <div className="btn-box">
                    <div className="img-box">
                        <img src={imgURL} alt={btnName} />
                    </div>
                    <div className="btn-text">
                        <p className="small-text">{smallText}</p>
                        <p className="big-text">{bigText}</p>
                    </div>
                 </div>   
            </div>
        </>
    )
}

export default Button
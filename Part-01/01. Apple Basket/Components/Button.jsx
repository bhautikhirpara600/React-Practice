export const Button = ({imgURL, title}) => {
    return (
        <button className="btn">
            <div className="img-div">
                <img src={imgURL} alt={title}  />
            </div>
        </button>
    )
}
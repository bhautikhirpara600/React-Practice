const Button = ({imgURL, title, clickEvent}) => {
    return (
        <button onClick={clickEvent} className="btn" title={title}>
            <img src={imgURL} alt={title} />
        </button>
    )
}

export default Button
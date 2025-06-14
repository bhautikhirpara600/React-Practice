const Sky = ({ImgURL, Title}) => {
    return(
        <div className="img-box">
            <img className="image" src={ImgURL} alt={Title} />
        </div>
    )
}

export default Sky
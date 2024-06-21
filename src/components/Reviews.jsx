function Reviews({style, name, occupation, review, image }) {
    return (
        <>
            <div className="reviewCard" style={style}>
                <div>
                    <div>
                        <p className="reviewerName">{name}</p>
                        <p className="reviewerOccupation">{occupation}</p>
                    </div>
                    <div>
                        <img className="reviewerImage" src={image} alt="" />
                    </div>

                </div>
                <div>
                    <p className="reviewText">{review}</p>
                </div>
            </div>
        </>
    )
}



export default Reviews;
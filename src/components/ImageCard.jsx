function ImageCard({ image, title, text, index, additionalStyle }) {

    const styles = {
        imageCard: {
            minWidth: "240px",
            minHeight: "300px",
            display: "grid",
            gridTemplate: "60% 40% / 100%",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            flexBasis: "250px",
            cursor: "pointer",
            borderRadius: "15px",
            overflow: "hidden",
            ...additionalStyle
        },

        cardImage: {
            width: "100%",
            height: "100%",
            transition: ".3s"
        },

        cardImageWrapper: {
            width: "100%",
            overflow: "hidden",
            height: "100%"
        },

        cardContent: {
            width: "100%",
            height: "100%",
            padding: "0.5em 1em",
            
        },

        cardText: {
            fontFamily: "Work Sans",
            fontSize: ".7em",
            marginTop: "1em",
        }, 

        cardTitle: {
            fontWeight: 400,
            fontFamily: "Arial",
            fontSize: "1.2em",
        }
    }
    return (
        <>
            <div className="imageCard" style={styles.imageCard} key={index}>
                <div style={styles.cardImageWrapper}>
                    <img style={styles.cardImage} className="cardImage" src={image} />
                </div>
                <div style={styles.cardContent} className="cardContent">
                    <div className="cardTitle" style={styles.cardTitle}>{title}</div>
                    <div className="cardText" style={styles.cardText}>{text}</div>
                </div>
            </div>
        </>
    )
}

export default ImageCard;
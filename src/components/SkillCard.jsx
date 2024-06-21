function SkillCard({text, darkmode}) {
    const cardStyle = {
        width: "auto", 
        height: "auto", 
        padding: ".3em 1em",
        backgroundColor: "whitesmoke",
        borderRadius: "20px",
        display: "grid",
        placeItems: "center",
        fontWeight: "bold", 
        fontFamily: "arial",
    }
    const textStyle = {
        fontSize: "1em",
        textColor: `${(darkmode) ? "white" : "black"}`
    }
    return (
        <>  
            <div style={cardStyle} className="skillCard">
                <p style={textStyle}>{text}</p>
            </div>
        </>
    ) 
}


export default SkillCard;
function ServiceCard({ service, style }) {
    return (
        <>
            <div className="serviceCard" style={style}>
                <div className="serviceIcon">
                    <i className={service.icon}></i>
                </div>
                <div>
                    <p className="serviceName">{service.name}</p>
                </div>
            </div>

        </>
    )
}

export default ServiceCard;

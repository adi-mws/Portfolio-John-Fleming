import ServiceCard from "./ServiceCard";
import { animate } from "../animations";

function ServiceSection() {
    const services = [
        {
            name: "Website Building",
            icon: "fa-solid fa-laptop-code"
        },
        {
            name: "UI/UX Design",
            icon: "fa-solid fa-pen-nib"
        },
        {
            name: "Android Development",
            icon: "fa-solid fa-mobile-screen"
        },
        {
            name: "Dashboard Creation",
            icon: "fa-solid fa-chart-pie"
        },
        {
            name: "Graphic Design",
            icon: "fa-solid fa-leaf"
        },
        {
            name: "AWS Project",
            icon: "fa-brands fa-aws"
        },
    ]

    let scrolled = false
    addEventListener("scroll", (e) => {
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop >2750 && !scrolled) {
            scrolled = true;
            const text = document.getElementById("serviceText");
            animate(text, 0, 0.5)
            const serviceCard = document.getElementsByClassName("serviceCard");
            animate(serviceCard, 0, 1, "scale");
        }
    });


    const animationStylePreset1 = {
        opacity: '0%', 
        transform: "translate(0, 30px)"
    }
    const animationStylePreset2= {
        transform: "scale(0)",

    }
    return (
        <>
            <div id="serviceSection">
                <div className="sectionTitlebar">Services</div>
                <div className="container">
                    <p id="serviceText" style={animationStylePreset1}>I specialize in crafting responsive and scalable web applications, android applications, dashboards and many more, delivering seamless user experiences from front-end to back-end. With expertise in modern frameworks and technologies, I bring innovative solutions to life, tailored to your unique buisness needs.<br/>Let's transform your ideas into dynamic digital products.</p>
                    <div id="serviceWrapper">
                        {
                            services.map((item, index) => {
                                return <ServiceCard service={item} key={index} style={animationStylePreset2}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default ServiceSection;
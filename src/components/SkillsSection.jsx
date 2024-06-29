import SkillCard from "./SkillCard";
import { animate } from "../../public/animations";
import image from "/assets/skl.png"

function SkillsSection() {

    let scrolled = false
    addEventListener("scroll", (e) => {
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 750 && !scrolled) {
            scrolled = true;
            const skills  = document.getElementsByClassName("skills");
            animate(skills[0], 0, 0.5);
            animate(skills[1], 0.3, 0.5);

            // adding animations to text

            const text = document.getElementById("skillDescription");
            const image = document.getElementById("skillIllustration");
            animate(text, 0, 0.5);
            animate(image, .3, 0.5)
        }

      
    })

    // fade and slideUp
    const animationStylePreset1 = {
        opacity: '0%', 
        transform: "translate(0, 30px)"
    }
    // fade
    const animationStylePreset2 = {
        opacity: "0%"
    }
    return (
        <>
            <div id="skillsSection">
                <div className="sectionTitlebar">SKILLS</div>
                <div className="container">
                    <div id="skillsContainer">
                        <div className="skillsWrapper">
                            <p>Frontend Skills</p>
                            <div className="skills" style={animationStylePreset1}>
                                <SkillCard text={"React JS"} />
                                <SkillCard text={"Vue JS"} />
                                <SkillCard text={"Figma"} />
                                <SkillCard text={"Adobe XD"} />
                                <SkillCard text={"SCASS"} />
                                <SkillCard text={"React Native"} />
                                <SkillCard text={"Flutter"} />
                            </div>
                        </div>
                        <div className="skillsWrapper">
                            <p>Backend Skills</p>

                            <div className="skills" style={animationStylePreset1}>
                                <SkillCard text={"Node JS"} />
                                <SkillCard text={"Express JS"} />
                                <SkillCard text={"Next JS"} />
                                <SkillCard text={"DevOps"} />
                                <SkillCard text={"AWS"} />
                                <SkillCard text={"Spring"} />
                                <SkillCard text={"Spring Boot"} />

                            </div>
                        </div>
                    </div>
                    <div id="skillsContent">


                        <p id="skillDescription" style={animationStylePreset1}>
                            As a versatile developer, I excel in both frontend and backend development, creating dynamic and responsive web applications. My expertise includes React, Vue.js, Node.js, and Python with Django, ensuring seamless integration and robust functionality. I'm skilled in UI/UX design, using tools like Figma and Adobe XD to craft intuitive interfaces. With strong DevOps and cloud computing knowledge, I manage scalable infrastructure and efficient CI/CD pipelines. My problem-solving abilities and collaborative approach ensure high-quality results and effective teamwork.</p>
                        <img style={animationStylePreset2} id="skillIllustration" src={image} alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}


export default SkillsSection;


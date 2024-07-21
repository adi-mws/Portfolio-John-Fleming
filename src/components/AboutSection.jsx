import { countingAnimation, animate} from "../../public/animations";

// Starts all the animation which works inside onscroll
let scroll500Boolean = true;
addEventListener("scroll", (e) => {
    // console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 180 && scroll500Boolean) {
        scroll500Boolean = false;
        const regularClients = document.getElementById("regularClientsCount");
        const yearsOfExperienceCount = document.getElementById("yearsOfExperienceCount");
        countingAnimation([regularClients, yearsOfExperienceCount], 1);
        const aboutMeText = document.getElementById("aboutMeText"); 
        animate(aboutMeText.children[0], 0, 0.5);
        animate(aboutMeText.children[1], 0.3, 0.5);

        const expContainer = document.getElementById("clientAndExperienceContainer"); 
        animate([expContainer.children[0].children[1], expContainer.children[1].children[1]], 0, 0.5);

    }
})


function AboutSection() {
    const animationStylePreset1 = {
        opacity: '0%', 
        transform: "translate(0, 30px)"
    }

    return (
        <>
            <div id="aboutSection">
                <div className="sectionTitlebar" id="aboutSectionTitlebar">ABOUT ME</div>

                <div className="container">

                    <div id="aboutMeText">
                        <p style={animationStylePreset1}>Hello! I'm John Fleming, a passionate and creative front end designer and developer with over 10 years of experience in crafting visually stunning and user-friendly websites. My expertise lies at the intersection of design and technology, where I bring innovative ideas to life through code.</p>
                        <p style={animationStylePreset1}>My journey in the world of web design and development began with a fascination for how visual aesthetics and functionality come together to create engaging online experiences. Over the years, I've had the pleasure of working with diverse clients, from startups to established companies, helping them build their online presence and achieve their digital goals.</p>
                    </div>
                    <div id="clientAndExperienceContainer">
                        <div>
                            <p><span id="regularClientsCount">90</span>+</p>
                            <p style={animationStylePreset1}>Regular <br /> Clients</p>
                        </div>
                        <div>
                            <p><span id="yearsOfExperienceCount">10</span>+</p>
                            <p style={animationStylePreset1}>Years of <br /> Experience</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutSection;
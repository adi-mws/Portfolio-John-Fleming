import React from "react";
import { animate } from "../animations";

// Animations 

// Glow and shine once when loaded 





function shineOnce(delay) {

    /* This function glows icons and buttons of the landing section after the 
    page is loaded (after given time). This effect delays itself for sometime 
    till the animation is over. animationWaitTime is the parameter which tells
    how much seconds the object will keep shining. The function is delayed from
    the onload event after some seconds because the other animations should 
    complete itself in a particular amount of time.*/

    // Configration 
    const animationWaitTime = 2; // in secs
    const icons = document.getElementById("socialMediaRedirections").children;

    

    const glow_elements = (elem) => {
        elem.style.textShadow = "0px 0px 21px #5A639C";
    
    }

    const normalise_elements = (elem) => {
            elem.style.textShadow = "";
        
    }

    const glowTime = setTimeout(() => {
        // Animation Logic
        Array.from(icons).map(glow_elements);
    }, delay * 1000);

    const unglowtime = setTimeout(() => {
        Array.from(icons).map(normalise_elements);
    }, (delay + animationWaitTime) * 1000);
}




// Onload Animation of the object
addEventListener('load', () => {
    // Makes elements shine after (given) seconds after onloading of the landing section
    shineOnce(1.5);
    const texts = document.getElementById("textWrapper");
    const connections = document.getElementById("connectionsWrapper");
    // element hide
    // texts.children[0].style.transform = "translate("
    animate(texts.children[0],0, .5)
    animate(texts.children[1], .3, .5)
    animate(texts.children[2],.6, .5)
    animate(texts.children[3], 1, .5)

    animate(connections.children[0], 1, .5)
    animate(connections.children[1], 1.2, .5)

})

function LandingSection() {
    return (
        <>
            <div id="landingSection">
                {/* <img id="upperEclipse" src="src/assets/upper-eclipse.png" alt="upper-eclipse" /> */}
                <div className="container">

                    <div id="landingSectionLeft">
                        {/* Main Text Container (Hi, I am ...) */}
                        <div id="textContainer">
                            <div id="textWrapper">
                                <p style={{opacity: '0%', transform: "translate(0, 30px)"}}>Hi, I am</p>
                                <p style={{opacity: '0%', transform: "translate(0, 30px)"}}>John Fleming</p>
                                <p style={{opacity: '0%', transform: "translate(0, 30px)"}}>FullStack Developer</p>
                                <p style={{opacity: '0%', transform: "translate(0, 30px)"}}>Crafting modern web apps with sleek, intuitive UI. <br/>
                                    Empowering your projects with advanced AI solutions.</p>
                            </div>
                        </div>
                        {/* Get in touch button */}
                        <div id="connectionsWrapper">
                            <button id="getInTouchBtn" onClick={()=> {
                            const targetElement = document.getElementById("contactSection")
                            targetElement.scrollIntoView({ behavior: 'smooth' });

                            }} style={{opacity: '0%'}}>GET IN TOUCH</button>
                            <div id="socialMediaRedirections" style={{opacity: '0%'}}>
                                <a href=""><i className="fa-brands fa-instagram"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                <a href=""><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    {/* Owner Image */}
                    <div id="landingSectionRight">
                        <div id="ownerImageWrapper">
                            <img id="ownerImage" src="/src/assets/owner-image.png" alt="OwnerImage" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default LandingSection;
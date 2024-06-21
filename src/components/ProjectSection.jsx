import { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import images from '../projects.json'
import { animate } from "../animations";

// Intialization 

function ProjectSection() {
    const [projectView, setProjectView] = useState(false);
    const handleViewMoreProjects = () => {
        setProjectView(!projectView);
    }

    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 690px)").matches
    )

    useEffect(() => {
        window
            .matchMedia("(max-width: 690px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    // Animations
    let scrolled = false
    addEventListener("scroll", (e) => {
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop >1450 && !scrolled) {
            scrolled = true;
            const imgs = document.getElementsByClassName("imageCard");
            animate(imgs, 0, 1, "scale");
        }
    });


    const animationStylePreset1 = {
        transform: "scale(0)",

    }

    return (
        <>
            <div id="projectSection">
                <div className="sectionTitlebar" >Projects</div>
                <div className="container" style={(matches) ?{maxHeight: (projectView) ? "100%" : "750px" }: {}}>
                    {images.map((image, index) => {
                        return <ImageCard image={image.imageUrl} title={image.title} text={image.description} key={index} additionalStyle={animationStylePreset1}/>
                    })}
                    <div style={(matches) ? { display: (projectView && matches) ? "none" : "flex" } : {}} id="viewMoreProjectsWrapper">
                        <button id="viewMoreProjects" onClick={handleViewMoreProjects}>View More Projects</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectSection;
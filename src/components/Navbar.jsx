import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { animate } from '../../public/animations';


function Navbar() {

  

    

    let [darkmode, setDarkmode] = useState(true); 

   
    useEffect(()=> {
        if (darkmode) {
            document.body.classList.remove("lightmode");
        }
        else {
            document.body.classList.add("lightmode");
        }
    }, [darkmode])


    // Hamburger settings 
    // Navmenu False = Not displaying currently if size is (max-width: 940px)
    const [navMenu, setNavMenu] = useState(false);
    const hamburger = document.getElementsByClassName("hamburger");
    // const navMenuBar = document.getElementById("navMenuBar");
    
    const navMenuHandler = () =>  {
        setNavMenu(!navMenu);
      
    }

    // Handling the hamburger animation with NavMenu boolean (dependency)
    useEffect(()=> {
        
        if (navMenu) {
            hamburger[0].children[0].style.animation = "hamburger1OutAnimation .3s linear forwards";
            hamburger[0].children[1].style.animation = "hamburger2OutAnimation .3s linear forwards";
            hamburger[0].children[2].style.animation = "hamburger3OutAnimation .3s linear forwards";
        }
        else {
            hamburger[0].children[0].style.animation = "hamburger1InAnimation .3s linear forwards";
            hamburger[0].children[1].style.animation = "hamburger2InAnimation .3s linear forwards";
            hamburger[0].children[2].style.animation = "hamburger3InAnimation .3s linear forwards";
          console.log("working...")
         
  
        }
    }, [navMenu])
    // Media Queries for the Nav Menu bar Display 
    const [matches, setMatches] = useState(
        window.matchMedia("(max-width: 940px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(max-width: 940px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    addEventListener("load", ()=> {
        const navbar = document.getElementById("navbar");
        animate(navbar, 0, 0.5);
        const nav = document.getElementById("navMenuBar")
        
    })

    const handleTargetId = (event, targetId) => {
        event.preventDefault();

        // Scroll to the target element
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setNavMenu(false)
    };

    const animationStylePreset1= {
        opacity: "0%",
        transform: "translateY(-100px)"
    }

    return (
        <>
            <nav id="navbar" style={animationStylePreset1}>
                <div className="container">
                    <div>
                        <p>John Fleming</p>
                    </div>
                    <div>
                        <ul id="navMenuBar" style={(matches) ? {opacity: `${(navMenu) ? "100%" : "0%"}`, zIndex: `${(navMenu) ? "1" : "-1" }`, transform: `${(navMenu) ? "scale(1)" : "scale(0)" }`, transition: "0.2s"}: {}}>
                            <li><a href="" onClick={(e) => handleTargetId(e, "landingSection")}>HOME</a></li>
                            <li><a href="" onClick={(e) =>handleTargetId(e, "contactSection")}>CONTACT</a></li>
                            <li><a href="" onClick={(e) => handleTargetId(e, "projectSection")}>PROJECTS</a></li>
                            <li><a href='' onClick={(e) => handleTargetId(e, "serviceSection")}>SERVICES</a></li>        
                        </ul>
                        <div> 
                            <button id="lightmodeBtn" onClick={()=> {setDarkmode(!darkmode)}}><i className={`fa-solid fa-${(darkmode) ? "sun" : "moon"}`}></i></button>
                            <button className="hamburger" onClick={navMenuHandler}>
                                <div className="hamburgerItems"></div>
                                <div className="hamburgerItems"></div>
                                <div className="hamburgerItems"></div>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
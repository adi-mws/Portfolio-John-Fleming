// Fade Animation 

export function animate(element, delay = 1, transitionDuration = .3, additionalEffect = "translate") {


    const fader = (elem) => {

    
        elem.style.transitionDuration = `${transitionDuration}s`;

        // console.log("Function Invoked")     

        setTimeout(() => {
            if (additionalEffect === "translate") {
                elem.style.transform = `translate(0px, 0px)`;
            }
            else if (additionalEffect === "scale") {
                elem.style.transform = `scale(1)`;
            }
            elem.style.opacity = "100%";
            setTimeout(() => {
                elem.style.transitionDuration = ".3s";
            }, transitionDuration * 1000)
        }, (delay) * 1000)

    }

    if (element.length != null) {
        // Element is array;
        Array.from(element).map(fader);
    }
    else {
        // It is a single element
        fader(element);
    }
}




export function countingAnimation(obj, duration, delay = null) {

    // time = 2s 

    const animate = (element) => {

        const n = parseInt(element.innerText);
        let intervalCount = 0;
        let state = 0;
        const intervalTime = duration * 1000 / n; // Ends all the animtaion on the same time creating variable time for every interval
        const interval = setInterval(() => {
            intervalCount++;
            try {
                state++;

                if (state == n) {
                    clearInterval(interval);
                }
                if (state >= 0) {
                    element.innerHTML = state;
                }
            }
            catch (e) {
                console.log(e); // Logs error
            }

        }, intervalTime);
    }


    setTimeout(() => {
        Array.from(obj).forEach(animate)
    }, (delay) ? delay * 1000 : 0);
}


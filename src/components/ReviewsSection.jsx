import Reviews from "./Reviews"
import reviews from '/public/reviews.json'
import { animate } from "../../public/animations";
function ReviewsSection() {

    let scrolled = false
    addEventListener("scroll", (e) => {
        // console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop >3550 && !scrolled) {
            scrolled = true;
            const reviewCard = document.getElementsByClassName("reviewCard");
            animate(reviewCard, 0, 1, "scale");
        }
    });


    const animationStylePreset1= {
        transform: "scale(0)",

    }
    return (
        <>
            <div id="reviewsSection">
                <div className="sectionTitlebar">Testimonials</div>
                <div className="container">
                    <div id="reviewsContainer">
                        {
                            reviews.map((item, index) => {

                                return <Reviews style={animationStylePreset1} name={item.name} occupation={item.occupation} review={item.review} image={item.image} key={index} />
                            })
                        }

                        {/* Reviews */}
                    </div>
                </div>
            </div>
        </>
    )
}



export default ReviewsSection;
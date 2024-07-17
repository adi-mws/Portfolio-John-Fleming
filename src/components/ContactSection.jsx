import { useEffect, useState } from "react";
import emailjs from "emailjs-com";


function ContactSection() {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        try {
            emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY)
        }
        catch (err) {
            console.log(err);
        }
        }, []);

    useEffect(() => {
        // Check if all inputs have a length greater than 0
        if (input1.trim().length > 0 && input2.trim().length > 0 && input3.trim().length > 0) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [input1, input2, input3]);

    const handleInputChange = (event, setInput) => {
        setInput(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, {
            from_name: input1, 
            message: input3, 
            from_email: input2
        })
        .then(response => {
            if (response.status === 200) {
                 // Contact messahe with auto reply sent successfully
                 setLoading(false);
                 alert("Thanks for contacting! You will get a reply on your email soon!")
                 setInput1('');
                 setInput2('');
                 setInput3('');
            }
        })
        .catch(error => {
            console.log(error);
        }) 
    };
    return (
        <>
            <div id="contactSection">
                <div className="sectionTitlebar">Lets Connect</div>
                <div className="container">
                    <p id="contactDescription">Connect with me to start transforming your concepts into functional, user-friendly applications.</p>
                    <div id="formContainer">
                        <form action="post" onSubmit={handleSubmit}>
                            <div className="form-section">
                                <input placeholder="Enter Name" name="name" value={input1} onChange={(e) => handleInputChange(e, setInput1)} />
                            </div>
                            <div className="form-section">
                                <input placeholder="Enter Email" name="email" value={input2} type="email" onChange={(e) => handleInputChange(e, setInput2)} />
                            </div>
                            <div className="form-section">
                                <textarea name="message" placeholder="Enter Message" cols="30" rows="10" value={input3} onChange={(e) => handleInputChange(e, setInput3)}></textarea>
                            </div>
                            <div className="form-section">
                                <p id="formAlert"></p>
                                <button id="submitBtn" type="submit" disabled={!isFormValid || loading}>
                                   { (loading) ? <div className="loader"></div>:<span>Submit</span>}   
                                </button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}


export default ContactSection;
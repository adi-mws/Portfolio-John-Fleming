import { useEffect, useState } from "react";

function ContactSection() {

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

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
        // Process form submission here
        console.log('Form submitted!');
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
                                <input placeholder="Enter Name" name="name" onChange={(e) => handleInputChange(e, setInput1)} />
                            </div>
                            <div className="form-section">
                                <input placeholder="Enter Email" name="email" type="email" onChange={(e) => handleInputChange(e, setInput2)} />
                            </div>
                            <div className="form-section">
                                <textarea name="message" placeholder="Enter Message" cols="30" rows="10" onChange={(e) => handleInputChange(e, setInput3)}></textarea>
                            </div>
                            <div className="form-section">
                                <p id="formAlert"></p>
                                <button id="submitBtn" type="submit" disabled={!isFormValid}>Submit</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}


export default ContactSection;
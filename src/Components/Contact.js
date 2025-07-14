import React from "react";


const Contact = () =>  {


    return (

        <>
            <div className="contact-con">
                <h2 className="contact-title">Contact US</h2>
                <hr />
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Enter Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message"  placeholder="Enter Your Message"></textarea>
                    </div>
                    <input type="submit" id="submit" value="Send" />
                </form>
            </div>
        
        </>
    )
}

export default React.memo(Contact);
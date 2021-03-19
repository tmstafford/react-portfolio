import React from 'react'

function Contact() {
    return (
        <div className="section">
            <h2 className="title">Contact</h2>
            <div className="contact">
                <form className="contact-form">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <input type="submit" className="btn" />
                </form>
            </div>
        </div>
    )
}

export default Contact;

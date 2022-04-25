import React, { useContext, useRef } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { ThemeContext } from '../../context'

const Contact = () => {
    const formRef = useRef()
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const toggle = { backgroundColor: darkMode && "#333", color: darkMode && "#fff" }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formRef.current)
    }

  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss your project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +233 50 712 7431
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        contact@midstack.dev
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        234 King Strret, Afloa Volta Ghana
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Get in touch. Always available for freelancing if
                    the right project comes along me.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={toggle} type="text" placeholder="Name" name="user_name" />
                    <input style={toggle} type="text" placeholder="Subject" name="subject" />
                    <input style={toggle} type="email" placeholder="Email" name="user_email" />
                    <textarea style={toggle} rows="5" placeholder="Message" name="message" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
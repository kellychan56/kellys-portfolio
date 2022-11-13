import React from 'react'
import './ContactMe.css'

const ContactMe = () => {
  return (
    <>
        <section id="contact">
            <h2 id="contact-me">contact me</h2>
            <a className='contact-links-anchor' href="mailto:kelly.chan568@gmail.com"><h2 className="contact-links">kelly.chan568@gmail.com</h2></a>
            <a className='contact-links-anchor' href="https://github.com/kellychan56" target="_blank" rel="noreferrer"><h2 className="contact-links">github</h2></a>
            <a className='contact-links-anchor' href="www.linkedin.com/in/kelly-chan-574631217" target="_blank" rel="noreferrer"><h2 className="contact-links">linkedin</h2></a>
        </section>
    </>
      )
}

export default ContactMe

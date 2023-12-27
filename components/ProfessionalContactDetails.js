import React from 'react'

export default function ProfessionalContactDetails() {
    return (
        <div className="professional-contact text-alignment">
            <a className="contact-links email" href="mailto:abhaymidsahoo1999@gmail.com">
                <i className="fa-solid fa-envelope email-icon professional-contact-icon"></i>
                <span>Email</span>
            </a>
            <a className="contact-links linkedin" 
                href="https://www.linkedin.com/in/abhay-sahoo/" 
                target="_blank">
                <i className="fa-brands fa-linkedin professional-contact-icon"></i>
                <span>LinkedIn</span>
            </a>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'

import Link from 'next/link'

import Next from '/public/logo2.jpg'

function Navbar() {
    return (
    <div className="navbar">
        <div className="logo">
            <Image 
                src={Next}
                alt="Logo"
                id='coin'
                width={80}
                height={40}
            />
        </div>
        
        <div className="buttons_mid">
                <Link className="button" rel='noreferrer' smooth={true} offset={-50} duration={500} href="#about" >
                    <i className="fa-solid fa-house"></i> <div className="bug"> Sobre mí</div>
                </Link>
                <Link className="button" rel='noreferrer' smooth={true} offset={-50} duration={500} href="#experience">
                    <i className="fa-solid fa-brain"></i> <div className="bug"> Experiencia</div>
                </Link>
                <Link className="button" rel='noreferrer' smooth={true} offset={-50} duration={500} href="#contact">
                    <i className="fa-solid fa-address-book"></i> <div className="bug"> Certificados</div>
                </Link>
        </div>

        <div className="buttons_corner">
            <Link className="greenbtn" href="#experience" rel='noreferrer'>
                <i className="fa-brands fa-whatsapp"></i> <div className="bug">Iteremos!</div>
            </Link>
            <div>
                <i className="fa-sharp fa-solid fa-earth-americas"></i>
                <i className="fa-solid fa-beer-mug-empty"></i>
                <i className="fa-solid fa-sun"></i>
                <i className="fa-solid fa-moon"></i>
            </div>
            
        </div>
        
    </div>
    )
}

export default Navbar
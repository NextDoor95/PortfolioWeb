import React from 'react'
import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link'

import Nextgif from '/public/ProfilePic2.gif'

import Next from '/public/logo2.jpg'

function Navbar() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    
    return (
    <div className="navbar">
        <Link className="logo" rel='noreferrer' offset={-150} duration={500} href="/">
            <Image
                src={Nextgif}
                alt="Logo"
                id='logo'
                width={70}
                height={70}
                href="/#about"
            />
        </Link>
        
        <div className="buttons_mid">
                <Link className="button" href="/" spy={true} smooth={true} offset={50} duration={500} >
                    <i className="fa-solid fa-house"></i><a className="bug" smooth >Sobre mí</a>
                </Link>
                <Link className="button" rel='noreferrer' href="/#experience" spy={true} smooth={true} offset={50} duration={500}>
                    <i className="fa-solid fa-brain"></i> <a className="bug">Experiencia</a>
                </Link>
                <Link className="button" rel='noreferrer' smooth offset={-50} duration={500} href="/#contact">
                    <i className="fa-solid fa-address-book"></i> <a className="bug">Contacto</a>
                </Link>
        </div>

        <div className="buttons_corner">
            <Link className="greenbtn" href="#experience" rel='noreferrer'>
                <i className="fa-brands fa-whatsapp"></i> <div className="bug">Iteremos!</div>
            </Link>
            <div className="configbutton">
                <i className="fa-sharp fa-solid fa-earth-americas"></i>
            </div>
            
        </div>
        
    </div>
    )
}

export default Navbar
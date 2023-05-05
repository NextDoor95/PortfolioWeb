import React from 'react'
import Image from 'next/image'
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link'

import Nextgif from '/public/ProfilePic2.gif'

import Next from '/public/logo2.jpg'

function Navbar() {

    const links = [
        {  href: "/#about", classname: "fa-solid fa-house", text: "sobre mí" },
        {  href: "/#experience", classname: "fa-solid fa-brain", text: "Experiencia" },
        {  href: "/#contact", classname: "fa-solid fa-address-book", text: "contacto" },
    ];
    
    return (
    <div className="navbar">
        <Link className="logo" rel='noreferrer' href="/">
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
            {links.map((l) => (
                <Link className="button" key={l.href} href={l.href}>
                    <i className={l.classname}></i><div className="bug">{l.text}</div>
                </Link>
            ))}
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
import React from 'react'
import Image from 'next/image'
import Profile from '/public/NextDoor.png'

import Link from 'next/link'

import Slideshow from 'pages/components/slideshow/slideshow.jsx'

function About() {
    return (
        <div className="about" id="about">

            <div className="profile">
                <Image
                    className="image"
                    src={Profile}
                    alt="Profile"
                    width={200}
                    height={200}
                />
                
                <div className="social">
                    <Link className="button" href='https://www.linkedin.com/in/nextdoor-frontend/' target='_blank' rel='noreferrer'>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link className="button" href='https://github.com/NextDoor95' target='_blank' rel='noreferrer'>
                        <i className="fa-brands fa-github"></i>
                    </Link>
                    <Link className="button" href='https://twitter.com/NextDoor95' target='_blank' rel='noreferrer'>
                        <i className="fa-brands fa-twitter"></i>
                    </Link>
                </div>
                <div className="introduction">
                    Hola! Mi nombre es Néstor, soy un desarrollador frontend con un enfoque en el diseño UX/UI y entusiasta web3 
                    lo que me llevó a estudiar backend en Solidity y JS para mejorar mis habilidades 
                    y poder brindar soluciones modernas a los problemas en codigo de los paradigmas actuales.
                </div>
            </div>

            <div className="description">
                <div className="slideShow">
                    <Slideshow />
                </div>
            </div>
            


        </div>
    )
}

export default About
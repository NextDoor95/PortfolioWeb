import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Spline from '@splinetool/react-spline'

import Javascript from 'public/JavaScript-logo.png'
import Typescript from 'public/Typescript.png'
import Reacticon from 'public/react.png'
import Nexticon from 'public/nextjs.png'
import Sass from 'public/sass.jpg'
import Git from 'public/git.png'
import Hardhat from 'public/hardhat.png'
import Solidity from 'public/solidity.png'
import Deve from 'public/development.png'

function About(props) {


    const logos = [
        {src: Javascript, alt: "JavaScript Logo"},
        {src: Typescript, alt: "TypeScript Logo"},
        {src: Sass, alt: "Sass Logo"},
        {src: Solidity, alt: "Solidity Logo"},
        {src: Reacticon, alt: "React Logo"},
        {src: Nexticon, alt: "NextJs Logo"},
        {src: Git, alt: "Hardhat Logo"},
        {src: Hardhat, alt: "Hardhat Logo"}
    ];

    const icons = [
        {href: "https://www.linkedin.com/in/nextdoor-frontend/", classname: "fa-brands fa-linkedin-in"},
        {href: "https://github.com/NextDoor95", classname: "fa-brands fa-github"},
        {href: "https://twitter.com/NextDoor95", classname: "fa-brands fa-twitter"},
    ];
    
    return (
        <section className="about" id="about">
            <div className="profile">
                <div>
                    <Spline
                        scene="https://prod.spline.design/FkCnR-woTDV7Dcn4/scene.splinecode"
                        className="spline"
                    />
                </div>
                <div className="social">
                    {icons.map((i) => (
                        <Link className="button" key={i.href} href={i.href} target='_blank' rel='noreferrer'>
                            <i className={i.classname}></i>
                        </Link>
                    ))}
                </div>
                <div className="glassBox">
                    Hola! Mi nombre es <span>Néstor Huircapan</span>, vivo en <span>Puerto Madryn, Chubut</span>.
                    Soy <span>desarrollador frontend</span> enfocado al diseño <span>UX/UI</span> y entusiasta<span> web3</span>, 
                    me considero 100% <span>creativo y autodidacta</span>. <br/><span>mi tech stack</span>:
                    
                    <div className="iconstack">
                        {logos.map((l) => (
                            <div key={l.src}>
                                <Image
                                    className="iconlogo"
                                    width={50}
                                    height={50}
                                    src={l.src}
                                    alt={l.alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="description">
                <div className="right">
                    <Image
                        className="iconlogo"
                        width={550}
                        height={350}
                        src={Deve}
                        alt="development"
                    />
                    <div className="curriculum">
                        <a className="button" href="public/frontendcv.pdf" download>
                            <div className="bug">Descargar CV(no funciona)</div><i className="fa-solid fa-cloud-arrow-down"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
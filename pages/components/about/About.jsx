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
import Escarapela from 'public/escarapelaweb3.png'
import Talentsocial from 'public/TalentFavicon.ico'
import Talentprotocol from 'public/TalentProtocol.png'

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
                        scene="https://draft.spline.design/n2cho1B-rb-ecbcd/scene.splinecode"
                        className="spline"
                    />
                </div>
                <div className="social">
                    {icons.map((i) => (
                            <Link
                                className="button"
                                key={i.href}
                                href={i.href}
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className={i.classname}></i>
                            </Link>
                    ))}
                    <Link
                        href="https://beta.talentprotocol.com/u/nextdoor"
                        target='_blank'
                        rel='noreferrer'
                        className="talent-protocol"
                                >
                            T
                    </Link>
                </div>
                <div className="glassBox">
                    Hola! Mi nombre es <span>Néstor</span>, soy de <span>Puerto Madryn, Chubut</span>.<br/>
                    Desarrollador web autodidacta, me dedico a diseñar y llevar a código<br/> el <span>frontend </span>
                    de distintos proyectos, enfocandome en <span>UX/UI</span>,<br/> entusiasta del mundo<span> web3 </span>
                    y siempre buscando aprender más sobre<br/> las últimas tecnologías y tendencias.
                    Uso metodologías ágiles, soy proactivo y siempre dispuesto a colaborar.
                    <br/><span>mi tech stack:</span>
                    
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
                        width={300}
                        height={280}
                        src={Escarapela}
                        alt="Escarapela web3 Argentina"
                    />
                    <p>Llevemos tu idea al siguiente nivel!</p>
                    <div className="curriculum">
                            <Link
                                className="button"
                                href="/pdf/FrontendCV.pdf"
                                target='_blank'
                                download='frontend-cv.pdf'
                                >
                                <div className="bug">
                                    Descargar CV
                                </div>
                                <i className="fa-solid fa-cloud-arrow-down"></i>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
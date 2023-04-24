import React from 'react'
import Image from 'next/image'

import Link from 'next/link'


import Nof from 'public/nof.png'
import Speezard from 'public/Speezard.png'


function Experience() {
    return (
    <div className="experience" id="experience">
        <div className="title">
            <h1>
                Experiencia
            </h1>
        </div>

        <div>
            <div className="projects">
                <div className="individualproject">
                    <div className="imgproject">
                        <Image 
                            src={Speezard}
                            alt="JavaScript Logo"
                            id='logo'
                            height={200}
                            width={400}
                            className="img"
                        />
                    </div>
                    <div className="glassBox">
                        Speezard es una pre-aceleradora de startups Web3 que pone una 
                        comunidad mínima viable al servicio 
                        de nuevos emprendimientos en el ecosistema.
                        Al día de la fecha cuenta con mas de 30 proyectos que se inscribieron
                        al proceso de selección para obtener mentoría y escalar sus ideas de impacto social.
                        Tiene una comunidad de más de 700 personas del mundo IT.
                        
                    <div className="social">
                        <Link
                            className="button"
                            href='https://www.speezard.io/'
                            target='_blank'
                            rel='noreferrer'
                            >
                            <i className="fa-solid fa-link"></i>
                        </Link>
                        <Link
                            className="button"
                            href='https://discord.gg/resiliente'
                            target='_blank'
                            rel='noreferrer'
                            >
                            <i className="fa-brands fa-discord"></i>
                        </Link>
                        <Link
                            className="button"
                            href='https://twitter.com/Speezard_W3'
                            target='_blank'
                            rel='noreferrer'
                            >
                            <i className="fa-brands fa-twitter"></i>
                        </Link>
                    </div>
                    </div>
                    
                </div>
                <div className="individualproject">
                    <div className="imgproject">
                        <Image 
                            src={Nof}
                            alt="JavaScript Logo"
                            id='logo'
                            height={200}
                            width={400}
                            className="img"
                        />
                    </div>
                    <div className="glassBox">
                        lorem ipsum lorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum
                        <div className="social">
                            <Link
                                className="button"
                                href='https://github.com/NextDoor95'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://nof.town/'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-solid fa-link"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://discord.gg/4Bvp5bVmCz'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-discord"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://twitter.com/NOFtoken'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-twitter"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="individualproject">
                    <div className="imgproject">
                        <Image 
                            src={Nof}
                            alt="JavaScript Logo"
                            id='logo'
                            height={200}
                            width={400}
                            className="img"
                        />
                    </div>
                    <div className="glassBox">
                        Number One Fan 
                        <div className="social">
                            <Link
                                className="button"
                                href='https://github.com/NextDoor95'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://nof.town/'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-solid fa-link"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://discord.gg/4Bvp5bVmCz'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-discord"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://twitter.com/NOFtoken'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-twitter"></i>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="individualproject">
                    <div className="imgproject">
                        <Image 
                            src={Nof}
                            alt="JavaScript Logo"
                            id='logo'
                            height={200}
                            width={400}
                            className="img"
                        />
                    </div>
                    <div className="glassBox">
                        lorem ipsum lorem ipsumlorem ipsumlorem
                        ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum
                        <div className="social">
                            <Link
                                className="button"
                                href='https://github.com/NextDoor95'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://nof.town/'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-solid fa-link"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://discord.gg/4Bvp5bVmCz'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-discord"></i>
                            </Link>
                            <Link
                                className="button"
                                href='https://twitter.com/NOFtoken'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <i className="fa-brands fa-twitter"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Experience
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Resiliente from '/public/resiliente-color.png'
import Speezard from '/public/Speezard.png'

function Footer() {

    const icons = [
        {href: "https://www.linkedin.com/in/nextdoor-frontend/", classname: "fa-brands fa-linkedin-in", text: "LinkedIn"},
        {href: "https://twitter.com/NextDoor95", classname: "fa-brands fa-twitter", text: "Twitter"},
        {href: "https://github.com/NextDoor95", classname: "fa-brands fa-github", text: "sobre mí"},
        {href: "https://github.com/NextDoor95", classname: "fa-brands fa-github", text: "Github"},
    ]

    return (
        <section className="footer">
            <div className="top">
                <div className="left">
                    <Link className="logo" rel='noreferrer' href="/">
                        <Image
                            src={Resiliente}
                            alt="Resiliente"
                            width={220}
                            height={40}
                            href="https://twitter.com/Resilientes_W3"
                        />
                    </Link>
                    <Link className="logo" rel='noreferrer' href="/">
                        <Image
                            src={Speezard}
                            alt="Resiliente"
                            width={220}
                            height={50}
                            href="https://twitter.com/Resilientes_W3"
                        />
                    </Link>
                    <p>
                        Co-construyendo en web3<br/> 
                    </p>
                </div>
                <div className="right">

                    <div className="col">
                        <p>Comunidades web3</p>
                            <Link className="linkbutton" href="https://twitter.com/Resilientes_W3" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Resilientes
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://twitter.com/LaCryptaOficial" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    La Crypta
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://twitter.com/ThinkandDev" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Think&Dev
                                </p>
                            </Link>
                    </div>

                    <div className="col">
                        <p>Comunidades web3 que admiro</p>
                            <Link className="linkbutton" href="https://wa.me/message/FTVME456Q3PMI1" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Resilientes
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://wa.me/message/FTVME456Q3PMI1" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    Resilientes
                                </p>
                            </Link>
                    </div>

                    <div className="col">
                        <p>Contacto</p>
                            <Link className="linkbutton" href="https://wa.me/message/FTVME456Q3PMI1" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    WhatsApp
                                </p>
                            </Link>
                            <Link className="linkbutton" href="https://wa.me/message/FTVME456Q3PMI1" target="_blank" rel='noreferrer'>
                                <p className="footer-btn">
                                    E-mail
                                </p>
                            </Link>
                            
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="rights-reserved">
                    <p>
                        NextDoor | 2023 © all rights reserved.
                    </p>
                </div>
                <div className="social">
                    {icons.map((i) => (
                        <Link className="button-footer" key={i.href} href={i.href} target='_blank' rel='noreferrer'>
                            <i className={i.classname}></i> <p className="bug">{i.text}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer
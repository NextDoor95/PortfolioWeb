import React from 'react'
import Link from 'next/link'

function Footer() {

    const icons = [
        {href: "https://www.linkedin.com/in/nextdoor-frontend/", classname: "fa-brands fa-linkedin-in"},
        {href: "https://github.com/NextDoor95", classname: "fa-brands fa-github"},
        {href: "https://twitter.com/NextDoor95", classname: "fa-brands fa-twitter"},
    ]

    return (
        <section className="footer">
            <div className="top">
                <div className="left">
                    <p>
                        Resilientes<br/> 
                    </p>
                </div>
                <div className="right">

                    <div className="col">
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
                </div>
            </div>
            <div className="bottom">
                <div>
                    <p>
                        NextDoor | 2023 © all rights reserved.
                    </p>
                </div>
                <div className="social">
                    {icons.map((i) => (
                        <Link className="button" key={i.href} href={i.href} target='_blank' rel='noreferrer'>
                            <i className={i.classname}></i>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer
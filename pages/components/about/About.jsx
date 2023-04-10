import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Spline from '@splinetool/react-spline'

import Javascript from 'public/JavaScript-logo.png'
import Typescript from 'public/Typescript.png'
import Reacticon from 'public/react.png'
import Next from 'public/nextjs.png'
import Sass from 'public/sass.jpg'
import Git from 'public/git.png'
import Hardhat from 'public/hardhat.png'
import Solidity from 'public/solidity.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Autoplay, Pagination } from 'swiper'
import 'swiper/css/bundle'


function About() {
    return (
        <div className="about" id="about">
            <div className="profile">
                <div>
                    <Spline 
                        className="spline"
                        scene="https://prod.spline.design/FkCnR-woTDV7Dcn4/scene.splinecode" />
                </div>
                
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
                <div className="glassBox">
                    Hola! Mi nombre es <span>Néstor Huircapan</span>, vivo en <span>Puerto Madryn, Chubut</span>.
                    Soy <span>desarrollador frontend</span> enfocado al diseño <span>UX/UI</span> y entusiasta<span> web3</span>, 
                    me considero 100% <span>creativo y autodidacta</span>. <br/><span>mi tech stack</span>:
                    <div className="iconstack">
                        <Image 
                            src={Javascript}
                            alt="JavaScript Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                        <Image 
                            src={Typescript}
                            alt="TypeScript Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                        <Image 
                            src={Sass}
                            alt="Sass Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                        <Image 
                            src={Solidity}
                            alt="Solidity Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                        <Image 
                            src={Reacticon}
                            alt="React Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                        <Image 
                            src={Next}
                            alt="Next.js Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                        <Image 
                            src={Hardhat}
                            alt="Hardhat Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                        <Image 
                            src={Git}
                            alt="Git Logo"
                            id='logo'
                            width={50}
                            height={50}
                            className="iconlogo"
                        />
                    </div>
                </div>
            </div>

            <div className="description">
                <div className='swiper'>
                    <>
                        <Swiper
                            effect='cards'
                            grabCursor
                            modules={[EffectCards, Autoplay, Pagination]}
                            loop
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            pagination={{
                                el: '.swiper-pagination',
                                type: 'bullets',
                                clickable: true
                            }}
                            className='swiper-slide'
                        >
                            <SwiperSlide />
                            <SwiperSlide />
                            <SwiperSlide />
                            <SwiperSlide />
                            <SwiperSlide />
                            <SwiperSlide />
                            <SwiperSlide />
                            <SwiperSlide />
                            <SwiperSlide />
                        </Swiper>
                        <div className='swiper-pagination' />
                    </>
                    
                </div>
            </div>
            


        </div>
    )
}

export default About
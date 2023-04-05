import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Spline from '@splinetool/react-spline'

import Javascript from 'public/JavaScript-logo.png'

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
                    Hola! Mi nombre es Néstor, vivo en Puerto Madryn, Chubut.
                    Soy desarrollador frontend enfocado al diseño UX/UI y entusiasta web3. 
                    Me considero creativo y 100% autodidacta, mi tech stack:
                    <div>
                        <Image 
                            src={Javascript}
                            alt="JavaScript Logo"
                            id='logo'
                            width={50}
                            height={50}
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
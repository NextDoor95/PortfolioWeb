import React from 'react'

import Spline from '@splinetool/react-spline'

import Link from 'next/link'

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
                    Hola! Mi nombre es Néstor, soy desarrollador frontend con un enfoque en el diseño UX/UI y entusiasta web3, 
                    lo que me llevó a estudiar backend en Solidity y Hardhat para mejorar mis habilidades 
                    y poder construir Dapps, brindando soluciones modernas al codigo de los paradigmas actuales.
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
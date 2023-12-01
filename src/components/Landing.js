import React from 'react'
// Moving Text
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
//import { IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'

function Landing() {
    return (
        <div>

            <div id="home" className="min-h-[100vh] w-[100vw] bg-[#e9f1f7] pt-[72px]">
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[100vh] max-w-[100vw]">
                    <ParallaxBannerLayer image="media/concert4.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#08080861] ease-in duration-200' speed={0}>
                        <div className="text-white absolute bottom-[330px] right-[20px] font-bold pb-[72px] text-[40px] md:text-[70px] z-10">
                            <a href="#/" rel="noreferrer" target="_blank">
                                <FaSpotify className="social-link ml-[10px] mr-[10px] 
                                text-white ease-in duration-200 text-[100px]" id="spotify" />
                            </a>
                            <a href="#/" rel="noreferrer" target="_blank">
                                <FaYoutube className="social-link ml-[10px] mr-[10px] 
                                mt-[30px] text-white ease-in duration-200" id="youtube" />
                            </a>
                            <a href="#/" rel="noreferrer" target="_blank">
                                <SiApplemusic className="social-link ml-[10px] mr-[10px] 
                                mt-[30px] mb-[30px] text-white ease-in duration-200" id="applemusic" />
                            </a>
                        </div>
                        <span className='block ml-auto mr-auto w-[100vw] align-center text-center mt-[50px]'>
                            <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[30px] 
                        ease-linear duration-[50ms] mr-[8vw] ml-[8vw]">
                            </Parallax>
                        </span>
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>

        </div>
    )
}

export default Landing
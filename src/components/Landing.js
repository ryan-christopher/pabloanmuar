import React from 'react'
// Moving Text
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'

import { useTranslation } from 'react-i18next';

function Landing() {

    const { t } = useTranslation();

    return (
        <div id="home" className="min-h-[100vh] w-[100vw] bg-[#e9f1f7] pt-[72px]">
            <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[100vh] max-w-[100vw]">
                <ParallaxBannerLayer image="media/concert4.jpg" speed={10} />
                <ParallaxBannerLayer className='bg-[#08080861] ease-in duration-200' speed={0}>
                    <div className="text-white absolute top-[20vh] sm:top-[20vh] right-[20px] font-bold pb-[72px] text-[40px] sm:text-[50px] md:text-[70px] lg:text-[90px] z-10">
                        <a href="#/" rel="noreferrer" target="_blank">
                            <FaSpotify className="social-link ml-[10px] sm:mr-[20px] text-green-500 ease-in duration-200" id="spotify" />
                        </a>
                        <a href="#/" rel="noreferrer" target="_blank">
                            <FaYoutube className="social-link ml-[10px] sm:mr-[20px] mt-[5vh] sm:mt-[10vh] text-red-500 ease-in duration-200" id="youtube" />
                        </a>
                        <a href="#/" rel="noreferrer" target="_blank">
                            <SiApplemusic className="social-link ml-[10px] sm:mr-[20px] mt-[5vh] sm:mt-[10vh] mb-[30px] text-pink-500 ease-in duration-200" id="applemusic" />
                        </a>
                    </div>
                    <span className='block ml-[10vw] lg:leading-[90px] mt-[10vh] xl:mt-[5vh] w-[40vw] max-w-[700px] min-w-[275px] text-left text-white'>
                        <h3 className='text-[30px] lg:text-[50px] font-extrabold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_white]'>
                            {t('description.landing')}
                        </h3>

                        <img src="media/logo.png" alt="Pablo as a cartoon." className='block ml-auto mr-auto w-[30%] min-w-[150px] mt-[3vh] mb-[3vh]' />
                        <h3 className='text-[30px] mt-[5vh] lg:mt-[0] lg:text-[50px] text-center font-bold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_white]'>
                            &lt;Trágame • Música&gt;
                        </h3>
                    </span>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </div>
    )
}
export default Landing
import React from 'react'
// Moving Text
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'

function Landing() {
    return (
        <div id="home" className="min-h-[100vh] w-[100vw] bg-[#e9f1f7] pt-[72px]">
            <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[100vh] max-w-[100vw]">
                <ParallaxBannerLayer image="media/concert4.jpg" speed={10} />
                <ParallaxBannerLayer className='bg-[#08080861] ease-in duration-200' speed={0}>
                    <div className="text-white absolute top-[30vh] sm:top-[20vh] right-[20px] font-bold pb-[72px] text-[30px] sm:text-[40px] md:text-[70px] z-10">
                        <a href="#/" rel="noreferrer" target="_blank">
                            <FaSpotify className="social-link ml-[10px] mr-[10px] text-green-500 ease-in duration-200 text-[100px]" id="spotify" />
                        </a>
                        <a href="#/" rel="noreferrer" target="_blank">
                            <FaYoutube className="social-link ml-[10px] mr-[10px] mt-[5vh] sm:mt-[10vh] text-red-500 ease-in duration-200" id="youtube" />
                        </a>
                        <a href="#/" rel="noreferrer" target="_blank">
                            <SiApplemusic className="social-link ml-[10px] mr-[10px] mt-[5vh] sm:mt-[10vh] mb-[30px] text-pink-500 ease-in duration-200" id="applemusic" />
                        </a>
                    </div>
                    <span className='block ml-[10vw] lg:leading-[90px] mt-[10vh] xl:mt-[18vh] w-[40vw] max-w-[700px] min-w-[275px] text-left text-white'>
                        <h3 className='text-[30px] lg:text-[60px] font-extrabold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_white]'>
                            Making the songs that play on repeat in my head so you can do the same too.
                        </h3>
                        <img src="media/logo.png" alt="Pablo as a cartoon." className='block ml-auto mr-auto w-[30%] min-w-[150px] mt-[30px] mb-[30px]' />
                        <h3 className='text-[30px] mt-[5vh] lg:mt-[0] lg:text-[60px] text-center font-bold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_white]'>
                            &lt;Trágame • Música&gt;
                        </h3>
                    </span>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </div>
    )
}
export default Landing
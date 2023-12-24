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
                <ParallaxBannerLayer image="media/studio.jpg" speed={10} />
                <ParallaxBannerLayer image="media/concert4.jpg" speed={10} className='animate-[slideshow1_30s_ease-in-out_infinite]' />
                <ParallaxBannerLayer image="media/studioblur.jpg" speed={10} className='animate-[slideshow2_30s_ease-in-out_infinite]' />
                <ParallaxBannerLayer className='bg-[#08080861] ease-in duration-200' speed={0}>
                    <div className="hidden sm:block text-white absolute top-[30vh] sm:top-[20vh] right-[20px] font-bold pb-[72px] text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] z-10">
                        <a href="https://open.spotify.com/artist/4jPN3jx8MwNtQMJ6PD46yJ" rel="noreferrer" target="_blank">
                            <FaSpotify className="social-link ml-[10px] sm:mr-[20px] text-green-500 ease-in duration-200" id="spotify" />
                        </a>
                        <a href="https://www.youtube.com/channel/UChec6FqYBkUM4c1xLnibC-g" rel="noreferrer" target="_blank">
                            <FaYoutube className="social-link ml-[10px] sm:mr-[20px] mt-[5vh] sm:mt-[10vh] text-red-500 ease-in duration-200" id="youtube" />
                        </a>
                        <a href="https://music.apple.com/us/artist/pablo-anmuar/1667428210" rel="noreferrer" target="_blank">
                            <SiApplemusic className="social-link ml-[10px] sm:mr-[20px] mt-[5vh] sm:mt-[10vh] mb-[30px] text-pink-500 ease-in duration-200" id="applemusic" />
                        </a>
                    </div>
                    <span className='block ml-[5vw] lg:leading-[90px] mt-[17vh] sm:mt-[10vh] xl:mt-[10vh] w-[90vw] sm:w-[40vw] max-w-[700px] min-w-[275px] text-left text-white'>
                        <h3 className='text-[30px] sm:text-[40px] lg:text-[50px] font-extrabold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_white]'>
                            {t('description.landing')}
                        </h3>

                        <img src="media/logo.png" alt="Pablo as a cartoon." className='block ml-auto mr-auto w-[25%] sm:w-[30%] min-w-[125px] mt-[5vh] mb-[3vh]' />
                        <h3 className='text-[30px] mt-[5vh] lg:mt-[0] lg:text-[50px] text-center font-bold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_white]'>
                            &lt;Trágame • Música&gt;
                        </h3>
                    </span>
                    <div className="w-[70vw] flex justify-between mt-[40px] ml-auto mr-auto content-center sm:hidden text-white font-bold pb-[72px] text-[50px] z-10">
                        <a href="https://open.spotify.com/artist/4jPN3jx8MwNtQMJ6PD46yJ" rel="noreferrer" target="_blank">
                            <FaSpotify className="inline-block text-green-500 ease-in duration-200 hover:scale-125" id="spotify" />
                        </a>
                        <a href="https://www.youtube.com/channel/UChec6FqYBkUM4c1xLnibC-g" rel="noreferrer" target="_blank">
                            <FaYoutube className="inline-block text-red-500 ease-in duration-200 hover:scale-125" id="youtube" />
                        </a>
                        <a href="https://music.apple.com/us/artist/pablo-anmuar/1667428210" rel="noreferrer" target="_blank">
                            <SiApplemusic className="inline-block text-pink-500 ease-in duration-200 hover:scale-125" id="applemusic" />
                        </a>
                    </div>
                </ParallaxBannerLayer>
            </ParallaxBanner>
        </div>
    )
}
export default Landing
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Guitar from '../components/Guitar'
import "../styles/offsetBorder.css"

import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation();
    return (
        <div id="about" className='bg-[#222725] pt-[72px] mt-[-72px]'>

            <div >
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[25vh] lg:h-[35vh] min-h-[200px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/yellowjacket.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>

                        <h2 className='font-["Yatra_One"] uppercase text-white pt-[15vh] sm:pt-[5vh] lg:pt-[15vh] ml-[5vw] text-[70px] sm:text-[100px] md:text-[150px] lg:text-[160px] text-left'>
                            {t('description.about')}
                        </h2>

                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <div className="w-[100vw] bg-[#f7ce5b] pb-[150px]">
                <div className="font-['Patrick_Hand'] relative w-[90vw] ml-[5vw] pt-[75px]">
                    <div className='text-black text-[25px] lg:text-[32px] pt-[0px] pb-[100px] w-[90vw] md:w-[60vw] text-left'>
                        {t('description.about1')}
                    </div>

                    <img src="media/pabloDoodle.png" className='invisible md:visible w-[230px] absolute overflow-hidden right-0 top-0 pt-[calc(180px-3vw)] sm:pt-[200px] lg:pt-[150px] rotate-[-50deg]' alt="" />
                </div>

                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="min-h-[830px] md:min-h-[700px] lg:min-h-[900px] xl:h-[100vh]">
                    <ParallaxBannerLayer image="media/guitarbg.jpg" speed={15} className='' />
                    <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>

                        <div className="borderwrapper p-[10px] pt-[50px] sm:pt-[100px] xl:pt-[100px] 2xl:pt-[200px] pb-[30px] w-[85vw] xl:w-[40vw] block ml-auto mr-auto font-['Patrick_Hand'] ">
                            <div className='bg-[#d1603d] offsetBorder !border-black p-[10px] min-h-[600px] w-[80vw] xl:w-[35vw] rounded-[5px] block ml-auto mr-auto'>
                                <div className='text-white text-[25px] w-[80%]'>
                                    {t('description.about2')}
                                </div>
                                <div className=''>
                                    <Guitar />
                                </div>
                                <div className='text-white text-[25px] text-right w-[80%] ml-auto mt-[-20px] pb-[20px]'>
                                    {t('description.about3')}
                                </div>
                            </div>
                        </div>

                    </ParallaxBannerLayer>
                </ParallaxBanner>


                <div className="font-['Patrick_Hand'] relative w-[90vw] ml-[5vw] pt-[75px]">
                    <div className='text-black text-[25px] lg:text-[32px] pt-[20px] xl:pt-[20px] w-[90vw] md:w-[60vw] text-right block ml-auto'>
                        {t('description.about4')}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default About
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
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[25vh] lg:h-[30vh] min-h-[200px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/yellowjacket.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>
                        <h2 className='font-["Yatra_One"] uppercase text-white pt-[15vh] sm:pt-[5vh] lg:pt-[8vh] ml-[5vw] text-[60px] md:text-[80px] lg:text-[120px] text-left'>
                            {t('description.about')}
                        </h2>
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <div className="w-[100vw] bg-[#f7ce5b] pb-[30px] lg:pb-[50px]">
                <div className="font-['Patrick_Hand'] relative w-[90vw] ml-[5vw] pt-[30px] lg:pt-[50px]">
                    <div className='text-black text-[20px] lg:text-[28px] pb-[30px] lg:pb-[50px] w-[90vw] md:w-[60vw] text-left'>
                        {t('description.about1')}
                    </div>
                    <img src="media/pabloDoodle.png" className='invisible md:visible w-[230px] absolute overflow-hidden right-0 top-[0px] sm:pt-[200px] lg:pt-[100px]' alt="" />
                </div>
                <ParallaxBanner style={{ aspectRatio: 'auto' }} className="!w-[100vw] max-h-[800px] min-h-screen md:min-h-[800px]">
                    <ParallaxBannerLayer image="media/guitarbg.jpg" speed={0} className='' />
                    <ParallaxBannerLayer className='bg-[#21212138] flex' speed={0}>
                        <div className="borderwrapper self-center p-0 sm:p-[30px] w-[85vw] xl:w-[40vw] ml-auto mr-auto font-['Patrick_Hand'] ">
                            <div className='self-center bg-[#d1603d] offsetBorder !border-black p-[10px] w-[80vw] xl:w-[35vw] rounded-[5px] ml-auto mr-auto'>
                                <div className='text-white text-[20px] lg:text-[25px] w-[100%] sm:w-[80%]'>
                                    {t('description.about2')}
                                </div>
                                <div className=''>
                                    <Guitar />
                                </div>
                                <div className='text-white text-[20px] lg:text-[25px] text-right w-[100%] sm:w-[80%] ml-auto mt-[-20px]'>
                                    {t('description.about3')}
                                </div>
                            </div>
                        </div>
                    </ParallaxBannerLayer>
                </ParallaxBanner>
                <div className="font-['Patrick_Hand'] relative w-[90vw] ml-[5vw] pt-[30px]">
                    <div className='text-black text-[20px] lg:text-[28px] w-[90vw] md:w-[60vw] text-left md:text-right block ml-auto'>
                        {t('description.about4')}
                    </div>
                </div>
                <h2 className='font-["Yatra_One"] uppercase text-black pt-[5vh] text-[40px] md:text-[50px] lg:text-[70px] text-center'>
                    {t('description.featuredon')}
                </h2>
                <hr className="border-[#d1603d] w-[70vw] sm:w-[30vw] border-[3px] rounded-md block ml-auto mr-auto" />
                <div className='flex flex-wrap justify-center w-[100vw]'>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://bravorevista.com/pablo-anmuar-lanza-244-am-youre-the-kind-of-girl/" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://www.freim.tv/radarfreim-playlist-con-canciones-nuevas-en-espanol/" frameborder="0"></iframe>
                    <iframe title="Soundcloud Interview" className='w-[70%] min-w-[300px] md:min-w-[500px] h-[300px]' scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1723852362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
            </div>
        </div >
    )
}
export default About
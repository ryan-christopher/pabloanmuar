import React from 'react'
import { FaSpotify, FaYoutube, FaTiktok, FaFacebook, FaSoundcloud } from 'react-icons/fa';
import { SiApplemusic, SiInstagram } from 'react-icons/si'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import "../styles/offsetBorder.css"
import "../styles/App.css"
import { useTranslation } from 'react-i18next';

function Contact() {
    const { t } = useTranslation();
    return (
        <div id="contact" className="w-[100vw] bg-[#f7ce5b]">
            <div className='bg-[#e9f1f7]' >
                <div>
                    <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[25vh] sm:h-[30vh] min-h-[200px] block ml-auto mr-auto">
                        <ParallaxBannerLayer image="media/bedroom2.jpg" speed={10} />
                        <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>
                            <h2 className='font-["Yatra_One"] uppercase text-white pt-[15vh] sm:pt-[5vh] lg:pt-[8vh] mr-[5vw] text-[60px] md:text-[80px] lg:text-[120px] text-right'>
                                {t('description.contact')}
                            </h2>
                        </ParallaxBannerLayer>
                    </ParallaxBanner>
                </div>
                <p className='font-["Patrick_Hand"] ml-[5vw] w-[75vw] lg:ml-[15vw] pt-[5vh] pb-[3vh] text-[20px] lg:text-[25px]'>{t('description.contactdesc')}</p>
                <div className="borderwrapper p-[30px] pt-[30px] pb-[30px] w-fit block ml-auto mr-auto">
                    <a href="mailto:pablo.anmuar@gmail.com" className='offsetBorder !border-black rounded-[5px] block ml-auto mr-auto hover:bg-[#f7ce5b]'>
                        <h2 className='font-["Patrick_Hand"] text-[20px] md:text-[30px] lg:text-[40px] text-center ease-in duration-200'>
                            pablo.anmuar@gmail.com
                        </h2>
                    </a>
                </div>
                <div className="flex-container ease-in duration-200 overflow-hidden">
                    <div className="flex-item-left50 text-center">
                        <h2 className='font-["Yatra_One"] text-[40px] md:text-[50px] xl:text-[70px] pt-[72px] mt-[40px] sm:mt-[100px] uppercase font-bold text-center w-[100%] block ml-auto mr-auto'>Pablo.Anmuar</h2>
                        <h3 className='text-[30px] lg:text-[40px] text-center font-bold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_black]'>
                            &lt;Trágame • Música&gt;
                        </h3>
                        <h3 className='text-[20px] mt-[2vh] lg:text-[30px] text-center font-bold font-["Waiting_for_the_Sunrise"] [-webkit-text-stroke:0.5px_black]'>
                            ©2023 Pablo Andrés Muñoz Armella
                        </h3>
                    </div>
                    <div className="flex-item-right50 text-left justify-center">
                        <div className='flex justify-center mt-[40px] sm:mt-[100px] text-[25px] md:text-[30px]'>
                            <div className="borderwrapper inline-flex align-middle justify-center ml-[0px] md:ml-[20px]">
                                <a className="offsetBorder m-[20px]" href="https://www.tiktok.com/@pablo.anmuar?_t=8iXlSVSwJHC&_r=1" rel='noreferrer' target='_blank'>
                                    <FaTiktok className="ease-in duration-200" id="spotify" />
                                </a>
                            </div>
                            <div className="borderwrapper inline-flex align-middle justify-center ml-[0px] md:ml-[20px]">
                                <a className="offsetBorder m-[20px]" href="https://www.youtube.com/channel/UChec6FqYBkUM4c1xLnibC-g" rel='noreferrer' target='_blank'>
                                    <FaYoutube className="ease-in duration-200" id="youtube" />
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className="borderwrapper inline-flex align-middle justify-center">
                                <a className="offsetBorder m-[20px]" href="https://open.spotify.com/artist/4jPN3jx8MwNtQMJ6PD46yJ" rel='noreferrer' target='_blank'>
                                    <FaSpotify className="ease-in duration-200" id="spotify" />
                                </a>
                            </div>
                            <div className="borderwrapper inline-flex align-middle justify-center ml-[0px] md:ml-[20px]">
                                <a className="offsetBorder m-[20px]" href="https://music.apple.com/us/artist/pablo-anmuar/1667428210" rel='noreferrer' target='_blank'>
                                    <SiApplemusic className="ease-in duration-200" id="applemusic" />
                                </a>
                            </div>
                            <div className="borderwrapper inline-flex align-middle justify-center ml-[0px] md:ml-[20px]">
                                <a className="offsetBorder m-[20px]" href="https://on.soundcloud.com/mUuP5" rel='noreferrer' target='_blank'>
                                    <FaSoundcloud className="ease-in duration-200" id="applemusic" />
                                </a>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className="borderwrapper inline-flex align-middle justify-center">
                                <a className="offsetBorder m-[20px]" href="https://www.instagram.com/pablo.anmuar?igsh=OHJnODBxNnFiMHFi" rel='noreferrer' target='_blank'>
                                    <SiInstagram className="ease-in duration-200" id="spotify" />
                                </a>
                            </div>
                            <div className="borderwrapper inline-flex align-middle justify-center ml-[0px] md:ml-[20px]">
                                <a className="offsetBorder m-[20px]" href="https://www.facebook.com/Pablo.Anmuar?mibextid=ZbWKwL" rel='noreferrer' target='_blank'>
                                    <FaFacebook className="ease-in duration-200" id="spotify" />
                                </a>
                            </div>
                        </div>
                        <img src="media/pabloDoodle2.png" alt="" className="block ml-auto mr-auto w-[15vw] min-w-[200px]" />
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Contact
import React from 'react'
import { useTranslation } from 'react-i18next';
import "../styles/App.css"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function Biography() {
    const { t } = useTranslation();
    return (
        <div className='bg-[#d1603d] text-white font-["Patrick_Hand"] text-[22px] lg:text-[25px] w-full'>
            <div className='pt-[72px]'>
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[25vh] sm:h-[30vh] min-h-[200px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/biobanner.jpeg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>
                        <h2 className='font-["Yatra_One"] uppercase text-white pt-[15vh] sm:pt-[5vh] lg:pt-[8vh] ml-[5vw] text-[60px] md:text-[80px] lg:text-[120px] text-left'>
                            {t('description.bio')}
                        </h2>
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <div className="flex-container ease-in duration-200 overflow-hidden w-full">
                <div className="flex flex-item-left text-left lg:w-[50%]"><p className='p-[40px] text-[22px] lg:text-[25px] flex self-center'>{t('description.biop1')}</p></div>
                <div className='flex-tem-right lg:w-[50%]'> <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[600px] border-[4px] border-[#f7ce5b]">
                    <ParallaxBannerLayer image="media/youngPablo.jpeg" speed={10} />
                </ParallaxBanner>
                </div>
            </div>
            <div className="flex-container-reverse ease-in duration-200 w-full">
                <div className="flex flex-item-left text-left lg:w-[50%]"><p className='p-[40px] text-[22px] lg:text-[25px] flex self-center'>{t('description.biop2')}</p ></div>
                <div className='flex-tem-right lg:w-[50%]'> <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[600px] border-[4px] border-[#f7ce5b]">
                    <ParallaxBannerLayer image="media/pablobw.jpeg" speed={10} />
                </ParallaxBanner>
                </div>

            </div>


            <div className='w-[100vw] md:w-[75vw] block ml-auto mr-auto p-[40px]'>
                <p>
                    {t('description.biop3')}
                </p>
            </div>

        </div >
    )
}

export default Biography
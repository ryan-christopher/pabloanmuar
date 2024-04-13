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

            <h2 className='font-["Yatra_One"] uppercase text-black pt-[5vh] text-[40px] md:text-[50px] lg:text-[70px] text-center'>
                    {t('description.featuredon')}
                </h2>
                <hr className="border-[#f7ce5b] w-[70vw] sm:w-[30vw] border-[3px] rounded-md block ml-auto mr-auto" />
                <div className='flex flex-wrap justify-center w-[100vw]'>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://boldjourney.com/meet-pablo-anmuar/" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://www.freim.tv/radarfreim-playlist-nuevas-propuestas-hispanas-26-feb-03-mar-2024/" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://www.zonaemergente.com/2024/02/pabloanmuar-ya-se.html?m=1&fbclid=IwAR2HDWb9fmCSNnSrLAiMsAqxdnOhY02MpSG1-VZKZd5aKwuHZePknOrVEGM" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://www.somosgrandes.org/post/descubrimientos-semanales-alternative-indie-pop-soul-y-m%C3%A1s-30" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://www.rockolaindie.com/2024/02/pabloanmuar-ya-se.html?m=1" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://endsessions.com.mx/2024/02/16/pablo-anmuar-ya-se/?fbclid=IwAR1NCu0EZxaSmEq3XS0pUXy1nUYCWy8mcU9KKPRPaZTXAxknSDiGB2aa0EA" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://us-west-2.protection.sophos.com/?d=shoutoutla.com&u=aHR0cHM6Ly9zaG91dG91dGxhLmNvbS9tZWV0LXBhYmxvLWFubXVhci1wcm9kdWNlci1jb21wb3Nlci1wZXJmb3JtZXIv&i=NWYxNzBjNDRiNTVmZGEwZmIyNjczOTAx&t=ekpxK2FINnJ2YkQwQ1puMmtsUlBnNnRqV0svbmxkQTBpZU02UDhRNlVJST0=&h=53524121fe0b4dd9a661eb6c75a07f4c&s=AVNPUEhUT0NFTkNSWVBUSVaB8qWCVfX9m2pLD5K7Jr6Cp7k-pi0WNLdEVjpHZvHXdQ" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://www.wgbh.org/culture/2024-01-31/at-local-music-production-spaces-teens-find-confidence-community-and-college-acceptances" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://voyagela.com/interview/life-work-with-pablo-anmuar-of-boston/" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://bravorevista.com/pablo-anmuar-lanza-244-am-youre-the-kind-of-girl/" frameborder="0"></iframe>
                    <iframe title="Bravo Feature" className='min-h-[500px] min-w-[300px] md:min-w-[500px] w-[90vw] md:w-[30vw] m-[30px]'
                        src="https://www.freim.tv/radarfreim-playlist-con-canciones-nuevas-en-espanol/" frameborder="0"></iframe>
                    <iframe title="Soundcloud Interview" className='w-[70%] min-w-[300px] md:min-w-[500px] h-[300px]' scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1723852362&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>

        </div >
    )
}

export default Biography
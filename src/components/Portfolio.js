import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import MusicEntry from './MusicEntry';
import Video from '../components/Video';
import { useTranslation } from 'react-i18next';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function Portfolio() {
    const { t } = useTranslation();
    return (
        <div id="portfolio" className="min-h-[100vh] w-[100vw] bg-[#222725] text-white">

            <div>
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[35vh] sm:h-[55vh] min-h-[300px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/desk.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212170]' speed={0}>

                        <h2 className='font-["Yatra_One"] relative uppercase text-white top-[45%] bottom-0 ml-[3vw] text-[60px] md:text-[80px] lg:text-[120px] text-left'>
                            {t('description.portfolio')}
                        </h2>

                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>

            <span className='block ml-auto mr-auto w-[100vw] align-center text-right'>
                <Parallax rotate={[-30, 30]} className="w-[10vw] min-w-[120px] inline-block max-w-[200px] 
                        ease-linear duration-[50ms] mr-[10vw]">
                    <img src="media/pabdood.png" alt="" className="p-[0px] mt-[50px] opacity-100 hover:scale-125 ease-in duration-200" aria-hidden="true" />
                </Parallax>
            </span>

            <div className="borderwrapper w-fit ml-[calc(-2vw-10px)] mt-[-10vh] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[50px] pl-[calc(5vw+30px)] pr-[calc(5vw+30px)] md:text-[70px] lg:text-[80px] text-center ease-in duration-200'>
                        {t('description.music')}
                    </h2>
                </div>
            </div>

            <MusicEntry title={"House Show"} photo={"media/HouseShow.png"}
                spotEmbed={"https://open.spotify.com/embed/album/6dif3SiguAxTUF7yNfZC7Y?utm_source=generator"}
                credited={t('description.housecredit')} />
            <MusicEntry title={"2:44 AM"} photo={"media/244.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/3p8Yb7O3VzRaQb5LCzUi33?utm_source=generator"}
                credited={t('description.credit244')} />
            <MusicEntry title={"Situationship - Eden Hannah"} photo={"media/situationship.png"}
                spotEmbed={"https://open.spotify.com/embed/album/722d7AeCygH7qid5BOZuWB?utm_source=generator"}
                credited={t('description.situationshipcredit')} />
            <MusicEntry title={"Something New - Emily Sangder"} photo={"media/somethingnew.png"}
                spotEmbed={"https://open.spotify.com/embed/album/1bJdyCoSow27JH9PMrxq5Z?utm_source=generator"}
                credited={t('description.somethingnewcredit')} />
            <MusicEntry title={"Game Over - Felice"} photo={"media/gameover.png"}
                spotEmbed={"https://open.spotify.com/embed/album/2jc5PIaL1ykij8ZoVd9SR0?utm_source=generator"}
                credited={t('description.gameovercredit')} />
            <MusicEntry title={"Timido - Angel Javier"} photo={"media/timido.png"}
                spotEmbed={"https://open.spotify.com/embed/album/6vXESAlJT5PK9pLgbbviKg?utm_source=generator"}
                credited={t('description.timidocredit')} />
            <MusicEntry title={"Analog - Angel Javier"} photo={"media/analog.png"}
                spotEmbed={"https://open.spotify.com/embed/album/19tkQc1de6NXmgIBTWlnLR?utm_source=generator"}
                credited={t('description.analogcredit')} />
            <div className="borderwrapper p-[10px] pt-[30px] pb-[30px] w-fit ml-[calc(-2vw-10px)] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[60px] pl-[calc(5vw+30px)] pr-[calc(5vw+30px)] mb-[50px] md:text-[70px] lg:text-[80px] text-center ease-in duration-200'>
                        Videos
                    </h2>
                </div>
            </div>
            <div className='flex flex-wrap min-h-[1000px] justify-center w-[100vw]'>
                <Video videolink={"https://www.youtube-nocookie.com/embed/84Anqc2-K40?si=fV-lOv8ghAcqJE_X"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/uO2_d3x7AFQ?si=M1t-nTLIAaZGffB9"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/9EDQTycAYw0?si=iEyUg9Rq3KJiLltj"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/PiqdgeU7DoM?si=34ObLCUgODFw9xn3"} />
            </div>

        </div>
    )
}
export default Portfolio
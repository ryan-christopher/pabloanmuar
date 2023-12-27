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
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[35vh] sm:h-[45vh] min-h-[300px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/desk.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212170]' speed={0}>
                        <h2 className='font-["Yatra_One"] relative uppercase text-white top-[40%] bottom-0 ml-[3vw] text-[60px] md:text-[80px] lg:text-[120px] text-left'>
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
            <MusicEntry title={"Bleed Out - Aruna"} photo={"media/bleedout.png"}
                spotEmbed={"https://open.spotify.com/embed/album/0iYACdqhsnwAOTfEHLFz8b?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/0iYACdqhsnwAOTfEHLFz8b?si=Ry1U8F7LQEaPjliwBXIv0Q"}
                ytlink={"https://youtu.be/dh4fZisYL5M?si=9kPnnW1pMoyXUNVR"}
                applelink={"https://music.apple.com/us/album/bleed-out-single/1722824724"}
                credited={t('description.bleedoutcredit')} />
            <MusicEntry title={"House Show"} photo={"media/HouseShow.png"}
                spotEmbed={"https://open.spotify.com/embed/album/6dif3SiguAxTUF7yNfZC7Y?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/6dif3SiguAxTUF7yNfZC7Y?si=t7tpr8j7SZWbSL4zfE-JYg"}
                ytlink={"https://www.youtube.com/watch?v=KMWzvT2tdro&list=OLAK5uy_mL9ifirOgEaGs62JE392a6if-PvekPNvI&ab_channel=PABLO.ANMUAR-Topic"}
                applelink={"https://music.apple.com/us/album/house-show-ep/1711989841"}
                credited={t('description.housecredit')} />
            <MusicEntry title={"Not Me - Manny Force"} photo={"media/notme.png"}
                spotEmbed={"https://open.spotify.com/embed/track/4M5GiwyPY2TabIG8Rc5rF8?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/4M5GiwyPY2TabIG8Rc5rF8?si=dc96d0779c744597"}
                ytlink={"https://www.youtube.com/watch?v=g95pm_82D2E&ab_channel=MANNYFORCE"}
                applelink={"https://music.apple.com/us/album/not-me-single/1709393911"}
                credited={t('description.notmecredit')} />
            <MusicEntry title={"Let it Pop - Manny Force"} photo={"media/letitpop.png"}
                spotEmbed={"https://open.spotify.com/embed/album/4M7NKjrpyNfbz8IyC1fwrV?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/5IMo9ctDDUrouWUEMRr60A?si=e7c9e889ffd74366"}
                ytlink={"https://www.youtube.com/watch?v=GUxxAMUFGvs&ab_channel=MannyForce-Topic"}
                applelink={"https://music.apple.com/us/album/let-it-pop-single/1704734299"}
                credited={t('description.letitpopcredit')} />
            <MusicEntry title={"Situationship - Aruna"} photo={"media/situationship.png"}
                spotEmbed={"https://open.spotify.com/embed/album/722d7AeCygH7qid5BOZuWB?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/4P8kkguOXb56Ri2bLDGRnN?si=653f184bde274929"}
                ytlink={"https://youtu.be/8Uvvhg0h7Vk?si=SKqCZ9u0YKPKo6n8"}
                applelink={"https://music.apple.com/us/album/situationship-single/1698820111"}
                credited={t('description.situationshipcredit')} />
            <MusicEntry title={"Crave - Aruna"} photo={"media/crave.png"}
                spotEmbed={"https://open.spotify.com/embed/album/0z1zr537Rk3mjjgjjcmOgj?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/0z1zr537Rk3mjjgjjcmOgj?si=4tGGKlbjRCmhV1CJQdLkuQ"}
                ytlink={"https://youtu.be/CtCC213nUf0?si=YPYZU_EQ_KYX2CsI"}
                applelink={"https://music.apple.com/us/album/crave/1685844225?i=1685844631"}
                credited={t('description.cravecredit')} />
            <MusicEntry title={"2:44 AM"} photo={"media/244.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/3p8Yb7O3VzRaQb5LCzUi33?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/5XKzgVOqejBPnvMVBRDhS9?si=bedcad31d65048de"}
                ytlink={"https://www.youtube.com/watch?v=84Anqc2-K40&ab_channel=PABLO.ANMUAR"}
                applelink={"https://music.apple.com/us/album/2-44-am-youre-the-kind-of-girl-single/1667454232"}
                credited={t('description.credit244')} />
            <MusicEntry title={"Analog EP, Vol. 1 - Angel Javier"} photo={"media/analog.png"}
                spotEmbed={"https://open.spotify.com/embed/album/19tkQc1de6NXmgIBTWlnLR?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/19tkQc1de6NXmgIBTWlnLR?si=3x_kExfxSRaSOSSJ2bOq7g"}
                ytlink={"https://www.youtube.com/watch?v=k_TSkGkHDPY&list=OLAK5uy_kKiSQKbPQq2jTmD_cRfzWiYJcRnSwOUHs"}
                applelink={"None"}
                credited={t('description.analogcredit')} />
            <MusicEntry title={"Game Over - Felice"} photo={"media/gameover.png"}
                spotEmbed={"https://open.spotify.com/embed/album/2jc5PIaL1ykij8ZoVd9SR0?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/4tCMOubuNwOXchhIR6gnQl?si=e6c6a2d760414ce1"}
                ytlink={"https://youtu.be/0n7tfT3F72w?si=UuZ063pr6jMvhAjK"}
                applelink={"https://music.apple.com/us/album/game-over/1625899621?i=1625899622"}
                credited={t('description.gameovercredit')} />
            <MusicEntry title={"Tímido - Angel Javier"} photo={"media/timido.png"}
                spotEmbed={"https://open.spotify.com/embed/album/6vXESAlJT5PK9pLgbbviKg?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/4dOwe8QImbp2OHMLrTWppB?si=ec75e433a96b4c5b"}
                ytlink={"https://youtu.be/1Hym6RncXB0?si=ue7EwziK9YKIAssE"}
                applelink={"None"}
                credited={t('description.timidocredit')} />
            <MusicEntry title={"Something New - Emily Sangder"} photo={"media/somethingnew.png"}
                spotEmbed={"https://open.spotify.com/embed/album/1bJdyCoSow27JH9PMrxq5Z?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/5yWLLCQOdJSPy6oDqQOn3F?si=7de8869941094770"}
                ytlink={"https://youtu.be/mE-crXMY8kA?si=RteLb5KEd6ic1Jsy"}
                applelink={"https://music.apple.com/us/album/something-new-single/1516323323"}
                credited={t('description.somethingnewcredit')} />
            <MusicEntry title={"Keep Me Close - Angel Javier"} photo={"media/keepmeclose.png"}
                spotEmbed={"https://open.spotify.com/embed/track/51dGypnhAfyEEeK2jUr8xs?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/51dGypnhAfyEEeK2jUr8xs?si=ea4c6b78faf04841"}
                ytlink={"https://youtu.be/aJAx3L32Z7Q?si=59x8JllsW9GqTnAK"}
                applelink={"None"}
                credited={t('description.keepmeclosecredit')} />
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
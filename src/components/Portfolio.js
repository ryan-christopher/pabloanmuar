import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import MusicEntry from './MusicEntry';
import Video from '../components/Video';
import { useTranslation } from 'react-i18next';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function Portfolio() {
    const { t } = useTranslation();
    return (
        <div id="portfolio" className="min-h-[100vh] w-full bg-[#222725] text-white">
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
            <span className='block ml-auto mr-auto w-full align-center text-right'>
                <Parallax rotate={[-30, 30]} className="w-[15vw] min-w-[150px] inline-block max-w-[400px] 
                        ease-linear duration-[50ms] mr-[10vw]">
                    <img src="media/pabloVinyl.png" alt="" className="mt-[50px] opacity-100 hover:scale-125 ease-in duration-200" aria-hidden="true" />
                </Parallax>
            </span>
            <div className="borderwrapper w-fit ml-[calc(-2vw-10px)] mt-[-10vh] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[50px] pl-[calc(5vw+30px)] pr-[calc(5vw+30px)] md:text-[70px] lg:text-[80px] text-center ease-in duration-200'>
                        {t('description.music')}
                    </h2>
                </div>  
            </div>
            <MusicEntry title={"CHOPPED CHEESE - PABLO.ANMUAR"} photo={"media/chopped.jpg"}
                spotEmbed={"https://open.spotify.com/embed/track/0uRHeknUizDfuVEhDKLYOD?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/0uRHeknUizDfuVEhDKLYOD?si=54840ce30b4a4f5c"}
                ytlink={"https://youtu.be/vqf4GZ9E4dg"}
                applelink={"https://music.apple.com/us/album/chopped-cheese-single/1774595959"}
                credited={t('description.choppedcredit')} />
            <MusicEntry title={"Soulless Trap - Lo Key Blaque"} photo={"media/slt.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/0R32b55QQ5ULp0lWD9JnaB?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/0R32b55QQ5ULp0lWD9JnaB?si=e4B5-dZSQL6SORIse_5uYQ"}
                ytlink={"https://www.youtube.com/watch?v=l8SlsWgWGak&list=OLAK5uy_nyW42OOHSGqtgxAZIkiiFty9Dhg2qa1pE"}
                applelink={"https://music.apple.com/us/album/soulless-trap-ep/1745600113"}
                credited={t('description.soulcredit')} />
            <MusicEntry title={"Soulful Emotions - Lo Key Blaque"} photo={"media/sfe.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/4G1b1x8YaCAWBkhoukO7gj?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/4G1b1x8YaCAWBkhoukO7gj?si=z51Qmdu1ReSrQ2dOh_8lZA"}
                ytlink={"https://www.youtube.com/watch?v=e7qGCC9rDEE&list=OLAK5uy_mWfJtU1cmsxQPgx5KQbAGcd-KUMY7sxLI"}
                applelink={"https://music.apple.com/us/album/soulful-emotions-ep/1745479427"}
                credited={t('description.soulcredit')} />
            <MusicEntry title={"LOYALTY - Storyarxh"} photo={"media/lty.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/4PbfTIEIGMLJLnEmvyKURy?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/43NfTHNKotRfyt8EUsewJw?si=b0d437801e7f4203"}
                ytlink={"https://youtu.be/epNmcPCo-NY?si=xRgNYcXDINyVnSgL"}
                applelink={"https://music.apple.com/us/album/loyalty-single/1744631966"}
                credited={t('description.inspofromlarcredit')} />
            <MusicEntry title={"JOHN KRAMER - Storyarxh, Tact"} photo={"media/jk.jpg"}
                spotEmbed={"https://open.spotify.com/embed/track/37nIefrp5pv3Yr2vkmayiW?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/0HiJvPQUm28bjwNG0bhRX0?si=7gNaiINJT-aJwFPIjFuwOg"}
                ytlink={"https://www.youtube.com/watch?v=EZyJaDsRK4E&ab_channel=Storyarxh-Topic"}
                applelink={"https://music.apple.com/us/album/john-kramer-feat-tact-single/1732587584"}
                credited={t('description.jkcredit')} />
            <MusicEntry title={"Ya Sé - PABLO.ANMUAR"} photo={"media/yase.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/3dEX360KYGSCSPPop6N9Fo?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/3dEX360KYGSCSPPop6N9Fo?si=nzTANspuRtOgk1G8rSbMTA"}
                ytlink={"https://www.youtube.com/watch?v=QUV-siqWjpw&list=OLAK5uy_nd6vXz2_L1MgvUELU54MzKkHp_z0UaccQ"}
                applelink={"https://music.apple.com/us/album/ya-s%C3%A9-single/1726715755"}
                credited={t('description.yasecredit')} />
            <MusicEntry title={"Inspo From Lar - Storyarxh"} photo={"media/inspofromlar.jpeg"}
                spotEmbed={"https://open.spotify.com/embed/album/1n1CLcBnpWyDtzSWvyqsCa?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/1n1CLcBnpWyDtzSWvyqsCa?si=aXYPqsVcS8Wuajf2b7y_Tw"}
                ytlink={"https://www.youtube.com/watch?v=FDZezsbiXgs&list=OLAK5uy_n1Q6g-pnfBjj0C63eorYN_VHlkxdELdPQ"}
                applelink={"https://music.apple.com/us/album/inspo-from-lar/1730924335?i=1730924336"}
                credited={t('description.inspofromlarcredit')} />
            <MusicEntry title={"AMY - BTC Records"} photo={"media/AMY.png"}
                spotEmbed={"https://open.spotify.com/embed/album/0V7PGMbalVxFx2ToWGg8wl?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/0V7PGMbalVxFx2ToWGg8wl?si=xTdvDgI5QJStEnI00yJvQA"}
                ytlink={"https://www.youtube.com/watch?v=fqgaVtNJiyk&list=OLAK5uy_lrlQGq_3gRkzvCu1WDrUbxbpNGQzfNbYM"}
                applelink={"https://music.apple.com/us/album/amy/1730944589"}
                credited={t('description.amycredit')} />
            <MusicEntry title={"rises the moon - BTC Records ft. Jynx Starr"} photo={"media/risesthemoon.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/7MWqWJUDPyVxoLTpBptThI?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/7MWqWJUDPyVxoLTpBptThI?si=UfaCRtjaQ8m3uBb6hoFbLg"}
                ytlink={"https://youtu.be/vtxLkPG-s-M?si=LN10_Dd6p8ghZW2e"}
                applelink={"https://music.apple.com/us/album/rises-the-moon-feat-jynx-starr/1730655448?i=1730655450"}
                credited={t('description.risesthemooncredit')} />
            <MusicEntry title={"Bleed Out - Aruna"} photo={"media/bleedout.png"}
                spotEmbed={"https://open.spotify.com/embed/album/0iYACdqhsnwAOTfEHLFz8b?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/0iYACdqhsnwAOTfEHLFz8b?si=Ry1U8F7LQEaPjliwBXIv0Q"}
                ytlink={"https://youtu.be/dh4fZisYL5M?si=9kPnnW1pMoyXUNVR"}
                applelink={"https://music.apple.com/us/album/bleed-out-single/1722824724"}
                credited={t('description.bleedoutcredit')} />
            <MusicEntry title={"House Show - PABLO.ANMUAR"} photo={"media/HouseShow.png"}
                spotEmbed={"https://open.spotify.com/embed/album/6dif3SiguAxTUF7yNfZC7Y?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/6dif3SiguAxTUF7yNfZC7Y?si=t7tpr8j7SZWbSL4zfE-JYg"}
                ytlink={"https://www.youtube.com/watch?v=KMWzvT2tdro&list=OLAK5uy_mL9ifirOgEaGs62JE392a6if-PvekPNvI&ab_channel=PABLO.ANMUAR-Topic"}
                applelink={"https://music.apple.com/us/album/house-show-ep/1711989841"}
                credited={t('description.housecredit')} />
            <MusicEntry title={"Not Me - Manny Force,SLVG, Lo Key Blaque"} photo={"media/notme.png"}
                spotEmbed={"https://open.spotify.com/embed/track/4M5GiwyPY2TabIG8Rc5rF8?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/4M5GiwyPY2TabIG8Rc5rF8?si=dc96d0779c744597"}
                ytlink={"https://www.youtube.com/watch?v=g95pm_82D2E&ab_channel=MANNYFORCE"}
                applelink={"https://music.apple.com/us/album/not-me-single/1709393911"}
                credited={t('description.notmecredit')} />
            <MusicEntry title={"Let it Pop - Manny Force, SLVG, Lo Key Blaque"} photo={"media/letitpop.png"}
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
            <MusicEntry title={"2:44 AM - PABLO.ANMUAR"} photo={"media/244.jpg"}
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
            <div className='flex flex-wrap min-h-[1000px] justify-center w-full'>
                <Video videolink={"https://www.youtube-nocookie.com/embed/vqf4GZ9E4dg?si=d7j0Kzr8k753pQtj"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/4B6o47Eu__Y?si=HYatOdiRs3rbpeWD"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/84Anqc2-K40?si=fV-lOv8ghAcqJE_X"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/uO2_d3x7AFQ?si=M1t-nTLIAaZGffB9"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/9EDQTycAYw0?si=iEyUg9Rq3KJiLltj"} />
            </div>
        </div>
    )
}
export default Portfolio
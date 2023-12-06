import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import MusicEntry from '../components/MusicEntry'
import Video from '../components/Video';

function Portfolio() {
    return (
        <div id="portfolio" className="min-h-[100vh] w-[100vw] bg-[#222725] text-white">
            <h2 className='pt-[80px] font-["Yatra_One"] uppercase text-[65px] md:text-[80px] lg:text-[120px] text-center lg:text-left lg:ml-[12vw] ease-in duration-200'>
                Portfolio
            </h2>
            <span className='block ml-auto mr-auto w-[100vw] align-center text-right'>
                <Parallax rotate={[-30, 30]} className="w-[10vw] min-w-[120px] inline-block max-w-[200px] 
                        ease-linear duration-[50ms] mr-[10vw]">
                    <img src="media/pabdood.png" alt="" className="p-[0px] opacity-100 hover:scale-125 ease-in duration-200" aria-hidden="true" />
                </Parallax>
            </span>

            <div className="borderwrapper p-[10px] pt-[30px] pb-[30px] w-fit ml-[calc(-2vw-10px)] mt-[-10vh] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[60px] pl-[calc(7vw+30px)] pr-[calc(7vw+30px)] md:text-[70px] lg:text-[100px] text-center ease-in duration-200'>
                        Music
                    </h2>
                </div>
            </div>

            <MusicEntry photo={"media/HouseShow.png"} spotEmbed={"https://open.spotify.com/embed/album/6dif3SiguAxTUF7yNfZC7Y?utm_source=generator"} />
            <MusicEntry photo={"media/244.jpg"} spotEmbed={"https://open.spotify.com/embed/album/3p8Yb7O3VzRaQb5LCzUi33?utm_source=generator"} />
            <MusicEntry photo={"media/situationship.png"} spotEmbed={"https://open.spotify.com/embed/album/722d7AeCygH7qid5BOZuWB?utm_source=generator"} />
            <MusicEntry photo={"media/somethingnew.png"} spotEmbed={"https://open.spotify.com/embed/album/1bJdyCoSow27JH9PMrxq5Z?utm_source=generator"} />
            <MusicEntry photo={"media/gameover.png"} spotEmbed={"https://open.spotify.com/embed/album/2jc5PIaL1ykij8ZoVd9SR0?utm_source=generator"} />
            <MusicEntry photo={"media/timido.png"} spotEmbed={"https://open.spotify.com/embed/album/6vXESAlJT5PK9pLgbbviKg?utm_source=generator"} />
            <MusicEntry photo={"media/analog.png"} spotEmbed={"https://open.spotify.com/embed/album/19tkQc1de6NXmgIBTWlnLR?utm_source=generator"} />


            <div className="borderwrapper p-[10px] pt-[30px] pb-[30px] w-fit ml-[calc(-2vw-10px)] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[60px] pl-[calc(7vw+30px)] pr-[calc(7vw+30px)] md:text-[70px] lg:text-[100px] text-center ease-in duration-200'>
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
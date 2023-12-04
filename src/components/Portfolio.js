import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import MusicEntry from '../components/MusicEntry'

function Portfolio() {
    return (
        <div id="portfolio" className="min-h-[100vh] w-[100vw] bg-[#222725] text-white pb-[100px]">
            <h2 className='pt-[80px] font-["Yatra_One"] uppercase text-[65px] md:text-[80px] lg:text-[120px] text-left ml-[12vw] ease-in duration-200'>
                Portfolio
            </h2>
            <span className='block ml-auto mr-auto w-[100vw] align-center text-right'>
                <Parallax rotate={[-30, 30]} className="w-[10vw] min-w-[120px] inline-block max-w-[200px] 
                        ease-linear duration-[50ms] mr-[10vw]">
                    <img src="media/pabdood.png" alt="" className="p-[0px] opacity-100 hover:scale-125 ease-in duration-200" aria-hidden="true" />
                </Parallax>
            </span>

            <div className="borderwrapper p-[10px] pt-[30px] pb-[30px] w-fit ml-[-2vw] mt-[-10vh] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[40px] pl-[7vw] pr-[7vw] md:text-[70px] lg:text-[100px] text-center ease-in duration-200'>
                        Music
                    </h2>
                </div>
            </div>

            <MusicEntry photo={"media/HouseShow.png"} delayVal={2} spotEmbed={"https://open.spotify.com/embed/album/6dif3SiguAxTUF7yNfZC7Y?utm_source=generator"} />
            <MusicEntry photo={"media/244.jpg"} delayVal={3} spotEmbed={"https://open.spotify.com/embed/album/3p8Yb7O3VzRaQb5LCzUi33?utm_source=generator"} />

            <div className="borderwrapper p-[10px] pt-[30px] pb-[30px] w-fit ml-[-2vw] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[40px] pl-[7vw] pr-[7vw] md:text-[70px] lg:text-[100px] text-center ease-in duration-200'>
                        Videos
                    </h2>
                </div>
            </div>
            {/*
            <iframe width="560" height="315" src="https://www.youtube.com/embed/84Anqc2-K40?si=bbCZL8Sc1eQGMuq-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                */}
        </div>
    )
}
export default Portfolio
import React from 'react'
import { Parallax } from 'react-scroll-parallax';

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

            {/*}
                <iframe
                    title='Pablo Spofity'
                    className='rounded-sm block ml-auto mr-auto'
                    src="https://open.spotify.com/embed/artist/4jPN3jx8MwNtQMJ6PD46yJ?utm_source=generator"
                    width="75%" height="352" frameBorder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
                    
            <iframe title="House Party"
                className='rounded-sm block ml-auto mr-auto'
                src="https://open.spotify.com/embed/artist/4jPN3jx8MwNtQMJ6PD46yJ?utm_source=generator"
                width="75%" height="550px" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
                 */}
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
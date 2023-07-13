import React from 'react'

// Styles
import "../styles/App.css"
import "../styles/index.css"

//import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Guitar from '../components/Guitar'
import SongCard from '../components/SongCard'

// Moving Text
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Marquee from "react-fast-marquee";

function home() {
    return (
        <div>
            {/* <Link to="/styling">Style page</Link> */}

            {/* 
                Site colors
                "Eerie Black" - #222725
                "Alice Blue" - #e9f1f7
                "Mustard" - #f7ce5b
                "Gray" - #7c7c7c
                "Cinnabar" - #d1603d
            */}

            <Navbar />

            <div id="home" className="min-h-[100vh] w-[100vw] bg-[#222725]">

                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[100vh] max-w-[100vw]">
                    <ParallaxBannerLayer image="landingpic.jpeg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#08080861] ease-in duration-200' speed={0}>

                        <div className="text-white font-['Mynerve'] absolute bottom-[1vh] right-[50px] text-[40px] md:text-[70px]">
                            <div className="rotate-[-90deg] translate-x-[80px] translate-y-[-50px] md:translate-x-[140px] md:translate-y-[-80px]">Música</div>
                            <div>Trágame &#x2022;</div>
                        </div>

                        <span className='block ml-auto mr-auto w-[100vw] align-center text-center mt-[50px]'>
                            <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[30px] 
                        ease-linear duration-[50ms] mr-[8vw] ml-[8vw]">

                            </Parallax>
                        </span>
                    </ParallaxBannerLayer>
                </ParallaxBanner>


            </div>

            <div id="portfolio" className="min-h-[100vh] w-[100vw] bg-[#d1603d] text-white pb-[100px]">

                <h2 className='pt-[50px] font-["Bungee_Shade"] text-[40px] md:text-[100px] lg:text-[150px] text-center ease-in duration-200'>
                    Portfolio
                </h2>

                <h2 className='pt-[50px] font-["Mynerve"] text-[30px] md:text-[70px] lg:text-[100px] text-center ease-in duration-200'>
                    Songs
                </h2>
                <div className='flex flex-wrap justify-center pt-[50px] w-[100vw]'>
                    <SongCard name="2:44 AM" photo="AlbumPhoto.jpg" />

                    <Marquee
                        speed={0}
                        gradient={false}
                        direction={'left'}
                        pauseOnHover={'true'}>



                    </Marquee>

                </div>

                <h2 className='pt-[50px] font-["Mynerve"] text-[30px] md:text-[70px] lg:text-[100px] text-center ease-in duration-200'>
                    Videos
                </h2>
                <div className='flex flex-wrap justify-center pt-[50px] w-[100vw]'>
                    <SongCard name="2:44 AM" photo="AlbumPhoto.jpg" />
                    <Marquee
                        speed={0}
                        gradient={false}
                        direction={'left'}
                        pauseOnHover={'true'}>

                    </Marquee>
                </div>

            </div>

            <div id="about" className='bg-[#0e0e0e]'>
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[30vh] sm:h-[40vh] max-w-[700px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="youngPablo.jpeg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#08080861]' speed={0}>

                        <h2 className='font-["Bungee_Shade"] text-white pt-[10vh] text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px] text-center'>
                            About
                        </h2>

                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <div className="w-[100vw] bg-[#f7ce5b] pb-[150px]">
                <div className="flex flex-col xl:flex-row justify-between w-[90vw] ml-[5vw] pt-[75px]">
                    <div className='font-["Fredoka"] text-black text-[30px] pt-[50px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit assumenda dolores eaque, explicabo sapiente qui dolor autem facilis. Sit aperiam quaerat perspiciatis quos deserunt, illum deleniti ducimus porro officiis possimus.
                    </div>
                    <Guitar />
                    <div className='font-["Fredoka"] text-black text-[30px] pt-[50px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sint veniam reprehenderit deleniti eaque? Libero at totam porro quasi, soluta, enim ducimus officia suscipit in eveniet consequatur exercitationem voluptatibus ipsa.
                    </div>

                </div>


            </div>

            <div id="contact" className="min-h-[100vh] w-[100vw] bg-[#e9f1f7]">
                <h2 className='font-["Mynerve"] text-[40px] md:text-[70px] font-bold text-center w-[100%] block ml-auto mr-auto'>Pablo <br /> Anmuar</h2>

            </div>
        </div>
    )
}

export default home
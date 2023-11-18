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
//import { IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
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

            <div id="home" className="min-h-[100vh] w-[100vw] bg-[#4c5552] pt-[72px]">

                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[100vh] max-w-[100vw]">
                    <ParallaxBannerLayer image="media/22.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#08080861] ease-in duration-200' speed={0}>

                        <div className="text-white font-['Mynerve'] absolute bottom-[330px] right-[20px] font-bold pb-[72px] text-[40px] md:text-[70px] z-10">
                            <a href="#/" rel="noreferrer" target="_blank"><FaSpotify
                                className="social-link ml-[10px] mr-[10px] text-white ease-in duration-200 text-[100px]" id="spotify" />
                            </a>
                            <a href="#/" rel="noreferrer" target="_blank"><FaYoutube
                                className="social-link ml-[10px] mr-[10px] mt-[30px] text-white ease-in duration-200" id="youtube" />
                            </a>
                            <a href="#/" rel="noreferrer" target="_blank"><SiApplemusic
                                className="social-link ml-[10px] mr-[10px] mt-[30px] mb-[30px] text-white ease-in duration-200" id="applemusic" />
                            </a>
                        </div>


                        <span className='block ml-auto mr-auto w-[100vw] align-center text-center mt-[50px]'>
                            <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[30px] 
                        ease-linear duration-[50ms] mr-[8vw] ml-[8vw]">

                            </Parallax>
                        </span>
                    </ParallaxBannerLayer>
                </ParallaxBanner>


            </div>

            <div id="portfolio" className="min-h-[100vh] w-[100vw] bg-[#222725] text-white pb-[100px]">

                <h2 className='pt-[50px] font-["Yatra_One"] text-[50px] md:text-[75px] lg:text-[90px] text-center ease-in duration-200'>
                    Portfolio
                </h2>


                <span className='block ml-auto mr-auto w-[100vw] align-center text-right'>
                    <Parallax rotate={[-30, 30]} className="w-[10vw] min-w-[120px] inline-block max-w-[200px] 
                        ease-linear duration-[50ms] mr-[10vw]">
                        <img src="pabdood.png" alt="" className="p-[0px] opacity-100 hover:scale-125 ease-in duration-200" aria-hidden="true" />
                    </Parallax>
                </span>

                <h2 className='pl-[12.5vw] font-["Mynerve"] text-[40px] md:text-[70px] lg:text-[100px] text-left ease-in duration-200'>
                    Songs
                </h2>
                <hr className='text-[#ffffff] bg-white border-[#ffffff] w-[75vw] 
            block ml-auto mr-auto h-[3px] rounded-md' />

                {/*}
                <div className='flex flex-wrap justify-center pt-[50px] w-[100vw]'>
                    <SongCard name="2:44 AM" photo="AlbumPhoto.jpg" />

                    <Marquee
                        speed={0}
                        gradient={false}
                        direction={'left'}
                        pauseOnHover={'true'}>



                    </Marquee>

                </div>

                <iframe
                    title='Pablo Spofity'
                    className='rounded-sm block ml-auto mr-auto'
                    src="https://open.spotify.com/embed/artist/4jPN3jx8MwNtQMJ6PD46yJ?utm_source=generator"
                    width="75%" height="352" frameBorder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
                     */}
                <iframe title="House Party"
                    className='rounded-sm block ml-auto mr-auto'
                    src="https://open.spotify.com/embed/artist/4jPN3jx8MwNtQMJ6PD46yJ?utm_source=generator"
                    width="75%" height="550px" frameBorder="0" allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
                <h2 className='pt-[50px] pl-[12.5vw] font-["Mynerve"] text-[40px] md:text-[70px] lg:text-[100px] text-left ease-in duration-200'>
                    Videos
                </h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/84Anqc2-K40?si=bbCZL8Sc1eQGMuq-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <hr className='text-[#ffffff] bg-white border-[#ffffff] w-[75vw] 
            block ml-auto mr-auto h-[3px] rounded-md' />
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
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[30vh] sm:h-[40vh] max-w-[1400px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="youngPablo.jpeg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#08080861]' speed={0}>

                        <h2 className='font-["Yatra_One"] text-white pt-[10vh] text-[60px] sm:text-[100px] md:text-[150px] lg:text-[150px] text-center'>
                            About
                        </h2>

                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <div className="w-[100vw] bg-[#f7ce5b] pb-[150px]">
                <div className="w-[90vw] ml-[5vw] pt-[75px]">
                    <div className='font-["Fredoka"] text-black text-[25px] lg:text-[30px] pt-[50px]'>
                        I have always been fascinated by the amount of different styles of music that the human race has evolved to produce.
                        Generations after generations of artistic expression that go all the way back to our ancestors who lived in caverns
                        and worshiped fire. If anything, this shows how music is something bound to our most primitive instincts.
                        What I pursue with my music, is to create sounds that feel human; sounds that connect with the most inner fiber of our
                        beings.
                    </div>

                    <div className='bg-[#d1603d] xl:mt-[10%] mt-[30px] h-[500px] w-[30vw] block ml-auto mr-auto'>
                        <div>
                            What I pursue with my music, is to create sounds that feel human; sounds that connect with the most inner fiber of our beings.
                        </div>
                        <div className=''>
                            <Guitar />
                        </div>
                        <div>
                            I have always seen music as a language that can connect people no matter where they come from, or what language they speak.
                        </div>
                    </div>


                    <div className='font-["Fredoka"] text-black text-[25px] lg:text-[30px] pt-[20px] xl:pt-[500px]'>
                        I have always seen music as a language that can connect people no matter where they come from, or what language
                        they speak. In the same way, my music is the reflection of this belief: I want to create music that doesn’t need
                        translation from culture to culture, language to language. How can one achieve this? The answer is creating a sound
                        so universal, that your body and your mind assimilate it before thinking of the words that are being sung. This is
                        the ultimate goal I pursue with all of my music. It doesn’t matter if it is a simple composition with voice and
                        guitar, a Big Band arrangement, or even an orchestral piece; if you can connect with your audience before you have
                        said the first word, you have already won.
                    </div>

                </div>


            </div>

            <div id="contact" className="min-h-[100vh] w-[100vw] bg-[#e9f1f7]">
                <h2 className='font-["Yatra_One"] text-[40px] md:text-[70px] pt-[72px] uppercase font-bold text-center w-[100%] block ml-auto mr-auto'>Pablo.Anmuar</h2>

                <img src="pabloDoodle2.png" alt="" className="block ml-auto mr-auto w-[20vw] min-w-[125px]" />
                <div className="flex-container-social">
                    <a href="#/" rel="noreferrer" target="_blank"><FaSpotify
                        className="social-link ml-[10px] mr-[10px] text-green-500 ease-in duration-200" id="github" />
                    </a>
                    <a href="#/" rel="noreferrer" target="_blank"><FaYoutube
                        className="social-link ml-[10px] mr-[10px] text-red-500 ease-in duration-200" id="github" />
                    </a>
                    <a href="#/" rel="noreferrer" target="_blank"><SiApplemusic
                        className="social-link ml-[10px] mr-[10px] text-pink-600 ease-in duration-200" id="github" />
                    </a>
                </div>

            </div>
        </div>
    )
}

export default home
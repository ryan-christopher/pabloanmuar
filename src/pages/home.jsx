import React from 'react'
// Styles
import "../styles/App.css"
import "../styles/index.css"
//import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Guitar from '../components/Guitar'
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

                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[120vh] max-w-[100vw]">
                    <ParallaxBannerLayer image="landingpic.jpeg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#08080861] ease-in duration-200' speed={0}>

                        <div className="text-white font-['Bungee_Shade'] absolute bottom-[23vh] right-[50px] text-[40px] md:text-[70px]">
                            <div className="rotate-[-90deg] translate-x-[120px] translate-y-[-100px] md:translate-x-[210px] md:translate-y-[-170px]">Música</div>
                            <div>Trágame &#x2022;</div>
                        </div>

                        <span className='asteriskcontainer block ml-auto mr-auto w-[100vw] align-center text-center mt-[50px]'>
                            <Parallax rotate={[0, 360]} className="w-[10vw] min-w-[40px] inline-block max-w-[55px] mt-[30px] 
                        ease-linear duration-[50ms] mr-[8vw] ml-[8vw]">
                                !
                            </Parallax>
                        </span>
                    </ParallaxBannerLayer>
                </ParallaxBanner>


            </div>

            <div id="portfolio" className="min-h-[100vh] w-[100vw] bg-[#d1603d]">

            </div>

            <div id="about" className="min-h-[100vh] w-[100vw] bg-[#f7ce5b]">
                <Guitar />
            </div>

            <div id="contact" className="min-h-[100vh] w-[100vw] bg-[#e9f1f7]">

            </div>
        </div>
    )
}

export default home
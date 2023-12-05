import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Guitar from '../components/Guitar'
import "../styles/offsetBorder.css"

function About() {
    return (
        <div id="about" className='bg-[#222725] pt-[72px]'>

            <div >
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[25vh] lg:h-[35vh] min-h-[200px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/yellowjacket.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>

                        <h2 className='font-["Yatra_One"] uppercase text-white pt-[15vh] sm:pt-[5vh] lg:pt-[15vh] ml-[5vw] text-[70px] sm:text-[100px] md:text-[150px] lg:text-[160px] text-left'>
                            About
                        </h2>

                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <div className="w-[100vw] bg-[#f7ce5b] pb-[150px]">
                <div className="font-['Patrick_Hand'] w-[90vw] ml-[5vw] pt-[75px]">
                    <div className='text-black text-[25px] lg:text-[32px] pt-[0px] pb-[20px] w-[90vw] md:w-[60vw] text-left'>
                        I have always been fascinated by the amount of different styles of music that the human race has evolved to produce.
                        Generations after generations of artistic expression that go all the way back to our ancestors who lived in caverns
                        and worshiped fire. If anything, this shows how music is something bound to our most primitive instincts.
                    </div>

                    <div className="borderwrapper p-[10px] pt-[30px] pb-[30px] w-[85vw] xl:w-[36vw] block ml-auto mr-auto">
                        <div className='bg-[#d1603d] offsetBorder !border-black p-[10px] min-h-[600px] w-[80vw] xl:w-[30vw] rounded-[5px] block ml-auto mr-auto'>
                            <div className='text-white text-[25px] w-[80%]'>
                                What I pursue with my music, is to create sounds that feel human; sounds that connect with the most inner fiber of our beings.                         </div>
                            <div className=''>
                                <Guitar />
                            </div>
                            <div className='text-white text-[25px] text-right w-[80%] ml-auto mt-[-20px] pb-[20px]'>
                                I have always seen music as a language that can connect people no matter where they come from, or what language they speak.
                            </div>
                        </div>
                    </div>

                    <div className='text-black text-[25px] lg:text-[32px] pt-[20px] xl:pt-[20px] w-[90vw] md:w-[60vw] text-right block ml-auto'>
                        In the same way, my music is the reflection of this belief: I want to create music that doesn’t need
                        translation from culture to culture, language to language. How can one achieve this? The answer is creating a sound
                        so universal, that your body and your mind assimilate it before thinking of the words that are being sung. This is
                        the ultimate goal I pursue with all of my music. It doesn’t matter if it is a simple composition with voice and
                        guitar, a Big Band arrangement, or even an orchestral piece; if you can connect with your audience before you have
                        said the first word, you have already won.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About
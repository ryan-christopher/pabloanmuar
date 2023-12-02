import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Guitar from '../components/Guitar'
import "../styles/offsetBorder.css"

function About() {
    return (
        <div id="about" className='bg-[#0e0e0e]'>

            <div >
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[30vh] sm:h-[40vh] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/yellowjacket.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212138]' speed={0}>

                        <h2 className='font-["Yatra_One"] text-white pt-[23vh] text-[60px] sm:text-[100px] md:text-[150px] lg:text-[160px] text-left'>
                            About
                        </h2>

                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <div className="w-[100vw] bg-[#f7ce5b] pb-[150px]">
                <div className="font-['Patrick_Hand'] w-[90vw] ml-[5vw] pt-[75px]">
                    <div className='text-black text-[25px] lg:text-[25px] pt-[0px] w-[50vw] leading-[50px] text-left'>
                        I have always been fascinated by the amount of different styles of music that the human race has evolved to produce.
                        Generations after generations of artistic expression that go all the way back to our ancestors who lived in caverns
                        and worshiped fire. If anything, this shows how music is something bound to our most primitive instincts.
                        What I pursue with my music, is to create sounds that feel human; sounds that connect with the most inner fiber of our
                        beings.
                    </div>

                    <div className='bg-[#d1603d] offsetBorder !border-black p-[10px] mt-[50px] h-[700px] w-[40vw] rounded-[5px] block ml-auto mr-auto'>
                        <div className='text-white'>
                            What I pursue with my music, is to create sounds that feel human; sounds that connect with the most inner fiber of our beings.                         </div>
                        <div className=''>
                            <Guitar />
                        </div>
                        <div className='text-white'>
                            I have always seen music as a language that can connect people no matter where they come from, or what language they speak.
                        </div>
                    </div>

                    <div className='text-black text-[25px] lg:text-[25px] pt-[20px] xl:pt-[50px] w-[50vw] leading-[50px] text-right block ml-auto'>
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
        </div>
    )
}
export default About
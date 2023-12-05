import React from 'react'
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
import "../styles/offsetBorder.css"

function MusicEntry({ photo, url, spotEmbed }) {
    return (
        <div className='w-[100vw] text-white flex flex-col lg:flex-row lg:h-[40vh] mt-[calc(5vh+100px)] mb-[calc(5vh+100px)]'>
            <div className='flex-initial whitespace-nowrap max-w-[100vw] lg:w-[40vw]'>
                <img className='relative h-[30vh] w-[50vw] lg:w-[25vw] lg:h-[100%] lg:min-h-[300px] object-cover inline-block z-[1] border-[#d1603d] border-2 border-l-[0] rounded-md' src={photo} alt="" />
                <div className='inline-block origin-center translate-x-[-60%]'>
                    <img className={`h-[25vh] object-cover overflow-visible lg:h-[75%] z-[0] inline-block animate-[spin_3s_linear_infinite_1s] origin-center`} src="media/vinyl.png" alt="" />
                </div>

            </div>
            <div className='flex flex-row lg:flex-col flex-initial content-between justify-center ml-auto mr-auto w-[80vw] lg:w-[20vw] text-[30px]'>
                <div className="borderwrapper inline-flex lg:flex align-middle ml-auto mr-auto p-[20px] justify-center">
                    <a className='offsetBorder flex justify-center' href="#/" rel="noreferrer" target="_blank">
                        <FaSpotify className="" id="spotify" />
                    </a>
                </div>

                <div className="borderwrapper inline-flex lg:flex align-middle ml-auto mr-auto p-[20px] justify-center">
                    <a className='offsetBorder flex justify-center' href="#/" rel="noreferrer" target="_blank">
                        <FaYoutube className="" id="youtube" />
                    </a>
                </div>
                <div className="borderwrapper inline-flex lg:flex align-middle ml-auto mr-auto p-[20px] justify-center">
                    <a className='offsetBorder flex justify-center' href="#/" rel="noreferrer" target="_blank">
                        <SiApplemusic className="" id="applemusic" />
                    </a>
                </div>
            </div>
            <div className='flex-initial w-[75vw] ml-auto mr-auto lg:w-[40vw] min-h-[350px]'>
                <iframe title='Song Entry' className='min-h-[352px]' src={spotEmbed} width="100%" height="100%" loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default MusicEntry
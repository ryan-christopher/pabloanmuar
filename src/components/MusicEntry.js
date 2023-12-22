import React from 'react'
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
import "../styles/offsetBorder.css"

function MusicEntry({ title, photo, url, spotEmbed, credited }) {
    return (
        <div className='w-[100vw] text-white mt-[calc(5vh+100px)] mb-[calc(5vh+100px)]'>
            <h2 className="font-['Yatra_One'] text-[30px] sm:text-[50px] lg:text-[70px] ml-[20px]">{title}</h2>
            <div className='flex flex-col lg:flex-row lg:h-[35vh]'>
                <div className='flex-initial whitespace-nowrap max-w-[100vw] lg:w-[40vw]'>
                    <img className='relative h-[25vh] w-[40vw] lg:w-[20vw] lg:h-[100%] lg:min-h-[300px] object-cover inline-block z-[1] border-l-[0] rounded-l-none rounded-md' src={photo} alt="" />
                    <div className='inline-block origin-center translate-x-[-60%]'>
                        <img className={`h-[20vh] object-cover overflow-visible lg:h-[75%] z-[0] inline-block animate-[spin_4s_linear_infinite_1s] origin-center`} src="media/vinyl.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-row lg:flex-col flex-initial content-between justify-center ml-auto mr-auto mt-[10px] min-w-[275px] w-[50vw] lg:w-[20vw] text-[30px]'>
                    <iframe title='Song Entry' className='min-h-[352px]' src={spotEmbed} width="100%" height="100%" loading="lazy"></iframe>
                </div>
                <div className='flex-initial w-[75vw] ml-auto mr-auto lg:w-[40vw] min-h-[100px]'>
                    <h3 className='font-["Waiting_for_the_Sunrise"] text-[35px] ml-[13%]'>Credited As:</h3>
                    <hr className="border-[#f7ce5b] w-[60vw] lg:w-[80%] block ml-auto mr-auto" />
                    <p className='font-["Patrick_Hand"] text-[25px] block w-[50%] ml-[13%] mt-[20px] pb-[50px]'>{credited}</p>
                    <div className='flex flex-row flex-initial content-between justify-center ml-auto mr-auto w-[80vw] lg:w-[25vw] lg:mt-[20px] text-[30px]'>
                        <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
                            <a className='offsetBorder flex justify-center' href="#/" rel="noreferrer" target="_blank">
                                <FaSpotify className="text-green-500" id="spotify" />
                            </a>
                        </div>

                        <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
                            <a className='offsetBorder flex justify-center' href="#/" rel="noreferrer" target="_blank">
                                <FaYoutube className="text-red-500" id="youtube" />
                            </a>
                        </div>
                        <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
                            <a className='offsetBorder flex justify-center' href="#/" rel="noreferrer" target="_blank">
                                <SiApplemusic className="text-pink-500" id="applemusic" />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default MusicEntry
import React from 'react'
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
import "../styles/offsetBorder.css"
import { useTranslation } from 'react-i18next';

function MusicEntry({ title, photo, spotlink, ytlink, applelink, spotEmbed, credited }) {
    const { t } = useTranslation();
    let spotButton, ytButton, appleButton
    if (spotlink !== "None") {
        spotButton = <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
            <a className='offsetBorder flex justify-center' href={spotlink} rel="noreferrer" target="_blank">
                <FaSpotify className="text-green-500" id="spotify" />
            </a>
        </div>
    }
    if (ytlink !== "None") {
        ytButton = <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
            <a className='offsetBorder flex justify-center' href={ytlink} rel="noreferrer" target="_blank">
                <FaYoutube className="text-red-500" id="youtube" />
            </a>
        </div>
    }
    if (applelink !== "None") {
        appleButton = <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
            <a className='offsetBorder flex justify-center' href={applelink} rel="noreferrer" target="_blank">
                <SiApplemusic className="text-pink-500" id="applemusic" />
            </a>
        </div>
    }

    return (
        <div className='w-full text-white min-h-[352px] mt-[calc(5vh+50px)] mb-[calc(5vh+50px)] bg-[#222725] group'>
            <h2 className="font-['Yatra_One'] text-[27px] sm:text-[40px] lg:text-[50px] ml-[20px]">{title}</h2>
            <div className='flex flex-col lg:flex-row lg:min-h-[352px] lg:h-[35vh]'>
                <div className='flex-initial whitespace-nowrap max-w-[100vw] lg:w-[40vw]'>
                    <img className='relative h-[25vh] w-[40vw] lg:w-[20vw] lg:h-[100%] lg:min-h-[300px] object-cover inline-block z-[1] border-l-[0] rounded-l-none rounded-md' src={photo} alt="" />
                    <div className='inline-block origin-center translate-x-[-60%] ml-[-30px] group-hover:ml-[10px] transition-[margin] duration-300'>
                        <img className={`h-[20vh] object-cover overflow-visible lg:h-[75%] z-[0] inline-block animate-[spin_4s_linear_infinite] [animation-play-state:paused] group-hover:[animation-play-state:running] origin-center`} src="media/vinyl.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-row lg:flex-col flex-initial content-between justify-center ml-auto mr-auto mt-[10px] min-w-[275px] w-[50vw] lg:w-[20vw] text-[30px]'>
                    <iframe title='Song Entry' className='min-h-[352px]' src={spotEmbed} width="100%" height="100%" loading="lazy"></iframe>
                </div>
                <div className='flex-initial w-[90vw] ml-auto mr-auto lg:w-[40vw] min-h-[100px]'>
                    <h3 className='font-["Waiting_for_the_Sunrise"] text-[35px] ml-[13%]'>{t('description.creditlabel')}</h3>
                    <hr className="border-[#f7ce5b] w-[70vw] lg:w-[80%] block ml-auto mr-auto" />
                    <p className='font-["Patrick_Hand"] text-[25px] block w-[50%] min-w-[220px] ml-[13%] mt-[20px] pb-[50px]'>{credited}</p>
                    <div className='flex flex-row flex-initial content-between justify-center ml-auto mr-auto w-[80vw] lg:w-[25vw] lg:mt-[20px] text-[30px]'>
                        {spotButton}
                        {ytButton}
                        {appleButton}
                    </div>
                </div>
            </div >
        </div>

    )
}

export default MusicEntry
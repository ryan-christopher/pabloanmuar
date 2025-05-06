import React from 'react'
import "../styles/Featured.css"
import "../styles/offsetBorder.css"
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
import { useTranslation } from 'react-i18next';

function Featured() {
    const { t } = useTranslation();
    return (
        <div>
            <div className="flex-container bg-[#222725] text-white ease-in duration-200 overflow-hidden">
                <div className="flex-item-left">
                    <img src="media/MEG.png" alt="" className='h-full w-full object-cover' />
                </div>
                <div className="flex-item-right text-left">
                    <h3 className="font-['Yatra_One'] uppercase text-center lg:text-left lg:pl-[25%] pt-[30px] text-[40px] lg:text-[75px]">M.E.G.</h3>
                    <p className="font-['Patrick_Hand'] w-[90%] sm:w-[75%] pl-[15%] sm:pl-[25%] pt-[30px] text-[25px] md:text-[30px]">{t('description.latestrelease')}</p>
                    <h3 className="font-['Yatra_One'] uppercase text-right pr-[15%] md:pr-[28%] pt-[20px] text-[25px]">-Pablo</h3>
                    <h3 className="font-['Yatra_One'] pl-[15%] sm:pl-[27%] pt-[50px] text-[#f7ce5b]">{t('description.listennow')}</h3>
                    <hr className="border-[#f7ce5b] w-[70vw] sm:w-[30vw] block ml-auto mr-auto" />
                    <div className='flex align-middle justify-center pt-[15px] pb-[15px] text-[30px] mt-[10px] mb-[10px]'>
                        <div className="borderwrapper flex align-middle justify-center">
                            <a className="offsetBorder m-[20px]" href="https://open.spotify.com/track/4Wxh8xoRERDVSJC8OQI9Iq?si=315647739b654d70" rel='noreferrer' target='_blank'>
                                <FaSpotify className="text-green-500 ease-in duration-200" id="spotify" />
                            </a>
                        </div>
                        <div className="borderwrapper flex align-middle justify-center ml-[20px]">
                            <a className="offsetBorder m-[20px]" href="https://youtu.be/Occ-UjJ0vzg?si=FJskEW1oxAuM_lZm" rel='noreferrer' target='_blank'>
                                <FaYoutube className="text-red-500 ease-in duration-200" id="youtube" />
                            </a>
                        </div>
                        <div className="borderwrapper flex align-middle justify-center ml-[20px]">
                            <a className="offsetBorder m-[20px]" href="https://music.apple.com/us/album/m-e-g-feat-trisano-swell-mclovin-valeria-orrantia-single/1805966562" rel='noreferrer' target='_blank'>
                                <SiApplemusic className="text-pink-500 ease-in duration-200" id="applemusic" />
                            </a>
                        </div>
                    </div>
                    <hr className="border-[#f7ce5b] w-[80vw] sm:w-[30vw] block ml-auto mr-auto" />
                </div>
            </div>
        </div>
    )
}

export default Featured
import React from 'react'
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'

function Contact() {
    return (
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
    )
}
export default Contact
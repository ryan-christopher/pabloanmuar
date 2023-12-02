import React from 'react'

import "../styles/Featured.css"
import "../styles/offsetBorder.css"

function Featured() {
    return (
        <div>
            <div className="flex-container bg-[#222725] text-white ease-in duration-200 overflow-hidden">
                <div className="flex-item-left">
                    <div className="">
                        <img src="media/HouseShow.png" alt="" className='w-full max-h-[60vh] object-cover' />
                    </div>
                </div>
                <div className="flex-item-right text-left">
                    <h3 className="font-['Yatra_One'] uppercase pl-[25%] pt-[30px] text-[80px]">House Show</h3>
                    <p className="font-['Patrick_Hand'] w-[85%] min-w-[200px] pl-[25%] pt-[30px] text-[30px]">My 4 song EP made over the last 3 years. I hope you can connect with them.</p>
                    <h3 className="font-['Yatra_One'] uppercase text-right pr-[25%] pt-[20px]">-Pablo</h3>

                    <h3 className="font-['Yatra_One'] pl-[27%] pt-[50px] text-[#f7ce5b]">Listen Now</h3>
                    <hr className="border-[#f7ce5b] w-[30vw] min-w-[200px] block ml-auto mr-auto" />
                    <div className='flex align-middle justify-center pt-[15px] pb-[15px]'>

                        <a className="offsetBorder m-[20px]" href="#/">T</a>
                        <a className="offsetBorder m-[20px]" href="#/">Tl</a>
                        <a className="offsetBorder m-[20px]" href="#/">T</a>

                    </div>

                    <hr className="border-[#f7ce5b] w-[30vw] min-w-[200px] block ml-auto mr-auto" />
                </div>
            </div>
        </div>
    )
}

export default Featured
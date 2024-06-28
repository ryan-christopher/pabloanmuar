import React from 'react'
import '../styles/App.css';

function styling() {
    return (
        <div>
            <div className="min-w-[100vw] bg-stone-200">
                <div className="flex flex-col lg:flex-row content-center text-center ">
                    <div className='font-["Bungee_Shade"] lg:w-[50vw] min-w-[200px] p-[50px] align-middle'>
                        <h1 className='text-5xl lg:text-6xl min-h-[90px] lg:min-h-[175px] uppercase'>Bungee heading.</h1>
                        <p className='text-2xl lg:min-h-[100px]'>This font is none other than Bungee Shade.</p>
                    </div>
                    <div className='font-["Mynerve"] lg:w-[50vw] min-w-[200px] p-[50px] align-middle'>
                        <h1 className='text-5xl lg:text-6xl min-h-[90px] lg:min-h-[175px] uppercase'>Mynerve heading.</h1>
                        <p className='text-2xl lg:min-h-[100px]'>This font is none other than Mynerve.</p>
                    </div>
                    <div className='font-["Fredoka"] lg:w-[50vw] min-w-[200px] p-[50px] align-middle'>
                        <h1 className='text-5xl lg:text-6xl min-h-[90px] lg:min-h-[175px] uppercase'>Fredoka heading.</h1>
                        <p className='text-2xl lg:min-h-[100px]'>This font is none other than Fredoka.</p>
                    </div>
                </div>
            </div>

            <div className="flex-container">
                <div className="flex-item-left">
                    <div className="h-[20vh] bg-[#222725]">

                    </div>
                </div>
                <div className="flex-item-right">
                    <div className="h-[20vh] bg-[#e9f1f7]">

                    </div>
                </div>
            </div>
            <div className="flex-container">
                <div className="flex-item-left">
                    <div className="h-[20vh] bg-[#f7ce5b]">

                    </div>
                </div>
                <div className="flex-item-right">
                    <div className="h-[20vh] bg-[#7c7c7c]">
                    </div>
                </div>
            </div>
            <div className="w-[100vw] h-[20vh] bg-[#d1603d]">
            </div>


        </div>
    )
}

export default styling
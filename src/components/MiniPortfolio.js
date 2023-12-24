import React from 'react'
import MusicEntry from './MusicEntry';
import { useTranslation } from 'react-i18next';

function MiniPortfolio() {
    const { t } = useTranslation();
    return (
        <div className="min-h-[100vh] w-[100vw] bg-[#222725] text-white pt-[1px] pb-[1px] m-0">
            <MusicEntry title={"House Show"} photo={"media/HouseShow.png"}
                spotEmbed={"https://open.spotify.com/embed/album/6dif3SiguAxTUF7yNfZC7Y?utm_source=generator"}
                credited={"Composer, writer, producer, mixing and mastering engineer."} />
            <MusicEntry title={"2:44 AM"} photo={"media/244.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/3p8Yb7O3VzRaQb5LCzUi33?utm_source=generator"}
                credited={"Composer, writer, producer and mixing engineer."} />
            <div className="borderwrapper p-[50px] pt-[60px] pb-[70px] mb-[20px] w-fit block ml-auto mr-auto">
                <a href="/portfolio" className='bg-[#d1603d] offsetBorder !border-black rounded-[5px] block ml-auto mr-auto'>
                    <h2 className='font-["Yatra_One"] uppercase text-[25px] md:text-[40px] lg:text-[60px] text-center ease-in duration-200'>
                        Portfolio
                    </h2>
                </a>
            </div>
        </div>
    )
}

export default MiniPortfolio
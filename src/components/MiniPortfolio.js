import React from 'react'
import MusicEntry from './MusicEntry';
import { useTranslation } from 'react-i18next';

function MiniPortfolio() {
    const { t } = useTranslation();
    return (
        <div className="min-h-[100vh] w-[100vw] bg-[#222725] text-white pt-[1px] pb-[1px] m-0">
            <MusicEntry title={"House Show"} photo={"media/HouseShow.png"}
                spotEmbed={"https://open.spotify.com/embed/album/6dif3SiguAxTUF7yNfZC7Y?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/6dif3SiguAxTUF7yNfZC7Y?si=t7tpr8j7SZWbSL4zfE-JYg"}
                ytlink={"https://www.youtube.com/watch?v=KMWzvT2tdro&list=OLAK5uy_mL9ifirOgEaGs62JE392a6if-PvekPNvI&ab_channel=PABLO.ANMUAR-Topic"}
                applelink={"https://music.apple.com/us/album/house-show-ep/1711989841"}
                credited={t('description.housecredit')} />
            <MusicEntry title={"2:44 AM"} photo={"media/244.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/3p8Yb7O3VzRaQb5LCzUi33?utm_source=generator"}
                spotlink={"https://open.spotify.com/track/5XKzgVOqejBPnvMVBRDhS9?si=bedcad31d65048de"}
                ytlink={"https://www.youtube.com/watch?v=84Anqc2-K40&ab_channel=PABLO.ANMUAR"}
                applelink={"https://music.apple.com/us/album/2-44-am-youre-the-kind-of-girl-single/1667454232"}
                credited={t('description.credit244')} />
            <div className="borderwrapper p-[50px] pt-[60px] pb-[70px] mb-[20px] w-fit block ml-auto mr-auto">
                <a href="/portfolio" className='bg-[#d1603d] offsetBorder !border-black rounded-[5px] block ml-auto mr-auto'>
                    <h2 className='font-["Yatra_One"] uppercase text-[25px] md:text-[40px] lg:text-[60px] text-center ease-in duration-200'>
                        {t('description.portfolio')}
                    </h2>
                </a>
            </div>
        </div>
    )
}

export default MiniPortfolio
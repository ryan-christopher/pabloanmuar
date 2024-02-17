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
            <MusicEntry title={"Ya Sé"} photo={"media/yase.jpg"}
                spotEmbed={"https://open.spotify.com/embed/album/3dEX360KYGSCSPPop6N9Fo?utm_source=generator"}
                spotlink={"https://open.spotify.com/album/3dEX360KYGSCSPPop6N9Fo?si=nzTANspuRtOgk1G8rSbMTA"}
                ytlink={"https://www.youtube.com/watch?v=QUV-siqWjpw&list=OLAK5uy_nd6vXz2_L1MgvUELU54MzKkHp_z0UaccQ"}
                applelink={"https://music.apple.com/us/album/ya-s%C3%A9-single/1726715755"}
                credited={t('description.yasecredit')} />
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
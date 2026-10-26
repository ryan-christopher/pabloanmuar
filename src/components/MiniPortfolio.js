import React from 'react'
import MusicEntry from './MusicEntry';
import { useTranslation } from 'react-i18next';

function MiniPortfolio() {
    const { t } = useTranslation();
    return (
        <div className="min-h-[50vh] w-[100vw] bg-[#222725] text-white pt-[50px] pb-[1px] m-0]">
            <div className='flex items-center justify-center w-full'>
            <MusicEntry title={"For the First Time"} photo={"media/4d1stx.jpg"}
                spotlink={"https://open.spotify.com/intl-es/track/152GowTGYq2q9ztKUjyGRT?si=3e28e26eb6f24e3a"}
                ytlink={"https://youtu.be/vxUnTcf97fU?si=maX_j0gY1muBCdFv"}
                applelink={"https://music.apple.com/us/album/for-the-first-time/1878107559?i=1878107560"}
                credited={t('description.d1stxcredit')} />
            <MusicEntry title={"M.E.G."} photo={"media/meg.png"}
                spotlink={"https://open.spotify.com/track/4Wxh8xoRERDVSJC8OQI9Iq?si=e462d9bd56d4492f"}
                ytlink={"https://youtu.be/Occ-UjJ0vzg?si=m2IJQ_AjVsYvgdXl"}
                applelink={"https://music.apple.com/us/album/m-e-g-feat-trisano-swell-mclovin-valeria-orrantia-single/1805966562"}
                credited={t('description.megcredit')} />
            <MusicEntry title={"CHOPPED CHEESE"} photo={"media/chopped.jpg"}
                spotlink={"https://open.spotify.com/track/0uRHeknUizDfuVEhDKLYOD?si:54840ce30b4a4f5c"}
                ytlink={"https://youtu.be/vqf4GZ9E4dg"}
                applelink={"https://music.apple.com/us/album/chopped-cheese-single/1774595959"}
                credited={t('description.choppedcredit')} />
            </div>
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
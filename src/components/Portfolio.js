import React from 'react'
import { Parallax } from 'react-scroll-parallax';
import MusicEntry from './MusicEntry';
import Video from '../components/Video';
import { useTranslation } from 'react-i18next';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import works from '../works.json';
const worksbyname = works.slice()
worksbyname.sort(function(a, b) {
    return a.artist > b.artist;
  });

function Portfolio() {
    const { t } = useTranslation();
    const [sorted, setSorted] = React.useState(false);

    return (
        <div id="portfolio" className="min-h-[100vh] w-full bg-[#222725] text-white">
            <div>
                <ParallaxBanner style={{ aspectRatio: '1 / 1' }} className="h-[35vh] sm:h-[35vh] min-h-[300px] block ml-auto mr-auto">
                    <ParallaxBannerLayer image="media/desk.jpg" speed={10} />
                    <ParallaxBannerLayer className='bg-[#21212170]' speed={0}>
                        <h2 className='font-["Yatra_One"] relative uppercase text-white top-[40%] bottom-0 ml-[3vw] text-[60px] md:text-[80px] lg:text-[120px] text-left'>
                            {t('description.portfolio')}
                        </h2>
                    </ParallaxBannerLayer>
                </ParallaxBanner>
            </div>
            <span className='block ml-auto mr-auto w-full align-center text-right'>
                <Parallax rotate={[-30, 30]} className="w-[15vw] min-w-[150px] inline-block max-w-[300px] 
                        ease-linear duration-[50ms] mr-[10vw]">
                    <img src="media/pabloVinyl.png" alt="" className="mt-[50px] opacity-100 duration-200" aria-hidden="true" />
                </Parallax>
            </span>
            <div className="borderwrapper w-fit ml-[calc(-2vw-10px)] mt-[-15vh] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[50px] pl-[calc(5vw+30px)] pr-[calc(5vw+30px)] md:text-[70px] lg:text-[80px] text-center ease-in duration-200'>
                        {t('description.music')}
                    </h2>
                </div>  
            </div>
            <div className="borderwrapper relative left-[-20px] p-[30px] mt-[50px] pt-[30px] pb-[30px] w-[200px] block ml-auto mr-auto">
                    <button onClick={()=>{setSorted(!sorted)}} className='offsetBorder w-[200px] !border-black rounded-[5px] block ml-auto mr-auto hover:bg-[#f7ce5b] hover:text-[#212121]'>
                        {sorted === false &&
                        <h2 className='font-["Patrick_Hand"] text-[15px] md:text-[30px] lg:text-[20px] text-center ease-in duration-200'>
                        Sort by: Release Date
                    </h2>
                        }
                        {sorted === true &&
                        <h2 className='font-["Patrick_Hand"] text-[15px] md:text-[30px] lg:text-[20px] text-center ease-in duration-200'>
                        Sort by: Artist
                    </h2>
                        }
                    </button>
                </div>
                <hr className="border-[#f7ce5b] w-[50vw] lg:w-[50] block ml-auto mr-auto mb-[20px]" />
        <div className='flex flex-wrap content-center justify-center'>
            {sorted === false &&
                Object.keys(works).map((key, i) => {
                    return <div key={key}>
                    <MusicEntry key = {key}
                    title = {works[key]['title']}
                    artist = {works[key]['artist']}
                    photo = {works[key]['photo']}
                    spotlink = {works[key]['spotlink']}
                    ytlink = {works[key]['ytlink']}
                    applelink = {works[key]['applelink']}
                    credited = {t(`description.${works[key]['credited']}`)} />
                    </div>
                })}
            {sorted === true &&
                    Object.keys(worksbyname).map((key, i) => {
                        return <div key = {key}>
                        <MusicEntry key = {key}
                        title = {worksbyname[key]['title']}
                        artist = {worksbyname[key]['artist']}
                        photo = {worksbyname[key]['photo']}
                        spotlink = {worksbyname[key]['spotlink']}
                        ytlink = {worksbyname[key]['ytlink']}
                        applelink = {worksbyname[key]['applelink']}
                        credited = {t(`description.${worksbyname[key]['credited']}`)} />
                        </div>
                })}
            </div>
            <div className="borderwrapper p-[10px] pt-[30px] pb-[30px] w-fit ml-[calc(-2vw-10px)] block mr-auto">
                <div className='bg-[#d1603d] offsetBorder !border-white !p-0 rounded-[5px] block mr-auto'>
                    <h2 className='font-["Waiting_for_the_Sunrise"] text-[60px] pl-[calc(5vw+30px)] pr-[calc(5vw+30px)] mb-[50px] md:text-[70px] lg:text-[80px] text-center ease-in duration-200'>
                        Videos
                    </h2>
                </div>
            </div>
            <div className='flex flex-wrap min-h-[1000px] justify-center w-full'>
                <Video videolink={"https://www.youtube-nocookie.com/embed/vqf4GZ9E4dg?si=d7j0Kzr8k753pQtj"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/4B6o47Eu__Y?si=HYatOdiRs3rbpeWD"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/84Anqc2-K40?si=fV-lOv8ghAcqJE_X"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/uO2_d3x7AFQ?si=M1t-nTLIAaZGffB9"} />
                <Video videolink={"https://www.youtube-nocookie.com/embed/9EDQTycAYw0?si=iEyUg9Rq3KJiLltj"} />
            </div>
        </div>
    )
}
export default Portfolio
import React from 'react'
import '../styles/Menu.css';
import $ from 'jquery'
import { useTranslation } from 'react-i18next';

function Navbar({ currPage }) {
    const { t, i18n } = useTranslation();
    console.log(i18n.resolvedLanguage)
    let mobilelinks;
    let desktoplinks;

    if (currPage === "/") {
        mobilelinks =
            <div>
                <a href="#home" className="mobilemenu-link" onClick={menutoggle()}>{t('description.home')}</a>
                <a href="/portfolio" className="mobilemenu-link" onClick={menutoggle()}>{t('description.portfolio')}</a>
                <a href="#about" className="mobilemenu-link" onClick={menutoggle()}>{t('description.about')}</a>
                <a href="#contact" className="mobilemenu-link" onClick={menutoggle()}>{t('description.contact')}</a>
            </div>
        desktoplinks =
            <ul className="desktopnavlinks font-['Yatra_One'] sm:text-[23px] lg:text-[30px]">
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="#home">{t('description.home')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/portfolio">{t('description.portfolio')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="#about">{t('description.about')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="#contact">{t('description.contact')}</a></li>
            </ul>

    }
    else if (currPage === "portfolio") {
        mobilelinks =
            <div>
                <a href="/#home" className="mobilemenu-link" onClick={menutoggle()}>{t('description.home')}</a>
                <a href="#portfolio" className="mobilemenu-link" onClick={menutoggle()}>{t('description.portfolio')}</a>
                <a href="/#about" className="mobilemenu-link" onClick={menutoggle()}>{t('description.about')}</a>
                <a href="/#contact" className="mobilemenu-link" onClick={menutoggle()}>{t('description.contact')}</a>
            </div>
        desktoplinks =
            <ul className="desktopnavlinks font-['Yatra_One'] sm:text-[23px] lg:text-[30px]">
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/#home">{t('description.home')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="#portfolio">{t('description.portfolio')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/#about">{t('description.about')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/#contact">{t('description.contact')}</a></li>
            </ul>
    }
    else if (currPage === "bio") {
        mobilelinks =
            <div>
                <a href="/#home" className="mobilemenu-link" onClick={menutoggle()}>{t('description.home')}</a>
                <a href="/portfolio" className="mobilemenu-link" onClick={menutoggle()}>{t('description.portfolio')}</a>
                <a href="/#about" className="mobilemenu-link" onClick={menutoggle()}>{t('description.about')}</a>
                <a href="/#contact" className="mobilemenu-link" onClick={menutoggle()}>{t('description.contact')}</a>
            </div>
        desktoplinks =
            <ul className="desktopnavlinks font-['Yatra_One'] sm:text-[23px] lg:text-[30px]">
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/#home">{t('description.home')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/portfolio">{t('description.portfolio')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/#about">{t('description.about')}</a></li>
                <li><a className='sm:mt-[8px] lg:mt-[0]' href="/#contact">{t('description.contact')}</a></li>
            </ul>
    }

    return (
        <div>
            <nav>
                <div id="overlay">
                    {desktoplinks}
                </div>
            </nav>
            <h3 id="headername" className='text-[#222725] font-["Yatra_One"] top-[21px] text-[26px] lg:top-[12px] lg:text-[35px] uppercase font-bold ease-in duration-200'>Pablo.Anmuar</h3>
            <div className="mobilenavbar bg-[#e9f1f7c0] backdrop-blur-sm ease-in duration-200">
                <div className='fixed right-[-3px] mt-[82px] font-["Yatra_One"] text-white hover:scale-125 transition-all origin-right'>
                    {i18n.resolvedLanguage === 'sp' && <div>
                        <button key={'English'} className='bg-[#d1603dd5] border-[#f7ce5b] border-[2px] p-[10px] text-center rounded-l-lg text-[20px]' type="submit" onClick={() => i18n.changeLanguage('en')}>
                            In English
                        </button>
                    </div>}
                    {i18n.resolvedLanguage === 'en' && <div>
                        <button key={'Spanish'} className='bg-[#d1603dd5] border-[#f7ce5b] border-[2px] p-[10px] text-center rounded-l-lg text-[20px]' type="submit" onClick={() => i18n.changeLanguage('sp')}>
                            En Español
                        </button>
                    </div>}

                </div>
            </div>
            <div className="mobilemenu bg-[#e9f1f7]">
                <div className="mobilebutton">
                    <div className="burgertop bg-[#363636] ease-in duration-200"></div>
                    <div className="burgermiddle bg-[#363636] ease-in duration-200"></div>
                    <div className="burgerbottom bg-[#363636] ease-in duration-200"></div>
                </div>
                <div className="mobilemenu-body bg-[#e9f1f7]">
                    <div className='mobilebuttonclose absolute top-[20px] right-[22px] text-[35px] 
                    text-red-400 hover:cursor-pointer hover:scale-[1.25] border-[1.5px] w-[45px] h-[45px] bg-transparent text-center 
                    border-[#222725] font-sans leading-[1.2] rounded-sm ease-in duration-100 z-10'>
                        X
                    </div>
                    <div className="mobilemenu-overlay"></div>
                    <div className="mobilemenu-container text-[#222725] font-['Yatra_One']">
                        {mobilelinks}
                    </div>
                </div>
            </div>
            <div className="mask"></div>
        </div >
    )
}
function menutoggle() {
    $('.mobilemenu').toggleClass('active');
    $('.mask').toggleClass('active')
    $('.mobilebutton').toggleClass('active');
}

(function () {
    $(document).on("click", ".mobilemenu-group", function () {
        $(".mobilemenu-overlay").toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-link", function () {
        $('.mobilemenu').toggleClass('active');
        $('.mask').toggleClass('active')
        $('.mobilebutton').toggleClass('active');
    });
    $(document).on("click", ".mobilebutton", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    $(document).on("click", ".mobilebuttonclose", function () {
        $('.mobilebutton').toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        return $('.mask').toggleClass('active');
    });
    $(document).on("click", ".mobilemenu-overlay", function () {
        $(this).toggleClass('active');
    });
    $(document).on("click", ".mask", function () {
        $(this).toggleClass('active');
        $('.mobilemenu').toggleClass('active');
        $('.text').toggleClass('active');
        $('.mobilebutton').toggleClass('active');
        return $(".mobilemenu-overlay").removeClass('active');
    });
}).call(this);

export default Navbar
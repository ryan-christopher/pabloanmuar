import React from 'react'
import '../styles/Menu.css';
import $ from 'jquery'

function Navbar() {
    let links;

    links =
        <div>
            <a href="#home" className="mobilemenu-link" onClick={menutoggle()}>Home</a>
            <a href="#portfolio" className="mobilemenu-link" onClick={menutoggle()}>Portfolio</a>
            <a href="#about" className="mobilemenu-link" onClick={menutoggle()}>About</a>
            <a href="#contact" className="mobilemenu-link" onClick={menutoggle()}>Contact</a>
        </div>

    return (
        <div>

            <nav>
                <div id="overlay">
                    <ul className="desktopnavlinks font-['Yatra_One'] sm:text-[23px] lg:text-[30px]">
                        <li><a className='sm:mt-[8px] lg:mt-[0]' href="#home">Home</a></li>
                        <li><a className='sm:mt-[8px] lg:mt-[0]' href="#portfolio">Portfolio</a></li>
                        <li><a className='sm:mt-[8px] lg:mt-[0]' href="#about">About</a></li>
                        <li><a className='sm:mt-[8px] lg:mt-[0]' href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>

            <h3 id="headername" className='text-[#222725] font-["Yatra_One"] top-[21px] text-[26px] lg:top-[12px] lg:text-[35px] uppercase font-bold ease-in duration-200'>Pablo.Anmuar</h3>

            <div className="mobilenavbar bg-[#e9f1f7c0] backdrop-blur-sm ease-in duration-200">
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
                    <div className="mobilemenu-container text-[#222725]">
                        {links}
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
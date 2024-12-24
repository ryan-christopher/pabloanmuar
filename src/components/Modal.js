import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { FaSpotify, FaYoutube } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si'
import Backdrop from "./Backdrop";

const dropIn = {
  'hidden': {
    y: "-100vh",
    opacity: 0,
  },
  'visible': {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 25,
      stiffness: 400,
    },
  },
  'exit': {
    y: "100vh",
    opacity: 0,
  },
};

function Modal({ handleClose, title, artist, photo, credited, spotlink, ytlink, applelink }) {
  const { t } = useTranslation();
  let spotButton, ytButton, appleButton;
  if (spotlink !== "None") {
    spotButton = <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
      <a className='offsetBorder flex justify-center' href={spotlink} rel="noreferrer" referrerPolicy="strict-origin-when-cross-origin" target="_blank">
        <FaSpotify className="text-green-500" id="spotify" />
      </a>
    </div>
  }
  if (ytlink !== "None") {
    ytButton = <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
      <a className='offsetBorder flex justify-center' href={ytlink} rel="noreferrer" referrerPolicy="strict-origin-when-cross-origin" target="_blank">
        <FaYoutube className="text-red-500" id="youtube" />
      </a>
    </div>
  }
  if (applelink !== "None") {
    appleButton = <div className="borderwrapper inline-flex align-middle ml-auto mr-auto p-[20px] justify-center">
      <a className='offsetBorder flex justify-center' href={applelink} rel="noreferrer" target="_blank">
        <SiApplemusic className="text-pink-500" id="applemusic" />
      </a>
    </div>
  }

  return (
    <Backdrop className="fixed top-0 left-0 w-full h-full" onClick={handleClose}>
      <motion.div
        onClick={handleClose}
        className="fixed top-0 left-0 w-full h-full 
                flex flex-col items-center justify-center"
        variants={dropIn}
        visible={{ y: 0, opacity: 1 }}
        initial={'hidden'}
        animate={'visible'}
        exit={'exit'}
      >
        <div className="bg-[#f7ce5b] backdrop-blur-sm border-[8px] rounded-lg border-[#f7ce5b] z-50 w-[95%] md:w-[75%] xl:w-[35vw] max-w-[750px] group" onClick={(e) => e.stopPropagation()} >
          <button className="font-['Waiting_for_the_Sunrise'] text-[#222725] font-black hover:cursor-pointer hover:scale-[1.25] text-[30px] text-center leading-[1.25] block ml-auto mr-[20px] relative top-[0px] right-[-15px] border-[3px] border-[#222725] h-[40px] w-[40px] rounded-full ease-in duration-100" onClick={handleClose}> X </button>
          <h2 className="font-['Yatra_One'] font-bold bg-[#f7ce5b] mt-[-40px] text-[#222725] text-[30px] sm:text-[30px] lg:text-[40px] text-left pl-[20px]">{title}</h2>
          <h2 className="font-['Yatra_One'] italic text-[27px] sm:text-[30px] lg:text-[30px] text-left pl-[30px] pt-[5px] bg-[#222725] rounded-t-lg">{artist}</h2>
          <div className="bg-[#222725] w-full">
            <img className='inline-block relative object-cover h-[300px] md:h-[400px] w-[50%] mx-auto rounded-r-md bg-[#222725] z-[55] ml-[30px] border-[#f7ce5b] border-[2px]' src={photo} alt="" />
            <div className='inline-block origin-center ml-[-150px] group-hover:ml-[-120px] transition-[margin] duration-300'>
              <img className={`h-[225px] object-cover relative overflow-visible lg:h-[75%] z-[0] inline-block animate-[spin_4s_linear_infinite] [animation-play-state:running] origin-center`} src="media/vinyl.png" alt="" />
            </div>
          </div>
          <div className='ml-auto mr-auto w-full min-h-[100px] justify-center items-center bg-[#222725] rounded-b-lg'>
            <h3 className='font-["Waiting_for_the_Sunrise"] pt-[20px] text-[30px] text-center'>{t('description.creditlabel')}</h3>
            <p className='font-["Patrick_Hand"] text-[20px] block mx-auto text-center pb-[25px]'>{credited}</p>
            <div className='flex content-between justify-center items-center ml-auto mr-auto w-[50%] text-[30px] pb-[20px]'>
              {spotButton}
              {ytButton}
              {appleButton}
            </div>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
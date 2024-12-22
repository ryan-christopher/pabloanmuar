import React from 'react'
import "../styles/offsetBorder.css"
import { motion } from "framer-motion";
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';

function MusicEntry({ title, artist, photo, spotlink, ytlink, applelink, credited }) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <div className='flex text-white bg-[#222725]' >
            <motion.button className="" onClick={() => (modalOpen ? close() : open())} >
                    <img className='hover:scale-105 hover:rounded-md ease-linear duration-200 
                    w-[45vw] sm:w-[30vw] border-[#f7ce5b] border-[2px] xl:w-[23vw] max-h-[45vw] md:max-h-[30vw] xl:max-h-[23vw] object-cover m-[10px]' 
                    src={photo} alt="" />
            </motion.button>
         
            <AnimatePresence
            // Disable any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time.
            // The exiting component will finish its exit
            // animation before entering component is rendered
            mode='wait'
            // Fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
        >
            {modalOpen && <Modal 
            title={title} artist={artist} photo={photo} credited={credited} spotlink={spotlink} ytlink={ytlink} applelink={applelink} modalOpen={modalOpen} handleClose={close} />}
            </AnimatePresence>
        </div>
    )
}
export default MusicEntry
import React from 'react'
import "../styles/App.css"
function BioEntry({image, link, title}) {
  return (
    <div className='w-[50vw] lg:w-[33vw] xl:w-[25vw] h-[350px] lg:h-[600px]'>
        <a href={link} target='_blank' rel='noreferrer' className='group'>
        <h3 className='font-["Yatra_One"] text-[18px] lg:text-[30px] uppercase font-black italic relative top-[50px] group-hover:top-0 ease-in duration-200 z-[21] opacity-0 group-hover:opacity-100 w-full text-center bg-[#222725] border-[3px] border-b-0 border-[#f7ce5b] rounded-t-lg'>{title}</h3>
        <img src={image} alt="" className='relative z-[20] w-full h-[350px] lg:h-[600px] object-cover border-[#f7ce5b] border-[2px]'/>
        </a>
    </div>
  )
}

export default BioEntry
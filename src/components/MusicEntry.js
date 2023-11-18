import React from 'react'

function musicEntry({ name, photo }) {
    let cardStyle = { backgroundImage: "url(" + photo + ")" }
    return (
        <div style={cardStyle} className='w-[200px] h-[200px] bg-no-repeat bg-cover grid'>
            <h3 className='bg-[#00000035] text-white text-[30px] font-["Fredoka"] grid justify-center content-center rounded-sm'>
                {name}
            </h3>
        </div>
    )
}

export default musicEntry
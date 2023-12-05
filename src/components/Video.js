import React from 'react'

function Video({ videolink }) {
    return (
        <div>
            <iframe className='min-w-[500px] w-[100vw] h-[400px] lg:w-[50vw] lg:h-[400px] border-[#f7ce5b] border-[1px] rounded-md' src={videolink} title="YouTube video player"></iframe>
        </div>
    )
}

export default Video
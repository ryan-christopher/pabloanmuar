import React from 'react'

function Video({ videolink }) {
    return (
        <div>
            <iframe className='min-w-[300px] sm:min-w-[500px] min-h-[100%] w-[100vw] h-[400px] lg:w-[50vw] lg:h-[400px] border-[#f7ce5b] border-[1px]' src={videolink} title="YouTube video player"></iframe>
        </div>
    )
}

export default Video
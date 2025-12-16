import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-10 absolute text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-5 text-lg w-1/3'>{overview}</p>
        <div>
            <button className='bg-white text-black p-2 px-10 mr-5 text-lg rounded-lg'>▶️ Play</button>
            <button className='bg-black text-white p-2 px-8 text-lg rounded-lg'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle


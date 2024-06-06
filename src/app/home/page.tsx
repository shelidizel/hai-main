import React from 'react'
import NavBar from '../components/nav_bar'

function HomePage() {
  return (
    <div>
        <div>
        <video
          muted
          loop
          autoPlay
          className="fixed -top-2 left-0 min-w-full min-h-full -z-50 object-cover"
        >
          <source src= '/videos/WavyOnesAndZeros-Black.mp4'type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <NavBar/>
        <div className='mt-44 text-[68px] text-center font-extrabold font-serif text-dullNav'>
            Creative and digital direction for <span className="text-colorPrimary">unparalleled</span> excellence.</div>
        </div>
    </div>
  )
}

export default HomePage
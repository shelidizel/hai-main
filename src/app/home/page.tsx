import React from 'react'
import NavBar from '../components/nav_bar'

function HomePage() {
  return (
    <div>
        <NavBar/>
        <div className='mt-48 text-[56px] text-center font-extrabold font-serif text-dullNav'>
            Creative and digital direction for <span className="text-colorPrimary">unparalleled</span> excellence.</div>
        <p className='mt-12 text-center whitespace-prewrap '>Hai Interactive is a tech and creative consulting agency that packs a powerful team that deliver quality products and services.</p>
    </div>
  )
}

export default HomePage
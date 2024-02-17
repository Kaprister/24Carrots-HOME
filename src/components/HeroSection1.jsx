import React, { useEffect } from 'react'

function HeroSection1() {
    
  return (
    <div className=' relative mt-1'>
        <video id="video-one" className="video" preload="metadata"
            autoPlay
            muted
            playsInline
            loop
            poster="https://24carrots.com/wp-content/uploads/2023/08/chef.png"
        >
            <source src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4" type="video/mp4" />
        </video>
        <h2 className=' absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[70px] tracking-wider'>Simply the Finest</h2>
    </div>
  )
}

export default HeroSection1

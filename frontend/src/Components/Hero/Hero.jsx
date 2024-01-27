import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_imae from '../Assets/hero_image.png'
function Hero() {
    const scrollToNewCollections = () => {
        const newCollectionsElement = document.getElementById("newCollections");
        newCollectionsElement.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>E-Commerce</h2>
            <div className='hero-hand-icon'>
                <p>New</p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>collection</p>
            <p>UP TO 50% OFF FRESH FINDS</p>
        
        <div className="hero-latest-btn" onClick={scrollToNewCollections}>
            <div>Latest collection</div>
            <img src={arrow_icon} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={hero_imae} alt="" />
        </div>
    </div>
  )
}

export default Hero
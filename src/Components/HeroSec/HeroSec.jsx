import React from 'react'
import "./HeroSec.scss";
import heroGirl from "../assets/hero_image.png";
function HeroSec() {
    return (

        <>
            <div className="hero-sec">

                <div className="left-sec">
                    <img src={heroGirl} alt="A beautiful forest" className="hero-image" />


                </div>
                <div className="right-sec">
                    <p> Browse through our amazing collection of products and find the best deals for you. Whether you are looking for fashion, electronics, home decor, or anything else, we have it all. Shop with confidence and enjoy the convenience of online shopping. </p>
                    <div className="hero-buttons">
                        {/* The first button */}
                        <button className="hero-button">Learn More</button>
                        {/* The second button */}
                        <button className="hero-button">Book Now</button>
                    </div>
                </div>

            </div>


        </>

    )
}

export default HeroSec;

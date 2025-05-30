import React from "react";
import './Hero.css';
import handIcon from '../../assets/hand_icon.png';
import arrowIcon from '../../assets/arrow-right-solid.svg';
import heroImage from '../../assets/hero_image.png';


const Hero = ()=>{


    return (
        <>
            <div className="hero">
                <div className="hero-container">
                    <div className="hero-left">
                        <h2>NEW COMINGS ONLY</h2>
                        <div>
                            <div className="hero-hand-icon">
                                <p>New</p>
                                <img src={handIcon} alt="#" />
                            </div>
                            <p>collection</p>
                            <p>for everyone</p>
                        </div>
                        <div className="hero-btn">
                            <button>Latest Collection</button>
                            <img src={arrowIcon} alt="#" />
                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={heroImage} alt="#" />

                    </div>
                </div>

            </div>
        </>
    )
}
export default Hero;
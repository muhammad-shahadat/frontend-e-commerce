import React from "react";
import "./Offer.css";
import bannerImage from "../../assets/banner-image-1.jpg";

const Offer = ()=>{

    return (
        <>
            <div className="offer-container">
                <div className="offer-left">
                    <h2>Special</h2>
                    <h2>Offer For You</h2>
                    <p>ONLY ON BEST SELLERS PRODUCT</p>
                    <button>Check Now</button>
                </div>
               <div className="offer-right">
                <img src={bannerImage} alt="#" />
               </div>
            </div>
        </>
    )
}
export default Offer;
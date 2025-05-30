import React from "react";
import "./NewsLetter.css";

const NewsLetter = () =>{


    return (
        <>
            <div className="news-letter-container">
                <h2>Get Exclusive Offers On Your Email</h2>
                <p>Subscribe to our news letter and stay updated</p>

                <div>
                    <input type="email" placeholder="Enter Your Email" />
                    <button>Subscribe</button>
                </div>
            
            </div>
        </>
    )
}

export default NewsLetter;
import React from "react";
import "./Footer.css";
import logo from "../../assets/bag-shopping-solid.svg";
import whatsApp from "../../assets/whatsapp-brands-solid.svg";
import pinterest from "../../assets/pinterest-brands-solid.svg";
import instagram from "../../assets/instagram-brands-solid.svg";


const Footer = ()=>{

    return (
        <>
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="#" />
                    <p>SHOPPER</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>Company</li>
                        <li>Office</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="footer-icons">
                    <ul>
                        <li>
                            <img src={whatsApp} alt="#" />
                        </li>
                        <li>
                            <img src={pinterest} alt="#" />
                        </li>
                        <li>
                            <img src={instagram} alt="#" />
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <hr />
                    <p>Copyright &copy; 2025 - All Right Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer;
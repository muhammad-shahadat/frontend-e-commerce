import React, { useContext, useState } from "react";
import bagLogo from '../../assets/bag-shopping-solid.svg';
import cartIcon from '../../assets/cart-plus-solid.svg';
import {ShopContext} from "../../Context/ShopContext";
import './Header.css';
import { Link } from "react-router-dom";



const Header = ()=>{

    const [menu, setMenu] = useState("home");
    const {getTotalCartItems, isMenuOpen, setIsMenuOpen} = useContext(ShopContext);

   
    console.log(isMenuOpen + " from header");

    return(
        <>
            <div className="header fixed-header">
                <div className={`header-container ${isMenuOpen == false ? "column-direction" : ""}`}>
                    
                    <div className="nav-logo">
                        <img src={bagLogo} alt="img" />
                        <p>Shopper</p>
                    </div>
                    
                    <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                        
                        <ul>
                            <li onClick={()=>setMenu("home")}>
                                <Link to={"/"}>
                                Home
                                </Link>
                                {(menu === "home")?<hr/>:<></>}
                            </li>
                            <li onClick={()=>setMenu("men")}>
                                <Link to={"/men"}>
                                Men
                                </Link>
                                {(menu === "men")?<hr/>:<></>}
                            </li>
                            <li onClick={()=>setMenu("women")}>
                                <Link to={"/women"}>
                                Women
                                </Link>
                                {(menu === "women")?<hr/>:<></>}
                            </li>
                            <li onClick={()=>setMenu("kids")}>
                                <Link to={"/kids"}>
                                Kids
                                </Link>
                                {(menu === "kids")?<hr/>:<></>}
                            </li>
                        </ul>
                    </div>
                    <div className={`nav-login ${isMenuOpen ? "active" : ""}`}>
                        <Link to={"/login"}>
                        <button>Login</button>
                        </Link>
                        <Link to={"/cart"}>
                        <img src={cartIcon} alt="img" />
                        </Link>
                        <div className="cart-count">{getTotalCartItems()}</div>
                    </div>
                    
                    {
                        isMenuOpen == true ? 
                        <>
                            <div className="toggle-menu" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                                ☰
                            </div>
                        </> : 
                        <>
                            <div className="auto-close" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                X
                            </div>
                        </>
                    }
                    
                    

                </div>
                
            </div>
        </>
    )
}

export default Header;
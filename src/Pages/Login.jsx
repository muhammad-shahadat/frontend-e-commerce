import React, { useContext } from "react";
import "./Css/LoginSignup.css";
import { ShopContext } from "../Context/ShopContext";


const Login = ()=>{

    const contextValue = useContext(ShopContext);

    return (
        <>
            <div className={`page-content ${contextValue.isMenuOpen == false ? "extra-padding" : ""}`}>
                <div className="login-signup-container">
                    <h2>Sign Up</h2>
                    <div className="login-signup-area">
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="password" />
                    </div>
                    <button>continue</button>
                    <p className="login">Already you have an account? <span>login here</span></p>
                    <div className="login-signup-agree">
                        <input type="checkbox" name = "" id = "" />
                        <p>By continuing, I agree to all the terms of conditions</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Login;
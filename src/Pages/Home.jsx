import React, { useContext } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import {ShopContext} from "../Context/ShopContext";




const Home = ()=>{

    const contextValue = useContext(ShopContext);
    

    return (
        <>  
            <div className={`page-content ${contextValue.isMenuOpen == false ? "extra-padding" : ""}`}>
                <Hero />
                <Popular />
                <Offer />
                <NewCollection />
                <NewsLetter />
            </div>
        </>
    )
}
export default Home;
import React, { useContext } from "react";
import {ShopContext} from "../Context/ShopContext";
import "./Css/ShopCategory.css";
import Item from "../Components/Item/Item";



const ShopCategory = (props)=>{
    
    const {allCollection, isMenuOpen} = useContext(ShopContext);


    return (
        <>  
            <div className={`page-content ${isMenuOpen == false ? "extra-padding" : ""}`}>
                <div className="shop-category-container">
                    <div className="shop-category-index">
                        <p>
                            <span>Showing 1 - 12</span> out of 32 products
                        </p>
                        <div className="shop-category-sort">
                            <button>Sort By</button>
                        </div>
                    </div>
                    <div className="shop-category-product">
                        {
                            allCollection.map((product, index)=>{
                                if(props.category == product.category){
                                    return(
                                        <Item key={index} id={product.id} title={product.title} image={product.image} newPrice={product.newPrice} oldPrice={product.oldPrice} />
                                    )
                                }
                                else{
                                return null;
                                }

                            })
                        }
                    </div>
                </div>
                <div className="explore-more">
                    <button>Explore More</button>
                </div>
            </div>
            
        </>
    )
}
export default ShopCategory;
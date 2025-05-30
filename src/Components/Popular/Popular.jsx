import React from "react";
import Item from "../Item/Item";
import popularProduct from "../../assets/product/popularProduct";
import "./Popular.css";

const Popular = ()=>{


    return (
        <>
            <div className="popular">
                <h1>Popular Items</h1>
                <hr/>
                <div className="popular-container">
                
                    {popularProduct.map((product, index)=>{
                        return (
                        <Item key={index} id={product.id} title={product.title} image={product.image} newPrice={product.newPrice} oldPrice={product.oldPrice} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default Popular;
import React from "react";
import "./RelatedProducts.css";
import popularProduct from "../../assets/product/popularProduct";
import Item from "../Item/Item";


const RelatedProducts = () =>{




    return(
        <>
            <div className="Related-products">
                <h1>Related Products</h1>
                <hr/>
                <div className="Related-products-container">
                
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

export default RelatedProducts;
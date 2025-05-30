import React from "react";
import newCollectionProduct from "../../assets/product/newCollectionProduct";
import Item from "../Item/Item";
import "./NewCollection.css";

const NewCollection = () =>{
    return (
        <>
            <div className="new-collection">
                <h1>New Collection</h1>
                <hr />
                <div className="new-collection-container">
                    {newCollectionProduct.map((product, index)=>{
                        return (
                            <Item key={index} id={product.id} title={product.title} image={product.image} newPrice={product.newPrice} oldPrice={product.oldPrice} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default NewCollection;
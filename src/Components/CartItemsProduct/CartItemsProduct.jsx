import React, { useContext } from "react";
import "./CartItemsProduct.css";
import { ShopContext } from "../../Context/ShopContext";



const CartItemsProduct = (props) =>{

    const {cartItems, removeFromCart} = useContext(ShopContext);
    
    
    

    return (
        <>  
            <div className="cart-items-product-container">
                <div className="cart-items-header">
                    <div className="cart-items-common-format header-gap">
                        <p>Product</p>
                        <p>Title</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p>Remove</p>
                    </div>
                    <hr className="inner-hr"/>
                </div> 

                <div className="cart-items-product">
                        
                    <div 
                    className="cart-items-common-format">
                        <img src={props.image} alt="" />
                        <p>{props.title}</p>
                        <div className="price product-margin">{props.newPrice}$</div>
                        <div className="quantity product-margin">{cartItems[props.id]}</div>
                        <div className="total product-margin">{cartItems[props.id] * props.newPrice}$</div>
                        <button className="product-margin" onClick = {()=>removeFromCart(props.id)}>x</button>
                    </div>
                    <hr className="inner-hr"/>
                </div>

            </div>
            <hr className="outer-hr" />
          
        </>
    )
}

export default CartItemsProduct;
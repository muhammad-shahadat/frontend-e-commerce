import React, { useContext } from "react";
import CartItemsProduct from "../Components/CartItemsProduct/CartItemsProduct";
import { ShopContext } from "../Context/ShopContext";
import CartItemsTotal from "../Components/CartItemsTotal/CartItemsTotal";





const Cart = ()=>{
    const {allCollection, cartItems, isMenuOpen} = useContext(ShopContext);



    return (
        <>
            <div className={`page-content ${isMenuOpen == false ? "extra-padding" : ""}`}>
                {
                    allCollection.map((product, index) =>{
                        if(cartItems[product.id] > 0){

                            return (<CartItemsProduct key={index} id = {product.id} title={product.title} image={product.image} newPrice={product.newPrice} oldPrice={product.oldPrice} />)
                        }
                    })
                }

                <CartItemsTotal />
            </div>
                
        </>
    )
}
export default Cart;
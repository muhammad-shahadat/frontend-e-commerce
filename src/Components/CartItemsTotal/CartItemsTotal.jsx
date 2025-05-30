import React, { useContext } from "react";
import "./CartItemsTotal.css";
import { ShopContext } from "../../Context/ShopContext";


const CartItemsTotal = () =>{

    const {getTotalCartAmount} = useContext(ShopContext);

    return(
        <>
            <div className="cart-items-total-container">
                <div className="cart-items-total">
                    <h2>Cart Total</h2>
                    <div className="cart-items-total-item">
                        <p>Sub Total</p>
                        <p>{getTotalCartAmount()}$</p>
                    </div>
                    <div className="cart-items-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className="cart-items-total-item">
                        <h3>Total</h3>
                        <p>{getTotalCartAmount()}$</p>
                    </div>
                    <button>Proceed To Checkout</button>
                </div>
                <div className="cart-items-promocode">
                    <p>If You Have Promocode, Enter It Here</p>
                    <div className="promocode">
                        <input type="text" placeholder="Promocode" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItemsTotal;
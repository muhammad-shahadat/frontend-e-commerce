import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";


const ProductDisplay = (props) =>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);


    return (
        <>
            <div className="product-display-container">
                <div className="product-display-left">
                    <div className="image-list">
                        <img src= {product.image} alt="" />
                        <img src= {product.image} alt="" />
                        <img src= {product.image} alt="" />
                        <img src= {product.image} alt="" />
                    </div>
                    <div className="main-image">
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="product-displya-right">
                    <h2>{product.title}</h2>
                    <div className="star-rating">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>☆</span>
                        <p>(255)</p>
                    </div>
                    <div className="prices">
                        <div className="old-price">{product.oldPrice}$</div>
                        <div className="new-price">{product.newPrice}$</div>
                    </div>
                    <div className="product-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cumque quia assumenda deserunt, magni quod beatae quas quasi accusantium cupiditate.</p>
                    </div>
                    <div className="product-size-area">
                        <h2>Select Size</h2>
                        <div className="size-list">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() =>{addToCart(product.id)}}>Ad To Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay;
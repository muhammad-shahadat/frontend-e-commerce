import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props)=>{


    return (
        <>
            <div className="item">
                <Link to={"/product/" + props.id} ><img src= {props.image} alt="" onClick={window.scrollTo(0, 0)} /></Link>
                <h3>{props.title}</h3>
                <div className="price">
                    <div className="old-price">
                        {props.oldPrice}$
                    </div>
                    <div className="new-price">
                        {props.newPrice}$
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item;
import React from "react";
import "./Breadcrumbs.css";


const Breadcrumbs = (props) => {

    const {product} = props;


    return(
        <>
            <div className="breadcrumbs-container">
                <div className="breadcrumbs-menu">
                    home || shop || {product.category} || {product.title}
                </div>

            </div>
        </>
    )
}

export default Breadcrumbs;
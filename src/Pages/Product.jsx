import React, { useContext } from "react";
import {ShopContext} from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Components/Breadcrumbs/Breadcrumbs";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";


const Product = ()=>{
    const {allCollection, isMenuOpen} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allCollection.find((product) => {
        if(productId == product.id){
            return product;
        }
    })
    


    return (
        <>  
            <div className={`page-content ${isMenuOpen == false ? "extra-padding" : ""}`}>
                <Breadcrumbs product = {product} />
                <ProductDisplay product = {product} />
                <DescriptionBox />
                <RelatedProducts />
            </div>
           
        </>
    )
}
export default Product;
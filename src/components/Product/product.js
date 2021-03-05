import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './product.css'
import {Link} from 'react-router-dom';
const Product = (props) => {
 //  console.log(props)
   const {img,name,seller,price,stock,key}=props.product;
   
    return (
        <div className="product">
            <div>
     <img src={img} alt=""/>
            </div>
            <div>
            <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
            </div>
            <br/>
            <p><small>By:{seller}</small></p>
            <br/>
        
            <p>${price}</p> <br/> 
            <p><small>Only{stock} left in stock -order soon</small></p>
           { props.showAddToCart===true &&<button className="main-btn" onClick={() =>props.handelAddProduct(props.product)}
            >
                <FontAwesomeIcon icon={faShoppingCart}/>Add To Cart</button>}
        </div>
    );
};

export default Product;
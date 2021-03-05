import React, { useState ,useEffect} from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/product';
import './shop.css'
import Cart from '../Cart/cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
const first10= fakeData.slice(0,10);
const [products,setProducts]=useState(first10);
const[cart,setCart]=useState([]);

useEffect(()=>{
const savedCart= getDatabaseCart();
const productKeys= Object.keys(savedCart);
const previousCart= productKeys.map(existingKey =>{
const product = fakeData.find(pd=>pd.key===existingKey)
product.quantity=savedCart[existingKey];
return product;
})

//console.log(previousCart);
setCart(previousCart);
},[])
const handelAddProduct=(product)=>{
//console.log('product added',product);
//const newCart =[...cart,product];
//setCart(newCart);
const toBeAddedKey=product.key;
const sameProduct = cart.find(pd => pd.key ===toBeAddedKey);
let count=1;
let newCart;
if(sameProduct){
    const count = sameProduct.quantity+1;
    sameProduct.quantity=count;
    const others = cart.filter(pd =>pd.key !==toBeAddedKey)
    newCart=[...others,sameProduct];
}
else{
    product.quantity=1;
    newCart=[...cart,product];
}
setCart(newCart);
addToDatabaseCart(product.key,count);
}

    return (
        <div className="twin-container">
            <div className="product-container">
               {
                   products.map(pd => <Product
                   key={pd.key}
                   showAddToCart={true}
                    handelAddProduct={handelAddProduct}
                    product={pd}></Product>)
               }
            </div>
    <div className="cart-container">
        <Cart cart={cart}>
        <Link to="/review">
            <button className="main-btn">Order Review</button>
            </Link>
    
        </Cart>

        </div>      
        </div>
    );
};

export default Shop;
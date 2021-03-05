import React,{useEffect,useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart,setCart]=useState([]);
const [orderPlace,setOrderPlace]=useState(false);


const handelPlaceOrder= ()=>{
    setCart([]);
    setOrderPlace(true);
    processOrder();
}
    const removeProduct= (productKey) =>{
        console.log('Removed clicked',productKey)
        const newCart = cart.filter(pd=>pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
useEffect(()=>{
    //
    const savedCart= getDatabaseCart();
    const productKeys= Object.keys(savedCart);
    const cartProducts= productKeys.map(key=>{
        const product=fakeData.find(pd=> pd.key === key);
        product.quantity= savedCart[key];
        return product
    });
setCart(cartProducts);
    
},[])
let thankyou;
if(orderPlace){
  thankyou = <img src={happyImage} alt=""/>
}
    return (
        <div className="twin-container">
           <div className="product-container">
           {
        cart.map(pd => <ReviewItem 
            key={pd.key}
            removeProduct ={removeProduct}
            product={pd}></ReviewItem>)
    }
    {thankyou}
           </div>
           <div className="cart-container">
      <Cart cart={cart}>
          <button onClick={handelPlaceOrder} className="main-btn">Place Order</button>
      </Cart>
           </div>
        
        </div>
    );
};

export default Review;
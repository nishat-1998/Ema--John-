import React from 'react'

const ReviewItem = (props) =>{
    //console.log(props);
    const {name,quantity,key,price}=props.product;
    const reviewItemStyle={
       borderBottom:'2px solid gray',
        marginBottom:'10px',
        paddingBottom:'10px',
        marginLeft:'240px'
    }
    return (
< div style={reviewItemStyle} className="review-item">
<h4 className="product-name">{name}</h4>;
<p>Quantity:{quantity}</p>
<p><small>Price:${price}</small></p>
<br/>
<button 
className="main-btn"
onclick={() =>props.removeProduct(key)}
>Remove</button>
</div>
    );
};

export default ReviewItem;
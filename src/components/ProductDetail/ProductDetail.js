import React from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/product';

const ProductDetail = () => {
    const {productKey}= useParams();
    const product = fakeData.find(pd => pd.Key === productKey);
    //console.log(product);
    return (
        <div>
            <h2>Your Product details:</h2>
   <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;
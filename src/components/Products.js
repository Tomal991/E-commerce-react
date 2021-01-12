import React from 'react';
import Ratings from './Ratings';

function Products(props) {
    const {product}=props;
    return (
        <div key={product._id} className="card">
        <a href={'/product/${product._id}'}>

          <img className="medium" src={product.image} alt={product.type} />
        </a>
        <div className="card-body">
        <a href={'/product/${product._id}'}>
            <h2>{product.type}</h2>
          </a>
          <Ratings rating={product.rating} numofReviews={product.numofReviews}></Ratings>
          <div className="price">{product.price}tk</div>
        </div>
      </div>
    )
}

export default Products

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <p>Only {stock} left in stock - Order Soon!!</p>
                <button 
                    onClick = { () => props.handleAddToCart(props.product) }
                    className='btn-regular'
                >{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, price, img, seller, ratings} = props.product;

    const handleAddToCart = props.handleAddToCart;
    
    return (
        <div className='product'>
            <div>
                <img src={img} alt="img" />
            </div>
            <div className='product-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='btn-cart' onClick={()=> handleAddToCart(props.product)}>
            Add to Card <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;
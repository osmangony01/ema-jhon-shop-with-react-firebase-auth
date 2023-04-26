import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const OrderReview = ({ product, handleRemoveFromCart }) => {
    console.log(product);
    const {id, img, name, price, shipping } = product;
    
    return (
        <div className='review-item'>
            <div className='review-details'>
                <img src={img} alt="" />
                <div className='item-info'>
                    <h3>{name}</h3>
                    <p>Price: <span className='amount'>${price}</span></p>
                    <p>Shipping Charge: <span className='amount'>${shipping}</span></p>
                </div>
            </div>
    
                <button className='btn-delete' onClick={()=>handleRemoveFromCart(id)}>
                <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
                </button>
                
          
        </div>
    );
};

export default OrderReview;
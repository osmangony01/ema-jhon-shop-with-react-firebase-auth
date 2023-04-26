import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Cart = ({ cart, handleClearCart }) => {

    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping * product.quantity;
        quantity += product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = tax + totalPrice + totalShipping;

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected item: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <span><FontAwesomeIcon className='' icon={faTrashCan} /></span>
            </button>
            <br />
        </div>
    );
};

export default Cart;
import React, { useState } from 'react';
import './orders.css';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'




const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = ()=>{
      setCart([]);
      deleteShoppingCart();
    }

    return (
        <div className='order-container'>
            <div className='order-product'>
                {
                    cart.map(product =>
                        <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveFromCart={handleRemoveFromCart}
                        />
                    )
                }
            </div>
            <div className='cart-container1'>
                <Cart cart={cart} handleClearCart={handleClearCart}/>
                <Link className='btn-proceed-checkout' to="/inventory">
                    <span> Proceed checkout</span>
                    <span><FontAwesomeIcon className='' icon={faArrowAltCircleRight} /></span>
                </Link>
            </div>

        </div>
    );
};

export default Orders;
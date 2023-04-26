import  { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);

    // console.log(products)
    const handleAddToCart = (product) => {
        //const newCart = [...cart, product];
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            product.quantity += 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, product];
        }
        setCart(newCart);
        addToDb(product.id)
    }


    useEffect(() => {
        const storedCart = getShoppingCart()
        const addedProduct = [];
        if (storedCart) {
            for (const id in storedCart) {
                const exists = products.find(pd => pd.id === id);
                if (exists) {
                    const quantity = storedCart[id];
                    exists.quantity = quantity;

                    addedProduct.push(exists);
                }
            }
            setCart(addedProduct);
        }
    }, [products])

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product =>
                        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
                    )
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                />
                <Link className='btn-proceed-checkout' to="/order">
                    <span> Review Order</span>
                    <span><FontAwesomeIcon className='' icon={faArrowAltCircleRight} /></span>
                </Link>
            </div>
        </div>
    );
};

export default Shop;
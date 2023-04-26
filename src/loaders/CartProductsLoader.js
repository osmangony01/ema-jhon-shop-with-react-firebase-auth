import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('/fakeData/products.json');
    const products = await loadedProducts.json();
    
    const storedCart = getShoppingCart();
    const addedProducts = [];
    if(storedCart){
        for(const id in storedCart){
            const exists = products.find(pd => pd.id === id);
            if(exists){
                const quantity = storedCart[id];
                exists.quantity = quantity;
                addedProducts.push(exists);
            }
        }
    }
    return addedProducts;
}

export default cartProductsLoader;
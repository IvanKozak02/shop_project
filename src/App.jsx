import {useState} from 'react';

import Shop from './components/Shop.jsx';
import {DUMMY_PRODUCTS} from './dummy-products.js';
import Product from "./components/Product.jsx";
import CartContextProvider, {CartContext} from "./store/shop-cart-context.jsx";
import Header from "./components/Header.jsx";

function App() {

    return (
        <CartContextProvider>
            <Header/>
            <Shop>
                {DUMMY_PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <Product {...product}/>
                    </li>
                ))}
            </Shop>
        </CartContextProvider>
    )
        ;
}


export default App;


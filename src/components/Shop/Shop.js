import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, []);

    const handleAddToCart = (product) => {
        const newcart = [...carts,product];
        setCarts(newcart);
    }

    return (
        <div className='grid grid-cols-4 bg-yellow-400'>
            <div className='col-span-3 pl-5 pr-5 pt-5'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        products.map(product => <Product key={product.idMeal} 
                            product={product} handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>

            </div>
            <div className=' bg-lime-500 pl-4 font-bold text-xl pt-2'>
                <h1 className='flex justify-center'>Order Summary</h1>
                {
                    carts.map(cart => <Cart key={cart.idMeal} cart={cart}></Cart>)
                }
                
            </div>
        </div>
    );
};

export default Shop;
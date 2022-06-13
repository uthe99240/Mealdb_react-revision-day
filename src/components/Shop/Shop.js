import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setProducts(data.meals))
    }, []);

    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-3 bg-white pl-5 pr-5 pt-5'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        products.map(product => <Product key={product.idMeal} product={product}></Product>)
                    }
                </div>

            </div>
            <div className='bg-yellow-400 pl-4'>
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shop;
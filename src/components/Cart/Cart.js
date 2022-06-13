import React from 'react';

const Cart = (props) => {
    const {strMeal,idMeal} = props.cart;
    
    return (
        <div className='flex'>
            <p>{idMeal}.</p>
            <h1>{strMeal}</h1>
        </div>
    );
};

export default Cart;
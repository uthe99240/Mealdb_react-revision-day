import React from 'react';

const Header = () => {
    return (
        <div className='h-30 bg-teal-500 flex items-center justify-between px-10'>
            <h1 className="text-3xl font-bold p-5">
                MealDB!!!
            </h1>

            <div className='mr-12 '>
                <big><a className='mr-5 text-black hover:text-white font-medium' href="/home">Home</a></big>
                <big><a className='mr-5 text-black hover:text-white font-medium' href="/about">About</a></big>
                <big><a className='mr-5 text-black hover:text-white font-medium' href="/shop">Shop</a></big>
                <big><a className='mr-5 text-black hover:text-white font-medium' href="/order">Order</a></big>
                <big><a className='mr-5 text-black hover:text-white font-medium' href="/payment">Payment</a></big>    
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { strMeal, strCategory, strInstructions, strMealThumb } = props.product;
    const {handleAddToCart} = props;
    return (
        <div className='border-4 border-black bg-teal-500 relative'>
            <img src={strMealThumb} alt='' />
            <div className=' p-4'>
                <big><p>StrMeal : {strMeal}</p></big>
                <big><p>StrCategory : {strCategory}</p></big>
                <big><p>StrInstructions : {strInstructions.slice(0, 50)}</p></big>
            </div>
            <div className='bg-rose-400 p-2 w-full absolute bottom-0 flex justify-center items-center space-x-5'>
                <button onClick={() => handleAddToCart(props.product)} >Add to Cart</button>
                <FontAwesomeIcon icon={faCoffee} />
            </div>

        </div>
    );
};

export default Product;
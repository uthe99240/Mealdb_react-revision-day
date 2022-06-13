import React from 'react';

const Product = (props) => {
    
    const {strMeal,strCategory,strInstructions, strMealThumb } = props.product;
    return (
        <div>
            <img className='rounded border-4 border-gray-700' src={strMealThumb} alt='' />
            <p>strMeal : {strMeal}</p>
            <p>strCategory : {strCategory}</p>
            <p>{strInstructions.slice(0, 100)}</p>
        </div>
    );
};

export default Product;
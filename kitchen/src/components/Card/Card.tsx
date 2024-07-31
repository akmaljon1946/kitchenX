import React from 'react';
import './Card.css'


// eslint-disable-next-line react/prop-types
const ProductCard = ({ image,  title,description }) => {
    return (     
          <li className='product-card'>
            <a className='product-link' href={image}>
            <img src={image} alt={title} className="product-image" />
            <p className="product-title">{description}</p>
            </a>    
          </li>
        
    );
};

export default ProductCard;
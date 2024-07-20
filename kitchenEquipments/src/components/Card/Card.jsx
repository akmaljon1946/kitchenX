
import './Card.css'
import React from 'react';


const ProductCard = ({ image, title }) => {
    return (
        <div className="product-card">
				<a className='product-link' href={image}>
            <img src={image} alt={title} className="product-image" />
            <p className="product-title">{title}</p>
				</a>
            
						
            
        </div>
    );
};

export default ProductCard;
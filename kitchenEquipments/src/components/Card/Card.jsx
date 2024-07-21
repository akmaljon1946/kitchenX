
import './Card.css'
// eslint-disable-next-line react/prop-types
const ProductCard = ({ image,  title }) => {
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
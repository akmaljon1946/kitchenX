
import React from 'react'
import './Product.css'
import { product } from "../../data"
import ProductCard from "../Card/Card"


const Product = () => 
	(
		<>
		<div className="information">
		<div className='container'>		
		<h1 className="title">Продукты</h1>
			<ul className="product">
				{product.map(way => (
					<ProductCard key={way.image} {...way}  />
				))}					
			</ul>
		</div>
		</div>

		</>
	)


export default Product
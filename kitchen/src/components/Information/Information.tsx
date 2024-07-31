
import React from 'react'
import './Information.css'
import { card } from "../../data"
import ProductCard from "../Card/Card"


const Information = () => 
	(
		<>
		<div className="information">
		<div className='container'>		
		<h1 className="title">Гастроемкости</h1>
			<ul className="product">
				{card.map(way => (
					<ProductCard key={way.image} {...way}  />
				))}					
			</ul>
		</div>
		</div>

		</>
	)


export default Information
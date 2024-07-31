import React from 'react'
import { dish } from "../../data"
import ProductCard from "../Card/Card"


const About = () => 
	(
		<>
		<div className="information">
		<div className='container'>		
		<h1 className="title">Нейтральное оборудования</h1>
			<ul className="product">
				{dish.map(way => (
					<ProductCard key={way.title} {...way}  />
				))}					
			</ul>
		</div>
		</div>

		</>
	)


export default About
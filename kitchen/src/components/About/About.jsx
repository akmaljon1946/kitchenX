import ProductCard from "../Card/Card";
import {dish} from '../../data'



function About() {
	return (
		<div className='container'>		
		<h1 className="title">Нейтральное оборудования</h1>
			<ul className="product">
				{dish.map(way => (
					<ProductCard key={way.title} {...way}  />
				))}					
			</ul>
		</div>
	);
}

export default About;
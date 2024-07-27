import './Information.css'
import { card } from "../../data"
import ProductCard from "../Card/Card"


const Information=()=> 
	(
		<div className='container'>		
		<h1 className="title">Гастроемкости</h1>
			<ul className="product">
				{card.map(way => (
					<ProductCard key={way.title} {...way}  />
				))}					
			</ul>
		</div>
	)


export default Information
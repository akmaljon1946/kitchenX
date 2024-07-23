import './Information.css'
import { card } from "../../data"
import ProductCard from "../Card/Card"


function Information() {
	return (
		<>		
			<ul className="product">
				{card.map(way => (
					<ProductCard key={way.title} {...way}  />
				))}					
			</ul>
		</>
	)
}

export default Information
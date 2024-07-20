import './Information.css'
import { card } from "../../data"
import ProductCard from "../Card/Card"


function Information() {
	return (
		<>
			<div className="product">
				{card.map(way => (
					<ProductCard key={way.title} {...way}  />
				))}			
			</div>
		</>
	)
}

export default Information
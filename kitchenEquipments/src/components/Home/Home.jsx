import './Home.css'
import { Link } from 'react-router-dom';



const  Home = () => (
		<div className='header'>
			<h1 className='header-title'>KitchenXequipments</h1>
				<Link className='link' to="/information">Гастроемкости</Link>
				<Link className='link' to="/about">About</Link>
		</div>			
	);


export default Home;


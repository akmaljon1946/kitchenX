import './Home.css'
import { Link } from 'react-router-dom';
import img from '/public/kitchen.jpg'



const  Home = () => (
	<>
		<div className='header'>
			<h1 className='header-title'>KitchenXequipments</h1>
				<Link className='link fromRight' to="/information">Гастроемкости</Link>
				<Link className='link fromRight' to="/about">Нейтральное оборудования</Link>
		</div>			
		<div className="main">
			<img src={img} alt="kitchen" className="main-img" />
		</div>
	</>
	);


export default Home;


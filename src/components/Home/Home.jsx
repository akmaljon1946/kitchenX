import './Home.css'
import { NavLink } from 'react-router-dom';




const  Home = () => (
	<>
		<div className='header'>
			<h1 className='header-title'>KitchenXequipments</h1>
			<nav>

				<NavLink className='link fromRight' to="/information">Гастроемкости</NavLink>
				<NavLink className='link fromRight' to="/about">Нейтральное оборудования</NavLink>
			</nav>
		</div>			
		<div className="main">
			<img src='kitchen.jpg' alt="kitchen" className="main-img" />
		</div>
	</>
	);


export default Home;


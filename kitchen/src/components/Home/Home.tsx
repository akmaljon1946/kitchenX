import React from 'react';
import './Home.css'
import {Link} from "react-router-dom"




const  Home = () => (
	<>
		<div className='header'>
			<h1 className='header-title'>KitchenXequipments</h1>
				<Link className='link fromRight' to="/kitchenX/information">Гастроемкости</Link>
				<Link className='link fromRight' to="/kitchenX/about">Нейтральное оборудования</Link>		
		</div>			
		<div className="main">
			<img src='/kitchen.jpg' alt="kitchen" className="main-img" />
		</div>
	</>
	);


export default Home;


import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.page';
import Podcast from './pages/Podcast.page';
import Interviews from './pages/Interviews.page';

import BG from './assets/bg.png';
import Internship from './pages/Internship.page';


const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/podcast' element={<Podcast />} />
			<Route path='/interviews' element={<Interviews />} />
			<Route path='/internship' element={<Internship />} />
			<Route
				path='*'
				element={
					<div
					className='w-full h-screen bg-repeat bg-contain flex items-center justify-center'
			style={{
				backgroundImage: `url(${BG})`,
				backgroundSize: '40%',
				backgroundAttachment: 'fixed'
			}}>
						<div className='text-white uppercase'>404 not found</div>
					</div>
				}
			/>
		</Routes>
	);
};

export default App;

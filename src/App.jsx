import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.page';
import Podcast from './pages/Podcast.page';
import Interviews from './pages/Interviews.page';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/podcast' element={<Podcast />} />
			<Route path='/interviews' element={<Interviews />} />
		</Routes>
	);
};

export default App;

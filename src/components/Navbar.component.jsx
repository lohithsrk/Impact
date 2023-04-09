import React from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../assets/logo.png';

const Navbar = () => {
	return (
		<nav className='fixed z-50 w-full top-0 text-white p-3 flex items-center justify-between px-32 bg-black bg-opacity-75'>
			<Link to='/' className='cursor-pointer'>
				<img src={LOGO} alt='Impact' className='w-28' />
			</Link>
			<ul className='flex gap-4'>
				<li className='uppercase cursor-pointer'>
					<Link to="/">Home</Link>
				</li>
				<li className='uppercase cursor-pointer'>
				<Link to="/podcast">Podcast</Link>

				</li>
				<li className='uppercase cursor-pointer'>
				<Link to="/interviews">Interviews</Link>

				</li>
				{/* <li className='uppercase cursor-pointer'>Blogs</li> */}
			</ul>
		</nav>
	);
};

export default Navbar;

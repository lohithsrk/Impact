import React from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../assets/logo.png';

const Navbar = () => {
	return (
		<nav className='fixed z-50 w-full top-0 text-white p-1 flex items-center justify-between px-32 bg-black bg-opacity-25'>
			<Link to='/' className='cursor-pointer'>
				<img src={LOGO} alt='Impact' className='w-28' />
			</Link>
			<ul className='flex gap-4'>
				<li className='uppercase cursor-pointer'>Home</li>
				<li className='uppercase cursor-pointer'>podcasts</li>
				<li className='uppercase cursor-pointer'>Vlogs</li>
				<li className='uppercase cursor-pointer'>Blogs</li>
			</ul>
		</nav>
	);
};

export default Navbar;

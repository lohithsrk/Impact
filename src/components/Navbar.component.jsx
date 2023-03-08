import React from 'react';

import LOGO from '../assets/logo.png';

const Navbar = () => {
	return (
		<nav className='fixed z-10 w-full top-0 text-white p-1 flex items-center justify-between px-32 bg-black bg-opacity-25'>
			<img src={LOGO} alt='Impact' className='w-28' />
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

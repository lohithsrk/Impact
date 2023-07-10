import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../assets/logo.png';

const Navbar = () => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);
	return (
		<nav className='fixed z-50 w-full top-0 text-white p-3 flex items-center justify-between lg:px-48 px-10 bg-black bg-opacity-75'>
			<Link to='/' className='cursor-pointer'>
				<img src={LOGO} alt='Impact' className='w-28' />
			</Link>
			<ul className={`flex gap-4 flex-col md:flex-row absolute md:relative w-full md:w-fit left-0  items-center ${isMenuOpened?"top-16":"-top-[400px]"} transition-all -z-10 md:top-0 bg-black bg-opacity-75 md:bg-opacity-0 pb-5 md:pb-0`}>
				<li className='uppercase cursor-pointer'>
					<Link to='/'>Home</Link>
				</li>
				<li className='uppercase cursor-pointer'>
					<Link to='/podcast'>Podcast</Link>
				</li>
				<li className='uppercase cursor-pointer'>
					<Link to='/interviews'>Interviews</Link>
				</li>
				<li className='uppercase cursor-pointer'>
					<Link to='/internship'>Internship</Link>
				</li>
				{/* <li className='uppercase cursor-pointer'>Blogs</li> */}
			</ul>
			<img
				className='w-8 h-8 md:hidden'
				src='https://img.icons8.com/glyph-neue/ffffff/menu--v1.png'
				alt='menu--v1'
				onClick={() => setIsMenuOpened(!isMenuOpened)}
			/>
		</nav>
	);
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../assets/logo.png';

const Footer = () => {
	return (
		<footer class='p-4 shadow md:px-6 md:py-8 bg-[#1f1f1f]'>
			<div class='sm:flex sm:items-center sm:justify-between px-32'>
				<img src={LOGO} class='w-24 mr-3' alt='Logo' />
				<ul class='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
					<li>
						<Link href='/' class='mr-4 hover:underline md:mr-6 '>
							Home
						</Link>
					</li>
					<li>
						<Link href='/' class='mr-4 hover:underline md:mr-6'>
							Podcasts
						</Link>
					</li>
					<li>
						<Link href='/' class='mr-4 hover:underline md:mr-6 '>
							Vlogs
						</Link>
					</li>
					<li>
						<Link href='/' class='hover:underline'>
							Blogs
						</Link>
					</li>
				</ul>
			</div>
			<hr class='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
			<span class='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
				© Impact. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;

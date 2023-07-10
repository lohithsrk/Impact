import React from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../assets/logo.png';

const Footer = () => {
	return (
		<footer class='p-4 shadow md:px-6 md:py-8 bg-[#1f1f1f]'>
			<div class='sm:flex sm:items-center sm:justify-between p-10 md:px-48  '>
				<div className='flex justify-center'>
					<img src={LOGO} class='w-24 mr-3 mb-5' alt='Logo' />
				</div>
				<div className='flex items-center justify-center'>
					<ul class='flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
						<li>
							<Link
								to='https://www.youtube.com/@Impact-zf1oh'
								class='mr-4 hover:underline md:mr-6 '
							>
								<img
									src='https://img.icons8.com/ios/ffffff/youtube-play--v1.png'
									alt='youtube'
									className='w-7 h-7 mr-2'
								/>
							</Link>
						</li>
						<li>
							<Link to='/podcast' class='mr-4 hover:underline md:mr-6'>
								<img
									src='https://img.icons8.com/windows/ffffff/spotify.png'
									alt='spotify'
									className='w-7 h-7 mr-2'
								/>
							</Link>
						</li>
						<li>
							<Link
								to='https://www.instagram.com/impact_cit/'
								target='_blank'
								class='mr-4 hover:underline md:mr-6 '
							>
								<img
									width='30'
									height='30'
									src='https://img.icons8.com/ios/ffffff/instagram-new--v1.png'
									alt='instagram-new'
									className='mr-2 w-6 h-6'
								/>
							</Link>
						</li>
					</ul>
					<span className='text-gray-200 px-3 mb-6'>|</span>
					<ul class='flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-5'>
						<li>
							<Link to='/' class='mr-4 hover:underline md:mr-6 text-gray-200'>
								Home
							</Link>
						</li>
						<li>
							<Link
								to='/podcast'
								class='mr-4 hover:underline md:mr-6 text-gray-200'
							>
								Podcasts
							</Link>
						</li>
						<li>
							<Link
								to='/interviews'
								class='mr-4 hover:underline md:mr-6 text-gray-200'
							>
								Interviews
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<hr class='my-6 mt-0 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
			<span class='block text-sm text-gray-200 sm:text-center dark:text-gray-400 text-center'>
				© Impact. All Rights Reserved.
			</span>
		</footer>
	);
};

export default Footer;

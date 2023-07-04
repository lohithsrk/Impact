import React from 'react';
import { Link } from 'react-router-dom';

import LOGO from '../assets/logo.png';

const Footer = () => {
	return (
		<footer class='p-4 shadow md:px-6 md:py-8 bg-[#1f1f1f]'>
			<div class='sm:flex sm:items-center sm:justify-between px-32'>
				<div>
					<img src={LOGO} class='w-24 mr-3' alt='Logo' />
					<ul class='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
						<li>
							<Link to='/' class='mr-4 hover:underline md:mr-6 '>
								<img
									src='https://img.icons8.com/3d-fluency/94/null/youtube-play.png'
									alt='youtube'
									className='w-7 h-7 mr-2'
								/>
							</Link>
						</li>
						<li>
							<Link to='/podcast' class='mr-4 hover:underline md:mr-6'>
								<img
									src='https://img.icons8.com/3d-fluency/94/null/spotify.png'
									alt='spotify'
									className='w-7 h-7 mr-2'
								/>
							</Link>
						</li>
						<li>
							<Link to='https://www.instagram.com/impact_cit/' target='_blank' class='mr-4 hover:underline md:mr-6 '>
								<img
									width='30'
									height='30'
									src='https://img.icons8.com/fluency/48/instagram-new.png'
									alt='instagram-new'
									className='mr-2'
								/>
							</Link>
						</li>
					</ul>
				</div>
				<ul class='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
					<li>
						<Link to='/' class='mr-4 hover:underline md:mr-6 '>
							Home
						</Link>
					</li>
					<li>
						<Link to='/podcast' class='mr-4 hover:underline md:mr-6'>
							Podcasts
						</Link>
					</li>
					<li>
						<Link to='/interviews' class='mr-4 hover:underline md:mr-6 '>
							Interviews
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

import React from 'react';

import Navbar from '../components/Navbar.component';
import BG from '../assets/bg.png';
import Footer from '../components/Footer.component';
import CK from '../assets/interviews/ck.png';

const Podcast = () => {
	return (
		<div
			className='w-full bg-repeat bg-contain min-h-screen'
			style={{
				backgroundImage: `url(${BG})`,
				backgroundSize: '40%',
				backgroundAttachment: 'fixed'
			}}
		>
			<Navbar />
			<div className='pt-28 md:px-48 px-10'>
				{podcasts.length > 0 ? (
					podcasts.map((podcast, i) => (
						<div className='mb-5'>
							<div className='w-full flex flex-col md:flex-row bg-[#151515] p-2 rounded shadow-lg shadow-[#ffffff0f]'>
								<img
									src={podcast.thumbnail}
									alt={podcast.title}
									className='w-full md:w-36 md:h-36 rounded'
								/>
								<div className='p-2 pl-3'>
									<h1 className='text-2xl font-bold text-[#f2b300] inline'>
										<a
											href={podcast.spotify}
											target='_blank'
											rel='noopener noreferrer'
											className='items-center gap-2 inline-flex'
										>
											{podcast.title}

											<img
												src='https://img.icons8.com/3d-fluency/94/null/spotify.png'
												alt='spotify'
												className='w-7 h-7'
											/>
										</a>
									</h1>
									<p className='text-[#ffffffde] text-sm my-2'>
										{podcast.description}
									</p>
									<div className='flex text-[#ffffffde] text-sm items-center'>
										02 Apr 2023 &nbsp; • &nbsp;{' '}
										<a
											href={podcast.spotify}
											target='_blank'
											rel='noopener noreferrer'
											className='underline text-[#f2b300]'
										>
											Click here to listen
										</a>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<p className='text-white text-center'>No Podcasts found</p>
				)}
			</div>
			<div className={`${podcasts.length <= 0 && 'fixed bottom-0 left-0 w-screen'}`}>
				<Footer />
			</div>
		</div>
	);
};

const podcasts = [];

export default Podcast;

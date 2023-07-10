import React from 'react';

import Navbar from '../components/Navbar.component';
import BG from '../assets/bg.png';
import Footer from '../components/Footer.component';

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
				{podcasts.map((podcast, i) => (
					<div className='mb-5'>
						<div className='w-full flex bg-[#151515] p-2 rounded shadow-lg shadow-[#ffffff0f]'>
							<img
								src={podcast.thumbnail}
								alt={podcast.title}
								className='w-36 h-36 rounded'
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
				))}
			</div>
            <Footer/>
		</div>
	);
};

const podcasts = [
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	},
	{
		title: 'Podcast 1',
		spotify: 'https://google.com',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe error reiciendis, facere quam fuga veritatis dolore tenetur incidunt sint eos voluptatem minus cum rerum molestiae ipsum! Hic ratione perspiciatis sapiente.'
	}
];

export default Podcast;

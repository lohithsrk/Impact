import React from 'react';

import Navbar from '../components/Navbar.component';
import BG from '../assets/bg.png';
import Footer from '../components/Footer.component';

const Internship = () => {
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
				{internship.map((interview, i) => (
					<div className='mb-5'>
						<div className='w-full flex bg-[#151515] p-2 rounded shadow-lg shadow-[#ffffff0f]'>
							<img
								src={interview.thumbnail}
								alt={interview.title}
								className='w-36 h-36 rounded'
							/>
							<div className='p-2 pl-3'>
								<h1 className='text-2xl font-bold text-[#f2b300] inline'>
									<a
										href={interview.youtube}
										target='_blank'
										rel='noopener noreferrer'
										className='items-center gap-2 inline-flex'
									>
										{interview.title}

										<img
											src='https://img.icons8.com/3d-fluency/94/null/youtube-play.png'
											alt='youtube'
											className='w-7 h-7'
										/>
									</a>
								</h1>
								<p className='text-[#ffffffde] text-sm my-2'>
									{interview.description}
								</p>
								<div className='flex text-[#ffffffde] text-sm items-center'>
									02 Apr 2023 &nbsp; • &nbsp;{' '}
									<a
										href={interview.youtube}
										target='_blank'
										rel='noopener noreferrer'
										className='underline text-[#f2b300]'
									>
										Click here to watch
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

const internship = [
	{
		title:
			'"YOU SHOULD DO WHAT INTERESTS YOU AND WHAT YOU ASPIRE TO DO."-Ashish Bhalla - Director-HR of HCLTech',
		youtube: 'https://www.youtube.com/watch?v=RLKnrM1Tva4',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'It is not often that we stumble upon an opportunity like this. An opportunity to get up-close with the HR of a leading technological giant in India. For this edition, as part of our expert interview, we interviewed Mr Ashish Bhalla – Director-HR of HCLTech. We asked him about the tech industry, the recruitment process, the recession and of course some burning questions that we had! Check out the full article to get insights from the versatile and well-balanced leader himself!'
	},
	{
		title:
			'Interview with Mr.Santhosh Muruganantham ,Co founder & MD at Kolapasi.',
		youtube: 'https://www.youtube.com/watch?v=5huOjslriEg',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			"Discover the behind-the-scenes secrets of India's pioneering chef-less restaurant with an exclusive interview featuring the Managing Director, Mr. Santhosh Murganantham. Gain valuable insights and unique perspectives as he shares his experiences and expertise in creating and managing this innovative culinary concept."
	},
	{
		title:
			"Uncovering the Expertise of NASA's Former Chief Knowledge Officer : Mr. Edward Rogers",
		youtube: 'https://www.youtube.com/watch?v=2bj7mzltpz4',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			'Experience an insightful interview with a retired Chief Knowledge Officer from NASA, widely recognized as an expert in startups and business management. With a distinguished career, this professional is also a visiting faculty member at the Indian School of Business and has made a significant contribution to humanitarian work in war-torn Southern Lebanon.'
	},
	{
		title:
			'Inspiring Journey of Naturals Spa and Salon CEO | Empowering Women Entrepreneurs',
		youtube: 'https://www.youtube.com/watch?v=vsXx1lejB5I',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			"Join us in this exclusive interview with the remarkable CEO and Co-founder of Naturals Spa and Salon, a visionary with 22 years of pathbreaking experience. With an impressive network of 700 stores across 20 states, this industry leader shares their inspiring story of bouncing back from a debt of 5 crores to building a thriving 270 crore turnover salon chain. Discover the untold secrets behind their immense hard work and dedication, as they shed light on their mission to empower women through entrepreneurship. Get ready to be inspired and learn about their ambitious plans to expand their salon chain to 3000, providing opportunities for over 1000 women entrepreneurs. Don't miss this opportunity to gain insights from a true icon in the beauty industry!"
	},
	{
		title:
			'Part 2 : Inspiring Journey of Naturals Spa and Salon CEO | Empowering Women Entrepreneurs',
		youtube: 'https://www.youtube.com/watch?v=ZaUaZOIXWdU',
		thumbnail:
			'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
		description:
			"Join us in this exclusive interview with the remarkable CEO and Co-founder of Naturals Spa and Salon, a visionary with 22 years of pathbreaking experience. With an impressive network of 700 stores across 20 states, this industry leader shares their inspiring story of bouncing back from a debt of 5 crores to building a thriving 270 crore turnover salon chain. Discover the untold secrets behind their immense hard work and dedication, as they shed light on their mission to empower women through entrepreneurship. Get ready to be inspired and learn about their ambitious plans to expand their salon chain to 3000, providing opportunities for over 1000 women entrepreneurs. Don't miss this opportunity to gain insights from a true icon in the beauty industry!"
	}
];

export default Internship;

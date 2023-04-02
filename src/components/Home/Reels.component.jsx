import React from 'react';
import Marquee from 'react-fast-marquee';

import BG from '../../assets/bg.png';

const Reels = ({ title, direction }) => {
	return (
		<>
			<h1 className='text-2xl font-extrabold mb-1 text-white px-32 py-5'>
				{title}
			</h1>
			<div className='bg-[#f2b300] mb-3 p-2 flex flex-col gap-3'>
				<Marquee speed={25} gradient={false} direction={direction}>
					<div className='flex flex-row '>
						{Array(55)
							.fill(0)
							.map((a) => (
								<div
									className='bg-repeat bg-contain w-5 h-5 rounded-md mr-2'
									style={{
										backgroundImage: `url(${BG})`,
										backgroundSize: '40%',
										backgroundAttachment: 'fixed'
									}}
								></div>
							))}
					</div>
				</Marquee>
				<Marquee speed={25} gradient={false} direction={direction}>
					<div className='flex '>
						{Array(55)
							.fill(0)

							.map((a) => (
								<img
									src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
									className='w-56 h-48 object-cover rounded-md mr-2'
									alt='...'
								/>
							))}
					</div>
				</Marquee>
				<Marquee speed={25} gradient={false} direction={direction}>
					<div className='flex flex-row'>
						{Array(55)
							.fill(0)
							.map((a) => (
								<div
									className='bg-repeat bg-contain w-5 h-5 rounded-md mr-2'
									style={{
										backgroundImage: `url(${BG})`,
										backgroundSize: '40%',
										backgroundAttachment: 'fixed'
									}}
								></div>
							))}
					</div>
				</Marquee>
			</div>
		</>
	);
};

export default Reels;

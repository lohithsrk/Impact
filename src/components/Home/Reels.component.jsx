import React from 'react';
import Marquee from 'react-fast-marquee';

import BG from '../../assets/bg.png';
import impact_poster from '../../assets/events/impact_poster.jpg';
import impact_poster_1 from '../../assets/events/impact_poster_1.jpg';
import ashish from '../../assets/events/ashish.png';
import ck from '../../assets/events/ck.png';
import edward from '../../assets/events/edward.png';
import santhosh from '../../assets/events/santhosh.png';

const Reels = ({ title, direction }) => {
	return (
		<>
			<h1 className='text-2xl font-extrabold md:mb-1 text-white px-10 md:px-48 py-3 md:py-5'>
				{title}
			</h1>
			<div className='bg-[#f2b300] mb-3 p-2 flex flex-col gap-3'>
				<Marquee speed={25} gradient={false} direction={direction}>
					<div className='flex flex-row '>
						{Array(55)
							.fill(0)
							.map((a) => (
								<div
									className='bg-repeat bg-contain w-4 h-4 md:w-5 md:h-5 rounded-md mr-2'
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
						{[impact_poster, impact_poster_1, ashish, ck, santhosh, edward].map(
							(a) => (
								<img
									src={a}
									className='w-48 h-40 md:w-56 md:h-48 object-fill rounded-md mr-2'
									alt='...'
								/>
							)
						)}
					</div>
				</Marquee>
				<Marquee speed={25} gradient={false} direction={direction}>
					<div className='flex flex-row'>
						{Array(55)
							.fill(0)
							.map((a) => (
								<div
									className='bg-repeat bg-contain w-4 h-4 md:w-5 md:h- rounded-md mr-2'
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

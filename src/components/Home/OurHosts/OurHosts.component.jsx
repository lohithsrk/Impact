import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './ourHosts.styles.css';

import BG from '../../../assets/bg.png';
const OurHosts = () => {
	return (
		<div
			className='w-full bg-repeat bg-contain p-20 pt-0 flex items-center justify-center flex-col'
			style={{
				backgroundImage: `url(${BG})`,
				backgroundSize: '40%',
				backgroundAttachment: 'fixed'
			}}
		>
			<h1 className='text-2xl font-extrabold mb-3 text-white text-left w-full'>
				OUR HOSTS
			</h1>

			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				pagination={{
					clickable: true
				}}
			>
				<SwiperSlide>
					<div className='flex'>
						<img
							src='https://marketplace.canva.com/EAE8WYkvGFk/1/0/1600w/canva-blue-white-podcast-%28poster-%28landscape%29%29-GmR3rRqLssk.jpg'
							alt=''
						/>
						<div className='bg-[#f2b300] text-white text-left p-5'>
							<h1 className='text-2xl font-extrabold mb-3'>Name</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								voluptas provident cupiditate dignissimos quidem est rem
								excepturi molestiae exercitationem. Illo ea officiis porro? Eum
								possimus, delectus laudantium assumenda temporibus magnam?
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex'>
						<img
							src='https://marketplace.canva.com/EAE8WYkvGFk/1/0/1600w/canva-blue-white-podcast-%28poster-%28landscape%29%29-GmR3rRqLssk.jpg'
							alt=''
						/>
						<div className='bg-[#f2b300] text-white text-left p-5'>
							<h1 className='text-2xl font-extrabold mb-3'>Name</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								voluptas provident cupiditate dignissimos quidem est rem
								excepturi molestiae exercitationem. Illo ea officiis porro? Eum
								possimus, delectus laudantium assumenda temporibus magnam?
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex'>
						<img
							src='https://marketplace.canva.com/EAE8WYkvGFk/1/0/1600w/canva-blue-white-podcast-%28poster-%28landscape%29%29-GmR3rRqLssk.jpg'
							alt=''
						/>
						<div className='bg-[#f2b300] text-white text-left p-5'>
							<h1 className='text-2xl font-extrabold mb-3'>Name</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								voluptas provident cupiditate dignissimos quidem est rem
								excepturi molestiae exercitationem. Illo ea officiis porro? Eum
								possimus, delectus laudantium assumenda temporibus magnam?
							</p>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='flex'>
						<img
							src='https://marketplace.canva.com/EAE8WYkvGFk/1/0/1600w/canva-blue-white-podcast-%28poster-%28landscape%29%29-GmR3rRqLssk.jpg'
							alt=''
						/>
						<div className='bg-[#f2b300] text-white text-left p-5'>
							<h1 className='text-2xl font-extrabold mb-3'>Name</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
								voluptas provident cupiditate dignissimos quidem est rem
								excepturi molestiae exercitationem. Illo ea officiis porro? Eum
								possimus, delectus laudantium assumenda temporibus magnam?
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default OurHosts;

import React from 'react';

import BG from './assets/bg.png';
import BGVideo from './assets/bg-video.mp4';
import Navbar from './components/Navbar.component';
import Footer from './components/Footer.component';
import Testimonials from './components/Home/Testimonials.components';
import OurHosts from './components/Home/OurHosts/OurHosts.component';
import Reels from './components/Home/Reels.component';

const App = () => {
	return (
		<div
			className='w-full bg-repeat bg-contain '
			style={{
				backgroundImage: `url(${BG})`,
				backgroundSize: '40%',
				backgroundAttachment: 'fixed'
			}}
		>
			<Navbar />
			<video
				src={BGVideo}
				autoPlay
				muted
				className='w-full h-screen object-cover'
				loop
			></video>
			<Reels title='PAST EVENTS' direction='left' />
			<Reels title='UPCOMING EVENTS' direction='right' />
			<div className='w-full h-min bg-[#f2b300] relative text-white px-32 py-10 text-justify mt-20'>
				<h1 className='text-2xl font-extrabold mb-1'>INTRODUCTION</h1>
				<p className='lett'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
					mollitia, molestiae quas vel sint commodi repudiandae consequuntur
					voluptatum laborum numquam blanditiis harum quisquam eius sed odit
					fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
					accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
					molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
					officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
					nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
					error repudiandae fuga? Ipsa laudantium molestias eos sapiente
					officiis modi at sunt excepturi expedita sint? Sed quibusdam
					recusandae alias error harum maxime adipisci amet laborum.
					Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a
					cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit
					doloribus tenetur fugiat, temporibus enim commodi iusto libero magni
					deleniti quod quam consequuntur! Commodi minima excepturi repudiandae
					velit hic maxime doloremque. Quaerat provident commodi consectetur
					veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates
					pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
					excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
					Voluptatem quaerat non architecto ab laudantium modi minima sunt esse
					temporibus sint culpa, recusandae aliquam numquam totam ratione
					voluptas quod exercitationem fuga. Possimus quis earum veniam quasi
					aliquam eligendi, placeat qui corporis!{' '}
				</p>
			</div>
			<Testimonials />
			<OurHosts />
			<Footer />
		</div>
	);
};

export default App;

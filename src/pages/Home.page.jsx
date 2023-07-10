import React from 'react';

import BG from '../assets/bg.png';
import BGVideo from '../assets/bg-video.mp4';
import Navbar from '../components/Navbar.component';
import Footer from '../components/Footer.component';
import Testimonials from '../components/Home/Testimonials.components';
// import OurHosts from '../components/Home/OurHosts/OurHosts.component';
import Reels from '../components/Home/Reels.component';
import { Link } from 'react-router-dom';

const Home = () => {
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
				className='w-full md:h-screen object-cover'
				loop
			></video>
			<Reels title='EVENTS' direction='left' />
			{/* <Reels title='UPCOMING EVENTS' direction='right' /> */}
			<div className='w-full h-min bg-[#f2b300] relative text-white p-10 md:px-48 py-10 text-justify mt-10'>
				<h1 className='text-2xl font-extrabold mb-1'>INTRODUCTION</h1>
				<p className='lett'>
					Hello and welcome to our podcast! We're thrilled to have you join us
					for this journey.
					<br />
					<br />
					Our podcast is all about getting impacted. We believe that we can
					create an impact, and we want to share our knowledge, insights, and
					experiences with you.
					<br />
					<br />
					In each episode, we'll dive deep into a specific aspect of our theme
					and explore it from different angles. We'll bring in experts,
					professionals, and enthusiasts to share their perspectives and offer
					valuable insights.
					<br />
					<br />
					Whether you're a seasoned pro or just getting started, our podcast has
					something for everyone. Our goal is to provide you with informative
					and entertaining content that you can use to deepen your understanding
					and appreciation of getting impacted together.
					<br />
					<br />
					So sit back, relax , and enjoy the show.
				</p>
			</div>
			<Testimonials />
			<div className='w-full h-min  relative text-white p-10 md:px-48 py-10 text-justify mt-20'>
				<h1 className='text-2xl font-extrabold mb-1'>INTERNSHIP</h1>
				<p className='lett'>
					Hello and welcome to our podcast! We're thrilled to have you join us
					for this journey. Whether you're a seasoned pro or just getting
					started, our podcast has something for everyone. Our goal is to
					provide you with informative and entertaining content that you can use
					to deepen your understanding and appreciation of getting impacted
					together.
				</p>
				<br />
				<Link
					to='/internship'
					className='bg-[#f2b300] font-bold p-3 rounded-lg '
				>
					Go to Internship
				</Link>
			</div>
			{/* <OurHosts /> */}
			<Footer />
		</div>
	);
};

export default Home;

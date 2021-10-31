import React from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';

// main div = h3 bg-blue flex items-center justify-center teststyle1
// subtitle div = f6 w-40 self-center

const NavBar2 = () => {
	return (
		<div className='navdiv'>
			<nav className='navbar'>
				<div className='title pointer'>CosmoReady</div>
				<div className='link-list'>
					<NavBarButton className='link-item' title={'Products'} href={'https://www.google.com'}/>
					<NavBarButton className='link-item' title={'State Board'} href={'https://www.google.com'}/>
					<NavBarButton className='link-item' title={'About'} href={'https://www.google.com'}/>
					<NavBarButton className='link-item' title={'Contact'} href={'https://www.google.com'}/>
				</div>
				<div className='subtitle'>Test Prep for Cosmetologists, Barbers, Estheticians, Nail Technicians and Instructors</div>
			</nav>
		</div>
	)
}

export default NavBar2;
import React from 'react';
import NavBarButton from './NavBarButton'

const NavBar = () => {
	return (
		<div className='h3 bg-blue flex items-center justify-center teststyle1'>
			<nav className='white flex'>
				<div className='b i f2 pointer ma1'>CosmoReady</div>
				<NavBarButton title={'Products'} href={'https://www.google.com'}/>
				<NavBarButton title={'State Board'} href={'https://www.google.com'}/>
				<NavBarButton title={'About'} href={'https://www.google.com'}/>
				<NavBarButton title={'Contact'} href={'https://www.google.com'}/>
				<div className='f6 w-40 self-center'>Test Prep for Cosmetologists, Barbers, Estheticians, Nail Technicians and Instructors</div>
			</nav>
		</div>
	)
}

export default NavBar;
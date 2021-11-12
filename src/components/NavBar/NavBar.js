import React from 'react';
import NavBarButton from './NavBarButton';
import './NavBar.css';
import './NavBarV2.css';

// main div = h3 bg-blue flex items-center justify-center teststyle1
// subtitle div = f6 w-40 self-center

const NavBar = ({ largeView }) => {
	return (
		<div className='navdiv-v2'>
			<nav className='navbar-v2'>
				<div className='navtitle-v2'>Website Title</div>
				<div>
					{largeView ? (
						<li className='navlist-v2'>
							<NavBarButton className='navbutton-v2' title={'Item One'}/>
							<button className='navbutton-v2'>Item Two</button>
							<button className='navbutton-v2'>Item Three</button>
							<button className='navbutton-v2'>Item Four</button>
						</li>
					) : (
						<li className='navlist-v2'>
							<button className='navburger-v2'>///</button>
						</li>
					)}
				</div>
			</nav>
		</div>
	)

	// return (
	// 	<div className='navdiv'>
	// 		<nav className='navbar'>
	// 			<div className='title pointer'>CosmoReady</div>
	// 			<div className='link-list'>
	// 				<NavBarButton className='link-item' title={'Products'} href={'https://www.google.com'}/>
	// 				<NavBarButton className='link-item' title={'State Board'} href={'https://www.google.com'}/>
	// 				<NavBarButton className='link-item' title={'About'} href={'https://www.google.com'}/>
	// 				<NavBarButton className='link-item' title={'Contact'} href={'https://www.google.com'}/>
	// 			</div>
	// 			<div className='subtitle'>Test Prep for Cosmetologists, Barbers, Estheticians, Nail Technicians and Instructors</div>
	// 		</nav>
	// 	</div>
	// )
}

export default NavBar;
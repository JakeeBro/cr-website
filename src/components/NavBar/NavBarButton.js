import React from 'react';

const NavBarButton = ({ title, href }) => {
	return (
		<div className='flex items-center justify-center ma2'>
			<a href={href}>
				<button className='nav-button bg-transparent ba b--white br3 hover-bg-white white grow b pointer' style={{width: '16vh', height: '4vh'}}>{title}</button>
			</a>
		</div>
	)
}

export default NavBarButton;
import React from 'react';

const NavBarButton = ({ title, href }) => {
	return (
		<div className='flex items-center justify-center ma2'>
			<a href={href}>
				<button className=''>{title}</button>
			</a>
		</div>
	)
}

export default NavBarButton;

// className='nav-button bg-transparent ba b--white br3 hover-bg-white white grow b pointer'
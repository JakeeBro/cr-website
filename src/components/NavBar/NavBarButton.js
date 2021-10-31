import React from 'react';

const NavBarButton = ({ title, href }) => {
	return (
		<div className='flex items-center justify-center ma2'>
			<a href={href}>
				<button className='bg-transparent ba b--white br3 hover-bg-white white hover-blue grow b pointer' style={{width: '15vh', height: '4vh'}}>{title}</button>
			</a>
		</div>
	)
}

export default NavBarButton;
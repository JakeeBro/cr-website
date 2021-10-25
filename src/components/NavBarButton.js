import React from 'react';

const NavBarButton = ({ title, href }) => {
	return (
		<div className='flex items-center justify-center ma2'>
			<a href={href}>
				<button className='blue no-underline self-center br3 bw0 b pointer' style={{width: '15vh', height: '4vh'}}>{title}</button>
			</a>
		</div>
	)
}

export default NavBarButton;
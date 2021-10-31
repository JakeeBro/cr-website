import React from 'react';
import './LandingPage.css'

const LicenseCard = ({ title }) => {
	return (
		<div className='license br3 grow'>
			<p className='license-title'>{title}</p>
		</div>
	)
}

export default LicenseCard;
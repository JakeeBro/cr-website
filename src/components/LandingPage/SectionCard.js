import React from 'react';
import './SectionCard.css';

const SectionCard = ({ sectionTitle }) => {
	return (
		<div className='section-card'>
			<div className='section-title'>
				<p>{sectionTitle}</p>
			</div>
		</div>
	)
}

export default SectionCard;
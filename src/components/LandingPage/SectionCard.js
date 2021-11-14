import React from 'react';
import './SectionCard.css';

const SectionCard = ({ sectionTitle }) => {
	return (
		<div className='section-card'>
			<div className='section-title'>
				<p className=''>{sectionTitle}</p>
				<div className='section-content-holder'>
					<div className='blue'>
						Test
					</div>
				</div>
			</div>
		</div>
	)
}

export default SectionCard;
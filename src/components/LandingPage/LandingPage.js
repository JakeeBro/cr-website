import React from 'react';
import './LandingPage.css';
import LicenseCard from './LicenseCard';
import SectionCard from './SectionCard';

const LandingPage = () => {
	return (
		<div className='landing'>
			<p className='landing-header'>Landing Page Header</p>
			<p className='landing-subheader'>Landing Page Sub Header</p>
			{/*<p className='landing-header'>Your COMPLETE State Board Licensing Test Prep Site</p>*/}
			{/*<p className='landing-subheader'>We offer State Board Kits and Training Support for ALL licenses</p>*/}
			{/*<div className='license-list'>
				<LicenseCard title={'Aesthetics'}/>
				<LicenseCard title={'Barbering'}/>
				<LicenseCard title={'Cosmetology'}/>
				<LicenseCard title={'Nail Tech'}/>
				<LicenseCard title={'Instructing'}/>
			</div>*/}
			<div className='section-holder'>
          		<SectionCard sectionTitle={'Section 1'}/>
          		<SectionCard sectionTitle={'Section 2'}/>
          		<SectionCard sectionTitle={'Section 3'}/>
        	</div>
		</div>
	)
}

export default LandingPage;
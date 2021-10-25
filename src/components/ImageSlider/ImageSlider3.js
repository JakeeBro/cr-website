import { React } from 'react';

const ImageSlider2 = ({ slides, current, update }) => {
	const length = slides.length

	console.log(current);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	const nextSlide = () => {

	}

	const prevSlide = () => {
		
	}

	return (
		<div className='flex justify-between mh7'>
			<button onClick={prevSlide}>Left</button>
			{slides.map((slide, index) => {
				return (
					<div className={index === current ? 'active w50' : 'w50'} key={index}>
						{index === current && (<img src={slide.image} alt='slider entry' />)}
					</div>
				)
			})}
			<button onClick={nextSlide}>Right</button>
		</div>
	)
}

export default ImageSlider2;
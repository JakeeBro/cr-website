import { React, useState } from 'react';
import { SliderData } from './SliderData'

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0)
	const length = slides.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className='slider'>
			<div className='white bg-black left' onClick={prevSlide}>Left</div>
			{slides.map((slide, index) => {
				return (
					<div className={index === current ? 'slide active' : 'slide'} key={index}>
						{index === current && (<img src={slide.image} alt='slider entry' />)} 
					</div>
				)
			})}
			<div className='white bg-black right' onClick={nextSlide}>Right</div>
		</section>
	)
}

export default ImageSlider;
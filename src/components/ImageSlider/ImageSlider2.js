// import { React, Component } from 'react';
// import { SliderData } from './SliderData';

// class ImageSlider2 extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			current: 0
// 		}
// 	}

// 	render() {
// 		return (
// 			<div className='flex justify-between ma4'>
// 				<button>Left</button>
// 				{SliderData.map((slide, index) => {
// 					return (
// 						<div className={index === this.state.current ? 'active w50' : 'w50'} key={index}>
// 							{index === this.state.current && (<img src={slide.image} alt='slider entry' />)}
// 						</div>
// 					)
// 				})}
// 				<button>Right</button>
// 			</div>
// 		)
// 	}
// }

// export default ImageSlider2;
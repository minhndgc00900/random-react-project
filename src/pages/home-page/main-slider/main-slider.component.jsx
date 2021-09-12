import React from 'react'
import { Carousel } from 'react-responsive-carousel'

function MainSlider() {
	const param = {
		showArrows: false,
		autoPlay: true,
		showThumbs: false,
		infiniteLoop: true,
		interval: 2000,
	}

	return (
		<Carousel {...param}>
			<div>
				<img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' />
			</div>
			<div>
				<img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' />
			</div>
			<div>
				<img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' />
			</div>
		</Carousel>
	)
}

export default MainSlider

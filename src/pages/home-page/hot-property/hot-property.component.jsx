import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './hot-property.styles.scss'

function HotProperty({ data }) {
	console.log(123, data)
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		// autoplaySpeed: 10000,
		pauseOnHover: true,
		className: 'slider-custom',
	}

	return (
		<div className='hot-property'>
			<h2 className='title-name'>Dự án nổi bật</h2>
			<div>
				<Slider {...settings}>
					{data
						? data.map((item) => (
								<>
									<img
										style={{ marginBottom: '12px' }}
										src={item.image}
										alt=''
									/>
									<span className='title-slider-item'>{item.title}</span>
								</>
						  ))
						: null}
				</Slider>
			</div>
		</div>
	)
}

export default HotProperty

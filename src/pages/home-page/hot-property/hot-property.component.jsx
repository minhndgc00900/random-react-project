import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './hot-property.styles.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Grid } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function HotProperty({ data }) {
	console.log(123, data)
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		arrows: false,
		className: 'slider-custom',
	}

	const onHandleBack = () => {
		slider.slickPrev()
	}

	const onHandleForward = () => {
		slider.slickNext()
	}

	let slider = null

	return (
		<div className='hot-property'>
			<Grid container className='slider-container'>
				<Grid item xs={1}>
					<ArrowBackIosIcon className='left-arrow' onClick={onHandleBack} />
				</Grid>
				<Grid item xs={10}>
					<h2 className='title-name'>Dự án nổi bật</h2>

					<Slider ref={(c) => (slider = c)} {...settings}>
						{data
							? data.map((item, key) => (
									<div id={key}>
										<img
											style={{ marginBottom: '12px' }}
											src={item.image}
											alt=''
										/>
										<span className='title-slider-item'>{item.title}</span>
									</div>
							  ))
							: null}
					</Slider>
				</Grid>
				<Grid item xs={1}>
					<ArrowForwardIosIcon
						className='right-arrow'
						onClick={onHandleForward}
					/>
				</Grid>
			</Grid>
		</div>
	)
}

export default HotProperty

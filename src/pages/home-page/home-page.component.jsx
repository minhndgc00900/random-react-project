import { Grid } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import HomeContext from '../../contexts/home-context'
import './home-page.styles.scss'
import MainForm from './main-form/main-form.component'
import RightForm from './right-form/right-form.component'
import { news } from '../../data/news'
import PropertySuggetion from './property-suggetion/property-suggetion.component'
import { suggetion } from '../../data/property-suggetion-data'
import Button from '@material-ui/core/Button'

const HomePage = (props) => {
	const param = {
		showArrows: false,
		autoPlay: true,
		showThumbs: false,
		infiniteLoop: true,
		interval: 2000,
	}
	const [newsState, setNewsState] = useState(news)
	const [propSuggetion, setPropSuggetion] = useState([])

	useEffect(() => {
		setPropSuggetion(suggetion.slice(0, 8))
	}, [suggetion])

	const onHandleLoadMore = () => {
		if (propSuggetion.length < suggetion.length && suggetion.length >= 16) {
			setPropSuggetion(suggetion.slice(0, 16))
		}
	}

	return (
		<HomeContext.Provider
			value={{
				newsState,
				propSuggetion,
			}}
		>
			<div className='homepage-container'>
				<Carousel
					{...param}
					// onChange={onChange}
					// onClickItem={onClickItem}
					// onClickThumb={onClickThumb}
				>
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
				<Grid container spacing={2} className='home-page-news'>
					<Grid item xs={9}>
						<MainForm />
					</Grid>
					<Grid item xs={3}>
						<RightForm />
					</Grid>
				</Grid>
				<div className='property-suggetion-background'>
					<PropertySuggetion />
					<div className='load-more'>
						<Button
							variant='contained'
							color='primary'
							href='#contained-buttons'
							className='btn-load'
							onClick={onHandleLoadMore}
						>
							Mở rộng
						</Button>
					</div>
				</div>
			</div>
		</HomeContext.Provider>
	)
}

HomePage.propTypes = {
	// props: PropTypes,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HomePage

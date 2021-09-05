import { Grid, Paper } from '@material-ui/core'
import React, { useContext } from 'react'
import HomeContext from '../../../contexts/home-context'
import CardItem from './card-item/card-item.component'
import './property-suggetion.styles.scss'

function PropertySuggetion() {
	const useHomeContext = useContext(HomeContext)
	const { propSuggetion } = useHomeContext
	return (
		<div className='property-suggetion-container'>
			<h2>Bất động sản dành cho bạn</h2>
			<Grid container spacing={3}>
				{propSuggetion && propSuggetion.length !== 0
					? propSuggetion.map((item, index) => {
							return (
								<Grid
									item
									xs={3}
									key={index}
									className='property-suggetion-card-item'
								>
									<CardItem key={index} item={item} />
								</Grid>
							)
					  })
					: null}
			</Grid>
		</div>
	)
}

export default PropertySuggetion

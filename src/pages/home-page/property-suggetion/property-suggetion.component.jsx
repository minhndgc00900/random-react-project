import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import CardItem from './card-item/card-item.component'
import './property-suggetion.styles.scss'

function PropertySuggetion() {
	return (
		<div className='property-suggetion-container'>
			<h2>Bất động sản dành cho bạn</h2>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<CardItem />
				</Grid>
				<Grid item xs={3}>
					<Paper>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper>xs=3</Paper>
				</Grid>
				<Grid item xs={3}>
					<Paper>xs=3</Paper>
				</Grid>
			</Grid>
		</div>
	)
}

export default PropertySuggetion

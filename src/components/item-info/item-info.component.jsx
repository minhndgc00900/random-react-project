import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

const ItemInfo = (props) => {
	return (
		<div>
			<Grid container spacing={1}>
				<Grid item xs={6}>
					image
				</Grid>
				<Grid item xs={6}>
					info
				</Grid>
			</Grid>
		</div>
	)
}

ItemInfo.propTypes = {
	// props: PropTypes,
}

export default ItemInfo

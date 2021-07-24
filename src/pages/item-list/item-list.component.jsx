import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Grid } from '@material-ui/core'
import ItemInfo from '../../components/item-info/item-info.component'
import MainForm from './main-form/main-form.component'
import RightForm from './right-form/right-form.component'

const ItemList = (props) => {
	return (
		<>
			<Container maxWidth='md'>
				<Grid container spacing={2}>
					<Grid item xs={7}>
						<MainForm />
					</Grid>
					<Grid item xs={5}>
						<RightForm />
					</Grid>
				</Grid>
			</Container>
		</>
	)
}

ItemList.propTypes = {
	// props: PropTypes
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
export default ItemList

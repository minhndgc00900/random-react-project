import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from '../../layouts/counter/counter'

const styles = {
	projectContainer: {
		margin: '20px 0px 20px 100px',
	},
}

const PropertyProject = (props) => {
	return (
		<div style={styles.projectContainer}>
			{' '}
			<Counter
			// value={store.getState()}
			// onIncrement={() => action('INCREMENT')}
			// onDecrement={() => action('DECREMENT')}
			// onIncrementAsync={() => action('INCREMENT_ASYNC')}
			/>
		</div>
	)
}

PropertyProject.propTypes = {
	// props: PropTypes,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyProject)

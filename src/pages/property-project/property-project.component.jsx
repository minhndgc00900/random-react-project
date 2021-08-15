import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from '../../layouts/counter/counter'
import {
	decrementCounter,
	incrementCounter,
	incrementCounterWithTimeout,
} from '../../redux/counter/actions/index'
import { createStructuredSelector } from 'reselect'
import { currentCounterState } from '../../redux/counter/selectors'

const styles = {
	projectContainer: {
		margin: '20px 0px 20px 100px',
	},
}

const PropertyProject = (props) => {
	const { increment, decrement, counterNumber, incrementTimeout } = props
	const [counterValue, setCounterValue] = useState(0)

	useEffect(() => {
		setCounterValue(counterNumber)
	}, [counterNumber])

	const onHandleIncrement = () => {
		increment()
	}

	return (
		<div style={styles.projectContainer}>
			{' '}
			<Counter
				value={counterValue}
				onIncrement={() => onHandleIncrement()}
				onDecrement={() => decrement()}
				onIncrementAsync={() => incrementTimeout()}
			/>
		</div>
	)
}

PropertyProject.propTypes = {
	increment: PropTypes.any,
	decrement: PropTypes.any,
	incrementTimeout: PropTypes.func,
	counterNumber: PropTypes.any,
}

const mapStateToProps = (state) =>
	createStructuredSelector({
		counterNumber: currentCounterState,
	})

const mapDispatchToProps = {
	increment: () => incrementCounter(),
	decrement: () => decrementCounter(),
	incrementTimeout: () => incrementCounterWithTimeout(),
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyProject)

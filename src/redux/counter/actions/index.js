import {
	DECREMENT_SAGA,
	INCREMENT_SAGA,
	INCREMENT_TIMEOUT_SAGA,
} from '../action-types'

export const incrementCounter = () => ({ type: INCREMENT_SAGA })

export const decrementCounter = () => ({ type: DECREMENT_SAGA })

export const incrementCounterWithTimeout = () => ({
	type: INCREMENT_TIMEOUT_SAGA,
})

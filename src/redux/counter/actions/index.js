import { DECREMENT_SAGA, INCREMENT_SAGA } from '../action-types'

export const incrementCounter = () => ({ type: INCREMENT_SAGA })

export const decrementCounter = () => (dispatch) => {
	dispatch({
		type: DECREMENT_SAGA,
	})
}

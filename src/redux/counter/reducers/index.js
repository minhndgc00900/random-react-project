import { INITIAL_STATE } from '../../shared/INIT_STATE'
import { DECREMENT, INCREMENT } from '../action-types'

const counterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			}
		case DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			}
		default:
			return state
	}
}

export default counterReducer

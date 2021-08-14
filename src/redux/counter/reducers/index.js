import { INITIAL_STATE } from '../../shared/INIT_STATE'
import { INCREMENT } from '../action-types'

const counterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			}
		default:
			return state
	}
}

export default counterReducer

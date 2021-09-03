import { INITIAL_STATE } from '../../shared/INIT_STATE'
import { GET_ITEM_LIST, GET_ITEM_LIST_FAILED } from '../action-types'

const propertyForLeaseReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_ITEM_LIST: {
			return {
				...state,
				itemList: action.payload,
			}
		}
		case GET_ITEM_LIST_FAILED: {
			return {
				...state,
				error: action.message,
			}
		}
		default:
			return state
	}
}

export default propertyForLeaseReducer

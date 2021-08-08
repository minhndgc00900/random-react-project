import { INITIAL_STATE } from '../../shared/INIT_STATE'
import { actionType } from '../action-types/index'

const articleReducers = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionType.GET_ATICLES_SUCCESS:
			return {
				...state,
				articles: action.payload,
			}
		case actionType.GET_ATICLES_FAILURE:
			return { ...state, articles: action.payload }
		default:
			return state
	}
}

export default articleReducers

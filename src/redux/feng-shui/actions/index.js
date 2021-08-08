import * as services from '../../../services/Fengshuis/fengshuis.services'
import { actionType } from '../action-types/index'

export const getArticles = () => (dispatch) => {
	services
		.getLists()
		.then((res) => dispatch(getArticlesSuccess(res)))
		.catch((err) => dispatch(getArticlesFailure(err)))
}

const getArticlesSuccess = (res) => (dispatch) => {
	dispatch({
		type: actionType.GET_ATICLES_SUCCESS,
		payload: res.data,
	})
}

const getArticlesFailure = (err) => (dispatch) => {
	dispatch({
		type: actionType.GET_ATICLES_FAILURE,
		payload: err,
	})
}

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as services from '../../../services/Fengshuis/fengshuis.services'
import { actionType } from '../action-types/index'

function* getArticlesWorker(action) {
	try {
		const articleResponse = yield call(services.getLists, action.payload)
		yield put({
			type: actionType.GET_ATICLES_SUCCESS,
			payload: articleResponse.data,
		})
	} catch (err) {
		yield put({
			type: actionType.GET_ATICLES_FAILURE,
			message: err.message,
		})
	}
}

export function* watchGetArticleSaga() {
	yield takeLatest(actionType.GET_ATICLES_SAGA, getArticlesWorker)
}

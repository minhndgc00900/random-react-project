import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {
	GET_ITEM_LIST,
	GET_ITEM_LIST_SAGA,
	GET_ITEM_LIST_FAILED,
} from '../action-types/index'

function* getItemListWorker(action) {
	yield put({
		type: GET_ITEM_LIST,
		payload: action.payload,
	})
}

export function* watchGetItemListSaga() {
	yield takeEvery(GET_ITEM_LIST_SAGA, getItemListWorker)
}

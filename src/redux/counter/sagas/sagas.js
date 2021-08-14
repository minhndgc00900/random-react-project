import { INCREMENT, INCREMENT_SAGA } from '../action-types'
import { all, call, delay, put, takeEvery } from 'redux-saga/effects'

export function* incrementSaga() {
	console.log('worker incrementSaga')
	yield put({ type: INCREMENT })
}

export function* helloSaga() {
	console.log('HELLO_SAGA!')
}

export function* watchIncrementSaga() {
	yield takeEvery(INCREMENT_SAGA, incrementSaga)
}

export function* watchHelloSaga() {
	yield takeEvery('HELLO', helloSaga)
}

export default function* rootSaga() {
	yield all([call(watchIncrementSaga), call(watchHelloSaga)])
}

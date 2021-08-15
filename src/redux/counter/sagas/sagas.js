import {
	DECREMENT,
	DECREMENT_SAGA,
	INCREMENT,
	INCREMENT_SAGA,
	INCREMENT_TIMEOUT_SAGA,
} from '../action-types'
import {
	all,
	call,
	delay,
	put,
	takeEvery,
	takeLatest,
} from 'redux-saga/effects'

export function* incrementSaga() {
	console.log('worker incrementSaga')
	yield put({ type: INCREMENT })
}

export function* incrementSagaTimeoutWorker() {
	yield delay(1000)
	yield put({ type: INCREMENT })
}

export function* decrementSagaWorker() {
	yield put({ type: DECREMENT })
}

export function* helloSaga() {
	console.log('HELLO_SAGA!')
}

export function* watchIncrementSaga() {
	yield takeEvery(INCREMENT_SAGA, incrementSaga)
}

export function* watchIncrementTimeoutSaga() {
	// yield takeEvery(INCREMENT_TIMEOUT_SAGA, incrementSagaTimeoutWorker)
	yield takeLatest(INCREMENT_TIMEOUT_SAGA, incrementSagaTimeoutWorker)
}

export function* watchDecrementSaga() {
	yield takeEvery(DECREMENT_SAGA, decrementSagaWorker)
}

export function* watchHelloSaga() {
	yield takeEvery('HELLO', helloSaga)
}

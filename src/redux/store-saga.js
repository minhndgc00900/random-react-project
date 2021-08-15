// ...
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all, call } from 'redux-saga/effects'
import counterReducer from '../redux/counter/reducers/index'
import {
	watchDecrementSaga,
	watchHelloSaga,
	watchIncrementSaga,
	watchIncrementTimeoutSaga,
} from './counter/sagas/sagas'
import propertyForLeaseReducer from '../redux/property-for-lease/reducers/index'
import { watchGetItemListSaga } from './property-for-lease/sagas'
import { watchGetArticleSaga } from './feng-shui/sagas'
import articleReducers from './feng-shui/reducers/index'

const rootReducer = () =>
	combineReducers({
		counterStore: counterReducer,
		propertyForLeaseStore: propertyForLeaseReducer,
		fengshuiStore: articleReducers,
	})

function* rootSaga() {
	yield all([
		call(watchIncrementSaga),
		call(watchHelloSaga),
		call(watchDecrementSaga),
		call(watchIncrementTimeoutSaga),
		call(watchGetItemListSaga),
		call(watchGetArticleSaga),
	])
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer(), applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

// const action = (type) => store.dispatch({ type })
export default store

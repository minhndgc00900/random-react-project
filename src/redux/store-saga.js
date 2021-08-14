// ...
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../redux/counter/reducers/index'

// ...
import rootSaga from './counter/sagas/sagas'

const rootReducer = () => combineReducers({ counterStore: counterReducer })

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer(), applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

// const action = (type) => store.dispatch({ type })
export default store

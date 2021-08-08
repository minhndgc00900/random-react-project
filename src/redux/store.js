import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import articleReducers from './feng-shui/reducers/index'
import { INITIAL_STATE } from './shared/INIT_STATE'

const rootReducer = combineReducers({
	fengshuiStore: articleReducers,
})

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk))

export default store

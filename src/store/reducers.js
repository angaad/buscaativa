/**
 * @ author: Frederico Ferracini Duarte
 * @ since: 2021-07-23 06:43:47
 */

import { applyMiddleware, combineReducers, createStore } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import appReducer from './reducers/appstate'
import userReducer from './reducers/userstate'
import raceReducer from './reducers/racestate'
import healthReducer from './reducers/healthstate'
import legalReducer from './reducers/legalstate'
import kidsReducer from './reducers/kidsstate'
import ibgeReducer from './reducers/ibgestate'

const reducers = combineReducers({
    appReducer,
    userReducer,
	raceReducer,
	healthReducer,
	legalReducer,
	kidsReducer,
    ibgeReducer,
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

const store =
    applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

export default store

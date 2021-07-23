/**
 * @ author: Frederico Ferracini Duarte
 * @ since: 2021-07-23 06:43:47
 */

import { applyMiddleware, combineReducers, createStore } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import appReducer from './reducers/appstate'

const reducers = combineReducers({
    appReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()

const store =
    applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)

export default store

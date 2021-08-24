/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 22:30:39
 */

import axios from 'axios'
import { RACE_SEARCHED } from '../constants'
import { URL_API } from './urls'

export const raceSearch = _ => (dispatch, getState) => {
    const token = getState().appReducer.token

    const config = {
        method: 'get',
        url: '/api/race',
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
    }

    axios(config)
    .then(resp => dispatch({type: RACE_SEARCHED, payload: resp.data}))
    .catch(console.log)
}

export const raceAdd = race => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'post',
        url: '/api/race',
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: race },
    }

	axios(config)
	.then(_ => dispatch(raceSearch()))
    .catch(console.log)
}

export const raceUpdate = race => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'put',
        url: `/api/race/${race._id}`,
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: race },
    }

	axios(config)
	.then(_ => dispatch(raceSearch()))
    .catch(console.log)
}

export const raceDelete = id => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'delete',
        url: `/api/race/${id}`,
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
    }

	axios(config)
	.then(_ => dispatch(raceSearch()))
    .catch(console.log)
}

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-02 06:59:06
 */

import axios from 'axios'
import { HEALTH_SEARCHED } from '../constants'

const port = process.env.REACT_APP_RESTFUL_PORT ? `:${process.env.REACT_APP_RESTFUL_PORT}` : ''
const uri = `${process.env.REACT_APP_RESTFUL_URL}${port}`

export const healthSearch = _ => (dispatch, getState) => {
    const token = getState().appReducer.token

    const config = {
        method: 'get',
        url: '/api/health',
        baseURL: uri,
        headers: { Authorization: `Bearer ${token}`, },
    }

    axios(config)
    .then(resp => dispatch({type: HEALTH_SEARCHED, payload: resp.data}))
    .catch(console.log)
}

export const healthAdd = health => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'post',
        url: '/api/health',
        baseURL: uri,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: health },
    }

	axios(config)
	.then(_ => dispatch(healthSearch()))
    .catch(console.log)
}

export const healthUpdate = health => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'put',
        url: `/api/health/${health._id}`,
        baseURL: uri,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: health },
    }

	axios(config)
	.then(_ => dispatch(healthSearch()))
    .catch(console.log)
}

export const healthDelete = id => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'delete',
        url: `/api/health/${id}`,
        baseURL: uri,
        headers: { Authorization: `Bearer ${token}`, },
    }

	axios(config)
	.then(_ => dispatch(healthSearch()))
    .catch(console.log)
}

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-02 07:10:01
 */

import axios from 'axios'
import { LEGAL_SEARCHED } from '../constants'
import { URL_API } from './urls'

export const legalSearch = _ => (dispatch, getState) => {
    const token = getState().appReducer.token

    const config = {
        method: 'get',
        url: '/api/destitution',
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
    }

    axios(config)
    .then(resp => dispatch({type: LEGAL_SEARCHED, payload: resp.data}))
    .catch(console.log)
}

export const legalAdd = legal => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'post',
        url: '/api/destitution',
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: legal },
    }

	axios(config)
	.then(_ => dispatch(legalSearch()))
    .catch(console.log)
}

export const legalUpdate = legal => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'put',
        url: `/api/destitution/${legal._id}`,
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: legal },
    }

	axios(config)
	.then(_ => dispatch(legalSearch()))
    .catch(console.log)
}

export const legalDelete = id => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'delete',
        url: `/api/destitution/${id}`,
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
    }

	axios(config)
	.then(_ => dispatch(legalSearch()))
    .catch(console.log)
}

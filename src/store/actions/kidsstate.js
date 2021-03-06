/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 17:52:19
 */

import axios from 'axios'
import { KIDS_SEARCHED, KID_SEARCHED, KID_CLEARED } from '../constants'
import { URL_API } from './urls'

export const kidsSearch = (fields, id) => (dispatch, getState) => {
	const token = getState().appReducer.token
	const url = [
		'/api/kids',
	]

	if (id) {
		url.push(`/${id}`)
	}

	if (fields) {
		url.push(`?fields=${fields}`)
	}

	const config = {
		method: 'get',
		url: url.join(''),
		baseURL: URL_API,
		headers: { Authorization: `Bearer ${token}`, },
	}

	axios(config)
	.then(resp => {
		const type = id ? KID_SEARCHED : KIDS_SEARCHED
		dispatch({type, payload: resp.data})
	})
	.catch(console.log)
}

export const kidAdd = kid => (dispatch, getState) => {
	const token = getState().appReducer.token

	const config = {
		method: 'post',
		url: '/api/kids',
		baseURL: URL_API,
		headers: { Authorization: `Bearer ${token}`, },
		data: { document: kid },
	}

	axios(config)
	.then(_ => dispatch(kidsSearch()))
	.catch(console.log)
}

export const kidUpdate = kid => (dispatch, getState) => {
	const token = getState().appReducer.token

	const config = {
		method: 'put',
		url: `/api/kids/${kid._id}`,
		baseURL: URL_API,
		headers: { Authorization: `Bearer ${token}`, },
		data: { document: kid },
	}

	axios(config)
	.then(_ => dispatch(kidsSearch()))
	.catch(console.log)
}

export const kidDelete = id => (dispatch, getState) => {
	const token = getState().appReducer.token

	const config = {
		method: 'delete',
		url: `/api/kids/${id}`,
		baseURL: URL_API,
		headers: { Authorization: `Bearer ${token}`, },
	}

	axios(config)
	.then(_ => dispatch(kidsSearch()))
	.catch(console.log)
}

export const kidClear = _ => ({type: KID_CLEARED})

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 17:52:19
 */

import axios from 'axios'
import { KIDS_SEARCHED } from '../constants'

const port = process.env.REACT_APP_RESTFUL_PORT ? `:${process.env.REACT_APP_RESTFUL_PORT}` : ''
const uri = `${process.env.REACT_APP_RESTFUL_URL}${port}`

export const kidsSearch = _ => (dispatch, getState) => {
	const token = getState().appReducer.token

	const config = {
		method: 'get',
		url: '/api/kids',
		baseURL: uri,
		headers: { Authorization: `Bearer ${token}`, },
	}

	axios(config)
	.then(resp => dispatch({type: KIDS_SEARCHED, payload: resp.data}))
	.catch(console.log)
}

export const kidAdd = kid => (dispatch, getState) => {
	const token = getState().appReducer.token

	const config = {
		method: 'post',
		url: '/api/kids',
		baseURL: uri,
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
		baseURL: uri,
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
		baseURL: uri,
		headers: { Authorization: `Bearer ${token}`, },
	}

	axios(config)
	.then(_ => dispatch(kidsSearch()))
	.catch(console.log)
}

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 21:12:04
 */

import axios from 'axios'
import shajs from 'sha.js'
import { USER_SEARCHED } from '../constants'
import { URL_API } from './urls'

export const userSearch = _ => (dispatch, getState) => {
    const token = getState().appReducer.token

    const config = {
        method: 'get',
        url: '/api/user',
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
    }

    axios(config)
    .then(resp => dispatch({type: USER_SEARCHED, payload: resp.data}))
    .catch(console.log)
}

export const userAdd = user => (dispatch, getState) => {
    const token = getState().appReducer.token

	user.password = shajs('sha256').update(user.password).digest('hex')

	const config = {
        method: 'post',
        url: '/api/user',
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: user },
    }

	axios(config)
	.then(_ => dispatch(userSearch()))
    .catch(console.log)
}

export const userUpdate = user => (dispatch, getState) => {
    const token = getState().appReducer.token

	if (user.password) user.password = shajs('sha256').update(user.password).digest('hex')

	const config = {
        method: 'put',
        url: `/api/user/${user._id}`,
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
		data: { document: user },
    }

	axios(config)
	.then(_ => dispatch(userSearch()))
    .catch(console.log)
}

export const userDelete = id => (dispatch, getState) => {
    const token = getState().appReducer.token

	const config = {
        method: 'delete',
        url: `/api/user/${id}`,
        baseURL: URL_API,
        headers: { Authorization: `Bearer ${token}`, },
    }

	axios(config)
	.then(_ => dispatch(userSearch()))
    .catch(console.log)
}

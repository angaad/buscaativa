/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 21:12:04
 */

import axios from 'axios'
import { USER_SEARCHED } from '../constants'

const port = process.env.REACT_APP_RESTFUL_PORT ? `:${process.env.REACT_APP_RESTFUL_PORT}` : ''
const uri = `${process.env.REACT_APP_RESTFUL_URL}${port}`

export const userSearch = _ => (dispatch, getState) => {
    const token = getState().appReducer.token
    console.log(token)

    const config = {
        method: 'get',
        url: `${uri}/api/user`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    axios(config)
    .then(resp => dispatch({type: USER_SEARCHED, payload: resp.data}))
    .catch(console.log)
}

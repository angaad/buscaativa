/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-25 18:10:30
 */

import axios from 'axios'
import { LOGEDIN, LOGEDOUT, LOGINERROR } from '../constants'
import { URL_API } from './urls'

export const loginRequest = (user, password) => dispatch => {
    const url = `${URL_API}/login`
    const result = response => {
        let action

        if (response.data.error) {
            action = {
                type: LOGINERROR,
                payload: response.data.error
            }
        } else {
            action = {
                type: LOGEDIN,
                payload: response.data
            }
        }

        dispatch(action)
    }

    axios.post(url, {user, password})
    .then(result)
    .catch(console.log)
}

export const logoutRequest = _ => ({type: LOGEDOUT})

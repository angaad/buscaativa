/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 06:39:57
 */

 import { LOGEDIN, LOGEDOUT, LOGINERROR } from '../constants'
 
const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'yes',
    token: sessionStorage.getItem('token'),
}

const appReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case LOGINERROR: 
            return state
        case LOGEDIN:
            sessionStorage.setItem('isAuthenticated', 'yes')
            sessionStorage.setItem('token', payload.token)

            return {
                ...state,
                isAuthenticated: true,
                token: payload.token,
            }
        case LOGEDOUT:
            sessionStorage.removeItem('isAuthenticated')
            sessionStorage.removeItem('token')

            return {
                ...state,
                isAuthenticated: false,
                token: null,
            }
        default:
            return state
    }
}

export default appReducer

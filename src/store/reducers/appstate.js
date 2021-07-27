/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 06:39:57
 */

 import { LOGEDIN, LOGEDOUT, LOGINERROR } from '../constants'
 
const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'yes',
    token: sessionStorage.getItem('token'),
    user: JSON.parse(sessionStorage.getItem('user')),
    loginError: null
}

const appReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case LOGINERROR: 
            return {...state, loginError: payload}
        case LOGEDIN:
            sessionStorage.setItem('isAuthenticated', 'yes')
            sessionStorage.setItem('token', payload.token)
            sessionStorage.setItem('user', JSON.stringify(payload.user))

            return {
                ...state,
                isAuthenticated: true,
                token: payload.token,
                user: payload.user,
                loginError: null,
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

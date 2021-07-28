/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 21:09:06
 */

import { USER_SEARCHED } from '../constants'

const initialState = {
    users: []
}

const userReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case USER_SEARCHED:
            return {
                ...state,
                users: payload
            }
        default:
            return state
    }
}

export default userReducer

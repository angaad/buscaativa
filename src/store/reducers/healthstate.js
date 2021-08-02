/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-02 06:56:18
 */

import { HEALTH_SEARCHED } from '../constants'

const initialState = {
    healths: []
}

const healthReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case HEALTH_SEARCHED:
            return {
                ...state,
                healths: payload
            }
        default:
            return state
    }
}

export default healthReducer

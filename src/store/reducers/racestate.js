/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 22:29:01
 */

import { RACE_SEARCHED } from '../constants'

const initialState = {
    races: []
}

const raceReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case RACE_SEARCHED:
            return {
                ...state,
                races: payload
            }
        default:
            return state
    }
}

export default raceReducer

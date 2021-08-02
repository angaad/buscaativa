/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-02 07:08:22
 */

import { LEGAL_SEARCHED } from '../constants'

const initialState = {
    legals: []
}

const legalReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case LEGAL_SEARCHED:
            return {
                ...state,
                legals: payload
            }
        default:
            return state
    }
}

export default legalReducer

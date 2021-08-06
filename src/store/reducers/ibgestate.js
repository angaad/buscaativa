/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-06 07:02:04
 */

import { IBGE_UF_SEARCHED } from '../constants'

const ibgeDefault = {
    ufs: []
}

const ibgeReducer = (state = ibgeDefault, action) => {
    const {type, payload} = action

    switch (type) {
        case IBGE_UF_SEARCHED:
            return {
                ...state,
                ufs: payload
            }
        default:
            return state
    }
}

export default ibgeReducer

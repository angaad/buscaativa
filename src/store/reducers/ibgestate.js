/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-06 07:02:04
 */

import { IBGE_UF_SEARCHED, IBGE_CITIES_SEARCHED } from '../constants'

const ibgeDefault = {
    ufs: [],
    cities: [],
}

const ibgeReducer = (state = ibgeDefault, action) => {
    const {type, payload} = action

    switch (type) {
        case IBGE_UF_SEARCHED:
            return {
                ...state,
                ufs: payload
            }
        case IBGE_CITIES_SEARCHED:
            return {
                ...state,
                cities: payload,
            }
        default:
            return state
    }
}

export default ibgeReducer

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-06 07:07:02
 */

import axios from 'axios'
import { IBGE_UF_SEARCHED, IBGE_CITIES_SEARCHED } from '../constants'
import { URL_UF, URL_CITY } from './urls'

export const ibgeUfSearch = _ => dispatch => {
    axios.get(URL_UF)
    .then(resp => {
        const ufs = resp.data

        ufs.sort((a, b) => {
            if (a.sigla < b.sigla) return -1
            if (a.sigla > b.sigla) return 1
            return 0
        })

        dispatch({type: IBGE_UF_SEARCHED, payload: resp.data})
    })
    .catch(console.log)
}

export const ibgeCitySearch = uf => dispatch => {
    axios.get(URL_CITY.replace('%uf%', uf))
    .then(resp => {
        const cities = resp.data

        cities.sort((a, b) => {
            if (a.nome < b.nome) return -1
            if (a.nome > b.nome) return 1
            return 0
        })

        dispatch({type: IBGE_CITIES_SEARCHED, payload: cities})
    })
}

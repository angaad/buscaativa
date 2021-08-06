/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-06 07:07:02
 */

import axios from 'axios'
import { IBGE_UF_SEARCHED } from '../constants'

const UF_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

export const ibgeUfSearch = _ => dispatch => {
    axios.get(UF_URL)
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

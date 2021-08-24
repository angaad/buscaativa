/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-21 07:32:23
 */

const port = process.env.REACT_APP_RESTFUL_PORT ? 
    `:${process.env.REACT_APP_RESTFUL_PORT}` : 
    ''
const ibgeUrl = 'https://servicodados.ibge.gov.br/api'

export const URL_API = `${process.env.REACT_APP_RESTFUL_URL}${port}`
export const URL_UF = `${ibgeUrl}/v1/localidades/estados`
export const URL_CITY = `${ibgeUrl}/v1/localidades/estados/%uf%/municipios`

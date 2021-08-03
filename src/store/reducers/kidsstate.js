/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 17:49:47
 */

import { KIDS_SEARCHED } from '../constants'

const initialState = {
	kids: []
}
 
const kidsReducer = (state = initialState, action) => {
	const {type, payload} = action

	switch (type) {
		case KIDS_SEARCHED:
			return {
				...state,
				kids: payload
			}
		default:
			return state
	}
}

export default kidsReducer

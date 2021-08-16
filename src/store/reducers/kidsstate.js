/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 17:49:47
 */

import { KIDS_SEARCHED, KID_SEARCHED, KID_CLEARED} from '../constants'

const initialState = {
	kids: [],
	kid: null,
}
 
const kidsReducer = (state = initialState, action) => {
	const {type, payload} = action

	switch (type) {
		case KID_SEARCHED: 
			return {
				...state,
				kid: payload,
			}
		case KIDS_SEARCHED:
			return {
				...state,
				kids: payload,
			}
		case KID_CLEARED:
			return {
				...state,
				kid: null,
			}
		default:
			return state
	}
}

export default kidsReducer

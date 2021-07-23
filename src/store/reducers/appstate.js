/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 06:39:57
 */

const initialState = {
    isAuthenticated: sessionStorage.getItem('isAuthenticated') === 'yes',
    token: sessionStorage.getItem('token'),
}

const appReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        default:
            return state
    }
}

export default appReducer

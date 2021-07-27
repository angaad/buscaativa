/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 07:23:47
 * @see https://ui.dev/react-router-v5-protected-routes-authentication/
 */

import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({children, isAuthenticated, ...rest}) => (
    <Route {...rest} render={({ location }) => {
        return isAuthenticated === true
          ? children
          : <Redirect to={{
              pathname: '/login',
              state: { from: location }
            }} />
    }} />  
)

// MARK: - Redux
const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated
})

export default connect(mapStateToProps)(PrivateRoute)

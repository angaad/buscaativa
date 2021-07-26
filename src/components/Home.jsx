/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 20:02:26
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Home = props => (
    <div>
        <h1>Home page</h1>
    </div>
)

// Mark: - Redux
const actions = {
}

const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

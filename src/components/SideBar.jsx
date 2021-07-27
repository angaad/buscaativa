/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 07:09:27
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const SideBar = props => (
    <div>
        SideBar!
    </div>
)

// MARK: - Redux
const actions = {
}
const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated,
    user: state.appReducer.user,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

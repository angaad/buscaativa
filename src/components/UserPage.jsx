/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 21:02:29
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { userSearch } from '../store/actions/userstate'

class UserPage extends Component {
    componentDidMount () {
        this.props.userSearch()
    }

    render () {
        return (
            <div>
                <h1>User Page!</h1>
            </div>
        )
    }
}

// MARK: - Redux
const actions = {
    userSearch
}
const mapStateToProps = state => ({
    users: state.userReducer.users
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)

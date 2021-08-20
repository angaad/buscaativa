/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 07:17:05
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class HomeInternal extends Component {
    render () {
        return (
            <h1>HOME!!!</h1>
        )
    }
}

// MARK: - Redux
const actions = {
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeInternal)


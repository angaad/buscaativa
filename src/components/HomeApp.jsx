/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 07:17:05
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ibgeUfSearch } from '../store/actions/ibgestate'

class HomeInternal extends Component {
    componentDidMount () {
        this.props.ibgeUfSearch()
    }

    render () {
        return (
            <h1>HOME!!!</h1>
        )
    }
}

// MARK: - Redux
const actions = {
    ibgeUfSearch
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeInternal)


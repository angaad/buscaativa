/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 21:02:29
 */

import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { userSearch } from '../store/actions/userstate'

class UserPage extends Component {
    componentDidMount () {
        this.props.userSearch()
    }

    renderRows () {
        const users = this.props.users || []

        return users.map(user => (
            <tr key={user._id}>
                <td>{user.name}</td>
            </tr>
        ))
    }

    render () {
        return (
            <Container>
                Usuários
                <table>
                    <thead>
                        <tr>
                            <th>Usuário</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Container>
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

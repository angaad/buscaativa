/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 07:09:27
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faBaby, faHouseUser }
    from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap'

const SideBar = props => (
    <Nav className='col-md-12 d-none d-md-block bg-light'>
        <Nav.Item>
            <Nav.Link href='/internal/home'>
                <FontAwesomeIcon icon={faHome} />
                <span>&nbsp;&nbsp;Início</span>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/internal/user'>
                <FontAwesomeIcon icon={faUserFriends} />
                <span>&nbsp;&nbsp;Usuários</span>
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/internal/home'>
                <FontAwesomeIcon icon={faBaby} />
                <span>&nbsp;&nbsp;Crianças</span>
            </Nav.Link>
        </Nav.Item>
    </Nav>
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

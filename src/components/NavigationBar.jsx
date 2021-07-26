/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-25 17:53:06
 */

import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logoutRequest } from '../store/actions/appstate'

const NavigationBar = props => (
    <Navbar
        sticky='top'
        className='bg-primary'>
        <LinkContainer to='/'>
            <Navbar.Brand className='font-weight-bold text-light'>
                Busca Ativa
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse className='justify-content-end'>
            <Nav activeKey={window.location.pathname}>
                {props.isAuthenticated ? (
                    <LinkContainer to='/'>
                        <Nav.Link
                            className='text-light'
                            onClick={props.logoutRequest}>
                            Sair</Nav.Link>
                    </LinkContainer>
                ) : (
                    <LinkContainer to='/login'>
                        <Nav.Link className='text-light'>
                            Entrar
                        </Nav.Link>
                    </LinkContainer>
                )}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

// MARK: - Redux
const actions = {
    logoutRequest
}

const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-25 17:53:06
 */

import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { logoutRequest } from '../store/actions/appstate'
import Logo from '../images/logo-angaad-branca.png'

const NavigationBar = props => (
    <Navbar
        sticky='top'
		style={{padding: '0.5em'}}
        className='bg-primary'>
        <LinkContainer to={props.isAuthenticated ? '/internal/home' : '/'}>
            <Navbar.Brand className='font-weight-bold text-light'>
				<img
					className='img-responsive'
					style={{height: '1.5em'}}
					src={Logo}
					alt='Logo' />
				&nbsp;
                <span> Busca Ativa</span>
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse className='justify-content-end'>
            <Nav activeKey={window.location.pathname}>
                {props.isAuthenticated ? (
                    <>
                        <Nav.Item
							className='text-light'
							style={{alignSelf: 'center', marginRight: '1em'}}>
							<FontAwesomeIcon icon={faUser} />
							&nbsp;
                            <span>{props.user.name}</span>
                        </Nav.Item>
                        <LinkContainer to='/'>
                            <Nav.Link
                                className='text-light'
                                onClick={props.logoutRequest}>
                                Sair</Nav.Link>
                        </LinkContainer>
                    </>
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
    logoutRequest,
}

const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated,
    user: state.appReducer.user,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)

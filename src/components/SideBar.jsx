/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 07:09:27
 */

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faBaby, faStethoscope, faBalanceScale,
	faSnowman, faSearch }
    from '@fortawesome/free-solid-svg-icons'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './Sidebar.css'

const SideBar = props => (
    <Nav className='col-md-12 d-none d-md-block bg-light sidebar'>
        <Nav.Item>
			<LinkContainer to='/internal/home'>
				<Nav.Link className='dark'>
					<FontAwesomeIcon icon={faHome} />
					<span>&nbsp;&nbsp;Início</span>
				</Nav.Link>
			</LinkContainer>
        </Nav.Item>
        <Nav.Item>
			<LinkContainer to='/internal/user'>
				<Nav.Link>
					<FontAwesomeIcon icon={faUserFriends} />
					<span>&nbsp;&nbsp;Usuários</span>
				</Nav.Link>
			</LinkContainer>
        </Nav.Item>
		<Nav.Item>
			<LinkContainer to='/internal/races'>
				<Nav.Link>
					<FontAwesomeIcon icon={faSnowman} />
					<span>&nbsp;&nbsp;Raças</span>
				</Nav.Link>
			</LinkContainer>
		</Nav.Item>
		<Nav.Item>
			<LinkContainer to='/internal/legalstatus'>
				<Nav.Link>
					<FontAwesomeIcon icon={faBalanceScale} />
					<span>&nbsp;&nbsp;Destituição</span>
				</Nav.Link>
			</LinkContainer>
		</Nav.Item>
		<Nav.Item>
			<LinkContainer to='/internal/health'>
				<Nav.Link>
					<FontAwesomeIcon icon={faStethoscope} />
					<span>&nbsp;&nbsp;Saúde</span>
				</Nav.Link>
			</LinkContainer>
		</Nav.Item>
        <Nav.Item>
			<LinkContainer to='/internal/kids'>
				<Nav.Link>
					<FontAwesomeIcon icon={faBaby} />
					<span>&nbsp;&nbsp;Cadastro de Crianças / Adolecentes</span>
				</Nav.Link>
			</LinkContainer>
        </Nav.Item>
        <Nav.Item>
			<LinkContainer to='/internal/searchforkids'>
				<Nav.Link>
					<FontAwesomeIcon icon={faSearch} />
					<span>&nbsp;&nbsp;Consulta de Crianças / Adolecentes</span>
				</Nav.Link>
			</LinkContainer>
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

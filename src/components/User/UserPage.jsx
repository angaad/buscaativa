/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 21:02:29
 */

import './UserPage.css'

import React, { Component } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { faEye, faPencilAlt, faTrashAlt, faPlusCircle }
	from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userSearch } from '../../store/actions/userstate'
import UserForm from './UserForm'

const defaultUser = {
	login: '',
	name: '',
	password: null,
	level: '2',
	active: true
}

class UserPage extends Component {
	constructor(props) {
		super(props)

		this.openForm = this.openForm.bind(this)
		this.hideForm = this.hideForm.bind(this)

		this.state = {
			showForm: false,
			user: defaultUser,
			action: null,
		}
	}

    componentDidMount () {
        this.props.userSearch()
    }

	openForm (action, user = defaultUser) {
		this.setState({
			...this.state,
			showForm: true,
			user: user,
			action: action,
		})
	}

	hideForm () {
		this.setState({
			...this.state,
			showForm: false,
		})
	}

	renderRows () {
        const users = this.props.users || []

        return users.map(user => (
            <tr key={user._id} className="d-flex">
                <td className={`col-2 ${user.active ? '' : 'markedAsDone'}`}>
					{user.login.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
				</td>
                <td className={`col-8 ${user.active ? '' : 'markedAsDone'}`}>
					{user.name}
				</td>
				<td className="col-2" style={{textAlign: 'right'}}>
					<Button onClick={_ => this.openForm('R', user)}>
						<FontAwesomeIcon icon={faEye} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('U', user)}>
						<FontAwesomeIcon icon={faPencilAlt} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('D', user)}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</Button>
				</td>
            </tr>
        ))
    }

    render () {
        return (
            <Container>
                <h1>
					<span>Usuários</span>
				</h1>
				<Table striped hover>
                    <thead className="thead-dark">
						<tr className="d-flex">
							<th className="col-2">CPF</th>
                            <th className="col-8">Nome</th>
							<th className="col-2" style={{textAlign: 'right'}}>
								<Button onClick={_ => this.openForm('C')}>
									<FontAwesomeIcon icon={faPlusCircle} />
								</Button>
							</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
				</Table>
				{this.state.showForm ? (
					<UserForm
						show
						onHide={this.hideForm}
						user={this.state.user}
						action={this.state.action} />
				) : (<></>)}
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

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 21:02:29
 */

import React, { Component } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { faEye, faPencilAlt, faTrashAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { userSearch } from '../store/actions/userstate'

class UserPage extends Component {
    componentDidMount () {
        this.props.userSearch()
    }

    renderRows () {
        const users = this.props.users || []

        return users.map(user => (
            <tr key={user._id} class="d-flex">
                <td className="col-2">
					{user.login.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}
				</td>
                <td className="col-8">{user.name}</td>
				<td className="col-2" style={{textAlign: 'right'}}>
					<Button>
						<FontAwesomeIcon icon={faEye} />
					</Button>
					&nbsp;
					<Button>
						<FontAwesomeIcon icon={faPencilAlt} />
					</Button>
					&nbsp;
					<Button>
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
						<tr class="d-flex">
							<th className="col-2">CPF</th>
                            <th className="col-8">Nome</th>
							<th className="col-2" style={{textAlign: 'right'}}>
								<Button>
									<FontAwesomeIcon icon={faPlusCircle} />
								</Button>
							</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
				</Table>
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

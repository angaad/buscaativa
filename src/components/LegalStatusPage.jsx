/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 22:20:29
 */

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencilAlt, faTrashAlt, faPlusCircle }
	from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { legalSearch } from '../store/actions/legalstate'
import LegalStatusForm from './LegalStatusForm'

const defaultLegal = {
	description: '',
	gideline: '',
}

class LegalStatusPage extends Component {
	constructor (props) {
		super(props)

		this.openForm = this.openForm.bind(this)
		this.hideForm = this.hideForm.bind(this)

		this.state = {
			showForm: false,
			legal: defaultLegal,
			action: null,
		}
	}

	componentDidMount () {
		this.props.legalSearch()
	}

	openForm (action, legal = defaultLegal) {
		this.setState({
			...this.state,
			showForm: true,
			legal: legal,
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
		const legals = this.props.legals || []

		return legals.map(legal => (
			<tr key={legal._id} className="d-flex">
				<td className='col-10'>{legal.description}</td>
				<td className="col-2" style={{textAlign: 'right'}}>
					<Button onClick={_ => this.openForm('R', legal)}>
						<FontAwesomeIcon icon={faEye} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('U', legal)}>
						<FontAwesomeIcon icon={faPencilAlt} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('D', legal)}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</Button>
				</td>
			</tr>
		))
	}

	render () {
		return (
			<Container>
				<h1>Destituição</h1>
				<Table striped hover>
					<thead className="thead-dark">
						<tr className="d-flex">
							<th className="col-10">Descrição</th>
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
					<LegalStatusForm
						show
						onHide={this.hideForm}
						legal={this.state.legal}
						action={this.state.action} />
				) : (<></>)}
			</Container>
		)
	}
}

// MARK: - Redux
const actions = {
	legalSearch,
}
const mapStateToProps = state => ({
	legals: state.legalReducer.legals
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LegalStatusPage)

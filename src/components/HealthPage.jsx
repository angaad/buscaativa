/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 22:23:04
 */

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencilAlt, faTrashAlt, faPlusCircle }
	from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { healthSearch } from '../store/actions/healthstate'
import HealthForm from './HealthForm'

const defaultHealth = {
	description: '',
	gideline: '',
}

class HealthPage extends Component {
	constructor (props) {
		super(props)

		this.openForm = this.openForm.bind(this)
		this.hideForm = this.hideForm.bind(this)

		this.state = {
			showForm: false,
			health: defaultHealth,
			action: null,
		}
	}

	componentDidMount () {
		this.props.healthSearch()
	}

	openForm (action, health = defaultHealth) {
		this.setState({
			...this.state,
			showForm: true,
			health: health,
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
		const healths = this.props.healths || []

		return healths.map(health => (
			<tr key={health._id} className="d-flex">
				<td className='col-10'>{health.description}</td>
				<td className="col-2" style={{textAlign: 'right'}}>
					<Button onClick={_ => this.openForm('R', health)}>
						<FontAwesomeIcon icon={faEye} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('U', health)}>
						<FontAwesomeIcon icon={faPencilAlt} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('D', health)}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</Button>
				</td>
			</tr>
		))
	}

	render () {
		return (
			<Container>
				<h1>Saúde</h1>
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
					<HealthForm
						show
						onHide={this.hideForm}
						health={this.state.health}
						action={this.state.action} />
				) : (<></>)}
			</Container>
		)
	}
}

// MARK: - Redux
const actions = {
	healthSearch,
}
const mapStateToProps = state => ({
	healths: state.healthReducer.healths
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HealthPage)

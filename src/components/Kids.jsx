/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 17:45:16
 */

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencilAlt, faTrashAlt, faPlusCircle }
	from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Table } from 'react-bootstrap'

import KidsForm from './KidsForm'
import { kidsSearch } from '../store/actions/kidsstate'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const defaultKid = {
	name: '',
	casenumber: '',
	birthday: '',
	gender: '',
	race: '',
	destitution: '',
	city: '',
	state: '',
	contact: '',
	bio: '',
	health: [],
	brothers: [],
	photo: '',
	video: {
		base64: '',
		type: '',
	},
}

class Kids extends Component {
	constructor (props) {
		super(props)

		this.openForm = this.openForm.bind(this)
		this.hideForm = this.hideForm.bind(this)

		this.state = {
			showForm: false,
			kid: defaultKid,
			action: null,
		}
	}

	componentDidMount() {
		this.props.kidsSearch()
	}

	openForm (action, kid = defaultKid) {
		this.setState({
			...this.state,
			showForm: true,
			kid: kid,
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
		const kids = this.props.kids || []

		return kids.map(kid => (
			<tr key={kid._id} className="d-flex">
				<td className='col-10'>{kid.name}</td>
				<td className="col-2" style={{textAlign: 'right'}}>
					<Button onClick={_ => this.openForm('R', kid)}>
						<FontAwesomeIcon icon={faEye} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('U', kid)}>
						<FontAwesomeIcon icon={faPencilAlt} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('D', kid)}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</Button>
				</td>
			</tr>
		))
	}

	render () {
		return (
			<Container>
				<h1>Crianças / Adolecentes</h1>
				<Table striped hover>
					<thead className="thead-dark">
						<tr className="d-flex">
							<th className="col-10">Nome</th>
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
					<KidsForm
						show
						onHide={this.hideForm}
						kid={this.state.kid}
						action={this.state.action} />
				) : (<></>)}
			</Container>
		)
	}
}

// MARK: - Redux
const actions = {
	kidsSearch
}
const mapStateToProps = state => ({
	kids: state.kidsReducer.kids,
})
const mapDispatchToProps = dispach => bindActionCreators(actions, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(Kids)

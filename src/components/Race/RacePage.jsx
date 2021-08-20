/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-01 22:17:06
 */

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPencilAlt, faTrashAlt, faPlusCircle }
	from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { raceSearch } from '../../store/actions/racestate'
import RaceForm from './RaceForm'

const defaultRace = {
	description: '',
	gideline: '',
}

class RacePage extends Component {
	constructor (props) {
		super(props)

		this.openForm = this.openForm.bind(this)
		this.hideForm = this.hideForm.bind(this)

		this.state = {
			showForm: false,
			race: defaultRace,
			action: null,
		}
	}

	componentDidMount () {
		this.props.raceSearch()
	}

	openForm (action, race = defaultRace) {
		this.setState({
			...this.state,
			showForm: true,
			race: race,
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
		const races = this.props.races || []

		return races.map(race => (
			<tr key={race._id} className="d-flex">
				<td className='col-10'>{race.description}</td>
				<td className="col-2" style={{textAlign: 'right'}}>
					<Button onClick={_ => this.openForm('R', race)}>
						<FontAwesomeIcon icon={faEye} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('U', race)}>
						<FontAwesomeIcon icon={faPencilAlt} />
					</Button>
					&nbsp;
					<Button onClick={_ => this.openForm('D', race)}>
						<FontAwesomeIcon icon={faTrashAlt} />
					</Button>
				</td>
			</tr>
		))
	}

	render () {
		return (
			<Container>
				<h1>Raças</h1>
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
					<RaceForm
						show
						onHide={this.hideForm}
						race={this.state.race}
						action={this.state.action} />
				) : (<></>)}
			</Container>
		)
	}
}

// MARK: - Redux
const actions = {
	raceSearch
}
const mapStateToProps = state => ({
	races: state.raceReducer.races
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RacePage)

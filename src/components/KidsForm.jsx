/**
 * @ author: Frederico Ferracini Duarte
 * @ since: 2021-08-02 20:02:05
 */

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt, faImage } from '@fortawesome/free-solid-svg-icons'
import { Modal, Tabs, Tab, Form, Row, Col, Table, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FileBase64 from 'react-file-base64'

import { CloseButton, DeleteButton, SaveButton, If } from '../templates/Reusables'
import { healthSearch } from '../store/actions/healthstate'
import { legalSearch } from '../store/actions/legalstate'
import { raceSearch } from '../store/actions/racestate'

class KidsForm extends Component {
	constructor (props) {
		super(props)

		this.state = {
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
			brothers: '',
			photo: '',
			video: '',
		}

		this.validForm = this.validForm.bind(this)
		this.handleWithSaveButton = this.handleWithSaveButton.bind(this)
		this.handleWithDeleteButton = this.handleWithDeleteButton.bind(this)
		this.renderTabBasic = this.renderTabBasic.bind(this)
		this.buildRaceField = this.buildRaceField.bind(this)
		this.buildLegalField = this.buildLegalField.bind(this)
		this.renderTabHealth = this.renderTabHealth.bind(this)
		this.renderTabBrothers = this.renderTabBrothers.bind(this)
		this.renderTabPhoto = this.renderTabPhoto.bind(this)
	}

	componentDidMount() {
		this.props.healthSearch()
		this.props.legalSearch()
		this.props.raceSearch()
	}

	validForm () {
		return true
	}

	handleWithSaveButton () {
		const kid = {
		}

		if (this.props.action === 'U') {
			kid._id = this.props.kid._id
			this.props.kidUpdate(kid)
		} else {
			this.props.kidAdd(kid)
		}

		this.props.onHide()
	}

	handleWithDeleteButton () {
		this.props.kidDelete(this.props.kid._id)
		this.props.onHide()
	}

	buildRaceField () {
		const racesOptions = this.props.races.map(race => (
			<option value={race._id}>{race.description}</option>
		))

		return (
			<Form.Group as={Col} controlId='race'>
				<Form.Label>Raça</Form.Label>
				<Form.Control
					as='select'
					defaultValue={this.state.race}
					onChange={e => this.setState({
						...this.state,
						race: e.target.value
					})}>
					<option>Selecione a raça</option>
					{racesOptions}
				</Form.Control>
			</Form.Group>
		)
	}

	buildLegalField () {
		const legalOptions = this.props.legals.map(legal => (
			<option value={legal._id}>{legal.description}</option>
		))

		return (
			<Form.Group as={Col} controlId='destitution'>
				<Form.Label>Destituição</Form.Label>
				<Form.Control
					as='select'
					defaultValue={this.state.destitution}
					onChange={e => this.setState({
						...this.state,
						destitution: e.target.value
					})}>
					<option>Selecione a destituição</option>
					{legalOptions}
				</Form.Control>
			</Form.Group>
		)
	}

	renderTabBasic () {
		return (
			<Tab eventKey='basic' title='Dados Básicos'>
				<Row>
					<Form.Group as={Col} controlId='name'>
						<Form.Label>Nome</Form.Label>
						<Form.Control
							type='text'
							disabled={this.props.action !== 'C'}
							placeholder='Digite o nome'
							value={this.state.name}
							onChange={e => this.setState({
								...this.state,
								name: e.target.value
							})}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId='casenumber'>
						<Form.Label>Processo</Form.Label>
						<Form.Control
							type='text'
							placeholder='Digite o número do processo'
							value={this.state.casenumber}
							onChange={e => this.setState({
								...this.state,
								casenumber: e.target.value
							})}
						/>
					</Form.Group>
				</Row>
				<Row>
					<Form.Group as={Col} controlId='birthday'>
						<Form.Label>Data de nascimento</Form.Label>
						<Form.Control
							type='date'
							placeholder='Digite a data de nascimento'
							value={this.state.birthday}
							onChange={e => this.setState({
								...this.state,
								birthday: e.target.value
							})}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId='gender'>
						<Form.Label>Sexo</Form.Label>
						<Form.Control
							as='select'
							defaultValue={this.state.gender}
							onChange={e => this.setState({
								...this.state,
								gender: e.target.value
							})}>
							{/* <option disabled selected>Selecione o sexo</option> */}
							<option value='F'>Feminino</option>
							<option value='M'>Masculino</option>
						</Form.Control>
					</Form.Group>
				</Row>
				<Row>
					{this.buildRaceField()}
					{this.buildLegalField()}
				</Row>
				<Row>
					<Form.Group as={Col} controlId='city'>
						<Form.Label>Cidade</Form.Label>
						<Form.Control
							type='text'
							placeholder='Digite a cidade'
							value={this.state.city}
							onChange={e => this.setState({
								...this.state,
								city: e.target.value
							})}
						/>
					</Form.Group>
					<Form.Group as={Col} controlId='state'>
						<Form.Label>Estado</Form.Label>
						<Form.Control
							type='text'
							placeholder='Digite o estado'
							value={this.state.state}
							onChange={e => this.setState({
								...this.state,
								state: e.target.value
							})}
						/>
					</Form.Group>
				</Row>
			</Tab>
		)
	}

	renderTabBio () {
		return (
			<Tab eventKey='bio' title='Biografia'>
				<Form.Group controlId='bio'>
					<Form.Label>Biografia</Form.Label>
					<Form.Control
						as="textarea"
						rows={10}
						placeholder="Digite a biografia da criança"
						value={this.state.bio}
						onChange={e => this.setState({
							...this.state,
							bio: e.target.value
						})}
					/>
				</Form.Group>
			</Tab>
		)
	}

	renderTabHealth () {
		const renderHealthRows = _ => {
			const healths = this.state.health || []

			healths.map(health => (
				<tr key={health._id} className="d-flex">
					<td className='col-11'>{health.description}</td>
					<td className='col-1'>
						<Button onClick={_ => {}}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
					</td>
				</tr>
			))
		}

		return (
			<Tab eventKey='health' title='Dados de Saúde'>
				<Table>
					<thead>
						<tr className="d-flex">
							<th className='col-11'>Saúde</th>
							<th className='col-1'>
								<Button onClick={_ => {}}>
									<FontAwesomeIcon icon={faPlusCircle} />
								</Button>
							</th>
						</tr>
					</thead>
					<tbody>
						{renderHealthRows()}
					</tbody>
				</Table>
			</Tab>
		)
	}

	renderTabBrothers () {
		const renderBrotherRows = _ => {
			const brothers = this.state.brother || []

			brothers.map(brother => (
				<tr key={brother._id} className="d-flex">
					<td className='col-11'>{brother.name}</td>
					<td className='col-1'>
						<Button onClick={_ => {}}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
					</td>
				</tr>
			))
		}

		return (
			<Tab eventKey='brothers' title='Irmãos'>
				<Table>
					<thead>
						<tr className="d-flex">
							<th className='col-11'>Irmãos</th>
							<th className='col-1'>
								<Button onClick={_ => {}}>
									<FontAwesomeIcon icon={faPlusCircle} />
								</Button>
							</th>
						</tr>
					</thead>
					<tbody>
						{renderBrotherRows()}
					</tbody>
				</Table>
			</Tab>
		)
	}

	renderTabPhoto () {
		return (
			<Tab eventKey='photo' title='Foto'>
				<Form.Group controlId="formFile">
					<FileBase64
        				multiple={false}
						onDone={ file => 
							this.setState({
								...this.state,
								photo: file.base64
							})
						}
					/>
					<If test={this.state.photo !== ''}>
						<img
							className='img-responsive'
							style={{width: '100%'}}
							src={this.state.photo} alt='foto' />
					</If>
				</Form.Group>
			</Tab>
		)
	}

	renderTabVideo () {
		return (
			<Tab eventKey='video' title='Video'>
				<Form.Group controlId="formFile">
					<FileBase64
        				multiple={false}
						onDone={ file => 
							this.setState({
								...this.state,
								video: file.base64
							})
						}
					/>
					<If test={this.state.video !== ''}>
						<video autoplay controls source={this.state.video}>
							The “video” tag is not supported by your browser.
						</video>
					</If>
				</Form.Group>
			</Tab>
		)
	}

	render () {
		return (
			<Modal
				{...this.props}
				size="lg"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Criança
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Tabs>
							{this.renderTabBasic()}
							{this.renderTabBio()}
							{this.renderTabHealth()}
							{this.renderTabBrothers()}
							{this.renderTabPhoto()}
							{this.renderTabVideo()}
						</Tabs>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<CloseButton onClick={_ => this.props.onHide()} />
					<If test={this.props.action === 'C' || this.props.action === 'U'}>
						<SaveButton onClick={this.handleWithSaveButton}
							disabled={!this.validForm()} />
					</If>
					<If test={this.props.action === 'D'}>
						<DeleteButton onClick={this.handleWithDeleteButton} />
					</If>
				</Modal.Footer>
			</Modal>
		)
	}
}

// MARK: - Redux
const actions = {
	healthSearch,
	legalSearch,
	raceSearch,
}
const mapStateToProps = state => ({
	healths: state.healthReducer.healths,
	legals: state.legalReducer.legals,
	races: state.raceReducer.races,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(KidsForm)
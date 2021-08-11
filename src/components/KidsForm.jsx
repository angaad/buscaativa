/**
 * @ author: Frederico Ferracini Duarte
 * @ since: 2021-08-02 20:02:05
 */

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Modal, Tabs, Tab, Form, Row, Col, Table, Button, FormCheck, } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { CloseButton, DeleteButton, SaveButton, If } from '../templates/Reusables'
import { healthSearch } from '../store/actions/healthstate'
import { legalSearch } from '../store/actions/legalstate'
import { raceSearch } from '../store/actions/racestate'
import { kidAdd, kidUpdate, kidDelete } from '../store/actions/kidsstate'
import UploadImage from '../templates/UploadImage'
import UploadVideo from '../templates/UploadVideo'
import { ibgeCitySearch } from '../store/actions/ibgestate'

class KidsForm extends Component {
	constructor (props) {
		super(props)

		const { kid } = props

		this.state = {
			name: kid.name,
			casenumber: kid.casenumber,
			birthday: kid.birthday.substr(0, 10),
			gender: kid.gender,
			race: kid.race,
			destitution: kid.destitution,
			city: kid.city,
			state: kid.state,
			contact: kid.contact,
			bio: kid.bio,
			health: kid.health,
			brothers: kid.brothers,
			photo: kid.photo,
			video: {
				base64: kid.video.base64,
				type: kid.video.type,
			},
		}

		this.validForm = this.validForm.bind(this)
		this.handleWithSaveButton = this.handleWithSaveButton.bind(this)
		this.handleWithDeleteButton = this.handleWithDeleteButton.bind(this)
		this.renderTabBasic = this.renderTabBasic.bind(this)
		this.buildRaceField = this.buildRaceField.bind(this)
		this.buildLegalField = this.buildLegalField.bind(this)
		this.buildUfField = this.buildUfField.bind(this)
		this.buildCityField = this.buildCityField.bind(this)
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
			name: this.state.name,
			casenumber: this.state.casenumber,
			bio: this.state.bio,
			birthday: this.state.birthday,
			photo: this.state.photo,
			video: {
				base64: this.state.video.base64,
				type: this.state.video.type,
			},
			gender: this.state.gender,
			race: this.state.race,
			health: [],
			brothers: [],
			destitution: this.state.destitution,
			city: this.state.city,
			state: this.state.state,
			contact: this.props.user._id,
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
			<option key={race._id} value={race._id}>{race.description}</option>
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
			<option key={legal._id} value={legal._id}>{legal.description}</option>
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

	buildUfField () {
		const ufOptions = this.props.ufs.map(uf => (
			<option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
		))

		return (
			<Form.Group as={Col} controlId='state'>
				<Form.Label>Estado</Form.Label>
				<Form.Control
					as='select'
					defaultValue={this.state.state}
					onChange={e => {
						this.props.ibgeCitySearch(e.target.value)

						this.setState({
							...this.state,
							state: e.target.value
						})
					}}>
					<option>Selectione o estado</option>
					{ufOptions}
				</Form.Control>
			</Form.Group>
		)
	}

	buildCityField () {
		const cityOptions = this.props.cities.map(city => (
			<option key={city.id} value={city.nome}>{city.nome}</option>
		))

		return (
			<Form.Group as={Col} controlId='city'>
				<Form.Label>Cidade</Form.Label>
				<Form.Control
					as='select'
					defaultValue={this.state.city}
					onChange={e => {
						this.setState({
							...this.state,
							city: e.target.value
						})
					}}>
					<option>Selectione a cidade</option>
					{cityOptions}
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
					{this.buildUfField()}
					{this.buildCityField()}
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
			const healths = this.props.healths || []

			return healths.map(health => (
				<tr key={health._id} className="d-flex">
					<td className='col-1'>
						<Form.Group controlId={health._id}>
							<FormCheck />
						</Form.Group>
					</td>
					<td className='col-4'>{health.description}</td>
					<td className='col-7' style={{fontSize: 'small'}}>
						{health.gideline}
					</td>
				</tr>
			))
		}

		return (
			<Tab eventKey='health' title='Dados de Saúde'>
				<Table>
					<thead>
						<tr className="d-flex">
							<th className='col-1'>&nbsp;</th>
							<th className='col-4'>Saúde</th>
							<th className='col-7'>Instrução</th>
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
					<UploadImage
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
					<UploadVideo
						onDone={ file => 
							this.setState({
								...this.state,
								video: {
									base64: file.base64,
									type: file.type,
								}
							})
						}
					/>
					<If test={this.state.video.base64 !== ''}>
						<video
							width='100%'
							height='500'
							autoPlay
							controls>
  							<source
								src={this.state.video.base64}
								type={this.state.video.type} />
  							Your browser does not support HTML video.
						</video>
					</If>
				</Form.Group>
			</Tab>
		)
	}

	render () {
		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onHide}
				size="lg"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Criança / Adolecente
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
	kidAdd,
	kidDelete,
	kidUpdate,
	ibgeCitySearch,
}
const mapStateToProps = state => ({
	healths: state.healthReducer.healths,
	legals: state.legalReducer.legals,
	races: state.raceReducer.races,
	ufs: state.ibgeReducer.ufs,
	cities: state.ibgeReducer.cities,
	user: state.appReducer.user,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(KidsForm)

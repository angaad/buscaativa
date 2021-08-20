/**
 * @ author: Frederico Ferracini Duarte
 * @ since: 2021-08-02 20:02:05
 */

import React, { Component } from 'react'
import { Modal, Tabs, Tab, Form, } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { CloseButton, DeleteButton, SaveButton, If } from '../../templates/Reusables'
import { kidsSearch, kidAdd, kidUpdate, kidDelete, kidClear } from '../../store/actions/kidsstate'
import KidsFormTabBio from './components/KidsFormTabBio'
import KidsFormTabHealth from './components/KidsFormTabHealth'
import KidsFormTabBasic from './components/KidsFormTabBasic'
import KidsFormTabPhoto from './components/KidsFormTabPhoto'
import KidsFormTabVideo from './components/KidsFormTabVideo'
import KidsFormTabBrothers from './components/KidsFormTabBrothers'

class KidsForm extends Component {
	constructor (props) {
		super(props)

		this.state = {
			refresh: true,
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
			health: '',
			brothers: '',
			photo: '',
			video: {
				base64: '',
				type: '',
			},
		}

		this.validForm = this.validForm.bind(this)
		this.handleWithSaveButton = this.handleWithSaveButton.bind(this)
		this.handleWithDeleteButton = this.handleWithDeleteButton.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	componentDidMount() {
		if (this.props.kidToShow._id) {
			this.props.kidsSearch(null, this.props.kidToShow._id)
		}
	}

	componentWillUnmount() {
		this.props.kidClear()
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

	handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

	render () {
		if (this.props.kid !== null && this.state.refresh) {
			this.setState({
				refresh: false,
				name: this.props.kid.name,
				casenumber: this.props.kid.casenumber,
				birthday: this.props.kid.birthday.substr(0, 10),
				gender: this.props.kid.gender,
				race: this.props.kid.race,
				destitution: this.props.kid.destitution,
				city: this.props.kid.city,
				state: this.props.kid.state,
				contact: this.props.kid.contact,
				bio: this.props.kid.bio,
				health: this.props.kid.health,
				brothers: this.props.kid.brothers,
				photo: this.props.kid.photo,
				video: {
					base64: this.props.kid.video.base64,
					type: this.props.kid.video.type,
				},
			})
		}

		return (
			<Modal
				show={this.props.show}
				onHide={this.props.onHide}
				size="lg"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Criança / Adolescente
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Tabs>
							<Tab eventKey='basic' title='Dados Básicos'>
								<KidsFormTabBasic
									action={this.props.action}
									state={this.state}
									handleChange={this.handleChange} />
							</Tab>
							<Tab eventKey="bio" title="Biografia">
								<KidsFormTabBio
									state={this.state}
									handleChange={this.handleChange} />
							</Tab>
							<Tab eventKey='health' title='Dados de Saúde'>
								<KidsFormTabHealth
									state={this.state}
									handleChange={this.handleChange} />
							</Tab>
							<Tab eventKey='brothers' title='Irmãos'>
								<KidsFormTabBrothers
									state={this.state}
									handleChange={this.handleChange} />
							</Tab>
							<Tab eventKey='photo' title='Foto'>
								<KidsFormTabPhoto
									state={this.state}
									handleChange={this.handleChange} />
							</Tab>
							<Tab eventKey='video' title='Video'>
								<KidsFormTabVideo
									state={this.state}
									handleChange={this.handleChange} />
							</Tab>
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
	kidAdd,
	kidDelete,
	kidUpdate,
	kidsSearch,
	kidClear,
}
const mapStateToProps = state => ({
	kid: state.kidsReducer.kid,
	user: state.appReducer.user,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(KidsForm)

/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-02 07:03:04
 */

import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CloseButton, DeleteButton, SaveButton } from '../templates/Reusables'
import { healthAdd, healthUpdate, healthDelete } from '../store/actions/healthstate'

const HealthForm = props => {
	const [description, setDescription] = useState(props.health.description)
	const [gideline, setGideline] = useState(props.health.gideline)

	const validForm = _ => {
		return true
	}

	const handleWithSaveButton = _ => {
		const health = {
			description: description,
			gideline: gideline,
		}

		if (props.action === 'U') {
			health._id = props.health._id
			props.healthUpdate(health)
		} else {
			props.healthAdd(health)
		}

		props.onHide()
	}

	const handleWithDeleteButton = _ => {
		props.healthDelete(props.health._id)
		props.onHide()
	}

	return (
		<Modal
			{...props}
			size="lg"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Saúde
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group controlId='description'>
						<Form.Label>Descrição</Form.Label>
						<Form.Control
							type="text"
							disabled={props.action !== 'C'}
							placeholder="Digite a descrição"
							value={description}
							onChange={e => setDescription(e.target.value) }
						/>
					</Form.Group>
					<Form.Group controlId='gideline'>
						<Form.Label>Instruções de uso</Form.Label>
						<Form.Control
							as="textarea"
							rows={4}
							disabled={props.action === 'R' || props.action === 'D'}
							placeholder="Digite as instruções para uso"
							value={gideline}
							onChange={e => setGideline(e.target.value) }
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<CloseButton onClick={_ => props.onHide()} />
				{props.action === 'C' || props.action === 'U' ? (
					<SaveButton onClick={handleWithSaveButton} disabled={!validForm()} />
				) : props.action === 'D' ? (
					<DeleteButton onClick={handleWithDeleteButton} />
				) : (<></>)}
			</Modal.Footer>
		</Modal>
	)
}

// MARK: - Redux
const actions = {
	healthAdd,
	healthUpdate,
	healthDelete,
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HealthForm)

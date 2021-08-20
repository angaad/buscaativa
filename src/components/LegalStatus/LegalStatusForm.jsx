/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-02 07:14:00
 */

import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { CloseButton, DeleteButton, SaveButton } from '../../templates/Reusables'
import { legalAdd, legalUpdate, legalDelete } from '../../store/actions/legalstate'

const LegalStatusForm = props => {
	const [description, setDescription] = useState(props.legal.description)
	const [gideline, setGideline] = useState(props.legal.gideline)

	const validForm = _ => {
		return true
	}

	const handleWithSaveButton = _ => {
		const legal = {
			description: description,
			gideline: gideline,
		}

		if (props.action === 'U') {
			legal._id = props.legal._id
			props.legalUpdate(legal)
		} else {
			props.legalAdd(legal)
		}

		props.onHide()
	}

	const handleWithDeleteButton = _ => {
		props.legalDelete(props.legal._id)
		props.onHide()
	}

	return (
		<Modal
			{...props}
			size="lg"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Destituição
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
	legalAdd,
	legalUpdate,
	legalDelete,
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LegalStatusForm)

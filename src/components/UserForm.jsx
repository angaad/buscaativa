/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-29 20:35:13
 */

import React, { useState } from 'react'
import { Form, Modal, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { CloseButton, SaveButton, DeleteButton } from '../templates/Reusables'
import { userAdd, userUpdate, userDelete } from '../store/actions/userstate'

const UserForm = props => {
	const [cpf, setCpf] = useState(props.user.login)
	const [name, setName] = useState(props.user.name)
	const [passwd1, setPasswd1] = useState('')
	const [passwd2, setPasswd2] = useState('')
	const [level, setLevel] = useState(props.user.level)
	const [ativo, setAtivo] = useState(props.user.active)

	const validForm = _ => {
		if (props.action === 'C') {
			return cpf.length > 0 &&
				validarCPF(cpf) &&
				name.length > 0 &&
				passwd1.length > 0 &&
				passwd1 === passwd2
		}

		return false
	}

	const handleWithSaveButton = _ => {
		const user = {
			login: cpf,
			name: name,
			password: passwd1,
			level: level,
			active: ativo
		}

		if (props.action === 'U') {
			delete user.password
			user._id = props.user._id
			props.userUpdate(user)
		} else {
			props.userAdd(user)
		}

		props.onHide()
	}

	const handleWithDeleteButton = _ => {
		props.userDelete(props.user._id)
		props.onHide()
	}

	return (
		<Modal
			{...props}
			size="lg"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Usuário
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Row>
						<Form.Group as={Col} controlId='cpf'>
							<Form.Label>CPF</Form.Label>
							<Form.Control
								type="text"
								disabled={props.action !== 'C'}
								placeholder="Digite o CPF do usuário"
								value={cpf}
								onChange={e => setCpf(e.target.value) }
							/>
						</Form.Group>
						<Form.Group as={Col} controlId='nome'>
							<Form.Label>Nome</Form.Label>
							<Form.Control
								type="text"
								disabled={props.action === 'R' || props.action === 'D'}
								placeholder="Digite o nome do usuário"
								value={name}
								onChange={e => setName(e.target.value) }
							/>
						</Form.Group>
					</Row>
					<Row hidden={props.action !== 'C'}>
						<Form.Group as={Col} controlId='senha1'>
							<Form.Label>Senha</Form.Label>
							<Form.Control
								type="password"
								placeholder="Digite uma senha para o usuário"
								value={passwd1}
								onChange={e => setPasswd1(e.target.value) }
							/>
						</Form.Group>
						<Form.Group as={Col} controlId='senha2'>
							<Form.Label>Confirmação da senha</Form.Label>
							<Form.Control
								type="password"
								placeholder="Digite novamente a senha"
								value={passwd2}
								onChange={e => setPasswd2(e.target.value) }
							/>
						</Form.Group>
					</Row>
					<Row>
						<Form.Group as={Col} controlId='level'>
							<Form.Label>Nível do usuário</Form.Label>
							<Form.Control
								as='select'
								disabled={props.action === 'R' || props.action === 'D'}
								onChange={e => setLevel(e.target.value)}
								defaultValue={level}>
								<option value='0'>Admnistrador</option>
								<option value='1'>Técnico</option>
								<option value='2'>Usuário</option>
							</Form.Control>
						</Form.Group>
						<Form.Group as={Col} controlId='ativo'>
							<Form.Label>Usuário ativo</Form.Label>
							<Form.Check
								type='checkbox'
								label='&nbsp;&nbsp;Habilitado?'
								disabled={props.action === 'R' || props.action === 'D'}
								checked={ativo}
								onChange={_ => setAtivo(!ativo)}
							/>
						</Form.Group>
					</Row>
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

function validarCPF (cpf) {
	cpf = cpf.replace(/[^\d]+/g, '')

	if (cpf.length !== 11 ||
		cpf === "00000000000" ||
		cpf === "11111111111" ||
		cpf === "22222222222" ||
		cpf === "33333333333" ||
		cpf === "44444444444" ||
		cpf === "55555555555" ||
		cpf === "66666666666" ||
		cpf === "77777777777" ||
		cpf === "88888888888" ||
		cpf === "99999999999")
		return false

	let sum = cpf.split('')
		.reduce((a, v, i) => a + (i < 9 ? parseInt(v) * (10 - i) : 0), 0)

	let rev = 11 - (sum % 11)
	if (rev === 10 || rev === 11) rev = 0
	if (rev !== parseInt(cpf.charAt(9))) return false
	
	sum = cpf.split('')
		.reduce((a, v, i) => a + (i < 10 ? parseInt(v) * (11 - i) : 0), 0)

	rev = 11 - (sum % 11)	
	if (rev === 10 || rev === 11) rev = 0
	if (rev !== parseInt(cpf.charAt(10))) return false

	return true
}

// MARK: - Redux
const actions = {
	userAdd,
	userUpdate,
	userDelete,
}
const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)

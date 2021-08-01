/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-23 06:33:30
 */

import React, { useState } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Button, Container } from "react-bootstrap"
import { Redirect } from 'react-router'
import shajs from 'sha.js'
import Logo from '../images/logo-angaad-250.png'

import './Login.css'

import { loginRequest } from '../store/actions/appstate'

const Login = props => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const validateForm = _ => {
        return user.length > 0 && password.length > 0
    }

    const handleSubmit = event => {
        event.preventDefault()

        const encrypted = shajs('sha256').update(password).digest('hex')

        props.loginRequest(user, encrypted)
    }

    return (
        <Container  className="Login">
			<div style={{textAlign: 'center'}}>
				<img src={Logo} alt='Logo' />
			</div>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="user">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Digite seu usuário"
                        value={user}
                        onChange={e => setUser(e.target.value) }
                    />
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={e => setPassword(e.target.value) }
                    />
                </Form.Group>
                <div>
                    {props.loginError ? (
                        <span>Erro: {props.loginError}</span>
                    ) : (
                        <span>&nbsp;</span>
                    )}
                </div>
                <br />
                <Button
                    variant="primary"
                    type="submit"
                    disabled={!validateForm()}>
                    Entrar
                </Button>
            </Form>
            {props.isAuthenticated ? (
                <Redirect to="/internal/home" />
            ) : ( <span /> )}
        </Container>
    )
}

// MARK: - Redux
const actions = {
    loginRequest,
}
const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated,
    loginError: state.appReducer.loginError,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

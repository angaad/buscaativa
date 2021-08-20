/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-20 18:41:13
 */

import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CityField from '../../../templates/CityField'
import LegalField from '../../../templates/LegalField'
import RaceField from '../../../templates/RaceField'
import UfField from '../../../templates/UfField'

const KidsFormTabBasic = props => (
    <Container>
        <Row>
            <Form.Group as={Col} controlId='name'>
                <Form.Label>Nome</Form.Label>
                <Form.Control
                    name='name'
                    type='text'
                    disabled={props.action !== 'C'}
                    placeholder='Digite o nome'
                    value={props.state.name}
                    onChange={props.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} controlId='casenumber'>
                <Form.Label>Processo</Form.Label>
                <Form.Control
                    name='casenumber'
                    type='text'
                    placeholder='Digite o número do processo'
                    value={props.state.casenumber}
                    onChange={props.handleChange}
                />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group as={Col} controlId='birthday'>
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control
                    name='birthday'
                    type='date'
                    placeholder='Digite a data de nascimento'
                    value={props.state.birthday}
                    onChange={props.handleChange}
                />
            </Form.Group>
            <Form.Group as={Col} controlId='gender'>
                <Form.Label>Sexo</Form.Label>
                <Form.Control
                    name='gender'
                    as='select'
                    defaultValue={props.state.gender}
                    onChange={props.handleChange}>
                    {/* <option disabled selected>Selecione o sexo</option> */}
                    <option value='F'>Feminino</option>
                    <option value='M'>Masculino</option>
                </Form.Control>
            </Form.Group>
        </Row>
        <Row>
            <RaceField
                race={props.state.race}
                onChange={props.handleChange}
            />
            <LegalField
                destitution={props.state.destitution}
                onChange={props.handleChange}
            />
        </Row>
        <Row>
            <UfField
                state={props.state.state}
                onChange={props.handleChange}
            />
            <CityField
                city={props.state.city}
                onChange={props.handleChange}
            />
        </Row>
    </Container>
)

export default KidsFormTabBasic

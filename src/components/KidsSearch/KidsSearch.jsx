/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-28 08:17:10
 */

import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const KidsSearch = props => (
    <Container>
        <h1>Pesquisa</h1>
        <Row>
            <Form.Group as={Col} controlId='state'>
                <Form.Label>Estado</Form.Label>
                <Form.Control
                    name='state'
                    as='select'
                    >
                    <option value='XX'>Indiferente</option>
                </Form.Control>
            </Form.Group>
            <Col>Cidade</Col>
            <Col>Raça</Col>
            <Col>Sexo</Col>
            <Col>Saúde</Col>
            <Col>Idade</Col>
        </Row>
    </Container>
)

// MARK - Redux
const actions = {
	KidsSearch
}
const mapStateToProps = state => ({
	kids: state.kidsReducer.kids,
})
const mapDispatchToProps = dispach => bindActionCreators(actions, dispach)

export default connect(mapStateToProps, mapDispatchToProps)(KidsSearch)

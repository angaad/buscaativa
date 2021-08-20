/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-20 06:45:21
 */

import React from 'react'
import { Form } from 'react-bootstrap'

const KidsFormTabBio = props => (
    <Form.Group controlId='bio'>
        <Form.Label>Biografia</Form.Label>
        <Form.Control
            name='bio'
            as='textarea'
            rows={10}
            placeholder='Digite a biografia da criança'
            value={props.state.bio}
            onChange={props.handleChange}
        />
    </Form.Group>
)

export default KidsFormTabBio

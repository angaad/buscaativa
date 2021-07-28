/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-27 07:17:05
 */

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from './SideBar'

const HomeInternal = props => (
    <Container fluid>
        <Row>
            <Col xs={2}>
                <SideBar />
            </Col>
            <Col xs={10}>
                <h1>HOME!!!</h1>
            </Col>
        </Row>
    </Container>
)

export default HomeInternal

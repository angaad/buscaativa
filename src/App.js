/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-22 22:00:57
 */

import React from 'react'
import { connect } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'

import SideBar from './components/SideBar'
import NavigationBar from './components/NavigationBar'
import Routes from './Routes'
import { If } from './templates/Reusables'

const App = ({ isAuthenticated }) => (
    <div>
        <NavigationBar />
		<Container fluid>
            <If test={isAuthenticated}>
                <Row>
                    <Col xs={2} style={{paddingLeft: 0}}>
                        <SideBar />
                    </Col>
                    <Col xs={10}>
                        <Routes />
                    </Col>
                </Row>
            </If>
            <If test={!isAuthenticated}>
                <Row>
                    <Routes />
                </Row>
            </If>
		</Container>    
    </div>
)

// MARK: - Redux
const mapStateToProps = state => ({
    isAuthenticated: state.appReducer.isAuthenticated,
})
export default connect(mapStateToProps)(App)

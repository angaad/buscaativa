/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-19 06:54:35
 */

import React, { Component } from 'react'
import { Form, Col, } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { raceSearch } from '../store/actions/racestate'

class RaceField extends Component  {

	componentDidMount() {
		this.props.raceSearch()
	}

    render () {
        const racesOptions = this.props.races.map(race => (
            <option 
                key={race._id} 
                selected={race._id === this.props.race}
                value={race._id}>
                {race.description}
            </option>
        ))

        return (
            <Form.Group as={Col} controlId='race'>
                <Form.Label>Raça</Form.Label>
                <Form.Control
                    name='race'
                    as='select'
                    defaultValue={this.props.race}
                    onChange={this.props.onChange}>
                    <option>Selecione a raça</option>
                    {racesOptions}
                </Form.Control>
            </Form.Group>
        )
    }
}

// MARK: - Redux
const actions = {
	raceSearch,
}
const mapStateToProps = state => ({
	races: state.raceReducer.races,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RaceField)

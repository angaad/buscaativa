/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-19 07:13:37
 */

import React, { Component } from 'react'
import { Form, Col, } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { legalSearch } from '../store/actions/legalstate'

class RaceField extends Component  {

	componentDidMount() {
		this.props.legalSearch()
	}

    render () {
        const legalsOptions = this.props.legals.map(legal => (
            <option 
                key={legal._id} 
                selected={legal._id === this.props.destitution}
                value={legal._id}>
                {legal.description}
            </option>
        ))

        return (
            <Form.Group as={Col} controlId='destitution'>
                <Form.Label>Destituição</Form.Label>
                <Form.Control
                    name='destitution'
                    as='select'
                    defaultValue={this.props.destitution}
                    onChange={this.props.onChange}>
                    <option>Selecione a destituição</option>
                    {legalsOptions}
                </Form.Control>
            </Form.Group>
        )
    }
}

// MARK: - Redux
const actions = {
	legalSearch,
}
const mapStateToProps = state => ({
	legals: state.legalReducer.legals,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(RaceField)

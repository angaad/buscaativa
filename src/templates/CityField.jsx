/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-20 06:14:40
 */

import React, { Component } from 'react'
import { Col, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class CityField extends Component {
    render () {
        const cityOptions = this.props.cities.map(city => (
			<option
				key={city.id}
				selected={city.nome === this.props.city}
				value={city.nome}>
				{city.nome}
			</option>
		))

        return (
            <Form.Group as={Col} controlId='city'>
				<Form.Label>Cidade</Form.Label>
				<Form.Control
					name='city'
					as='select'
					defaultValue={this.props.city}
					onChange={this.props.onChange}>
					<option>Selectione a cidade</option>
					{cityOptions}
				</Form.Control>
			</Form.Group>
        )
    }
}

// MARK: - Redux
const actions = {
}
const mapStateToProps = state => ({
    cities: state.ibgeReducer.cities,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CityField)

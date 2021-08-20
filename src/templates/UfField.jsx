/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-19 07:20:28
 */

import React, { Component } from 'react'
import { Col, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ibgeUfSearch, ibgeCitySearch } from '../store/actions/ibgestate'

class UfField extends Component {
    componentDidMount () {
        this.props.ibgeUfSearch()
    }

    render () {
        const ufOptions = this.props.ufs.map(uf => (
			<option
				key={uf.id}
				selected={uf.sigla === this.props.state}
				value={uf.sigla}>
				{uf.sigla}
			</option>
		))

		this.props.ibgeCitySearch(this.props.state)

        return (
            <Form.Group as={Col} controlId='state'>
				<Form.Label>Estado</Form.Label>
				<Form.Control
					name='state'
					as='select'
					defaultValue={this.props.state}
					onChange={e => {
						this.props.ibgeCitySearch(e.target.value)
                        this.props.onChange(e)
					}}>
					<option>Selectione o estado</option>
					{ufOptions}
				</Form.Control>
			</Form.Group>
        )
    }
}

// MARK: - Redux
const actions = {
    ibgeUfSearch,
    ibgeCitySearch,
}
const mapStateToProps = state => ({
    ufs: state.ibgeReducer.ufs,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UfField)

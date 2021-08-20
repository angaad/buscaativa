/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-20 18:31:15
 */

import React, { Component } from 'react'
import { Form, FormCheck, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { healthSearch } from '../../../store/actions/healthstate'

class KidsFormTabHealth extends Component {
	componentDidMount() {
		this.props.healthSearch()
    }

    render () {
        const renderHealthRows = _ => {
			const healths = this.props.healths || []

			return healths.map(health => (
				<tr key={health._id} className="d-flex">
					<td className='col-1'>
						<Form.Group controlId={health._id}>
							<FormCheck />
						</Form.Group>
					</td>
					<td className='col-4'>{health.description}</td>
					<td className='col-7' style={{fontSize: 'small'}}>
						{health.gideline}
					</td>
				</tr>
			))
		}

		return (
            <Table>
                <thead>
                    <tr className="d-flex">
                        <th className='col-1'>&nbsp;</th>
                        <th className='col-4'>Saúde</th>
                        <th className='col-7'>Instrução</th>
                    </tr>
                </thead>
                <tbody>
                    {renderHealthRows()}
                </tbody>
            </Table>
		)
    }
}

// MARK: - Redux
const actions = {
	healthSearch,
}
const mapStateToProps = state => ({
	healths: state.healthReducer.healths,
})
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(KidsFormTabHealth)

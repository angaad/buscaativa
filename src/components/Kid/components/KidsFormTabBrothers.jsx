import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Table, Button, } from 'react-bootstrap'

class KidsFormTabBrothers extends Component {
    render () {
        const renderBrotherRows = _ => {
			const brothers = this.props.state.brother || []

			brothers.map(brother => (
				<tr key={brother._id} className="d-flex">
					<td className='col-11'>{brother.name}</td>
					<td className='col-1'>
						<Button onClick={_ => {}}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
					</td>
				</tr>
			))
		}

		return (
			<Table>
				<thead>
					<tr className="d-flex">
						<th className='col-11'>Irmãos</th>
						<th className='col-1'>
							<Button onClick={_ => {}}>
								<FontAwesomeIcon icon={faPlusCircle} />
							</Button>
						</th>
					</tr>
				</thead>
				<tbody>
					{renderBrotherRows()}
				</tbody>
			</Table>
		)
    }
}

export default KidsFormTabBrothers

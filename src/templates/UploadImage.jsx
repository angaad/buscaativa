/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-03 22:05:44
 */

import { faImage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, FormFile, Row } from 'react-bootstrap'

const UploadImage = props => {
	const onDone = props.onDone || (_ => {})
	const hiddenFileInput = React.useRef(null)

	const handleChange = e => {
		const file = e.target.files[0]

		if (! file.type.includes('image')) {
			alert('Selecione um arquivo do tipo imagem.')
		} else {
			const reader = new FileReader()

			reader.readAsDataURL(file)

			reader.onload = () => {
				const info = {
				  name: file.name,
				  type: file.type,
				  size: Math.round(file.size / 1000) + ' kB',
				  base64: reader.result,
				  file: file,
				}

				onDone(info)
			}
		}
	}

	return (
		<Row style={{textAlign: 'center'}}>
			<Button onClick={e => hiddenFileInput.current.click()}>
				<FontAwesomeIcon icon={faImage} size='2x' />
			</Button>
			<FormFile
				name={props.name}
				ref={hiddenFileInput}
				hidden={true}
				onChange={handleChange}
			/>
		</Row>
	)
}

export default UploadImage

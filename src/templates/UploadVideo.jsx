/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-04 06:26:18
 */

import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, FormFile, Row } from 'react-bootstrap'

const UploadVideo = props => {
	const onDone = props.onDone || (_ => {})
	const hiddenFileInput = React.useRef(null)

	const handleChange = e => {
		const file = e.target.files[0]

		if (! file.type.includes('video')) {
			alert('Selecione um arquivo do tipo vídeo.')
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
				<FontAwesomeIcon icon={faVideo} size='2x' />
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

export default UploadVideo

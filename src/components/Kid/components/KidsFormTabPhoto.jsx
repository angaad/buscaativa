/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-20 18:57:11
 */

import React from 'react'
import { Form } from 'react-bootstrap'
import { If } from '../../../templates/Reusables'
import UploadImage from '../../../templates/UploadImage'

const KidsFormTabPhoto = props => (
    <Form.Group controlId='formFile'>
        <UploadImage
            name='photo'
            onDone={file => props.handleChange({
                target: {
                    name: 'photo',
                    value: file.base64,
                }
            })}
        />
        <If test={props.state.photo !== ''}>
            <img
                className='img-responsive'
                style={{width: '100%'}}
                src={props.state.photo} alt='foto' />
        </If>
    </Form.Group>
)

export default KidsFormTabPhoto

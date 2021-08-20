/**
 * @author Frederico Ferracini Duarte
 * @since 2021-08-20 19:05:16
 */

import React from 'react'
import { Form } from 'react-bootstrap'
import { If } from '../../../templates/Reusables'
import UploadVideo from '../../../templates/UploadVideo'

const KidsFormTabVideo = props => (
    <Form.Group controlId="formFile">
        <UploadVideo
            name='video'
            onDone={ file => props.handleChange({
                target: {
                    name: 'video',
                    value: {
                        base64: file.base64,
                        type: file.type,
                    },
                }
            })}
        />
        <If test={props.state.video.base64 !== ''}>
            <video
                width='100%'
                height='500'
                autoPlay
                controls>
                <source
                    src={props.state.video.base64}
                    type={props.state.video.type} />
                Your browser does not support HTML video.
            </video>
        </If>
    </Form.Group>
)

export default KidsFormTabVideo

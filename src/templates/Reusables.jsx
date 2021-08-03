/**
 * @author Frederico Ferracini Duarte
 * @since 2021-07-30 07:16:36
 */

import React from 'react'
import { Button } from 'react-bootstrap'

export const CloseButton = props => (
	<Button {...props} variant='secondary'>
		Fechar
	</Button>
)

export const SaveButton = props => (
	<Button {...props} variant='primary'>
		Salvar
	</Button>
)

export const DeleteButton = props => (
	<Button {...props} variant='danger'>
		Excluir
	</Button>
)

export const If = props => {
	if (props.test) {
		return props.children
	} else {
		return false
	}
}

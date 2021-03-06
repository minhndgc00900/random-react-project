import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@material-ui/core'

export const Textbox = (props) => {
	const { onChange, value, fullWidth = true, placeholder } = props

	return (
		<TextField
			placeholder={placeholder}
			variant='outlined'
			fullWidth={fullWidth}
			value={value}
			onChange={onChange}
			{...props}
		/>
	)
}

Textbox.propTypes = {}

export default Textbox

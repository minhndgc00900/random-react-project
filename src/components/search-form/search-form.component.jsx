import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Textbox from '../text-box/text-box.component'
import useStyles from './search-form.styles'
import { choices } from '../../data/search-choice'

function SearchForm(props) {
	const classes = useStyles()
	const [keywords, setKeywords] = useState('')
	const [choice, setChoice] = useState('EUR')

	const onChangeKeywords = (event) => {
		setKeywords(event.target.value)
	}

	const handleChangeChoice = (event) => {
		setChoice(event.target.value)
	}

	return (
		<>
			<Grid container spacing={0} direction='column' alignItems='center'>
				<Grid item xs={12}>
					<Grid container spacing={5}>
						<Grid item xs={6}>
							<Textbox
								className={classes.tbxKeyword}
								placeholder={'Nhập từ khóa để tìm theo cụm từ'}
								value={keywords}
								onChange={onChangeKeywords}
							/>
						</Grid>
						<Grid item xs={6}>
							<Textbox
								select
								value={choice}
								className={classes.tbxChoice}
								onChange={handleChangeChoice}
								SelectProps={{
									native: true,
								}}
							>
								{choices.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</Textbox>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}

SearchForm.propTypes = {}

export default SearchForm

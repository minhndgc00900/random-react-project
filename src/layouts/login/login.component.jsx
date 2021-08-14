import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import React, { useEffect, useState } from 'react'
import useStyles from './login.styles'
import VisibilityIcon from '@material-ui/icons/Visibility'
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'
import * as services from '../../services/Users/users.services'
import axios from 'axios'
import { setUserSession } from '../../utils/common'
import Textbox from '../../components/text-box/text-box.component'

function LoginForm(props) {
	const { open, handleCloseLogin } = props
	const classes = useStyles()
	const handleClose = () => handleCloseLogin()
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const onChangeUsername = (event) => {
		setUserName(event.target.value)
	}
	const onChangePassword = (event) => {
		setPassword(event.target.value)
	}

	const [isValid, setIsValid] = useState(false)

	useEffect(() => {
		if (userName && password) {
			setIsValid(true)
		}
	}, [userName, password])

	const onSubmit = () => {
		services
			.signIn({
				username: userName,
				password: password,
			})
			.then((res) => {
				if (res) {
					setUserSession(res?.token, res?.user)
					setUserName('')
					setPassword('')
					handleClose()
				}
			})
	}

	return (
		<>
			<Dialog
				open={open}
				className={classes.dialogContainer}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<h1 className={classes.loginTitle}>Đăng Nhập</h1>
				<DialogActions className={classes.dialog}>
					<form className={classes.root} noValidate autoComplete='off'>
						<div className={classes.textfieldContainer}>
							<Textbox
								placeholder='Tên đăng nhập/Email'
								value={userName}
								className={classes.textfieldLayout}
								onChange={onChangeUsername}
								InputProps={{
									startAdornment: <PersonIcon />,
								}}
							/>
						</div>

						<div className={classes.textfieldContainer}>
							<Textbox
								placeholder='Mật khẩu'
								value={password}
								type='password'
								onChange={onChangePassword}
								className={classes.textfieldLayout}
								InputProps={{
									startAdornment: <LockIcon />,
									endAdornment: <VisibilityIcon />,
								}}
							/>
						</div>
						<div className={classes.btnContainer}>
							<Button
								variant='contained'
								size='large'
								color='primary'
								disabled={!isValid ? true : false}
								onClick={onSubmit}
								className={classes.btnLogin}
							>
								Đăng Nhập
							</Button>
						</div>
					</form>
				</DialogActions>
			</Dialog>
		</>
	)
}

LoginForm.propTypes = {}

export default LoginForm

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import LockIcon from '@material-ui/icons/Lock'
import PersonIcon from '@material-ui/icons/Person'
import VisibilityIcon from '@material-ui/icons/Visibility'
import React, { useEffect, useState } from 'react'
import Textbox from '../../components/text-box/text-box.component'
import * as services from '../../services/Users/users.services'
import { setUserSession } from '../../utils/common'
import useStyles from './login.styles'
import './s-login.styles.scss'

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
				className='dialog-container'
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<h1 className='login-title'>Đăng Nhập</h1>
				<DialogActions className={classes.dialog}>
					<form className='root' noValidate autoComplete='off'>
						<div className='textfield-container'>
							<Textbox
								placeholder='Tên đăng nhập/Email'
								value={userName}
								className='username-field'
								onChange={onChangeUsername}
								InputProps={{
									startAdornment: <PersonIcon />,
								}}
							/>
						</div>

						<div className='textfield-container'>
							<Textbox
								placeholder='Mật khẩu'
								value={password}
								type='password'
								onChange={onChangePassword}
								className='password-field'
								InputProps={{
									startAdornment: <LockIcon />,
									endAdornment: <VisibilityIcon />,
								}}
							/>
						</div>
						<div className='btn-container'>
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

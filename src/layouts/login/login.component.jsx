import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import LockIcon from '@material-ui/icons/Lock'
import PersonIcon from '@material-ui/icons/Person'
import VisibilityIcon from '@material-ui/icons/Visibility'
import React, { useEffect, useRef, useState } from 'react'
import Textbox from '../../components/text-box/text-box.component'
import * as services from '../../services/Users/users.services'
import { setUserSession } from '../../utils/common'
import useStyles from './login.styles'
import './s-login.styles.scss'

function LoginForm(props) {
	const { open, handleCloseLogin } = props
	const classes = useStyles()
	const handleClose = () => handleCloseLogin()
	const [loginInfo, setLoginInfo] = useState({
		userName: '',
		password: '',
	})
	const referenceLogin = useRef({
		userName: '',
		password: '',
	})

	const onChangeLoginInfo = (event) => {
		const loginInfoTemp = JSON.parse(JSON.stringify(loginInfo))
		referenceLogin.current[event.target.name] = event.target.value
		loginInfoTemp[event.target.name] = event.target.value
		setLoginInfo(loginInfoTemp)
	}

	const [isValid, setIsValid] = useState(false)

	useEffect(() => {
		if (loginInfo.userName !== '' && loginInfo.password !== '') {
			setIsValid(true)
		}
	}, [loginInfo])

	const onSubmit = () => {
		services
			.signIn({
				username: loginInfo.userName,
				password: loginInfo.password,
			})
			.then((res) => {
				if (res) {
					setUserSession(res?.token, res?.user)
					setLoginInfo({
						userName: '',
						password: '',
					})
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
								value={referenceLogin.current.userName}
								className='username-field'
								name='userName'
								onChange={onChangeLoginInfo}
								InputProps={{
									startAdornment: <PersonIcon />,
								}}
							/>
						</div>

						<div className='textfield-container'>
							<Textbox
								placeholder='Mật khẩu'
								value={referenceLogin.current.password}
								type='password'
								name='password'
								onChange={onChangeLoginInfo}
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

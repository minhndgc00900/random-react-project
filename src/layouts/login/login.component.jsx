import { TextField } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import React from 'react'
import useStyles from './login.styles'
import VisibilityIcon from '@material-ui/icons/Visibility'
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'

function LoginForm(props) {
	const { open, handleCloseLogin } = props
	const classes = useStyles()
	const handleClose = () => handleCloseLogin()

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
							<TextField
								id='outlined-read-only-input'
								placeholder='Tên đăng nhập/Email'
								variant='outlined'
								fullWidth={true}
								className={classes.textfieldLayout}
								InputProps={{
									startAdornment: <PersonIcon />,
								}}
							/>
						</div>

						<div className={classes.textfieldContainer}>
							<TextField
								id='outlined-read-only-input'
								placeholder='Mật khẩu'
								variant='outlined'
								fullWidth={true}
								type='password'
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
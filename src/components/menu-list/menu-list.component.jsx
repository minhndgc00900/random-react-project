import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useRef } from 'react'
import {
	Avatar,
	Button,
	ClickAwayListener,
	Grow,
	MenuItem,
	MenuList,
	Paper,
	Popper,
} from '@material-ui/core'
import useStyles from './menu-list.styles'

function MenuListComponent(props) {
	const { userName, handleLogout } = props
	const [open, setOpen] = useState(false)
	const anchorRef = useRef(null)
	const classes = useStyles()

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}

		setOpen(false)
	}

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const handleListKeyDown = (event) => {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		}
	}

	return (
		<>
			<Button
				ref={anchorRef}
				aria-controls={open ? 'menu-list-grow' : undefined}
				aria-haspopup='true'
				className={classes.btnUser}
				onClick={handleToggle}
			>
				<Avatar className={classes.avatar}>M</Avatar>
				<span>{userName}</span>
			</Button>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom' ? 'center top' : 'center bottom',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id='menu-list-grow'
									onKeyDown={handleListKeyDown}
								>
									<MenuItem onClick={handleClose}>Profile</MenuItem>
									<MenuItem onClick={handleClose}>My account</MenuItem>
									<MenuItem onClick={handleLogout}>Logout</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</>
	)
}

MenuListComponent.propTypes = {
	userName: PropTypes.string,
	handleLogout: PropTypes.func,
}

export default MenuListComponent

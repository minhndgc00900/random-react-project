import { Button, Grid, Link, Toolbar, Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import { ReactComponent as ReactLogo } from 'public/bds_logo.svg'
import React, { useState } from 'react'
import { Link as LinkRRD } from 'react-router-dom'
import MenuListComponent from '../../components/menu-list/menu-list.component'
import LoginForm from '../login/login.component'
import useStyles from './header.styles'

const Header = (props) => {
	const classes = useStyles()
	const [openLogin, setOpenLogin] = useState(false)

	const handleClickOpenLogin = () => {
		setOpenLogin(true)
	}

	const handleCloseLogin = () => {
		setOpenLogin(false)
	}

	return (
		<>
			<LoginForm open={openLogin} handleCloseLogin={handleCloseLogin} />
			{/* <ReactLogo /> */}
			<AppBar className={classes.headerContainer} color='transparent'>
				<Toolbar>
					<Grid container className={classes.root} spacing={0}>
						<Grid item xs={1}>
							<ReactLogo />
						</Grid>
						<Grid item xs={7}>
							<ul className={classes.menuContainer}>
								<li>
									<Link color='initial' component='button'>
										<Typography className={classes.fontMenu}>
											Nhà đất bán
										</Typography>
									</Link>
								</li>
								<li>
									<Link
										color='initial'
										component={LinkRRD}
										to={'/nha-dat-cho-thue'}
									>
										<Typography className={classes.fontMenu}>
											Nhà đất cho thuê
										</Typography>
									</Link>
								</li>
								<li>
									<Link color='initial' component='button'>
										<Typography className={classes.fontMenu}>Dự án</Typography>
									</Link>
								</li>
								<li>
									<Link color='initial' component='button'>
										<Typography className={classes.fontMenu}>
											Cần mua - Cần thuê
										</Typography>
									</Link>
								</li>
								<li>
									<Link color='initial' component='button'>
										<Typography className={classes.fontMenu}>
											Tin tức
										</Typography>
									</Link>
								</li>
								<li>
									<Link color='initial' component='button'>
										<Typography className={classes.fontMenu}>
											Nội - Ngoại thất
										</Typography>
									</Link>
								</li>
								<li>
									<Link color='initial' component='button'>
										<Typography className={classes.fontMenu}>
											Phong thủy
										</Typography>
									</Link>
								</li>
								<li>
									<Link color='initial' component='button'>
										<Typography className={classes.fontMenu}>
											Danh bạ
										</Typography>
									</Link>
								</li>
							</ul>
						</Grid>
						<Grid item xs={4}>
							<ul className={classes.btnMenuContainer}>
								<li>
									<Button>
										<FavoriteBorderOutlinedIcon />
									</Button>
								</li>
								<li>
									<Button onClick={handleClickOpenLogin}>
										<Typography className={classes.fontMenu}>
											Đăng Nhập
										</Typography>
									</Button>
								</li>
								<li>
									{/* <Button>
										<Typography className={classes.fontMenu}>
											Đăng Ký
										</Typography>
									</Button> */}
									<MenuListComponent />
								</li>
								<li>
									<Button>
										<Typography className={classes.fontMenu}>
											Đăng Tin
										</Typography>
									</Button>
								</li>
							</ul>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	)
}

Header.propTypes = {
	// props: PropTypes,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { ReactComponent as ReactLogo } from 'public/bds_logo.svg'
import useStyles from './header.styles'
import {
	Button,
	Grid,
	Link,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@material-ui/core'
import * as ROUTES from '../../constants/index'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import { useHistory } from 'react-router-dom'

const Header = (props) => {
	let history = useHistory()
	const classes = useStyles()
	return (
		<>
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
										onClick={() => {
											history.push('/nha-dat-cho-thue')
										}}
										color='initial'
										component='button'
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
									<Button>
										<Typography className={classes.fontMenu}>
											Đăng Nhập
										</Typography>
									</Button>
								</li>
								<li>
									<Button>
										<Typography className={classes.fontMenu}>
											Đăng Ký
										</Typography>
									</Button>
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

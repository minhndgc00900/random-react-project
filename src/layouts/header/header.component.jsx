import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactLogo from '../../../public/bds_logo.svg'
import useStyles from './header.styles'

const Header = (props) => {
	const classes = useStyles()
	return (
		<div className={classes.headerContainer}>
			<ReactLogo />
		</div>
	)
}

Header.propTypes = {
	// props: PropTypes,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
export default Header

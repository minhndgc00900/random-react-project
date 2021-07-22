import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../../layouts/header/header.component'
import useStyles from './home-page.styles'

const HomePage = (props) => {
	const classes = useStyles()

	return <div className={classes.homepageContainer}>HomePage</div>
}

HomePage.propTypes = {
	// props: PropTypes,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HomePage

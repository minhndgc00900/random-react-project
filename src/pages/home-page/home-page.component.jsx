import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../../layouts/header/header.component'

const HomePage = (props) => {
	return (
		<>
			<div>
				<Header />
			</div>
			<div>HomePage</div>
		</>
	)
}

HomePage.propTypes = {
	// props: PropTypes,
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export default HomePage

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ItemList = (props) => {
	return (
		<div>
			<p>item list page</p>
		</div>
	)
}

ItemList.propTypes = {
	// props: PropTypes
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
export default ItemList

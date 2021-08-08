/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getArticles } from '../../redux/feng-shui/actions'
import { listItemSelect } from '../../redux/feng-shui/selectors'
import { createStructuredSelector } from 'reselect'
import SearchForm from '../../components/search-form/search-form.component'

const FengShui = (props) => {
	const { fetchList, listData } = props

	useEffect(() => {
		fetchList()
	}, [])

	useEffect(() => {
		if (listData) {
			console.log('listData', listData)
		}
	}, [listData])

	return (
		<>
			<SearchForm />
		</>
	)
}

FengShui.propTypes = {
	fetchList: PropTypes.any,
	listData: PropTypes.any,
}

// const mapStateToProps = (state) => ({
// 	listData: listItemSelect(state),
// })

const mapStateToProps = createStructuredSelector({
	listData: listItemSelect,
})

const mapDispatchToProps = {
	fetchList: () => getArticles(),
}

export default connect(mapStateToProps, mapDispatchToProps)(FengShui)

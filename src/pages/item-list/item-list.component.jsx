import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Grid } from '@material-ui/core'
import MainForm from './main-form/main-form.component'
import RightForm from './right-form/right-form.component'
import ArticleContext from '../../contexts/article-context'
import { mockData } from '../../data/items'
import { getItemList } from '../../redux/property-for-lease/actions'
import { createStructuredSelector } from 'reselect'
import { itemListState } from '../../redux/property-for-lease/selectors'

const ItemList = (props) => {
	const { fetchItemList, itemListData } = props
	const [articles, setArticles] = useState([])

	useEffect(() => {
		fetchItemList(mockData)
	}, [])

	useEffect(() => {
		setArticles(itemListData)
	}, [itemListData])

	return (
		<>
			<ArticleContext.Provider value={{ articles: articles }}>
				<Container maxWidth='md'>
					<Grid container spacing={2}>
						<Grid item xs={9}>
							<MainForm />
						</Grid>
						<Grid item xs={3}>
							<RightForm />
						</Grid>
					</Grid>
				</Container>
			</ArticleContext.Provider>
		</>
	)
}

ItemList.propTypes = {
	fetchItemList: PropTypes.any,
}
const mapStateToProps = createStructuredSelector({
	itemListData: itemListState,
})

const mapDispatchToProps = {
	fetchItemList: (param) => getItemList(param),
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)

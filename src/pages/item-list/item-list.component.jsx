import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Grid } from '@material-ui/core'
import ItemInfo from '../../components/item-info/item-info.component'
import MainForm from './main-form/main-form.component'
import RightForm from './right-form/right-form.component'
import ArticleContext from '../../contexts/article-context'
import { mockData } from '../../data/items'

const ItemList = (props) => {
	const [articles, setArticles] = useState(mockData)

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
	// props: PropTypes
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

// export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
export default ItemList

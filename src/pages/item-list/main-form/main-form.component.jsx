import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import ItemInfo from '../../../components/item-info/item-info.component'
import ArticleContext from '../../../contexts/article-context'

function MainForm(props) {
	const { articles } = useContext(ArticleContext)

	const getListArticle = (articles) => {
		return articles.map((it) => <ItemInfo article={it} />)
	}

	return (
		<>
			{getListArticle(articles)}
			{/* <ItemInfo /> */}
		</>
	)
}

MainForm.propTypes = {}

export default MainForm

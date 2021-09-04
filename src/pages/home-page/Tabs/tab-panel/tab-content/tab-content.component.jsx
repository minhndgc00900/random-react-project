/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import React, { useState } from 'react'
import './tab-content.styles.scss'

function TabContent({ content }) {
	const [indexNumber, setIndexNumber] = useState(0)

	const onHandleShowImageNews = (index) => {
		setIndexNumber(index)
	}

	return (
		<>
			<Grid spacing={2} container>
				<Grid item xs={7}>
					{content && content.contents.length !== 0 ? (
						<>
							<img
								className='img-news'
								src={content.contents[indexNumber].img}
								alt={content.contents[indexNumber].alt}
							/>
							<a src='*' className='text-title-news'>
								{content.contents[indexNumber].title}
							</a>
						</>
					) : null}
				</Grid>
				<Grid item xs={5} className='list-news'>
					<List className='list-new-item'>
						{content.contents.map((it, index) => {
							return (
								<>
									<ListItem key={index}>
										<ListItemText
											key={index}
											primary={it.title}
											onMouseEnter={(event) => onHandleShowImageNews(index)}
										/>
									</ListItem>
									{index + 1 !== content.contents.length && (
										<Divider className='divider-br' />
									)}
								</>
							)
						})}
					</List>
				</Grid>
			</Grid>
		</>
	)
}

export default TabContent

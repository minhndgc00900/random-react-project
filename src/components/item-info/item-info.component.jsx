import { Button, Grid, Link } from '@material-ui/core'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined'
import React from 'react'
import { Link as LinkRRD } from 'react-router-dom'
import useStyles from './item-info.styles'

const ItemInfo = (props) => {
	const { article } = props
	const classes = useStyles()
	return (
		<Grid className={classes.gridContainer} container>
			<Grid item xs={4}>
				<img
					className={classes.imgSize}
					src={article?.images[0]}
					alt='Girl in a jacket'
				/>
			</Grid>
			<Grid className={classes.infoContainer} item xs={8}>
				<div>
					<Link
						component={LinkRRD}
						className={classes.customisedLink}
						to={'/xyz'}
						underline='none'
					>
						<span>{article?.title}</span>
					</Link>
				</div>
				<div>
					<span>{`${article?.price} tỷ`}</span>{' '}
					<span className={classes.dot}>.</span>{' '}
					<span>{`${article?.area} m2`}</span>
				</div>
				<div>
					<span>{article?.location}</span>
				</div>
				<div>
					<span className={classes.description}>{article?.description}</span>
				</div>
				<Grid className={classes.bottomInfo} container spacing={2}>
					<Grid item xs={3}>
						<span>{`Hôm nay`}</span>
					</Grid>
					<Grid item xs={3}>
						<span>Minh Nguyen</span>
					</Grid>
					<Grid item xs={5}>
						<Button variant='contained' color='primary' size='small'>
							{article?.phone}
						</Button>
					</Grid>
					<Grid item xs={1}>
						<FavoriteBorderOutlinedIcon />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

ItemInfo.propTypes = {
	// props: PropTypes,
}

export default ItemInfo

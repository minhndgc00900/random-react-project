import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumbs, Container, Link, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import useStyles from './breadcrumbs.styles'

function BreadcrumbsUI(props) {
	const {
		history,
		location: { pathname },
	} = props

	const handleClick = (routeTo) => {
		if (routeTo) {
			history.push(routeTo)
		}
	}

	const pathnames = pathname.split('/').filter((x) => x)

	const classes = useStyles()
	return (
		<Container
			className={`${classes.breadcrumbsContainer} ${
				pathnames.length === 0 ? classes.hideBreadcrumb : ''
			}`}
			maxWidth='md'
		>
			<Breadcrumbs>
				{pathnames.length > 0 ? (
					<Link color='inherit' href='/' onClick={() => history.push('/')}>
						Home
					</Link>
				) : (
					<Typography>Home</Typography>
				)}
				{pathnames.map((name, index) => {
					const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
					const isLast = index === pathnames.length - 1
					return isLast ? (
						<Link color='inherit' onClick={() => handleClick(routeTo)}>
							{name}
						</Link>
					) : (
						<Typography>{name}</Typography>
					)
				})}
			</Breadcrumbs>
		</Container>
	)
}

BreadcrumbsUI.propTypes = {
	history: PropTypes.any,
	pathname: PropTypes.any,
}

export default withRouter(BreadcrumbsUI)

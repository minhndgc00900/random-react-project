import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getToken } from '../../utils/common'

function PrivateRoute(props) {
	const { component, path, exact } = props
	const isLoggedIn = getToken()
	return isLoggedIn ? (
		<Route component={component} path={path} exact={exact} />
	) : (
		<Redirect to='/' />
	)
}

PrivateRoute.propTypes = {}

export default PrivateRoute

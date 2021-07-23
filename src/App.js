import { Container, Toolbar } from '@material-ui/core'
import { Suspense } from 'react'
import { lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import * as ROUTES from './constants'
import Header from './layouts/header/header.component'

function App() {
	const HomePage = lazy(() => import('./pages/home-page/home-page.component'))
	const PropertyForLease = lazy(() =>
		import('./pages/item-list/item-list.component')
	)

	return (
		<>
			<Router>
				<>
					<Header />
				</>
				<Container>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path={ROUTES.home} component={HomePage} />
							<Route
								exact
								path={ROUTES.propertyForLease}
								component={PropertyForLease}
							/>
						</Switch>
					</Suspense>
				</Container>
			</Router>
		</>
	)
}

export default App

import { Container, Toolbar } from '@material-ui/core'
import { Suspense } from 'react'
import { lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import * as ROUTES from './constants'
import Header from './layouts/header/header.component'
import BreadcrumbsUI from './components/breadcrumbs/breadcrumbs.component'
import Footer from './layouts/footer/footer.component'
import PrivateRoute from './components/auth/private-route.component'

function App() {
	const HomePage = lazy(() => import('./pages/home-page/home-page.component'))
	const PropertyForLease = lazy(() =>
		import('./pages/item-list/item-list.component')
	)
	const PropertyDetail = lazy(() =>
		import('./pages/property-item/property-item.component')
	)
	const fengShui = lazy(() => import('./pages/feng-shui/feng-shui.component'))

	return (
		<>
			<Router>
				<Header />
				<BreadcrumbsUI />
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path={ROUTES.home} component={HomePage} />
						<Route
							exact
							path={ROUTES.propertyForLease}
							component={PropertyForLease}
						/>
						<Route exact path={ROUTES.itemDetail} component={PropertyDetail} />
						<PrivateRoute
							path={ROUTES.fengShui}
							component={fengShui}
							exact={true}
						/>
					</Switch>
				</Suspense>
				<Footer />
			</Router>
		</>
	)
}

export default App

import { Suspense } from 'react'
import { lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
	const HomePage = lazy(() => import('./pages/home-page/home-page.component'))

	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path='/' component={HomePage} />
				</Switch>
			</Suspense>
		</Router>
	)
}

export default App

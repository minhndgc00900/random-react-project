import { Suspense } from 'react'
import { lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './layouts/header/header.component'

function App() {
	const HomePage = lazy(() => import('./pages/home-page/home-page.component'))

	return (
		<>
			<>
				<Header />
			</>
			<div className='main-body'>
				<Router>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>
							<Route exact path='/' component={HomePage} />
						</Switch>
					</Suspense>
				</Router>
			</div>
		</>
	)
}

export default App

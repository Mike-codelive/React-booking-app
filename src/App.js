import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { useThemeToggle } from './context/theme_toggle'

import {
	Home,
	SingleProduct,
	Cart,
	Checkout,
	Error,
	About,
	Products,
	PrivateRoute,
	AuthWrapper,
} from './pages'

function App() {
	const { isLightThemeActive } = useThemeToggle()

	return (
		<AuthWrapper>
			<Router>
				<div className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
					<Navbar />
					<Sidebar />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/about'>
							<About />
						</Route>
						<Route exact path='/cart'>
							<Cart />
						</Route>
						<Route exact path='/products'>
							<Products />
						</Route>
						<Route exact path='/products/:id' children={<SingleProduct />} />
						<PrivateRoute exact path='/checkout'>
							<Checkout />
						</PrivateRoute >
						<Route path='*'>
							<Error />
						</Route>
					</Switch>
					<Footer />
				</div >
			</Router>
		</AuthWrapper>
	)

}

export default App

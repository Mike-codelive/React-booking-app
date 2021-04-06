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
} from './pages'

function App() {
	const { isLightThemeActive } = useThemeToggle();
	return (
		<Router>
			<div className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
				<Navbar />
				<Sidebar />
				<Switch>
					<Route exact path='/' render={Home} />
					<Route exact path='/about'>
						<About />
					</Route>
					<Route exact path='/cart' render={Cart} />
					<Route exact path='/products' render={Products} />
					<Route exact path='/products/:id' children={<SingleProduct />} />
					<PrivateRoute exact path='/checkout' render={Checkout} />
					<Route path='*'>
						<Error />
					</Route>
				</Switch>
				<Footer />
			</div >
		</Router>
	)

}

export default App

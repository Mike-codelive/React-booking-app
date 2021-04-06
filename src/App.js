import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

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
	return (
		<Router>
			<Navbar />
			<Sidebar />
			<Switch>
				<Route exact path='/' render={Home} />
				{/* <Route exact path='/about' render={About} /> */}
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
		</Router>
	)

}

export default App

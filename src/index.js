import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { ThemeToggler } from './context/theme_toggle'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
  <Auth0Provider
    domain='dev-7evc8ptf.us.auth0.com'
    clientId='Wo3OqIevYwWSEVvVDp3ra6m1jgcfOHUU'
    // domain={process.env.REACT_APP_AUTH_DOMAIN}
    // clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <ThemeToggler>
            <CartProvider>
              <App />
            </CartProvider>
          </ThemeToggler>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
  , document.getElementById('root'))

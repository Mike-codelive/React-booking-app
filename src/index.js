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
  <ProductsProvider>
    <FilterProvider>
      <ThemeToggler>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeToggler>
    </FilterProvider>
  </ProductsProvider>
  , document.getElementById('root'))

import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
// import { Link } from 'react-router-dom'
import { CartContent, PageHero } from '../components'
import EmptyCartPage from './EmptyCartPage'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <EmptyCartPage />
    )
  }
  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page theme-background'>
        <CartContent />
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.main`
  padding-top: 5rem;
  padding-bottom: 5rem;
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage

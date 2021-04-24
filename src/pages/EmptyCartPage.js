import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { emptyCart } from '../assets'
import { PageHero } from '../components'

const EmptyCartPage = () => {

  return (
    <Wrapper>
      <PageHero title='cart' />
      <main className='page-400 theme-background'>
        <img src={emptyCart}></img>
        <p className='theme-text-dark'>Sorry Your Cart Is Empty</p>
        <Link to='/products' className='cta-btn'>
          <span>Go to Shop</span>
        </Link>
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.page-400 {
  height: calc(100vh - 10rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    height: 10rem;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 2rem;
  }
}
`

export default EmptyCartPage

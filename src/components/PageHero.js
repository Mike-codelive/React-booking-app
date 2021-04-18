import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({ title, product }) => {

  return (
    <Wrapper className='theme-background theme-text-dark'>
      <div className='max-w-center about__center-content'>
        <h3>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'> / Products</Link>} / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 4rem;
  border-bottom: 1px solid var(--light-grey-color, #EAEEF3);

  .about__link {
    padding-right: 20px;
    :after {
      position: absolute;
      content: '';
      top: 50%;
      margin-top: -2px;
      right: -2px;
      width: 4px;
      height: 4px;
      background: var(--light-grey-color, #EAEEF3);
      z-index: 1;
    }
  }
  h3 {
    position: relative;
    font-size: 13px;
    display: inline-block;
    font-weight: normal;
    a {
      /* padding-left: 20px; */
      font-weight: bold;
    }
  }
  .about__center-content {
    padding-left: 2rem;
    padding-top: 2rem;
  }
`

export default PageHero

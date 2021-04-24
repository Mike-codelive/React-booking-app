import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { heroBcg } from '../assets'


const Hero = () => {
  return (
    <Wrapper className='img-center'>
      <div className='banner'>
        <h1 className='banner-text'>Looking for Your next Furnishing</h1>
        <Link to='/products' className='cta-btn'>
          <span>Apart Store</span>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  background-image: url(${heroBcg});
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .banner {
    text-align: center;
  }
  .banner-text {
    color: var(--static-white, #ffffff);
    font-size: 2rem;
    padding: 0 15px;
    margin-bottom: 2rem;
  }
  
  @media screen and (min-width: 700px) {
    height: calc(100vh - 5rem);
    .banner-text {
    font-size: 3.5rem;
    }
  }
`

export default Hero

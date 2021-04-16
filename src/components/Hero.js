import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { heroBcg } from '../assets'


const Hero = () => {
  return (
    <Wrapper className='img-center'>
      <div className='banner'>
        <h1 className='banner-text'>Looking a Hostel for Your next Trip</h1>
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
  .cta-btn {
    position: relative;
    padding: 10px 20px;
    background-color: var(--primary-blue, #2c98f0);
    color: var(--static-white, #ffffff);
    border-radius: 3px;
        span {
          position: relative;
          z-index: 5;
        }
        &:hover:before {
          height: 100%;
        }
        &:hover span {
          color: var(--static-dark, #121212);
        }
        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 0;
          width: 100%;
          background-color: #fff;
          border-radius: 3px;
          transition: height 0.2s;
          z-index: 0;
        }    
  }
  @media screen and (min-width: 700px) {
    height: calc(100vh - 5rem);
    .banner-text {
    font-size: 3.5rem;
    }
  }
`

export default Hero

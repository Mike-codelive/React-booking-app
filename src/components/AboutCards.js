import React from 'react'
import styled from 'styled-components'
import { useThemeToggle } from '../context/theme_toggle';

const AboutCards = () => {
  const { isLightThemeActive } = useThemeToggle();

  return (
    <Wrapper className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
      <div className='about__cards'>
        <div className='about__cards-single'>
          <div className='about__cards-single-side about__cards-single-side-front'>
            <h4 className='about__cards-single-side-front-total'>100+</h4>
            <p className='about__cards-single-side-front-target'>partner</p>
          </div>
          <div className='about__cards-single-side about__cards-single-side-end'>
            <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
            neque sem pretium metus, quis mollis nisl nunc et massa.
            </p>
          </div>
        </div>
        <div className='about__cards-single'>
          <div className='about__cards-single-side about__cards-single-side-front'>
            <h4 className='about__cards-single-side-front-total'>2k+</h4>
            <p className='about__cards-single-side-front-target'>properties</p>
          </div>
          <div className='about__cards-single-side about__cards-single-side-end'>
            <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
            neque sem pretium metus, quis mollis nisl nunc et massa.
            </p>
          </div>
        </div>
        <div className='about__cards-single'>
          <div className='about__cards-single-side about__cards-single-side-front'>
            <h4 className='about__cards-single-side-front-total'>300+</h4>
            <p className='about__cards-single-side-front-target'>destination</p>
          </div>
          <div className='about__cards-single-side about__cards-single-side-end'>
            <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
            neque sem pretium metus, quis mollis nisl nunc et massa.
            </p>
          </div>
        </div>
        <div className='about__cards-single'>
          <div className='about__cards-single-side about__cards-single-side-front'>
            <h4 className='about__cards-single-side-front-total'>4k+</h4>
            <p className='about__cards-single-side-front-target'>booking</p>
          </div>
          <div className='about__cards-single-side about__cards-single-side-end'>
            <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
            neque sem pretium metus, quis mollis nisl nunc et massa.
            </p>
          </div>
        </div>
      </div>
      <div className='about__cards-leyend'>
        <h4 >"Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl nunc et massa. Nam
dapibus nisl vitae elit fringilla rutrum."</h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  .about__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &-single {
      flex: 0 0 100%;
      margin-top: 30px;
      @media screen and (min-width: 760px) {
        flex: 0 0 calc(50% - 30px);
      }
      @media screen and (min-width: 1130px) {
        flex: 0 0 calc(25% - 30px);
      }
      height: 176px; 
      min-width: 260px;
      position: relative;
      &:hover .about__cards-single-side-front {
        transform: rotateY(180deg);
      }
      &:hover .about__cards-single-side-end {
        transform: rotateY(0deg);
      }
      &-side {
        border: 4px solid var(--primary-blue, #2c98f0);
        transition: transform .8s ease;
        position: absolute;
        backface-visibility: hidden;
        height: 100%;
		  	width: 100%;
        &-front {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          color: var(--primary-dark, #121212);
          &-total {
            font-size: 2rem;
          }
        }
        &-end {
          background-color: var(--primary-blue, #2c98f0);
          color: var(--static-white, #ffffff);
          text-align: left;
          padding: 1rem;
          transform: rotateY(180deg);
        }
      }
    }
  }
  .about__cards-leyend {
    padding: 0 15px;
    font-size: 20px;
    margin-top: 3rem;
    line-height: 40px;
    text-align: center;
    @media screen and (min-width: 760px) {
      padding: 0 150px;
    }
    color: var(--primary-dark, #121212);
  }
`

export default AboutCards
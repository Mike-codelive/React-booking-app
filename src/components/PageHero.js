import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useThemeToggle } from '../context/theme_toggle';

const PageHero = ({ title }) => {
  const { isLightThemeActive } = useThemeToggle();

  return (
    <Wrapper className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
      <div className='max-w-center about__center-content'>
        <h3 className='about__link'>
          <Link to='/' >Home</Link>
        </h3>
        <h3>{title}</h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--primary-light);
  width: 100%;
  height: 4rem;
  color: var(--primary-dark);
  transition: var(--theme-transition);
  transition-property: var(--theme-transition-props);
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
    :last-child {
      padding-left: 20px;
      font-weight: normal;
      /* color: var(--grey-color, #5E6D77); */
    }
  }
  .about__center-content {
    padding-left: 2rem;
    padding-top: 2rem;
  }
`

export default PageHero

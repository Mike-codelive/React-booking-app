import React from 'react'
import styled from 'styled-components'
import error from '../assets/404.svg'
import { useThemeToggle } from '../context/theme_toggle'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  const { isLightThemeActive } = useThemeToggle();

  return (
    <Wrapper className={`${isLightThemeActive ? 'light-theme page-100' : 'dark-theme page-100'}`}>
      <section>
        {/* <h1>404</h1> */}
        <img src={error} className='error-img' alt='404 error'></img>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background-color: var(--primary-light);
  transition: var(--theme-transition);
  transition-property: var(--theme-transition-props);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .error-img {
    width: 10rem;
    margin-bottom: 2rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
    color: var(--primary-dark);
    transition: var(--theme-transition);
    transition-property: var(--theme-transition-props);
  }
  .btn {
  text-transform: uppercase;
  background: var(--primary-blue);
  color: var(--static-white);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  border-color: transparent;
}
`

export default ErrorPage

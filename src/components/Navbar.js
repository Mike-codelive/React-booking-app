import React from 'react'
import styled from 'styled-components'
// import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useThemeToggle } from '../context/theme_toggle'
import { useUserContext } from '../context/user_context'

const Nav = () => {
  const { openSidebar } = useProductsContext();
  const { changeTheme, isLightThemeActive } = useThemeToggle();

  return (
    <NavContainer className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
      <div className="max-w-center navbar">
        <Link to='/'>
          {/* <img src={logo} alt='Apart' /> */}
          <h1 className='logo-nav'>Apart.</h1>
        </Link>
        <button type='button' className='nav-toggle' onClick={openSidebar}>
          <FaBars />
        </button>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <div className='cart-btn-wrapper'>
          <button className='theme-btn' onClick={changeTheme}>
            <RiSunLine className={`${isLightThemeActive ? '' : 'hide-icon'}`} />
            <RiMoonLine className={`${isLightThemeActive ? 'hide-icon' : ''}`} />
          </button>
          <CartButtons />
        </div>
      </div>

    </NavContainer>
  )
}

const NavContainer = styled.nav`

  background-color: var(--primary-light);
  transition: var(--theme-transition);
  transition-property: var(--theme-transition-props);

  .navbar {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    
    .logo-nav {
      color: var(--primary-dark);
      transition: var(--theme-transition);
      transition-property: var(--theme-transition-props);
      position: relative;
      font-size: 2rem;
      :before {
        content: '';
        position: absolute;
        background-color: var(--logo);
        width: 25px;
        height: 4px;
        top: 0;
        right: -7px;
        transform: rotate(30deg);
      }
      :after {
        content: '';
        position: absolute;
        background-color: var(--logo);
        width: 25px;
        height: 4px;
        top: 0;
        right: 12px;
        transform: rotate(150deg);
      }
    }
  }

  .nav-links {
    display: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--primary-dark);
    cursor: pointer;
    :focus {
      outline: none;
    }
    svg {
      font-size: 2rem;
    }
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
  .cart-btn-wrapper {
    display: flex;
    align-items: center;
    .theme-btn {
      margin-right: 2rem;
      /* margin-top: 10px; */
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 26px;
      color: var(--primary-dark);
      transition: var(--theme-transition);
      transition-property: var(--theme-transition-props);
      .hide-icon {
        display: none;
      }
      :focus {
        outline: none;
      }
    }
  }
    .nav-toggle {
      display: none;
    }
    .nav-links {
      display: flex;
      align-self: center;
      justify-content: space-between;
    
    li:not(:last-child) {
      margin-right: 2rem;
    }
    li {
      position: relative;
      font-weight: 600;
      color: var(--primary-dark);
      transition: var(--theme-transition);
      transition-property: var(--theme-transition-props);
    }
    li:after {
	    content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: -7px;
			left: 0;
			background-color: var(--primary-dark);
			transition: transform 0.3s ease-in-out;
      transform: scaleX(0);
		}
    li:hover:after {
        transform: scaleX(1);
    }
   }
  }
`

export default Nav

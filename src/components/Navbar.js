import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
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
          <img src={logo} alt='comfy sloth' />
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
  }

  .nav-links {
    display: none;
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }

  .cart-btn-wrapper {
    display: none;
  }

  @media (min-width: 992px) {
  .cart-btn-wrapper {
    display: block;
    display: flex;
    align-items: center;
    .theme-btn {
      margin-right: 1rem;
      margin-top: 10px;
      border: none;
      background-color: transparent;
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
      color: var(--primary-dark);
      transition: var(--theme-transition);
      transition-property: var(--theme-transition-props);
    }
    li:after {
	    content: "";
			position: absolute;
			width: 0;
			height: 2px;
			bottom: -7px;
			left: 0;
			background-color: var(--primary-dark);
			visibility: hidden;
			transition: width 0.3s ease-in-out;
		}
    li:hover:after {
        visibility: visible;
        width: 100%;
    }
   }
  }
`

export default Nav

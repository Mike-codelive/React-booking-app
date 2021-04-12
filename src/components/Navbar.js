import React from 'react'
import styled from 'styled-components'
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
    <NavContainer className='theme-background'>
      <div className="max-w-center navbar">
        <Link to='/'>
          <h1 className='logo-nav theme-text-dark'>Apart.</h1>
        </Link>
        <button type='button' className='nav-toggle theme-text-dark' onClick={openSidebar}>
          <FaBars />
        </button>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link
            return (
              <li className='theme-text-dark' key={id}>
                <Link to={url}>{text}</Link>
              </li>
            )
          })}
        </ul>
        <div className='cart-btn-wrapper'>
          <button className='theme-btn theme-text-dark' onClick={changeTheme}>
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

  position: relative;

  .navbar {
    padding: var(--lateral-gutters, 0 2rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    
    .logo-nav {
      position: relative;
      font-size: 2rem;
      letter-spacing: 3px;
      :before {
        content: '';
        position: absolute;
        background-color: var(--logo);
        width: 25px;
        height: 4px;
        top: 0;
        right: -2px;
        transform: rotate(30deg);
      }
      :after {
        content: '';
        position: absolute;
        background-color: var(--logo);
        width: 25px;
        height: 4px;
        top: 0;
        right: 17px;
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

  @media screen and (min-width: 992px) {
  .cart-btn-wrapper {
    display: flex;
    align-items: center;
    .theme-btn {
      margin-right: 1.4rem;
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 26px;
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
      font-size: 1rem;
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

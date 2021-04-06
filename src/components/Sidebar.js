import React from 'react'
// import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'
import { links } from '../utils/constants'
import styled from 'styled-components'
import CartButtons from './CartButtons'
import { useThemeToggle } from '../context/theme_toggle'
import { useUserContext } from '../context/user_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  const { changeTheme, isLightThemeActive } = useThemeToggle();

  return (
    <SidebarContainer className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          {/* <img src={logo} className='logo' alt='apart booking' /> */}
          <h1 className='logo-nav'>Apart.</h1>
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          <li>
            <Link to='/checkout' onClick={closeSidebar}>
              checkout
              </Link>
          </li>
        </ul>
        <CartButtons />
        <button className='theme-btn' onClick={changeTheme}>
          <RiSunLine className={`${isLightThemeActive ? '' : 'hide-icon'}`} />
          <RiMoonLine className={`${isLightThemeActive ? 'hide-icon' : ''}`} />
        </button>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`

  text-align: center;

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-light);
    transition: background-color var(--theme-transition), transform 0.3s linear;
    transform: translateX(-100vw);

    .theme-btn {
      margin-right: 1rem;
      margin-top: 50px;
      border: none;
      background-color: transparent;
      font-size: 36px;
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

  .show-sidebar {
    transform: translateX(0);
    transition: background-color var(--theme-transition), transform 0.3s linear;
    z-index: 999;
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: var(--primary-light);
    transition: var(--theme-transition);
    .close-btn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--clr-primary-5);
      transition: var(--transition);
      cursor: pointer;
      color: var(--clr-red-dark);
      margin-top: 0.2rem;
    }
    .close-btn:hover {
      color: var(--clr-red-light);
    }
    .close-btn:focus {
      outline: unset;
    }
    .logo-nav {
      color: var(--primary-dark);
      transition: var(--theme-transition);
      transition-property: var(--theme-transition-props);
      position: relative;
      font-size: 2rem;
      letter-spacing: 3px;
      :before {
        content: '';
        position: absolute;
        background-color: red;
        width: 25px;
        height: 4px;
        top: 0;
        right: -2px;
        transform: rotate(30deg);
      }
      :after {
        content: '';
        position: absolute;
        background-color: var(--second-logo);
        width: 25px;
        height: 4px;
        top: 0;
        right: 17px;
        transform: rotate(150deg);
      }
    }
  }

  .links {
    margin-bottom: 2rem;
    background-color: var(--primary-light);
    transition: var(--theme-transition);
    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--primary-dark);
      transition: var(--transition);
      letter-spacing: var(--spacing);
      transition-property: var(--theme-transition-props);
    }
    
    a:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
      background: var(--clr-grey-10);
      color: var(--clr-grey-2);
    }
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar

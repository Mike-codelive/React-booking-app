import React from 'react'
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
    <SidebarContainer className='theme-background'>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <h1 className='logo-nav theme-text-dark'>Apart.</h1>
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links theme-text-dark'>
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
        <button className='theme-btn theme-text-dark' onClick={changeTheme}>
          <RiSunLine className={`${isLightThemeActive ? '' : 'hide-icon'}`} />
          <RiMoonLine className={`${isLightThemeActive ? 'hide-icon' : ''}`} />
        </button>
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`

  text-align: center;
  @media screen and (min-width: 992px) {
      display: none;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--primary-light);
    transition: background-color var(--theme-transition), transform 0.3s linear;
    transform: translateX(-100vw);
    z-index: 999;

    .theme-btn {
      margin-right: 1rem;
      margin-top: 50px;
      border: none;
      background-color: transparent;
      font-size: 36px;
      .hide-icon {
        display: none;
      }
      :focus {
        outline: none;
      }
    }
    .logo-nav {
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
    .close-btn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      cursor: pointer;
      color: var(--second-logo);
      margin-top: 0.2rem;
    }
    .close-btn:focus {
      outline: unset;
    }
  }

  .links {
    margin-bottom: 2rem;

    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      letter-spacing: 0.1rem;
    }

    a:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
    }
  }

`

export default Sidebar

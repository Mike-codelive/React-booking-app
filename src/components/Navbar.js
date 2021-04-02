import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import CartButtons from './CartButtons'
import { useProductsContext } from '../context/products_context'
import { useUserContext } from '../context/user_context'

const Nav = () => {

    return (
        <NavContainer className='light-theme'>
            <div className="max-w-center navbar">
                <Link to='/'>
                    <img src={logo} alt='comfy sloth' />
                </Link>
                <button type='button' className='nav-toggle'>
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
                <CartButtons />
            </div>

        </NavContainer>
    )
}

const NavContainer = styled.nav`
  .navbar {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-light);
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

  @media (min-width: 992px) {
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

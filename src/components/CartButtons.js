import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { useThemeToggle } from '../context/theme_toggle'

const CartButtons = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();
  const { isLightThemeActive } = useThemeToggle();
  return (
    <Wrapper className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
      <div className='center-buttons'>
        <Link to='/cart' className='cart-container' onClick={closeSidebar}>
          <button type='button' className='cart-btn cart-btn--blue'>
            {`${isSidebarOpen ? 'Cart' : ''}`}
            <BiShoppingBag />
            <span className='cart-value'>12</span>
          </button>
        </Link>
        <button type='button' className='auth-btn cart-btn--blue'>
          Login <FaUserPlus />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .center-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  .cart-container {
      position: relative;
      margin-right: 1.5rem;
      transition: var(--theme-transition);
      transition-property: var(--theme-transition-props);
      .cart-btn {
        border: none;
        background-color: transparent;
        font-size: 1.3rem;
        color: var(--primary-dark);
        transition: var(--theme-transition);
        transition-property: var(--theme-transition-props);
        position: relative;
        cursor: pointer;
        :focus {
          outline: none;
        }
        svg {
          margin-left: .6rem;
        }
      }
      .cart-value {
        position: absolute;
        top: -15px;
        right: -16px;
        background-color: var(--primary-grey);
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        font-size: 0.75rem;
        color: var(--static-dark);
        padding: 12px;
      }
  }

  .auth-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--primary-dark);
    /* letter-spacing: var(--spacing); */
    transition: var(--theme-transition);
    transition-property: var(--theme-transition-props);
    :focus {
          outline: none;
        }
    svg {
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 992px) {
    .cart-btn--blue {
      background-color: var(--primary-blue) !important;
      /* padding: 1rem 1.2rem .6rem .6rem; */
      transition: unset !important;
      /* padding: 1.5rem; */
      width: 9rem;
      height: 5rem;
      border-radius: 15px;
      color: var(--static-white) !important;
      .cart-value {
        top: 10px;
        right: 15px;
      }
    }
    .auth-btn--blue {
      background-color: var(--primary-blue);
      /* padding: 1rem 1.2rem .6rem .6rem; */
      transition: unset;
      /* padding: 5.4rem; */
      width: 9rem;
      height: 5rem;
      border-radius: 15px;
      color: var(--static-white);
    }
  }
`
export default CartButtons

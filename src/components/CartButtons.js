import React from 'react'
// react Icons
import { BiShoppingBag } from 'react-icons/bi'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { useThemeToggle } from '../context/theme_toggle'

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { isLightThemeActive } = useThemeToggle();
  return (
    <Wrapper className={`${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
      <div className='center-buttons'>
        <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
          Cart
        <span className='cart-container'>
            <BiShoppingBag />
            <span className='cart-value'>12</span>
          </span>
        </Link>
        <button type='button' className='auth-btn'>
          Login <FaUserPlus />
        </button>
        <div className='cart-btn-wrapper'>
          <CartButtons />
        </div>
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
      display: flex;
      align-items: center;
      position: relative;
      transition: var(--theme-transition);
      transition-property: var(--theme-transition-props);
   
      svg {
        height: 1.6rem;
        margin-left: 5px;
        }
    }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--primary-grey);
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

  .cart-btn {
    color: var(--primary-dark);
    font-size: 1.5rem;
    /* letter-spacing: var(--spacing); */
    display: flex;
    align-items: center;
    margin-right: 2rem;
    transition: var(--theme-transition);
    transition-property: var(--theme-transition-props);
  }

  .auth-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--primary-dark);
    /* letter-spacing: var(--spacing); */
    transition: var(--theme-transition);
    transition-property: var(--theme-transition-props);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons

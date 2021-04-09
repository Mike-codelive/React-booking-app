import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext();

  return (
    <Wrapper>
      <div className='center-buttons'>
        <Link to='/cart' className='cart-container' onClick={closeSidebar}>
          <button type='button' className='cart-btn theme-text-dark cart-btn--blue'>
            {`${isSidebarOpen ? 'Cart' : ''}`}
            <BiShoppingBag />
            <span className='cart-value'>12</span>
          </button>
        </Link>
        <button type='button' className='auth-btn theme-text-dark cart-btn--blue'>
          {`${isSidebarOpen ? 'Login' : ''}`} <FaUserPlus />
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
      .cart-btn {
        border: none;
        background-color: transparent;
        font-size: 1.3rem;
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
      transition: unset !important;
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
      transition: unset;
      width: 9rem;
      height: 5rem;
      border-radius: 15px;
      color: var(--static-white);
    }
  }
`
export default CartButtons

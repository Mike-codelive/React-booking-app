import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const { closeSidebar, isSidebarOpen } = useProductsContext()
  const { total_items, clearCart } = useCartContext()
  const { loginWithRedirect, myUser, logout } = useUserContext()

  return (
    <Wrapper>
      <div className='center-buttons'>
        <Link to='/cart' className='cart-container' onClick={closeSidebar}>
          <button type='button' className='btn btn--blue theme-text-dark'>
            {`${isSidebarOpen ? 'Cart' : ''}`}
            <BiShoppingBag />
            <span className='cart-value'>{total_items}</span>
          </button>
        </Link>
        {myUser ? (
          <button
            type='button'
            className='btn btn--blue theme-text-dark'
            onClick={() => {
              clearCart()
              localStorage.removeItem('user')
              logout({ returnTo: window.location.origin })
            }}
          >
            <FaUserMinus />
          </button>
        ) : (
          <button type='button' className='btn btn--blue theme-text-dark' onClick={loginWithRedirect}>
            <FaUserPlus />
          </button>
        )}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  .center-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      .btn {
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
    }
  .cart-container {
      position: relative;
      margin-right: 1.5rem;
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

  @media screen and (max-width: 992px) {
  .center-buttons{
    .btn--blue {
      background-color: var(--primary-blue, #2c98f0);
      transition: unset;
      width: 9rem;
      height: 5rem;
      border-radius: 15px;
      color: var(--static-white, #ffffff);
      .cart-value {
        top: 10px;
        right: 15px;
      }
    }
  }  
  }
`
export default CartButtons

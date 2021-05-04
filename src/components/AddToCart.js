import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext()
  const { id, stock, colors } = product

  const [mainColor, setMainColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1
      if (tempAmount < 1) {
        tempAmount = 1
      }
      return tempAmount
    })
  }

  return (
    <Wrapper>
      <div className='colors'>
        <span> colors : </span>
        <div className='colors-palette'>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${mainColor === color ? 'color-btn active' : 'color-btn'
                  }`}
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            )
          })}
        </div>
      </div>
      <div className='btn-container'>
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to='/cart'
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          <p className='btn theme-background-dark theme-text-light'>Add to Cart</p>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px min-content;
    align-items: center;
    margin-bottom: 1rem;
    .colors-palette {
      background-color: var(--static-white, #ffffff);
      border-radius: 3px
    }
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    :not(:last-child) {
      margin-right: 0.5rem;
    }
    svg {
      font-size: 0.75rem;
      color: var(--static-white, #ffffff);
    }
    :focus {
      outline: none;
    }
  }
  .active {
    opacity: 1;
    border: 2px solid var(--primary-blue, #2c98f0);
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    padding: 1.5rem 0;
    font-size: 1.5rem;
  }
`
export default AddToCart

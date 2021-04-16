import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { AiFillThunderbolt } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Product = ({ image, name, price, id, company }) => {
  return (
    <Wrapper>
      <div className='container-img'>
        <Link to={`/products/${id}`} className='link'>
          <img src={image} alt={name} />
          <span className='small-text'>Featured</span>
        </Link>
      </div>
      <div className='container-data'>
        <h5>{name}</h5>
        <p>{company}</p>
        <p className='price'><AiFillThunderbolt /><span>from</span>{formatPrice(price)}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`

  .container-img {
    overflow: hidden;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    position: relative;
    img {
      width: 100%;
      display: block;
      object-fit: cover;
      transition: transform .3s ease-in-out;
      :hover {
        transform: scale(1.33);
      }
    }
    span {
      position: absolute;
      left: 0;
      top: 15px;
      padding: 0.5rem;
      background-color: var(--primary-blue, #2c98f0);
      color: var(--static-white, #ffffff);
    }
  }
  .container-data {
    background-color: var(--static-white, #ffffff);
    display: grid;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 0.5rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border: 1px solid var(--static-dark, #121212);
    border-top: none;
    h5 {
      grid-column: 1 / -1;
      padding: 1rem 10px;
      font-size: 18px;
      text-transform: capitalize;
    }
    p {
      padding: 1rem 10px;
    }
    .price {
      font-size: 18px;
      justify-self: right;
      font-weight: bold;
      display: flex;
      span {
        font-size: 12px;
        margin-right: 10px;
        align-self: center;
      }
      svg {
        align-self: flex-end;
        color: #FFAB53;
      }
    }
  }

`
export default Product

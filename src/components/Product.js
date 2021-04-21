import React, { useContext, useEffect, useReducer } from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { AiFillThunderbolt } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { BsStarFill } from 'react-icons/bs'

const Product = ({ image, name, price, id, company, featured }) => {
  const location = useLocation();

  return (
    <Wrapper>
      <div className='container-img'>
        <Link to={`/products/${id}`} className='link'>
          <img src={image} alt={name} />
          {featured ? <span className='small-text'>Featured</span> : null}
        </Link>
      </div>
      <div className='container-data theme-text-dark'>
        {location.pathname === '/products' ?
          <><div className='name-mark '><h5>{name}</h5><p className='font-opacity'>{company}</p> </div> <div className='rate-reviews'><BsStarFill /><p>4.5</p><p className='font-opacity'>(289)</p></div></> :
          <> <div className='name-reviews'><h5>{name}</h5></div> <p className='font-opacity'>{company}</p> </>
        }

        <p className='price'><AiFillThunderbolt /><span>from</span>{formatPrice(price)}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
.font-opacity {
  opacity: .6 ;
}
  .container-img {
    overflow: hidden;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
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
    /* background-color: var(--static-white, #ffffff); */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 0.5rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    border: 1px solid rgba(120, 120, 120, 0.5);/* var(--static-dark, #121212) */;
    border-top: none;
    .name-reviews {
      grid-column: 1 / -1;
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
      }
      h5 {
        padding: 1rem 10px;
        font-size: 18px;
        text-transform: capitalize;
      }
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

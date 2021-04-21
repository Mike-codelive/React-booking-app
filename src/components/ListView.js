import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product
        return (
          <article key={id} className='item theme-text-dark'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className='price'>{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className='cta-btn'>
                <span>Show Details</span>
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  .item {
    text-align:center;
    img {
      width: 300px;
      height: 200px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 1rem;
    }
    h4 {
      margin-bottom: 0.5rem;
      text-transform: capitalize;
    }
    .price {
      margin-bottom: 0.75rem;
    }
    p {
      max-width: 45em;
      margin-bottom: 2rem;
    }
  }

  @media (min-width: 992px) {
    .item {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
      text-align: unset;
    }
  }
`

export default ListView

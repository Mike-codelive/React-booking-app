import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ products }) => {

  return (
    <Wrapper>
      <div className='products-container'>
        {products.map((product) => {

          return <Product key={product.id} {...product} />
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.products-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  article {
    .container-img {
      height: 200px;
      border-radius: 20px; 
    }
    .container-data {
      border: none;
      .name-mark {
        grid-column: 1 / 1;
        display: block;
        h5 {
        padding: 1rem 10px 10px 10px;
        font-size: 18px;
        text-transform: capitalize;
      }
        p {
          padding: 0 10px;
        }
      }
      .rate-reviews {
        display: flex;
        justify-content: flex-end;
        padding: 1rem 10px;
        svg {
        color: #FFAB53;
      }
      p {
        padding: 0;
        :last-child {
          padding-left: 10px;
        }
      }
      }
  }
}
}
`

export default GridView

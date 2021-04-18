import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import { AiOutlineHeart } from 'react-icons/ai'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line
  }, [error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product

  return (
    <Wrapper className='theme-background'>
      <PageHero title={name} product />
      <div className='max-w-center main-container'>
        <ProductImages images={images} />
        <div className='data'>
          <div className='title'>
            <h2>{name}</h2>
            <div>
              <AiOutlineHeart />
            </div>
          </div>
          <p className='description'>{description}</p>
          <p className='price'>{formatPrice(price)}</p>
          <Stars stars={stars} reviews={reviews} />
          {stock > 0 && <AddToCart product={product} />}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.main-container {
  margin-top: 2rem;
  .data {
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2rem 0;
      h2 {
        text-transform: capitalize;
      }
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--light-grey-color, #EAEEF3);
        border-radius: 50%;
        width: 35px;
        height: 35px;
      }
    }
    .description {
      margin-bottom: 2rem;
    }
    .price {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
  }
}
`

export default SingleProductPage

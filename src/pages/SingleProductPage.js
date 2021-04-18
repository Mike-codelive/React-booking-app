import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
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
      <div className='max-w-center main-container theme-text-dark'>
        <ProductImages images={images} />
        <div className='center-line'></div>
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
          <p className='info'>
            <span>Available : </span>
            {stock > 0 ? 'In stock' : 'out of stock'}
          </p>
          <p className='info'>
            <span>SKU : </span>
            {sku}
          </p>
          <p className='info'>
            <span>Brand : </span>
            {company}
          </p>
          {stock > 0 && <AddToCart product={product} />}
          <div className='links-info'>
            <div>
              <div className='main-info'>
                <p>Dispatched in 5 - 7 weeks</p>
                <IoIosArrowForward />
              </div>
              <a href='#' className='link'>Why the longer lead time?</a>
            </div>
            <div>
              <div className='main-info'>
                <p>Home delivery - $ 10</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <div className='main-info'>
                <p>Hassle-free returns</p>
                <IoIosArrowForward />
              </div>
            </div>
            <div>
              <div className='main-info'>
                <p>Dimentions & details</p>
                <IoIosArrowForward />
              </div>
              <p>W: 140 x H: 163 x D: 56cm</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.main-container {
  display: flex;
  margin-top: 2rem;
  flex-wrap: wrap;
  .center-line {
    width: 5px;
    height: inherit;
    background-color: var(--grey-line-color, #f0f0ee);
  }

  .data {

    .links-info {
      margin: 4rem 0;
      > div {
        border-bottom: 1px solid var(--light-grey-color, #5E6D77);
        padding: 2rem 0;
      }
      .link {
        text-decoration: underline;
      }
      .main-info {
        display: flex;
        justify-content: space-between;
      }
    }
    .description {
      margin-bottom: 2rem;
    }
    .price {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
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
        svg {
          color: var(--static-dark, #121212)
        }
      }
    }
  }
}
@media screen and (min-width: 800px) {
  .main-container {
    flex-wrap: nowrap;
    .data {
      padding-left: 2rem;
    }
  }
}
@media screen and (max-width: 800px) {
  .main-container {
    .center-line {
      display: none;
    }
  }
}

`

export default SingleProductPage

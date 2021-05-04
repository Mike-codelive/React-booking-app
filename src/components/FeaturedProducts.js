import React from 'react'
import { useProductsContext } from '../context/products_context'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'
import Carousel, { consts } from 'react-elastic-carousel'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'


const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? <HiOutlineArrowLeft onClick={onClick} /> : <HiOutlineArrowRight onClick={onClick} />
    return (
      <div className='arrows-reatured-prod theme-text-dark' disabled={isEdge}>
        {pointer}
      </div>
    )
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ]

  return (
    <Wrapper className='theme-background'>
      <div className='featured-prod max-w-center'>
        <div className='title theme-text-dark'>
          <h2>Featured Products</h2>
          <div className='underline'></div>
        </div>
        <div className='section-center featured'>
          <Carousel
            itemsToShow={1}
            renderArrow={myArrow}
            breakPoints={breakPoints}
            spaceBetween={20}
          >
            {featured.map((product) => {
              return <Product key={product.id} {...product} />
            })}
          </Carousel>
        </div>
        {/* <Link to='/products' className='btn'>
          all products
        </Link> */}
      </div>
    </Wrapper >
  )
}

const Wrapper = styled.section`

  padding: 4rem 0;

  .featured-prod {
    .title {
      text-align: center;
      margin-bottom: 2rem;
      h2 {
        margin-bottom: 2rem;
      }
      .underline {
        width: 6rem;
        height: 0.25rem;
        background: var(--primary-blue, #2c98f0);
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  .section-center {
    .arrows-reatured-prod {
      display: flex;
      align-items: center;
      font-size: 2rem;
      svg {
        cursor: pointer;
      }
    }
    .rec-pagination {
      margin-top: 2rem; 
    }
    .rec-item-wrapper {
      padding: 0 1rem !important;
    }
    
  .rec-dot {
    background-color: var(--grey-bullets-color, #A0A9B2);
		width: 16px;
		height: 16px;
    box-shadow: none;
    :not(:last-child) {
		margin-right: 20px;
    }
    :hover {
      box-shadow: none;
    }
  }
  .rec-dot_active {
    width: 16px;
		height: 16px;
    background-color: var(--static-light, #ffffff);
    border: 2px solid var(--primary-blue, #2c98f0);
    box-shadow: none;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  }
  .featured {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

`

export default FeaturedProducts

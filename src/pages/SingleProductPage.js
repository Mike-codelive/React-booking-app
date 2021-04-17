import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
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
      <div className='max-w-center'>
        <div className='product-show'>
          <ProductImages images={images} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`


`

export default SingleProductPage

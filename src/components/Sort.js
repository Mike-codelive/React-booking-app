import React from 'react'
import { useFilterContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <Wrapper className='theme-text-dark'>
      <div className='btn-container'>
        <button
          type='button'
          className={`${grid_view ? 'active' : null}`}
          onClick={setGridView}
        >
          <BsFillGridFill className='theme-text-dark' />
        </button>
        <button
          type='button'
          className={`${!grid_view ? 'active' : null}`}
          onClick={setListView}
        >
          <BsList className='theme-text-dark' />
        </button>
      </div>
      <p >{products.length} products found</p>
      <hr />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}
        >
          <option value='price-lowest'>price (lowest)</option>
          <option value='price-highest'>price (highest)</option>
          <option value='name-a'>name (a-z)</option>
          <option value='name-z'>name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      width: 1.5rem;
      border-radius: 5px;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--primary-dark);
      svg {
        color: var(--primary-light);
      }
    }
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }
  
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
    margin-right: 1rem;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
`

export default Sort

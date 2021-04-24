import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'
import { GiFactory } from 'react-icons/gi'
import { AiFillTags } from 'react-icons/ai'

const Filters = () => {
  const {
    filters: {
      text,
      featured,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext()

  const categories = getUniqueValues(all_products, 'category')
  const companies = getUniqueValues(all_products, 'company')
  const colors = getUniqueValues(all_products, 'colors')

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-controlers'>

            <div className='form-control'>
              <div className='input'>
                <input
                  type='text'
                  name='text'
                  placeholder='search'
                  className='search-input'
                  value={text}
                  onChange={updateFilters}
                />
                <BsSearch />
              </div>
            </div>

            <div className='form-control'>
              <h5 className='theme-text-dark'>category</h5>
              <div className='select'>
                <AiFillTags />
                <select
                  name='category'
                  value={category}
                  onChange={updateFilters}
                >
                  {categories.map((c, index) => {
                    return (
                      <option key={index} value={c}>
                        {c}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className='form-control'>
              <h5 className='theme-text-dark'>company</h5>
              <div className='select'>
                <GiFactory />
                <select
                  name='company'
                  value={company}
                  onChange={updateFilters}
                  className='company'
                >
                  {companies.map((c, index) => {
                    return (
                      <option key={index} value={c}>
                        {c}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className='form-control'>
              <h5 className='theme-text-dark'>colors</h5>
              <div className='colors'>
                {colors.map((c, index) => {
                  if (c === 'all') {
                    return (
                      <button
                        key={index}
                        name='color'
                        onClick={updateFilters}
                        data-color='all'
                        className={`${color === 'all' ? 'all-btn active-all' : 'all-btn'
                          }`}
                      >
                        all
                      </button>
                    )
                  }
                  return (
                    <button
                      key={index}
                      name='color'
                      style={{ background: c }}
                      className={`${color === c ? 'color-btn active' : 'color-btn'
                        }`}
                      data-color={c}
                      onClick={updateFilters}
                    >
                      {color === c ? <FaCheck /> : null}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className='form-control'>
              <div className='range'>
                <h5>Price range</h5>
                <p className='price'>{formatPrice(price)}</p>
                <input
                  type='range'
                  name='price'
                  min={min_price}
                  max={max_price}
                  onChange={updateFilters}
                  value={price}
                />
                <div className='min-max-price'>
                  <p>{formatPrice(min_price)}</p>
                  <p>{formatPrice(max_price)}</p>
                </div>
              </div>
            </div>

            <div className='form-control'>
              <div className=' facilities'>
                <h5>Facilities</h5>
                <div>
                  <p> Free shipping</p>
                  <input
                    type='checkbox'
                    name='shipping'
                    id='shipping'
                    onChange={updateFilters}
                    checked={shipping}
                  />
                  <label htmlFor="shipping">
                    <span></span>
                  </label>
                </div>
                <div>
                  <p>Featured</p>
                  <input
                    type='checkbox'
                    name='featured'
                    id='featured'
                    onChange={updateFilters}
                    checked={featured}
                  />
                  <label htmlFor="featured">
                    <span></span>
                  </label>
                </div>
              </div>
            </div>

            <div className='last-grid-item'>
              <button type='button' className='cta-btn' onClick={clearFilters}>
                <span>clear filters</span>
              </button>
            </div>

          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

margin-bottom: 2rem;

.form-controlers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
  .last-grid-item {
    align-self: center;
    justify-self: center;
  }
  .form-control {
    margin-bottom: 1.25rem;
    :first-child {
      align-self: flex-end;
    }
    h5 {
      font-size: var(--small-font, 14px);
      font-weight: 500;
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    .select {
      display: flex;
      align-items: center;
      width: min-content;
      border-radius: 10px;
      background-color: var(--grey-filters-color, #f6f7fb);
      
      select {
        padding: .8rem 20px .8rem 0;
        background-color: var(--grey-filters-color, #f6f7fb);
        border-radius: 10px;
        border: none;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: capitalize;
        width: 160px;
        :focus {
          outline: none;
        }
      }
      svg {
        opacity: 0.5;
        margin: 0 1rem;
        font-size: 2rem;
      }
    }
    .input {
      position: relative;
      display: flex;
      align-items: center;
      input {
        background-color: var(--grey-filters-color, #f6f7fb);
        border-radius: 10px;
        padding: .7rem 20px .7rem 2.2rem;
        font-size: 1.2rem;
        border-color: transparent;
        width: 226px;
        :focus {
          outline: none;
        }
      }
      svg {
        position: absolute;
        left: 12px;
        opacity: 0.5;
      }
    }
    .colors {
      border-radius: 10px;
      background-color: var(--grey-filters-color, #f6f7fb);
      display: inline-block;
      display: flex;
      width: min-content;
      padding: 15px 1rem;
  
      .active {
        border: 2px solid var(--primary-blue, #2c98f0);
        opacity: 1;
      }
      .active-all {
        opacity: 1;
      }
      button {
        width: 1.2rem;
        height: 1.2rem;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-weight: bold;
        display: inline-block;
        border-radius: 50%;
        margin-right: 0.5rem;
        border: none;
        cursor: pointer;
        opacity: 0.5;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          font-size: 0.5rem;
          color: var(--static-white, #ffffff);
        }
        :first-child {
          margin-right: 1rem;
        }
        :last-child {
          margin-right: 0;
        }
        :focus {
          outline: none;
        }
      }
    }
    .range {
      border-radius: 10px;
      background-color: var(--grey-filters-color, #f6f7fb);
      padding: 0.8rem;
      .price {
        text-align: center;
      }
      .min-max-price {
        display: flex;
        justify-content: space-between;
      }
      p {
        font-weight: bold;
      }
      input[type='range'] {
        width: 100%;
      }
    }
    .facilities {
      padding: 0.8rem;
      border-radius: 10px;
      background-color: var(--grey-filters-color, #f6f7fb);
      height: 100%;
      [type='checkbox'] {
        position: absolute;
        left: -9999px;
      }
      [type="checkbox"]:checked + label span:last-child::before {
        transform: translateX(24px);
        background-color: var(--static-dark, #121212);
        border: var(--static-dark, #121212);
      }
      [type="checkbox"]:checked + label span:last-child {
        border: 2px solid var(--static-dark, #121212); 
      }
      label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        span:last-child::before,
        span:last-child::after {
          content: "";
          position: absolute;
        }
        span:last-child::before {
          left: 4px;
          top: 4px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          border: 2px solid var(--grey-bullets-color, #A0A9B2);
          z-index: 1;
          transition: transform 0.3s;
          transition-property: transform, background-color, border;
        }
        span:last-child::after {
          top: 50%;
          right: 8px;
          width: 12px;
          height: 12px;
          transform: translateY(-50%);
          background-size: 12px 12px;
        }
        span:last-child {
          position: relative;
          width: 50px;
          height: 26px;
          border-radius: 15px;
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
          border: 2px solid var(--suttle-grey-color, #f5f5f5); 
          transition: 0.3s;
          transition-property: transform, border;
        }
      }
      div {
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }
}
`

export default Filters

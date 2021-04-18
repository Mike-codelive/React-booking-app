import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <Wrapper>
      <div className='main'>
        <img src={main.url} alt='main product' />
      </div>
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <div className='image'>
              <img
                src={image.url}
                alt={image.filename}
                key={index}
                onClick={() => setMain(images[index])}
                className={`${image.url === main.url ? 'active' : null}`}
              />
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  display: flex;
  flex: 1 0 calc(70% - 3px);
  justify-content: space-between;
  margin-top: 2rem;

  .main {
    flex: 0 0 80%;
    padding-right: 1rem;
    height: 300px;
    object-fit: cover;
    border-radius: 3px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    .image {
      border-radius: 3px; 
      height: 18%;
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    .active {
      border: 2px solid var(--primary-dark, #121212);
    }
  }
  @media screen and (min-width: 800px) {
    padding-right: 2rem;
    .main {
      height: 550px;
      padding-right: 0;
    }
    .gallery {
      padding-left: 2rem;
      height: 550px;
    }
  }
`

export default ProductImages

import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])
  return (
    <Wrapper>
      <img src={main.url} alt='main product' className='main' />
      <div className='gallery'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? 'active' : null}`}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;
  .main {
    width: 80%;
    height: 300px;
    object-fit: cover;
    border-radius: 3px; 
  }
  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* padding: 0 1rem; */
    img {
      border-radius: 3px; 
      width: 50px;
      height: 50px;
      object-fit: cover;
      /* margin: 2rem; */
    }
  }
`

export default ProductImages

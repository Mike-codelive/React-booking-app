import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper className='section section-center'>
      <div className='loading'></div>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.section`

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border: 4px solid #ccc;
  animation: spinner 0.6s linear infinite;
}

`
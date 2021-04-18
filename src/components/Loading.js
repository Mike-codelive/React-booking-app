import React from 'react'
import styled from 'styled-components'

const Loading = () => {
  return (
    <Wrapper className='section section-center theme-background'>
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
  margin: 5rem auto;
  border: 4px solid var(--grey-color, #5E6D77);
  animation: spinner 0.6s linear infinite;
}

`
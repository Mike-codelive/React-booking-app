import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper className='dark-theme'>
      <h6>
        &copy; {new Date().getFullYear()}
        <span>Apart</span>
      </h6>
      <h6>All rights reserved</h6>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  color: var(--primary-dark);
  background-color: var(--primary-light);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  h6 {
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
`

export default Footer

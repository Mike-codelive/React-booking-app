import React from 'react'
import styled from 'styled-components'
import { ico_email } from '../assets'

const AboutSendEmail = () => {

  return (

    <Wrapper>
      <div className='about__email max-w-center'>
        <div className='about__email-description'>
          <img className='about__email-description-svg' src={ico_email}></img>
          <div className='about__email-description-text'>
            <h3>Get Updates & 15% Off</h3>
            <h5>Thoughtful thoughts to your inbox</h5>
          </div>
        </div>
        <div className='about__email-form'>
          <input type='email' placeholder='enter your email'></input>
          <button type='submite'>Subscribe</button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  background-color: var(--suttle-grey-color, #f5f5f5);
  
  .about__email {
    height: 185px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    @media (min-width: 980px) {
      flex-wrap: unset;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
    &-description {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      &-text {
        h3 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        h5 {
          font-size: 16px;
          font-weight: initial;
        }
      }
      &-svg {
        margin-right: 2rem;
        display: none;
        @media screen and (min-width: 800px) {
          display: initial;
        }
      }
    }
    &-form {
      position: relative;
      width: 100%;
      display: flex;
      @media screen and (min-width: 980px) {
        width: initial;
        flex: 0 0 40%;
      }
      input {
        width: 100%;
        flex: 1 0 auto;
        height: 55px;
        border-color: #D7DCE3;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 6px 12px;
        :focus {
          border-color: var(--primary-blue, #2c98f0);
          outline: none;
        }
      }
      button {
        position: absolute;
        border: none;
        border-radius: 0 5px 5px 0;
        top: 0;
        right: 0;
        height: 55px;
        line-height: 55px;
        color: var(--static-white, #ffffff);
        background: var(--primary-blue, #2c98f0);
        padding-left: 25px;
        padding-right: 25px;
        font-weight: 600;
        text-transform: uppercase;
        :focus {
          outline: none;
        }
      }
    }
  }
`
export default AboutSendEmail

import React from 'react'
import styled from 'styled-components'

const Footer = () => {

  return (
    <Wrapper className='theme-background'>
      <div className='footer__items theme-text-black max-w-center'>
        <div className='footer__items-single'>
          <div className='footer__items-single-title'>
            <h6 className='small-text'>NEED HELP?</h6>
          </div>
          <div className='footer__items-single-contact --m-top'>
            <p>Call Us</p>
            <p>+ 0895783438458</p>
          </div>
          <div className='footer__items-single-contact'>
            <p>Email for Us</p>
            <p>hello@apart.com</p>
          </div>
          <div className='footer__items-single-contact'>
            <p>Follow Us</p>
            <p>icons</p>
          </div>
        </div>
        <div className='footer__items-single item-center-lw'>
          <div className='footer__items-single-title'>
            <h6 className='small-text'>COMPANY</h6>
          </div>
          <div className='footer__items-single-links small-text --m-top'>
            <ul>
              <li><a href='#'>About Us</a></li>
              <li><a href='#'>Community Blog</a></li>
              <li><a href='#'>Rewards</a></li>
              <li><a href='#'>Work Whit Us</a></li>
              <li><a href='#'>Meet The Team</a></li>
            </ul>
          </div>
        </div>
        <div className='footer__items-single item-center-lw'>
          <div className='footer__items-single-title'>
            <h6 className='small-text'>SUPPORT</h6>
          </div>
          <div className='footer__items-single-links small-text --m-top'>
            <ul>
              <li><a href='#'>Account</a></li>
              <li><a href='#'>Legal</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Afiliate Program</a></li>
              <li><a href='#'>Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className='footer__items-single item-center-lw'>
          <div className='footer__items-single-title'>
            <h6 className='small-text'>SETTING</h6>
          </div>
          <div className='footer__items-single-currencies --m-top'>
            <label class="footer__items-single-currencies-t small-text">Currencies</label>
            <select name="currency">
              <option value="USD" data-target="#" data-select2-id="6">MXN</option>
              <option value="EUR" data-target="#" data-select2-id="7">EUR</option>
              <option value="EUR" data-target="#" data-select2-id="7">USD</option>
              <option value="EUR" data-target="#" data-select2-id="7">AUD</option>
              <option selected="selected" value="AUD" data-target="#" data-select2-id="3">GBP</option>
            </select>
          </div>
        </div>
      </div>
      <div className='footer__sub-line'></div>
      <div className="footer__sub max-w-center theme-background theme-text-black">
        <h6 className="small-text">
          Copyright © {new Date().getFullYear()} Apart by <a href='https://github.com/Mike-codelive'>Mikeresolve</a>
        </h6>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`

  padding-top: 3rem;

  .item-center-lw {
    @media screen and (min-width: 400px) {
      text-align: center;
      .footer__items-single-title:after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    @media screen and (min-width: 700px) {
      text-align: initial;
      .footer__items-single-title:after {
        left: 0;
        transform: translateX(0);
      }
    }
  }

  .footer__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 2rem;

    &-single {
      flex: 0 0 100%;
      margin-bottom: 35px;
      @media screen and (min-width: 400px) {
        flex: 0 0 50%;
      }
      @media screen and (min-width: 700px) {
        flex: 1 0 auto;
      }
      &-title {
        padding-bottom: 20px;
        position: relative;
        &:after {
          content: '';
          height: 2px;
          background-color: var(--suttle-grey-color, #f5f5f5);
          width: 40%;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .--m-top {
        margin-top: 30px;
      }
      .--m-bottom {
        margin-bottom: 35px;
      }
      &-contact {
        border-left: 3px solid var(--primary-blue, #2c98f0);
        padding-left: 1rem;
        &:not(:last-child) {
          margin-bottom: 35px;
        }
        p:first-child {
          font-size: 13px;
          margin-bottom: 10px;
        }
        p:nth-of-type(2) {
          font-size: 22px;
          font-weight: bold;
        }
      }
      &-links {
        font-weight: bold;
        li:not(:last-child) {
          margin-bottom: 25px;
        }
        a {
          position: relative;
        }
        a:after {
          content: '';
          position: absolute;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: var(--primary-dark, #121212);
          width: 100%;
          transition: transform 0.3s ease-in-out;
          transform: scaleX(0);
        }
        a:hover:after {
          transform: scaleX(1);
        }
      }
      &-currencies {
        display: flex;
        flex-direction: column;
        &-select {

        }
        & > label {
          margin-bottom: 10px; 
        }
      }
    }
  }
  .footer__sub {
    display: flex;
    align-items: center;
    height: 5rem;
    &-line {
      height: 2px;
      background-color: var(--suttle-grey-color, #f5f5f5);
      width: 100vw;
    }
    a {
      color: var(--primary-blue, #2c98f0);
    }
  }
`

export default Footer

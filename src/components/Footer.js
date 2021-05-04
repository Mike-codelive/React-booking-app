import React from 'react'
import styled from 'styled-components'
import { AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {

  return (
    <Wrapper className='theme-background'>
      <div className='footer__items theme-text-dark max-w-center'>
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
            <div className='footer__items-single-icons'>
              <button href='#'><AiOutlineTwitter /></button>
              <button href='#'><AiOutlineYoutube /></button>
              <button href='#'><FaFacebookF /></button>
            </div>
          </div>
        </div>
        <div className='footer__items-single item-center-lw'>
          <div className='footer__items-single-title'>
            <h6 className='small-text'>COMPANY</h6>
          </div>
          <div className='footer__items-single-links small-text --m-top'>
            <ul >
              <li><button className='theme-text-dark' href='#'>About Us</button></li>
              <li><button className='theme-text-dark' href='#'>Community Blog</button></li>
              <li><button className='theme-text-dark' href='#'>Rewards</button></li>
              <li><button className='theme-text-dark' href='#'>Work Whit Us</button></li>
              <li><button className='theme-text-dark' href='#'>Meet The Team</button></li>
            </ul>
          </div>
        </div>
        <div className='footer__items-single item-center-lw'>
          <div className='footer__items-single-title'>
            <h6 className='small-text'>SUPPORT</h6>
          </div>
          <div className='footer__items-single-links small-text --m-top'>
            <ul>
              <li><button className='theme-text-dark' href='#'>Account</button></li>
              <li><button className='theme-text-dark' href='#'>Legal</button></li>
              <li><button className='theme-text-dark' href='#'>Contact</button></li>
              <li><button className='theme-text-dark' href='#'>Afiliate Program</button></li>
              <li><button className='theme-text-dark' href='#'>Privacy Policy</button></li>
            </ul>
          </div>
        </div>
        <div className='footer__items-single item-center-lw'>
          <div className='footer__items-single-title'>
            <h6 className='small-text'>SETTING</h6>
          </div>
          <div className='footer__items-single-currencies --m-top'>
            <label className="footer__items-single-currencies-t small-text">Currencies</label>
            <select name="currency">
              <option value="USD" data-target="#" data-select2-id="6">MXN</option>
              <option value="EUR" data-target="#" data-select2-id="7">EUR</option>
              <option value="EUR" data-target="#" data-select2-id="7">USD</option>
              <option value="EUR" data-target="#" data-select2-id="7">AUD</option>
              <option defaultValue="selected" value="AUD" data-target="#" data-select2-id="3">GBP</option>
            </select>
          </div>
        </div>
      </div>
      <div className='footer__sub-line'></div>
      <div className="footer__sub max-w-center theme-background theme-text-dark">
        <h6 className="small-text">
          Copyright © {new Date().getFullYear()} Apart by <a href='https://github.com/Mike-codelive'>Mike-codelive</a>
        </h6>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`

  padding-top: 3rem;

  .footer__items {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    margin-bottom: 2rem;

    &-single {
      flex: 0 0 100%;
      margin-bottom: 35px;
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
        li:not(:last-child) {
          margin-bottom: 25px;
        }
        button {
          font-family: var(--font-primary);
          font-size: 14px;
          position: relative;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
        button:after {
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
        button:hover:after {
          transform: scaleX(1);
        }
      }
      &-currencies {
        display: flex;
        flex-direction: column;
        & > label {
          margin-bottom: 10px; 
        }
      }
      &-icons {
        button {
          background-color: transparent;
          border: none;
          svg {
            font-size: 20px;
            cursor: pointer;
            color: var(--grey-icons-color, #5E6D77);
          }
        }
        button:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
  .footer__sub {
    display: flex;
    align-items: center;
    height: 5rem;
    &-line {
      height: 1px;
      background-color: var(--light-grey-color, #EAEEF3);
      width: 100%;
    }
    a {
      color: var(--primary-blue, #2c98f0);
    }
  }
}

  @media screen and (min-width: 400px) {
    .footer__items {
      &-single {
        flex: 0 0 50%;
      }

    .item-center-lw {
      text-align: center;
      .footer__items-single-title:after {
        left: 50%;
        transform: translateX(-50%);
      }
     }
  }
  @media screen and (min-width: 700px) {
    .footer__items {
      &-single {
        flex: 1 0 auto;
      }
    .item-center-lw {
      text-align: initial;
      .footer__items-single-title:after {
        left: 0;
        transform: translateX(0);
      }
    }
  }
}
`

export default Footer

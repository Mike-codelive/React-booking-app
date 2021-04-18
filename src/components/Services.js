import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper className='theme-background'>
      <div className="services max-w-center">
        <div className="header theme-text-dark">
          <h3>Custom Furniture <br /> Built only for you </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia
            quod?</p>
        </div>
        <div className='services-items'>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className='services-item'>
                <span className='icon'>{icon} </span>
                <h5 className='theme-text-dark'>{title}</h5>
                <p className='small-text theme-text-dark'>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 3rem 0;
  .header {
    margin-bottom: 3rem;
    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  .services-items {
    display: flex;
    flex-wrap: wrap;
    justify-content:center;

    .services-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      .icon {
        color: var(--primary-blue, #2c98f0);
        font-size: 3rem;
        margin-bottom: 2rem;
      }
      h5 {
        font-size: 16px;
        margin-bottom: 1rem;
      }
      p {
        text-align: center;
        width: 10rem;
      }
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      flex: 0 0 100%;
      @media screen and (min-width: 500px) {
        flex: 0 0 calc(50% - 3rem);
      }
      @media screen and (min-width: 750px) {
        flex: 0 0 calc(33.33333% - 3rem);
      }
    }
  }
@media screen and (min-width: 500px) {
  .services-item {
  flex: 0 0 calc(50% - 3rem);
  }
}
@media screen and (min-width: 750px) {
  .services-item {
  flex: 0 0 calc(33.33333% - 3rem);
  }
}
`
export default Services

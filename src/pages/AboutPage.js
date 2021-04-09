import React from 'react'
import styled from 'styled-components'
import { PageHero, AboutCards, AboutSwiper, AboutSendEmail } from '../components'
import { aboutHero, teamPic, teamPic1 } from '../assets'

const AboutPage = () => {

  return (

    <Wrapper className='theme-background'>
      <main>
        <section className='about__hero img-center'>
          <h2 className='max-w-center'>About Us</h2>
        </section>
        <PageHero title='about' />
        <section className='about__section max-w-center'>
          <div className='about__team'>
            <div className='about__team-col'>
              <div className='about__team-col-img img-center'></div>
              <div className='about__team-col-title'>
                <h3>Our Story</h3>
              </div>
              <div className='about__team-col-description theme-text-dark'>
                <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
                neque sem pretium metus, quis mollis nisl nunc et massa. Nam dapibus nisl vitae elit fringilla
                rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl
                nunc et massa.
                </p>
              </div>
            </div>
            <div className='about__team-col'>
              <div className='about__team-col-img about__team-col-img-1 img-center'></div>
              <div className='about__team-col-title'>
                <h3>Our Mission</h3>
              </div>
              <div className='about__team-col-description theme-text-dark'>
                <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
                neque sem pretium metus, quis mollis nisl nunc et massa. Nam dapibus nisl vitae elit fringilla
                rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl
                nunc et massa.
                </p>
              </div>
            </div>

          </div>
          <AboutCards />
        </section>
        <AboutSwiper />
        <AboutSendEmail />
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.about__hero {
  background-image: url(${aboutHero});
  padding: 81px 0;
  h2 {
      color: var(--static-white, #ffffff);
      text-align: center;
      @media screen and (min-width: 992px) {
        text-align: initial;
      }
    }
}
.about__section {
    padding-top: 60px;
}
  .about__team {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 2rem;
    @media screen and (min-width: 768px) {
      flex-wrap: unset;
    }
    &-col {
      &-img {
        background-image: url(${teamPic});
        height: 185px;
        &-1 {
          background-image: url(${teamPic1});
        }
      }
      &-title {
        margin: 2rem 0 1rem 0;
        font-size: 24px;
        color: var(--primary-blue, #2c98f0);
      }
      &-description {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
`
export default AboutPage

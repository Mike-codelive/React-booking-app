import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutHero from '../assets/main-hero-min.jpg'
import teamPic from '../assets/team-1-min.jpg'
import teamPic1 from '../assets/team-2-min.jpg'
import { useThemeToggle } from '../context/theme_toggle'

const AboutPage = () => {
  const { isLightThemeActive } = useThemeToggle();

  return (

    <Wrapper>
      <main>
        <section className='about__hero img-center'>
          <h2 className='max-w-center'>About Us</h2>
        </section>
        <PageHero title='about' />
        <section className={`about__section max-w-center ${isLightThemeActive ? 'light-theme' : 'dark-theme'}`}>
          <div className='about__team'>
            <div className='about__team-col'>
              <div className='about__team-col-img img-center'></div>
              <div className='about__team-col-title'>
                <h3>Our Story</h3>
              </div>
              <div className='about__team-col-description'>
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
              <div className='about__team-col-description'>
                <p>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum,
                neque sem pretium metus, quis mollis nisl nunc et massa. Nam dapibus nisl vitae elit fringilla
                rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem pretium metus, quis mollis nisl
                nunc et massa.
                </p>
              </div>
            </div>

          </div>



          {/* <img src={aboutImg} alt='nice desk' /> */}
          <article>
            <div className='title'>
              <h2>our story</h2>
              <div className='underline'></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              quaerat, modi doloremque necessitatibus eum dolor nesciunt delectus,
              voluptate blanditiis, obcaecati beatae ab aut ipsa consequuntur
              tempora cumque. Ut quo enim vero odio minus nostrum eveniet,
              doloribus veritatis dolorem unde ipsum, voluptatibus totam.
              Explicabo, quas libero! Laborum incidunt minima consequatur ratione?
            </p>
          </article>
        </section>
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
    margin-top: 60px;
    background-color: var(--primary-light, #ffffff);
}
  .about__team {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
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
        color: var(--primary-dark, #121212);
      }
    }
  }
`
export default AboutPage

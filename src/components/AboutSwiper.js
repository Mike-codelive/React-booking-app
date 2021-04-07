import 'swiper/swiper-bundle.css';
import React from 'react'
import styled from 'styled-components'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper/core';


const AboutSwiper = () => {

  // Install modules
  Swiper.use([Navigation, Pagination, Autoplay]);
  const mainSwiper = new Swiper('.about-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.button-about-prev',
      nextEl: '.button-about-next',
    },
    pagination: {
      el: '.about-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';;
      },
    }

  })

  return (
    <Wrapper >
      <div className="swiper-container about-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          <div className="swiper-slide">Slide 4</div>
          <div className="swiper-slide">Slide 5</div>
          <div className="swiper-slide">Slide 6</div>
        </div>

        <div className="swiper-button-prev button-about-swr button-about-prev"><HiOutlineArrowLeft /></div>
        <div className="swiper-button-next button-about-swr button-about-next"><HiOutlineArrowRight /></div>

      </div>
      <div className="about-swiper__pagination">
        <div className="swiper-pagination about-pagination"></div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  height: 10rem;
  .about-swiper {
    &__pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
    }
  }
  .swiper-wrapper {
    height: 5rem;
  }

  .swiper-pagination-bullet {
		background-color: var(--grey-bullets-color, #A0A9B2) !important;
		width: 16px !important;
		height: 16px !important;
		border-radius: 50% !important;
		margin-right: 12px;
	}
  .swiper-pagination-bullet-active {
		background-color: var(--static-light, #ffffff) !important;
    border: 2px solid var(--primary-blue, #2c98f0) 
	}
  .button-about-swr {
    background-color: rgba(26, 43, 72, 0.6);
    width: 50px;
    height: 50px;
    border-radius: 3px;
    svg {
      font-size: 30px;
      color: var(--static-white, #ffffff);
    }
  }
  .swiper-button-prev:after {
    content: '' !important;
  }
  .swiper-button-next:after {
    content: '' !important;
  }

`
export default AboutSwiper

import 'swiper/swiper-bundle.min.css';
import React, { useRef } from 'react'
import styled from 'styled-components'
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { about_swiper_1, about_swiper_2, about_swiper_3, about_swiper_4, about_swiper_5, about_swiper_6 } from '../assets'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


const aboutImages = { about_swiper_1, about_swiper_2, about_swiper_3, about_swiper_4, about_swiper_5, about_swiper_6 };

let stylesSwiperImages = '', counterImg = 1, swiperSlidesNum = 1, swiperSlides = []

for (var img in aboutImages) {
  stylesSwiperImages += `.slide-img-${counterImg} {
    background-image: url(${aboutImages[img]});
  }`
  counterImg++
  swiperSlidesNum++
}

for (let i = 1; swiperSlidesNum > i; i++) {
  swiperSlides.push(<SwiperSlide key={i} className={`swiper-slide img-center slide-img-${i}`}></SwiperSlide>)
}

const AboutSwiper = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Wrapper >
      <Swiper
        className="about-swiper"
        spaceBetween={10}
        slidesPerView={'auto'}
        loop={true}
        grabCursor={false}
        centeredSlides={true}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;

          swiper.navigation.init();
          swiper.navigation.update();

        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        <div className='swiper-slides'>
          {swiperSlides}
        </div>
        <div className='about-swiper__cta'>
          <h4>Life at Apart</h4>
          <Link to='/products' className='about-swiper__cta-btn'>
            <span>Apart Store</span>
          </Link>
        </div>
        <div ref={prevRef} className="swiper-button-prev button-about-swr button-about-prev" ><HiOutlineArrowLeft /></div>
        <div ref={nextRef} className="swiper-button-next button-about-swr button-about-next" ><HiOutlineArrowRight /></div>

      </Swiper>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  ${stylesSwiperImages}
  margin-top: 2rem;
  
  .about-swiper {
    height: calc(500px + 2.9rem);
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-slide {
      height: 500px;
      width: 75%;
    }
    &__cta {
      position: absolute;
      text-align: center;
      z-index: 9999;
      margin-top: -2.9rem;
      h4 {
        font-size: 2.5rem;
        margin-bottom: 30px;
        font-weight: bold;
        color: var(--static-white, #ffffff);
      }
      &-btn {
        position: relative;
        padding: 10px 20px;
        background-color: var(--primary-blue, #2c98f0);
        color: var(--static-white, #ffffff);
        border-radius: 3px;
        span {
          position: relative;
          z-index: 5;
        }
        &:hover:before {
          height: 100%;
        }
        &:hover span {
          color: var(--static-dark, #121212);
        }
        &:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 0;
          width: 100%;
          background-color: #fff;
          border-radius: 3px;
          transition: height 0.2s;
          z-index: 0;
        }
      }
    }
  }
  .swiper-pagination-bullet {
		background-color: var(--grey-bullets-color, #A0A9B2) !important;
		width: 16px !important;
		height: 16px !important;
		border-radius: 50% !important;
    :not(:last-child) {
		margin-right: 20px !important;
    }
	}
  .swiper-pagination-bullet-active {
		background-color: var(--static-light, #ffffff) !important;
    border: 2px solid var(--primary-blue, #2c98f0) 
	}
  .button-about-swr {
    background-color: rgba(26, 43, 72, 0.6);
    margin-top: -2.9rem;
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

@media screen and (min-width: 992px) {
          .about-swiper {
            &__cta {
              h4 {
                  font-size: 4rem;
                }
              }
            }
        }

`
export default AboutSwiper

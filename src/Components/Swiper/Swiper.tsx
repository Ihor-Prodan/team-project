import React, { useEffect, useRef } from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';
import 'swiper/css';
import './mySwiper.scss';
import one from './Pictures/Number=01.png';
import two from './Pictures/Number=02.png';
import three from './Pictures/Number=03.png';
import four from './Pictures/Number=04.png';
import five from './Pictures/Number=05.png';
import six from './Pictures/Number=06.png';
import seven from './Pictures/Number=07.png';

export const MySwiper: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slides = [one, two, three, four, five, six, seven];

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      slideNext();
    }, 5000);
  };

  useEffect(() => {
    startInterval();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="slider__wrapper">
        <section className="slider">
          <div className="slider__title-buttons">
            <h2 className="slider__title">Take a Look Inside</h2>
            <div className="slider__buttons-container">
              <svg
                className="slider__button"
                onClick={() => slidePrev()}
                aria-label="Previous"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 56 56"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="7.5"
                  stroke="#C3C3C3"
                />
                <path
                  d="M32.6667 16.3333L21 28L32.6667 39.6667"
                  stroke="#EDEDED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                onClick={() => slideNext()}
                aria-label="Next"
                className="slider__button"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 56 56"
                fill="none"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="55"
                  height="55"
                  rx="7.5"
                  stroke="#C3C3C3"
                />
                <path
                  d="M23.3333 39.6667L35 28L23.3333 16.3333"
                  stroke="#EDEDED"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <ReactSwiper
            loop={true}
            spaceBetween={90}
            slidesPerView={'auto'}
            speed={900}
            mousewheel={true}
            onSwiper={(swiper: any) => {
              swiperRef.current = swiper;
            }}
          >
            {slides &&
              slides.map(slide => (
                <SwiperSlide key={slide} style={{ width: '100%' }}>
                  <img className="slider__slide" src={slide}></img>
                </SwiperSlide>
              ))}
          </ReactSwiper>
        </section>
      </div>
    </>
  );
};

export default MySwiper;

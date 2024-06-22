/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Home.scss';
import poster from './Pictures/main-poster.png';
import { WorkoutsCart } from '../Workouts-Cart/Workouts-Cart';
import { Slider } from '../Slider/Slider';
import Footer from '../Footer/Footer';

export const HomePage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.src = poster;
    img.onload = () => setLoaded(true);
  }, [poster]);

  const aboutDescription = [
    '2500 m² space to grow',
    'Diverse plans',
    'Top-quality Technogym equipment',
    'Expert trainers',
  ];

  const initialCart = [
    {
      id: '1',
      name: 'Group Workout',
      duration: '45 - 90 min',
      people: 'up to 20 people',
      description:
        'Join energetic group workouts where motivation thrives in a supportive community environment.',
    },
    {
      id: '2',
      name: 'Trainer-Led Workout',
      duration: '60 min',
      people: '2 people',
      description:
        'Experience personalized guidance and expertise with our trainer-led workouts tailored to your fitness goals.',
    },
    {
      id: '3',
      name: 'Self-Guided Workout',
      duration: 'as you like',
      people: 'only you',
      description:
        'Enjoy the flexibility of self-guided training sessions, empowering you to pursue fitness at your own pace.',
    },
  ];

  const handleMouseDown = () => {
    setActive(true);
  };

  const handleMouseUp = () => {
    setActive(false);
  };

  return (
    <>
      <div className="home__page-wrapper">
        <Header />
        <section className="home__page">
          <div className="home__page-top">
            <h1 className="home__page-title">Synchronize your life</h1>
            <p className="home__page-slogan">
              Experience harmony of body and mind at Pulse Gym
            </p>
            <button
              className="home__page-top-button"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              Book a workout
              <svg
                className="home__page-button-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12.013L20.789 12M14.013 19L21 12L14.012 5"
                  strokeWidth={active ? '2' : ''}
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <img
            className={`home__page-main-poster ${loaded ? 'loaded' : ''}`}
            src={poster}
          ></img>
          <div className="home__page-bottom">
            <div className="home__page-about-flex-container">
              <div className="home__page-about-container">
                <h2 className="home__page-about-title">about gym</h2>
                <div className="home__page-description-container">
                  {aboutDescription.map(item => (
                    <div className="home__page-about-items" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="home__page-descriptions">
                <p className="home__page-about-description">
                  We created our gym to help you align your physical and mental
                  well-being, providing a balanced approach to fitness.
                </p>
                <p className="home__page-about-description">
                  Located in the heart of Kyiv, our sports club offers a
                  comprehensive fitness experience, including group classes,
                  personalized training sessions with professional coaches, and
                  independent workouts, all featuring access to advanced fitness
                  equipment.
                </p>
              </div>
            </div>
            <div className="home__page-workout-plans-container">
              <h2 className="home__page-workout-title"></h2>
              <article className="home__page-workouts-list">
                {initialCart.map(cart => (
                  <WorkoutsCart cart={cart} key={cart.id} />
                ))}
              </article>
            </div>
            <div className="home__page-slider-container">
              <div className="home__page-slider-titleAndButton">
                <Slider />
              </div>
            </div>
          </div>
          <div className="home__page-ready-container">
            <h2 className="home__page-ready-title">ready to rock?</h2>
            <button
              className="home__page-ready-button"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
            >
              Book a workout
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12.013L20.789 12M14.013 19L21 12L14.012 5"
                  strokeWidth={active ? '2' : ''}
                  stroke="#111115"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

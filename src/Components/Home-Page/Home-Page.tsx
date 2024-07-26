/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import './home.scss';
import poster from './Pictures/BG-poster.png';
import { WorkoutsCard } from '../Workouts-Card-home/Workouts-CardHome';
import Footer from '../Footer/Footer';
import { Theme } from '../Redux/Slices/themeMode';
import { aboutDescription, initialCart } from './Helpers/card-data-home';
import useLoadAnimation from '../../Hooks/animation';
import MySwiper from '../Swiper/Swiper';
import useScrollToTop from '../../Hooks/location';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setIsModal } from '../Redux/Slices/Modal';
import { Auth } from '../Auth/Auth';
import useResponsive from '../../Hooks/sizing';
import PageMenu from '../PageMenu/PageMenu';
import { useNavigate } from 'react-router-dom';
import { setIsOpenMenu } from '../Redux/Slices/Menu';

interface Props {
  themeColor: Theme;
}

export const HomePage: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const dispatch = useAppDispatch();
  const [headerDark, setHeaderDark] = useState(Theme.light);
  const darkSectionRef = useRef<HTMLDivElement>(null);
  const loaded = useLoadAnimation(poster);
  const currentUser = useAppSelector(state => state.user.user);
  const { isSmallScreen } = useResponsive();
  const navigate = useNavigate();

  //header color change function
  useEffect(() => {
    const handleScroll = () => {
      if (darkSectionRef.current) {
        const darkSectionTop =
          darkSectionRef.current.getBoundingClientRect().top;

        if (darkSectionTop <= 0) {
          setHeaderDark(Theme.dark);
        } else {
          setHeaderDark(Theme.light);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [themeColor]);
  //header color change function

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate, dispatch]);

  const isUser = () => {
    if (!currentUser) {
      dispatch(setIsModal(true));
    }

    if (!currentUser?.membership.date) {
      navigate('/prices');
    } else {
      navigate('/timetable/trainer-led-workout');
    }
  };

  return (
    <>
      <div className="home__page-wrapper">
        <Header themeColor={headerDark} />
        <section className="home__page">
          <div className="home__page-top">
            <h1 className="home__page-title">Synchronize your life</h1>
            <p className="home__page-slogan">
              Experience harmony of body and mind at Pulse Gym
            </p>
            <button className="home__page-top-button" onClick={isUser}>
              <span className="home__page-top-button-text">Book a workout</span>
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
                  strokeWidth="1"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="home__page-gradient">
            <img
              className={`home__page-main-poster ${loaded ? 'loaded' : ''}`}
              src={poster}
            ></img>
          </div>

          <div className="home__page-bottom" ref={darkSectionRef}>
            {!isSmallScreen ? (
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
                    We created our gym to help you align your physical and
                    mental well-being, providing a balanced approach to fitness.
                  </p>
                  <p className="home__page-about-description">
                    Located in the heart of Kyiv, our sports club offers a
                    comprehensive fitness experience, including group classes,
                    personalized training sessions with professional coaches,
                    and independent workouts, all featuring access to advanced
                    fitness equipment.
                  </p>
                </div>
              </div>
            ) : (
              <div className="home__page-about-flex-container">
                <div className="home__page-about-container w-full">
                  <h2 className="home__page-about-title">about gym</h2>
                  <div className="home__page-description-container w-full mt-6">
                    <p className="home__page-about-description w-full">
                      We created our gym to help you align your physical and
                      mental well-being, providing a balanced approach to
                      fitness.
                    </p>
                    <p className="home__page-about-description w-full">
                      Located in the heart of Kyiv, our sports club offers a
                      comprehensive fitness experience, including group classes,
                      personalized training sessions with professional coaches,
                      and independent workouts, all featuring access to advanced
                      fitness equipment.
                    </p>
                  </div>
                </div>
                <div className="home__page-descriptions mt-10">
                  {aboutDescription.map(item => (
                    <div className="home__page-about-items" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="home__page-workout-plans-container">
              <h2 className="home__page-workout-title">Workout plans</h2>
              <article className="home__page-workouts-list">
                {initialCart.map(cart => (
                  <WorkoutsCard cart={cart} key={cart.id} />
                ))}
              </article>
            </div>
            <div className="home__page-slider-container">
              <div className="home__page-slider-titleAndButton">
                <MySwiper />
              </div>
            </div>
          </div>
          <div className="home__page-ready-container">
            <h2 className="home__page-ready-title">ready to rock?</h2>
            <button className="home__page-ready-button" onClick={isUser}>
              Book a workout
              <svg
                className="home__page-ready-button-arrow-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12.013L20.789 12M14.013 19L21 12L14.012 5"
                  strokeWidth="1"
                  stroke="#111115"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        <Footer />
        {isModalVisible && !currentUser && <Auth />}
        <PageMenu themeColor={Theme.dark} />
      </div>
    </>
  );
};

export default React.memo(HomePage);

/* eslint-disable max-len */
import React from 'react';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './workoutPlans.scss';
import sectionLed from './Pictures/section-led.png';
import sectionSelf from './Pictures/section-self.png';
import { selfGuidedWorkoutPlans, workoutPlansLed } from './Helpers/cartData';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/location';
import { useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';

interface Props {
  themeColor: Theme;
  isLedWorkout: boolean;
  workoutName: string;
}

export const LedWorkout: React.FC<Props> = ({
  themeColor,
  isLedWorkout,
  workoutName,
}) => {
  useScrollToTop();
  const navigate = useNavigate();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const cartData = isLedWorkout ? workoutPlansLed : selfGuidedWorkoutPlans;

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="LedWorkout bg-[#111115]">
        <div className="workout__title-description-container">
          <h2 className="workout__title">Workout plans</h2>
          <p className="workout__descriptions">
            {isLedWorkout
              ? 'Join our personalized training sessions with experienced trainers who will help you develop a customized workout program.'
              : 'Discover the freedom of self-guided workouts, where you can create your own schedule and enjoy maximum flexibility.'}
          </p>
        </div>
        <h3 className="workout__title-group">{workoutName}</h3>
        <div className="workout__content-container">
          <div className="workout__content-info-container">
            {cartData.map((info, ind) => {
              const Icon = info.icon;

              return (
                <div className="workout__content-info" key={ind}>
                  <div className="workout__content-info-icon">
                    <Icon />
                  </div>
                  <div className="workout__content-info-nameAndText">
                    <h4 className="workout__content-info-name">{info.title}</h4>
                    <p className="workout__content-info-text">
                      {info.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <button
              className="workout__content-info-bookButton"
              onClick={() => navigate('/timetable/trainer-led-workout')}
            >
              <span className="workout__button-text">Book a Workout</span>
              <svg
                className="workout__ready-button-arrow-white"
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
          <img
            src={isLedWorkout ? sectionLed : sectionSelf}
            className="workout__content-info-img"
          />
        </div>
      </section>
      <Footer />
      {isModalVisible && <Auth />}
    </div>
  );
};

export default React.memo(LedWorkout);

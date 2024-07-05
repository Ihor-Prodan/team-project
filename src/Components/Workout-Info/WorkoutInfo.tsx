/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './workoutInfo.scss';
import Footer from '../Footer/Footer';
import { Link, useParams } from 'react-router-dom';
import useLoadAnimation from '../../Hooks/animation';
import { CardType, initialStateCart } from '../Workout-plans/initialCartData';
import useScrollToTop from '../../Hooks/location';

interface Props {
  themeColor: Theme;
}

export const WorkoutInfo: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const { id } = useParams();
  const [workout, setWorkout] = useState<CardType | null>(null);
  const loaded = useLoadAnimation(workout?.image);

  const getWorkoutById = (cartId: string): CardType | undefined => {
    return initialStateCart.find(wor => wor.id === cartId);
  };

  useEffect(() => {
    if (id) {
      const workoutCard = getWorkoutById(id);

      if (workoutCard) {
        setWorkout(workoutCard);
      } else {
        setWorkout(null);
      }
    }
  }, [id]);

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="workout__detail bg-[#111115]">
        <div className="workout__detail-linkContainer">
          <Link to={'/workout/group-workout'}>
            <p className="workout__detail-linkContainer-plans">Workout plans</p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 17L15 12L10 7"
              stroke="#F3F4F6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="workout__detail-linkContainer-name">{workout?.name}</p>
        </div>
        <div className="workout__detail-grid">
          <div
            className={`workout__detail-grid-content ${loaded ? 'loaded' : ''}`}
          >
            <div className="workout__detail-grid-content-titleAndicon">
              <h3 className="workout__detail-grid-content-titleAndicon-title">
                {workout?.name}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="17"
                viewBox="0 0 60 17"
                fill="none"
              >
                <path
                  d="M8.33333 16.6647C12.9357 16.6647 16.6667 12.9338 16.6667 8.33138C16.6667 3.72901 12.9357 -0.00195312 8.33333 -0.00195312C3.73096 -0.00195312 0 3.72901 0 8.33138C0 12.9338 3.73096 16.6647 8.33333 16.6647Z"
                  fill="#BEAFA9"
                />
                <path
                  d="M29.7611 16.6647C34.3634 16.6647 38.0944 12.9338 38.0944 8.33138C38.0944 3.72901 34.3634 -0.00195312 29.7611 -0.00195312C25.1587 -0.00195312 21.4277 3.72901 21.4277 8.33138C21.4277 12.9338 25.1587 16.6647 29.7611 16.6647Z"
                  fill="#BEAFA9"
                />
                <path
                  d="M59.0241 8.33138C59.0241 12.6576 55.517 16.1647 51.1908 16.1647C46.8645 16.1647 43.3574 12.6576 43.3574 8.33138C43.3574 4.00515 46.8645 0.498047 51.1908 0.498047C55.517 0.498047 59.0241 4.00515 59.0241 8.33138Z"
                  stroke="#BEAFA9"
                />
              </svg>
            </div>
            <div
              className={`workout__detail-grid-content  ${loaded ? 'loaded' : ''}`}
            >
              <div className="workout__detail-grid-content-aboutWorkout">
                <p className="workout__detail-grid-content-title">Duration</p>
                <p className="workout__detail-grid-content-text">
                  {workout?.duration}
                </p>
              </div>
              <div className="workout__detail-grid-content-aboutWorkout">
                <p className="workout__detail-grid-content-title">
                  About Workout
                </p>
                <p className="workout__detail-grid-content-text trainer">
                  Trainer: {workout?.couch}
                </p>
                <p className="workout__detail-grid-content-text">
                  {workout?.description}
                </p>
              </div>
              <div className="workout__detail-grid-content-aboutWorkout">
                <p className="workout__detail-grid-content-title">
                  Preparation Tips
                </p>
                <p className="workout__detail-grid-content-text">
                  {workout?.preparationTips}
                </p>
              </div>
            </div>
            <button className="workout__detail-grid-content-button">
              <span className="workout__button-text">
                book a Trainer-Led Workout
              </span>
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
          <div className="workout__detail-grid-img-wrapper">
            <img
              src={workout?.image}
              className={`workout__detail-grid-img ${loaded ? 'loaded' : ''}`}
              alt={workout?.name}
            ></img>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

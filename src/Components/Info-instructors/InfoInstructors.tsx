/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './infoInstructors.scss';
import { TrainerType, trainers } from '../Instructors/trainersList';
import Footer from '../Footer/Footer';
import useLoadAnimation from '../../Hooks/animation';
import useScrollToTop from '../../Hooks/location';

interface Props {
  themeColor: Theme;
}

export const InfoInstructors: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const [trainer, setTrainer] = useState<TrainerType | null>(null);
  const { id } = useParams();
  const loaded = useLoadAnimation(trainer?.image);

  const getWorkoutById = (trainerId: string): TrainerType | undefined => {
    return trainers.find(t => t.id === trainerId);
  };

  useEffect(() => {
    if (id) {
      const instructors = getWorkoutById(id);

      if (instructors) {
        setTrainer(instructors);
      } else {
        setTrainer(null);
      }
    }
  }, [id]);

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="instructors__details">
        <div className="instructors__details-linkContainer">
          <Link to={'/trainers'}>
            <p className="instructors__details-linkContainer-trainers">
              Trainers
            </p>
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
          <p className="instructors__details-linkContainer-name">
            {trainer?.name}
          </p>
        </div>
        <div className="instructors__details-grid">
          <div
            className={`instructors__details-grid-content ${loaded ? 'loaded' : ''}`}
          >
            <div className="instructors__details-grid-content-titleAndicon">
              <h3 className="instructors__details-grid-content-titleAndicon-title">
                {trainer?.name}
              </h3>
            </div>
            <div
              className={`instructors__details-grid-content-aboutWorkout ${loaded ? 'loaded' : ''}`}
            >
              <div className="instructors__details-grid-content-aboutWorkout">
                <p className="instructors__details-grid-content-title">
                  Specialty
                </p>
                <p className="instructors__details-grid-content-text">
                  {trainer?.specialty}
                </p>
              </div>
              <div className="instructors__details-grid-content-aboutWorkout">
                <p className="instructors__details-grid-content-title">
                  Professional Experience
                </p>
                <p className="instructors__details-grid-content-text">
                  {trainer?.experience}
                </p>
                <p className="instructors__details-grid-content-text-two">
                  {trainer?.experiencetwo}
                </p>
              </div>
              <div className="instructors__details-grid-content-aboutWorkout">
                <p className="instructors__details-grid-content-title">Price</p>
                <p className="instructors__details-grid-content-text">
                  {`${trainer?.price} ₴ / 1 workout`}
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
          {trainer?.isTop && (
            <div
              className={`instructors__details-grid-img-info-top ${loaded ? 'loaded' : ''}`}
            >
              Top trainer
            </div>
          )}
          <img
            src={trainer?.image}
            className={`instructors__details-grid-img ${loaded ? 'loaded' : ''}`}
            alt={trainer?.name}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

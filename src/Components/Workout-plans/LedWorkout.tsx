/* eslint-disable max-len */
import React from 'react';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './workoutPlans.scss';

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
  return (
    <div className="wrapper">
      <section className="LedWorkout bg-[#111115]">
        <Header themeColor={themeColor} />
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
            <div className="workout__content-info"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

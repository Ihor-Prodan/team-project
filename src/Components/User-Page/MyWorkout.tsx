/* eslint-disable max-len */
import React, { useEffect } from 'react';
import './userPage.scss';
import './myworkout.scss';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../Redux/Slices/User';
import { setIsOpenMenu } from '../Redux/Slices/Menu';

export const MyWorkout: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  const removeWorkout = (workoutId: string) => {
    if (currentUser) {
      const updatedWorkouts = currentUser.workouts.filter(
        workout => workout.id !== workoutId,
      );
      const updatedUser = {
        ...currentUser,
        workouts: updatedWorkouts,
      };

      dispatch(updateUser(updatedUser));
    }
  };

  return (
    <div className="userPage__info-container-modalInfo">
      <div className="userPage__info-container-modalInfo-top">
        <h3 className="userPage__info-container-modalInfo-top-title">
          Trainer-led workouts
        </h3>
        {currentUser?.workouts && (
          <button
            className="my__workout-bookButton"
            onClick={() => navigate('/timetable/trainer-led-workout')}
          >
            Book a workout
          </button>
        )}
      </div>
      {(!currentUser?.workouts || currentUser.workouts.length === 0) && (
        <div className="userPage__info-container-member-content mt-8">
          <div className="userPage__info-container-member">
            <p className="userPage__info-container-member-text">
              You do not have any trainer-led workouts yet
            </p>
            <button
              className="userPage__info-container-member-button"
              onClick={() => navigate('/timetable/trainer-led-workout')}
            >
              Book a workout
            </button>
          </div>
        </div>
      )}

      {currentUser?.workouts && currentUser.workouts.length > 0 && (
        <div className="my__workout-grid">
          {currentUser.workouts.map(item => (
            <div className="my__workout-grid-card" key={item.id}>
              <p className="my__workout-grid-card-title">{item.trainer}</p>
              <div className="my__workout-grid-card-content">
                <p className="my__workout-grid-card-content-name">
                  Date:
                  <span className="my__workout-grid-card-content-info ml-8"></span>
                  {item.date}
                </p>
                <p className="my__workout-grid-card-content-name">
                  Time:
                  <span className="my__workout-grid-card-content-info ml-8"></span>
                  {item.time}
                </p>
                <p className="my__workout-grid-card-content-name">
                  Location:
                  <span className="my__workout-grid-card-content-info ml-2"></span>
                  {item.location}
                </p>
              </div>
              <button
                className="my__workout-grid-card-cancel"
                onClick={() => removeWorkout(item.id)}
              >
                Cancel workout
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(MyWorkout);

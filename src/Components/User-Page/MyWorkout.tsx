/* eslint-disable max-len */
import React, { useState } from 'react';
import './userPage.scss';
import './myworkout.scss';

export const MyWorkout: React.FC = () => {
  const [bookWorkout, setIsBookWorkout] = useState(false);
  const myWorkoutList = [
    {
      trainerName: 'Daryna Milovska',
      date: '01.06.2024',
      time: '10:00 - 11:00',
      location: 'Gym',
      id: '1',
    },
    {
      trainerName: 'Oleksandr Kovalchuk',
      date: '01.06.2024',
      time: '8:00 - 9:00',
      location: 'Gym',
      id: '2',
    },
    {
      trainerName: 'Natalia Voloshyna',
      date: '02.06.2024',
      time: '11:00 - 12:00',
      location: 'Gym',
      id: '3',
    },
    {
      trainerName: 'Yuliya Shevchenko',
      date: '03.06.2024',
      time: '17:00 - 18:00',
      location: 'Gym',
      id: '4',
    },
  ];

  const handleBookWorkout = () => {
    setIsBookWorkout(false);
  };

  return (
    <div className="userPage__info-container-modalInfo">
      <div className="userPage__info-container-modalInfo-top">
        <h3 className="userPage__info-container-modalInfo-top-title">
          Trainer-led workouts
        </h3>
        {!bookWorkout && (
          <button
            className="my__workout-bookButton"
            onClick={() => setIsBookWorkout(false)}
          >
            Book a workout
          </button>
        )}
      </div>
      {bookWorkout && (
        <div className="userPage__info-container-member-content mt-8">
          <div className="userPage__info-container-member">
            <p className="userPage__info-container-member-text">
              You do not have any trainer-led workouts yet
            </p>
            <button
              className="userPage__info-container-member-button"
              onClick={handleBookWorkout}
            >
              Book a workout
            </button>
          </div>
        </div>
      )}

      {true && (
        <div className="my__workout-grid">
          {myWorkoutList.map(item => (
            <div className="my__workout-grid-card" key={item.id}>
              <p className="my__workout-grid-card-title">{item.trainerName}</p>
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
              <button className="my__workout-grid-card-cancel">
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

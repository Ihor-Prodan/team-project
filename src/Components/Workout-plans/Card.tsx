/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Workouts } from '../../Types/WorkoutsType';
import useLoader from '../../Hooks/loading';
import Loader from '../Loader/Loader';

interface Props {
  card: Workouts;
}

export const Card: React.FC<Props> = ({ card }) => {
  const isLoading = useLoader(1000);

  return (
    <div className="workout__list-cart">
      {isLoading ? (
        <div className="flex items-center justify-center w-full h-[420px]">
          <Loader />
        </div>
      ) : (
        <NavLink to={`/workout/group-workout/${card.id}`} className="w-full">
          <img src={card.image} className="workout__list-cart-img"></img>
        </NavLink>
      )}
      <div className="workout__list-cart-content">
        <div className="workout__list-cart-content-titleAndStrong">
          <NavLink to={`/workout/group-workout/${card.id}`}>
            <span className="workout__list-cart-content-titleAndStrong-title">
              {card.name}
            </span>
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="10"
            viewBox="0 0 30 9"
            fill="none"
          >
            <circle
              cx="4.16667"
              cy="4.16667"
              r="4.16667"
              {...(card?.hardLevel && parseInt(card.hardLevel) >= 1
                ? { fill: '#BEAFA9' }
                : { stroke: '#BEAFA9' })}
            />
            <circle
              cx="14.8815"
              cy="4.16667"
              r="4.16667"
              {...(card?.hardLevel && parseInt(card.hardLevel) >= 2
                ? { fill: '#BEAFA9' }
                : { stroke: '#BEAFA9' })}
            />
            <circle
              cx="25.5964"
              cy="4.16667"
              r="4.16667"
              {...(card?.hardLevel && parseInt(card.hardLevel) >= 3
                ? { fill: '#BEAFA9' }
                : { stroke: '#BEAFA9' })}
            />
          </svg>
        </div>
      </div>
      <div className="workout__list-cart-bodyText-container">
        <p className="workout__list-cart-bodyText">{card.description}</p>
      </div>
    </div>
  );
};

export default React.memo(Card);

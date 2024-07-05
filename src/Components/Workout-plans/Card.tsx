/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { CardType } from './initialCartData';

interface Props {
  card: CardType;
}

export const Card: React.FC<Props> = ({ card }) => {
  return (
    <div className="workout__list-cart">
      <NavLink to={`/workout/group-workout/${card.id}`} className="w-full">
        <img src={card.image} className="workout__list-cart-img"></img>
      </NavLink>
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
            height="9"
            viewBox="0 0 30 9"
            fill="none"
          >
            <path
              d="M4.16667 8.33333C6.46785 8.33333 8.33333 6.46785 8.33333 4.16667C8.33333 1.86548 6.46785 0 4.16667 0C1.86548 0 0 1.86548 0 4.16667C0 6.46785 1.86548 8.33333 4.16667 8.33333Z"
              fill="#BEAFA9"
            />
            <path
              d="M14.8815 8.33333C17.1827 8.33333 19.0482 6.46785 19.0482 4.16667C19.0482 1.86548 17.1827 0 14.8815 0C12.5803 0 10.7148 1.86548 10.7148 4.16667C10.7148 6.46785 12.5803 8.33333 14.8815 8.33333Z"
              fill="#BEAFA9"
            />
            <path
              d="M29.263 4.16667C29.263 6.19171 27.6214 7.83333 25.5964 7.83333C23.5713 7.83333 21.9297 6.19171 21.9297 4.16667C21.9297 2.14162 23.5713 0.5 25.5964 0.5C27.6214 0.5 29.263 2.14162 29.263 4.16667Z"
              stroke="#BEAFA9"
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

export default Card;

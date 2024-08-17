/* eslint-disable max-len */
import React from 'react';
import './workout.scss';
import { Link } from 'react-router-dom';

export type Card = {
  id: string;
  name: string;
  duration: string;
  people: string;
  description: string;
  path: string;
};

interface Props {
  cart: Card;
}

export const WorkoutsCard: React.FC<Props> = ({ cart }) => {
  return (
    <section className="workout__cart">
      <div className="workout__cart-planes">
        <h3 className="workout__cart-name">{cart.name}</h3>
        <div className="workout__cart-info">
          <div className="workout__cart-time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 17.5C13.6944 17.5 17.5 13.6944 17.5 9C17.5 4.30558 13.6944 0.5 9 0.5C4.30558 0.5 0.5 4.30558 0.5 9C0.5 13.6944 4.30558 17.5 9 17.5Z"
                stroke="#EDEDED"
              />
              <path
                d="M13.5 9H9.25C9.1837 9 9.12011 8.97366 9.07322 8.92678C9.02634 8.87989 9 8.8163 9 8.75V5.5"
                stroke="#EDEDED"
                strokeLinecap="round"
              />
            </svg>
            <p className="workout__cart-info-workout">{cart.duration}</p>
          </div>
          <div className="workout__cart-time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M17 14.0001C17 12.2472 15.5156 9.74946 13.4444 9.19675M6.33333 8.96777C8.46155 8.96777 10.2984 10.4339 11.1541 12.0861C11.662 13.067 10.7712 14.0001 9.66667 14.0001H3C1.89543 14.0001 1.00465 13.067 1.51261 12.0861C2.36827 10.4339 4.20512 8.96777 6.33333 8.96777Z"
                stroke="#F3F4F6"
              />
              <path
                d="M6.33268 6.03235C7.80544 6.03235 8.99935 4.90582 8.99935 3.51617C8.99935 2.12653 7.80544 1 6.33268 1C4.85992 1 3.66602 2.12653 3.66602 3.51617C3.66602 4.90582 4.85992 6.03235 6.33268 6.03235Z"
                stroke="#F3F4F6"
              />
              <path
                d="M12 6C12.5 6 13.0515 5.76725 13.5516 5.29538C14.0517 4.8235 14.3327 4.1835 14.3327 3.51617C14.3327 2.84884 14.0517 2.20884 13.5516 1.73697C13.0515 1.2651 12.3733 1 11.666 1"
                stroke="#F3F4F6"
              />
            </svg>
            <p className="workout__cart-info-workout">{cart.people}</p>
          </div>
        </div>
      </div>
      <div className="workout__cart-text-container">
        <p className="workout__cart-description">{cart.description}</p>
      </div>
      <Link to={`/workout/${cart.path}`} className="w-full flex">
        <button className="workout__cart-button">see more</button>
      </Link>
    </section>
  );
};

export default React.memo(WorkoutsCard);

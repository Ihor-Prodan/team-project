/* eslint-disable max-len */
import React from 'react';
import './workout.scss';
import { Link } from 'react-router-dom';

type Cart = {
  id: string;
  name: string;
  duration: string;
  people: string;
  description: string;
  path: string;
};

interface Props {
  cart: Cart;
}

export const WorkoutsCart: React.FC<Props> = ({ cart }) => {
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
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 7.875C4.5 7.43179 4.5873 6.99292 4.75691 6.58344C4.92652 6.17397 5.17512 5.80191 5.48851 5.48851C5.80191 5.17512 6.17397 4.92652 6.58344 4.75691C6.99292 4.5873 7.43179 4.5 7.875 4.5C8.31821 4.5 8.75708 4.5873 9.16656 4.75691C9.57603 4.92652 9.94809 5.17512 10.2615 5.48851C10.5749 5.80191 10.8235 6.17397 10.9931 6.58344C11.1627 6.99292 11.25 7.43179 11.25 7.875C11.25 8.77011 10.8944 9.62855 10.2615 10.2615C9.62855 10.8944 8.77011 11.25 7.875 11.25C6.97989 11.25 6.12145 10.8944 5.48851 10.2615C4.85558 9.62855 4.5 8.77011 4.5 7.875ZM7.875 3.75C6.78098 3.75 5.73177 4.1846 4.95818 4.95818C4.1846 5.73177 3.75 6.78098 3.75 7.875C3.75 8.96902 4.1846 10.0182 4.95818 10.7918C5.73177 11.5654 6.78098 12 7.875 12C8.96902 12 10.0182 11.5654 10.7918 10.7918C11.5654 10.0182 12 8.96902 12 7.875C12 6.78098 11.5654 5.73177 10.7918 4.95818C10.0182 4.1846 8.96902 3.75 7.875 3.75ZM15 9C15 8.40326 15.2371 7.83097 15.659 7.40901C16.081 6.98705 16.6533 6.75 17.25 6.75C17.8467 6.75 18.419 6.98705 18.841 7.40901C19.2629 7.83097 19.5 8.40326 19.5 9C19.5 9.59674 19.2629 10.169 18.841 10.591C18.419 11.0129 17.8467 11.25 17.25 11.25C16.6533 11.25 16.081 11.0129 15.659 10.591C15.2371 10.169 15 9.59674 15 9ZM17.25 6C16.4544 6 15.6913 6.31607 15.1287 6.87868C14.5661 7.44129 14.25 8.20435 14.25 9C14.25 9.79565 14.5661 10.5587 15.1287 11.1213C15.6913 11.6839 16.4544 12 17.25 12C18.0456 12 18.8087 11.6839 19.3713 11.1213C19.9339 10.5587 20.25 9.79565 20.25 9C20.25 8.20435 19.9339 7.44129 19.3713 6.87868C18.8087 6.31607 18.0456 6 17.25 6ZM3.75 13.5C3.15326 13.5 2.58097 13.7371 2.15901 14.159C1.73705 14.581 1.5 15.1533 1.5 15.75C1.5 16.587 1.81275 17.7225 2.78925 18.6473C3.768 19.5743 5.37 20.25 7.87425 20.25C10.3785 20.25 11.982 19.575 12.9608 18.6473C13.9373 17.7225 14.25 16.587 14.25 15.75C14.25 15.1533 14.0129 14.581 13.591 14.159C13.169 13.7371 12.5967 13.5 12 13.5H3.75ZM2.25 15.75C2.25 15.3522 2.40804 14.9706 2.68934 14.6893C2.97064 14.408 3.35218 14.25 3.75 14.25H12C12.3978 14.25 12.7794 14.408 13.0607 14.6893C13.342 14.9706 13.5 15.3522 13.5 15.75C13.5 16.413 13.2502 17.34 12.4455 18.1027C11.643 18.8632 10.245 19.5 7.875 19.5C5.505 19.5 4.107 18.8625 3.3045 18.1027C2.49975 17.34 2.25 16.413 2.25 15.75ZM14.9722 17.691C14.8772 17.917 14.7617 18.142 14.6257 18.366C15.3202 18.6038 16.1835 18.75 17.25 18.75C19.3815 18.75 20.7008 18.1672 21.4905 17.43C22.272 16.701 22.5 15.8505 22.5 15.375C22.5 14.8777 22.3025 14.4008 21.9508 14.0492C21.5992 13.6975 21.1223 13.5 20.625 13.5H14.5155C14.7165 13.725 14.8882 13.977 15.024 14.25H20.625C20.9234 14.25 21.2095 14.3685 21.4205 14.5795C21.6315 14.7905 21.75 15.0766 21.75 15.375C21.75 15.6503 21.603 16.2998 20.9783 16.8825C20.3625 17.4578 19.2435 18 17.25 18C16.3088 18 15.5625 17.8792 14.9722 17.691Z"
                fill="#EDEDED"
              />
            </svg>
            <p className="workout__cart-info-workout">{cart.people}</p>
          </div>
        </div>
      </div>
      <div className="workout__cart-text-container">
        <p className="workout__cart-description">{cart.description}</p>
      </div>
      <Link to={`/workout/${cart.path}`}>
        <button className="workout__cart-button">see more</button>
      </Link>
    </section>
  );
};

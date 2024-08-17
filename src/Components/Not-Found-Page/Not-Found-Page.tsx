import React from 'react';
import './not-found.scss';
import image from './Pictures/404.jpg';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <Header themeColor={Theme.light} />
      <section className="not-section">
        <img className="not-found" src={image}></img>
      </section>
    </>
  );
};

import React from 'react';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './instructors.scss';
import { trainers } from './trainersList';
import Footer from '../Footer/Footer';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';
import useScrollToTop from '../../Hooks/location';
import { useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';

interface Props {
  themeColor: Theme;
}

export const Instructors: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="trainers">
        <h2 className="trainers__title">our Trainers</h2>
        <div className="trainers__grid">
          {trainers.map(trainer => (
            <div className="trainers__grid-card" key={trainer.id}>
              {trainer.isTop && (
                <div className="trainers__grid-card-image-top">Top trainer</div>
              )}
              <NavLink to={`/trainers/${trainer.id}`} className="w-full h-full">
                {!trainer.image ? (
                  <div className="loader-container">
                    <Loader />
                  </div>
                ) : (
                  <img
                    src={trainer.image}
                    className="trainers__grid-card-image"
                    alt={trainer?.name}
                  ></img>
                )}
              </NavLink>

              <NavLink to={`/trainers/${trainer.id}`} className="w-full">
                <p className="trainers__grid-card-trainerName">
                  {trainer.name}
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      {isModalVisible && <Auth />}
    </div>
  );
};

export default React.memo(Instructors);

import React, { useEffect } from 'react';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './instructors.scss';
import { trainers } from './trainersList';
import Footer from '../Footer/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import useScrollToTop from '../../Hooks/location';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';
import PageMenu from '../PageMenu/PageMenu';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import useLoader from '../../Hooks/loading';

interface Props {
  themeColor: Theme;
}

export const Instructors: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useLoader(1000);

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

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
                {isLoading ? (
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
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
    </div>
  );
};

export default React.memo(Instructors);

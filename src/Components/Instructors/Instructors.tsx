import React, { useEffect, useState } from 'react';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './instructors.scss';
import Footer from '../Footer/Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';
import useScrollToTop from '../../Hooks/location';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';
import PageMenu from '../PageMenu/PageMenu';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import useLoader from '../../Hooks/loading';
import { getTrainers } from '../../FechAPI/fechData';
import { showAlert } from '../Redux/Slices/Alert';
import CustomAlert from '../CustomAlert/CustomAlert';
import { Trainers } from '../../Types/TrainerType';
import useLoading from '../../Hooks/useLoading';

interface Props {
  themeColor: Theme;
}

export const Instructors: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const [trainersList, setTrainersList] = useState<Trainers[]>([]);
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useLoader(1000);
  const { loading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [dispatch, navigate]);

  useEffect(() => {
    startLoading();
    getTrainers()
      .then(data => setTrainersList(data))
      .catch(err => {
        if (err) {
          dispatch(
            showAlert({
              type: 'Notice',
              message: 'Unable to load trainers. Please try again soon.',
            }),
          );
        }
      })
      .finally(() => {
        stopLoading();
      });
  }, [dispatch]);

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="trainers">
        <h2 className="trainers__title">Our Trainers</h2>
        {loading ? (
          <div className="w-full h-[450px] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="trainers__grid">
            {trainersList.map(trainer => {
              return (
                <div className="trainers__grid-card" key={trainer.id}>
                  {trainer.isTop && (
                    <div className="trainers__grid-card-image-top">
                      Top trainer
                    </div>
                  )}
                  <NavLink
                    to={`/trainers/${trainer.id}`}
                    className="w-full h-full"
                  >
                    {isLoading ? (
                      <div className="loader-container">
                        <Loader />
                      </div>
                    ) : (
                      <img
                        src={trainer.image}
                        className="trainers__grid-card-image"
                        alt={trainer.name}
                      />
                    )}
                  </NavLink>
                  <NavLink to={`/trainers/${trainer.id}`} className="w-full">
                    <p className="trainers__grid-card-trainerName">
                      {trainer.name}
                    </p>
                  </NavLink>
                </div>
              );
            })}
          </div>
        )}
      </section>
      <Footer />
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
      <CustomAlert />
    </div>
  );
};

export default React.memo(Instructors);

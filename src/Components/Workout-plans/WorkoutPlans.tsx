/* eslint-disable max-len */
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import './workoutPlans.scss';
import Footer from '../Footer/Footer';
import Card from './Card';
import useScrollToTop from '../../Hooks/location';
import { Auth } from '../Auth/Auth';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import useResponsive from '../../Hooks/sizing';
import PageMenu from '../PageMenu/PageMenu';
import { useNavigate } from 'react-router-dom';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import { getAllWorkouts } from '../../FechAPI/fechData';
import { Workouts } from '../../Types/WorkoutsType';
import useLoading from '../../Hooks/useLoading';
import { showAlert } from '../Redux/Slices/Alert';
import CustomAlert from '../CustomAlert/CustomAlert';
import Loader from '../Loader/Loader';

interface Props {
  themeColor: Theme;
  workoutName: string;
}
export const WorkoutPlans: React.FC<Props> = ({ themeColor, workoutName }) => {
  useScrollToTop();
  const [worcoutsList, setWorcoutsList] = useState<Workouts[]>([]);
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const { isSmallScreen } = useResponsive();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  useEffect(() => {
    startLoading();
    getAllWorkouts()
      .then(data => setWorcoutsList(data))
      .catch(err => {
        if (err) {
          dispatch(
            showAlert({
              type: 'Notice',
              message: 'Unable to load workouts. Please try again soon.',
            }),
          );
        }
      })
      .finally(() => {
        stopLoading();
      });
  }, [dispatch]);

  const worcoutsBlock = ['Flex & Stretch', 'Strength & Mass', 'Shape & Tone'];

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="workout bg-[#111115]">
        <div className="workout__title-description-container">
          <h2 className="workout__title">Workout plans</h2>
          {isSmallScreen && (
            <h3 className="workout__title-group">{workoutName}</h3>
          )}
          <p className="workout__descriptions">
            Join our group sessions led by experienced trainers who create
            dynamic workout programs designed to challenge and motivate.
          </p>
        </div>
        {!isSmallScreen && (
          <h3 className="workout__title-group">{workoutName}</h3>
        )}
        {worcoutsBlock.map(workout => (
          <Fragment key={workout}>
            <h3 className="workout__workouts">{workout}</h3>
            {loading ? (
              <div className="w-full h-[450px] flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <article className="workout__list">
                {worcoutsList
                  .filter(card => card.category === workout)
                  .map(card => (
                    <Card card={card} key={card.id} />
                  ))}
              </article>
            )}
          </Fragment>
        ))}
      </section>
      <Footer />
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
      <CustomAlert />
    </div>
  );
};

export default React.memo(WorkoutPlans);

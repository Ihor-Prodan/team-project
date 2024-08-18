/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import './workoutInfo.scss';
import Footer from '../Footer/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useLoadAnimation from '../../Hooks/animation';
import useScrollToTop from '../../Hooks/location';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';
import PageMenu from '../PageMenu/PageMenu';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import { Workouts } from '../../Types/WorkoutsType';
import { getAllWorkouts } from '../../FechAPI/fechData';
import useLoading from '../../Hooks/useLoading';
import { showAlert } from '../Redux/Slices/Alert';
import CustomAlert from '../CustomAlert/CustomAlert';
import Loader from '../Loader/Loader';

interface Props {
  themeColor: Theme;
}

export const WorkoutInfo: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const { id } = useParams();
  const [worcoutsList, setWorcoutsList] = useState<Workouts[]>([]);
  const [workout, setWorkout] = useState<Workouts | null>(null);
  const loaded = useLoadAnimation(workout?.image);
  const dispatch = useAppDispatch();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const { loading, startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

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

  const getWorkoutById = (cartId: string): Workouts | undefined => {
    return worcoutsList.find(wor => wor.id === cartId);
  };

  useEffect(() => {
    if (id && worcoutsList.length > 0) {
      const workoutCard = getWorkoutById(id);

      if (workoutCard) {
        setWorkout(workoutCard);
      } else {
        setWorkout(null);
      }
    }
  }, [id, worcoutsList]);

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [dispatch, id, navigate]);

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="workout__detail bg-[#111115]">
        <div className="workout__detail-linkContainer">
          <Link to={'/workout/group-workout'}>
            <p className="workout__detail-linkContainer-plans">Workout plans</p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10 17L15 12L10 7"
              stroke="#F3F4F6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="workout__detail-linkContainer-name">{workout?.name}</p>
        </div>
        {loading ? (
          <div className="w-full h-[450px] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="workout__detail-grid">
            <div
              className={`workout__detail-grid-content ${loaded ? 'loaded' : ''}`}
            >
              <div className="workout__detail-grid-content-titleAndicon">
                <h3 className="workout__detail-grid-content-titleAndicon-title">
                  {workout?.name}
                </h3>
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
                    {...(workout?.hardLevel && parseInt(workout.hardLevel) >= 1
                      ? { fill: '#BEAFA9' }
                      : { stroke: '#BEAFA9' })}
                  />
                  <circle
                    cx="14.8815"
                    cy="4.16667"
                    r="4.16667"
                    {...(workout?.hardLevel && parseInt(workout.hardLevel) >= 2
                      ? { fill: '#BEAFA9' }
                      : { stroke: '#BEAFA9' })}
                  />
                  <circle
                    cx="25.5964"
                    cy="4.16667"
                    r="4.16667"
                    {...(workout?.hardLevel && parseInt(workout.hardLevel) >= 3
                      ? { fill: '#BEAFA9' }
                      : { stroke: '#BEAFA9' })}
                  />
                </svg>
              </div>
              <div
                className={`workout__detail-grid-content  ${loaded ? 'loaded' : ''}`}
              >
                <div className="workout__detail-grid-content-aboutWorkout">
                  <p className="workout__detail-grid-content-title">Duration</p>
                  <p className="workout__detail-grid-content-text">
                    {workout?.duration}
                  </p>
                </div>
                <div className="workout__detail-grid-content-aboutWorkout">
                  <p className="workout__detail-grid-content-title">
                    About Workout
                  </p>
                  <p className="workout__detail-grid-content-text trainer">
                    Trainer: {workout?.trainer}
                  </p>
                  <p className="workout__detail-grid-content-text">
                    {workout?.description}
                  </p>
                </div>
                <div className="workout__detail-grid-content-aboutWorkout">
                  <p className="workout__detail-grid-content-title">
                    Preparation Tips
                  </p>
                  <p className="workout__detail-grid-content-text">
                    {workout?.preparationTips}
                  </p>
                </div>
              </div>
              <button
                className="workout__detail-grid-content-button"
                onClick={() => navigate('/timetable/trainer-led-workout')}
              >
                <span className="workout__button-text">Book a workout</span>
                <svg
                  className="workout__ready-button-arrow-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 12.013L20.789 12M14.013 19L21 12L14.012 5"
                    strokeWidth="1"
                    stroke="#111115"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="workout__detail-grid-img-wrapper">
              <img
                src={workout?.image}
                className={`workout__detail-grid-img ${loaded ? 'loaded' : ''}`}
                alt={workout?.name}
              ></img>
            </div>
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

export default React.memo(WorkoutInfo);

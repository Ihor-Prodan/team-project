/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import './timetable.scss';
import 'swiper/css';
import Footer from '../Footer/Footer';
import Swiper from 'swiper';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setCurrentDayIndex, setDays } from '../Redux/Slices/Calendar';
import useScrollToTop from '../../Hooks/location';
import {
  Class,
  studio,
  times,
  WorkoutTimetable,
} from './Helpers/timetableData';
import { setIsModal } from '../Redux/Slices/Modal';
import { Auth } from '../Auth/Auth';
import { updateUser, User } from '../Redux/Slices/User';
import PageMenu from '../PageMenu/PageMenu';
import { useNavigate } from 'react-router-dom';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import { showAlert } from '../Redux/Slices/Alert';
import CustomAlert from '../CustomAlert/CustomAlert';

interface Props {
  themeColor: Theme;
  workoutName: string;
  isLedWorkout: boolean;
  timetableDate: WorkoutTimetable[];
}

export const Timetable: React.FC<Props> = ({
  themeColor,
  workoutName,
  isLedWorkout,
  timetableDate,
}) => {
  useScrollToTop();
  const [adaptiveTimetable, setAdaptiveTimetable] = useState<boolean>(
    window.innerWidth <= 1100,
  );
  const [isMobileVersion, setIsMobilVersion] = useState<boolean>(
    window.innerWidth <= 765,
  );
  const days = useAppSelector(state => state.calendar.days);
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const currentDayIndex = useAppSelector(
    state => state.calendar.currentDayIndex,
  );
  const dispatch = useAppDispatch();
  const swiperRef = useRef<Swiper | null>(null);
  const [schedule, setSchedule] = useState(timetableDate);
  const navigate = useNavigate();
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [visiblePart, setVisiblePart] = useState(0);

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  useEffect(() => {
    dispatch(setDays());
    const intervalId = setInterval(
      () => {
        dispatch(setDays());
      },
      60 * 60 * 1000,
    );

    return () => clearInterval(intervalId);
  }, [dispatch]);

  //create grid-elements
  const timetableGrid = times.map(t => ({
    time: t,
    studios: studio.map(stud => ({
      studio: stud,
      class:
        schedule
          .filter(slot => slot.time.startsWith(t))
          .flatMap(slot => slot.classes.filter(c => c.studio === stud))[0] ||
        null,
    })),
  }));
  //create grid-elements

  // const updateCapacities = () => {
  //   if (schedule) {
  //     const newSchedule = schedule.map(day => ({
  //       ...day,
  //       classes: day.classes.map(item => ({
  //         ...item,
  //         capacity: Math.random() < 0.5 ? '0' : '1',
  //       })),
  //     }));

  //     setSchedule(newSchedule);
  //   }
  // };

  const getRandomElement = (arr: string | any[]) =>
    arr[Math.floor(Math.random() * arr.length)];

  const updateCapacities = () => {
    if (schedule) {
      const newSchedule = schedule.map(day => ({
        ...day,
        classes: day.classes.map(item => ({
          ...item,
          capacity: Math.random() < 0.5 ? '0' : '1',
          time: getRandomElement(times),
          studio: getRandomElement(studio),
        })),
      }));

      setSchedule(newSchedule);
    }
  };

  //swiper logic
  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleCurrentDay = (dayIndex: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(dayIndex);
      dispatch(setCurrentDayIndex(dayIndex));
      if (dayIndex !== currentDayIndex) {
        updateCapacities();
      }
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [days]);
  //swiper logic

  const handleBookWorkout = (item: Class): User | void => {
    const selectedDay = days[currentDayIndex];

    if (!selectedDay) {
      alert('No day selected from the timetable.');
      dispatch(
        showAlert({
          message: 'Please select a day from the timetable.',
          type: 'No day selected from the timetable.',
        }),
      );

      return;
    }

    const currentYear = new Date().getFullYear();

    const trainingDate = `${selectedDay.date}.${currentYear}`;

    if (currentUser) {
      const findUserWorkout = currentUser.workouts?.find(w => w.id === item.id);

      if (findUserWorkout && findUserWorkout.date === trainingDate) {
        dispatch(
          showAlert({
            message: 'You already registered for this workout.',
            type: 'Duplicate Booking Notice',
          }),
        );

        return;
      }

      const updatedUser: User = {
        ...currentUser,
        workouts: [
          ...(currentUser.workouts ?? []),
          {
            ...item,
            id: item.id,
            date: trainingDate,
            time: item.time,
            studio: item.studio,
            trainer: item.trainer,
            location: item.location,
          },
        ],
      };

      dispatch(updateUser(updatedUser));

      return updatedUser;
    }

    if (!currentUser) {
      dispatch(setIsModal(true));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      setAdaptiveTimetable(windowWidth <= 1100);
      setIsMobilVersion(windowWidth <= 765);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [adaptiveTimetable, setAdaptiveTimetable]);

  const toggleShowSet = () => {
    setShowFirstSet(!showFirstSet);
  };

  const studioParts = [
    studio.slice(0, 1),
    studio.slice(1, 2),
    studio.slice(2, 3),
    studio.slice(3, 4),
    studio.slice(4, 5),
  ];

  const visibleStudiosMobil = studioParts[visiblePart];
  const adaptiveStudiosMobil = isMobileVersion ? visibleStudiosMobil : studio;

  const handleNextPart = () => {
    setVisiblePart(prevPart => (prevPart + 1) % studioParts.length);
  };

  const visibleStudios = showFirstSet ? studio.slice(0, 3) : studio.slice(3);
  const adaptiveStudios = adaptiveTimetable ? visibleStudios : studio;
  const adaptive = isMobileVersion ? adaptiveStudiosMobil : adaptiveStudios;

  const slidesPerView = isMobileVersion ? 3 : adaptiveTimetable ? 4 : 7;
  const slidesPerGroup = isMobileVersion ? 3 : adaptiveTimetable ? 4 : 7;

  return (
    <div className="timetable-wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="timetable">
        <div className="timetable__title-description-container">
          <h2 className="timetable__title">Timetable</h2>
          <p className="timetable__descriptions">
            {isLedWorkout
              ? 'Check out our detailed timetable to enjoy a variety of classes tailored to suit your needs. Plan workouts and book a spot today!'
              : 'Check out our timetable for trainer-led workout designed to meet your needs. Schedule your workouts and book a session today!'}
          </p>
        </div>
        <h3 className="timetable__title-group">{workoutName}</h3>
        <div className="timetable__calendar">
          <div className="timetable__calendar-header">
            {!isMobileVersion && (
              <svg
                className="timetable__calendar-header-sliderButton"
                onClick={() => slidePrev()}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M35 20.0217L5.35167 20M16.6467 31.6667L5 20L16.6467 8.33337"
                  stroke="#B0B1B5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <ReactSwiper
              onSwiper={(swiper: any) => {
                swiperRef.current = swiper;
              }}
              centeredSlides={false}
              spaceBetween={0}
              slidesPerView={slidesPerView}
              slidesPerGroup={slidesPerGroup}
              speed={900}
              mousewheel={true}
              style={{ width: '100%' }}
            >
              {days.map((item, index) => (
                <SwiperSlide key={index} style={{ margin: 0 }}>
                  <div
                    onClick={() => handleCurrentDay(index)}
                    className={
                      currentDayIndex === item.dayIndex
                        ? 'activeDay timetable__calendar-header-day-container'
                        : 'timetable__calendar-header-day-container'
                    }
                    style={{
                      transition: 'transform 0.7s ease',
                    }}
                  >
                    <p
                      className={
                        currentDayIndex === item.dayIndex
                          ? 'activeDay-day timetable__calendar-days'
                          : 'timetable__calendar-days'
                      }
                    >
                      {item.day}
                    </p>
                    <p
                      className={
                        currentDayIndex === item.dayIndex
                          ? 'activeDay-date timetable__calendar-date'
                          : 'timetable__calendar-date'
                      }
                    >
                      {item.date}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </ReactSwiper>
            {!isMobileVersion && (
              <svg
                className="timetable__calendar-header-sliderButton"
                onClick={() => slideNext()}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M5 20.0217L34.6483 20M23.355 31.6667L35 20L23.3533 8.33337"
                  stroke="#B0B1B5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          {!isLedWorkout && adaptiveTimetable && (
            <li
              className="timetable__grid-time-item-1"
              onClick={isMobileVersion ? handleNextPart : toggleShowSet}
            >
              <svg
                className="timetable__calendar-header-sliderButton"
                onClick={isMobileVersion ? handleNextPart : toggleShowSet}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M5 20.0217L34.6483 20M23.355 31.6667L35 20L23.3533 8.33337"
                  stroke="#B0B1B5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </li>
          )}

          <div className="timetable__grid">
            <ul className="timetable__grid-time">
              {isLedWorkout && (
                <li className="timetable__grid-time-item-1">
                  {adaptiveTimetable && (
                    <svg
                      className="timetable__calendar-header-sliderButton"
                      onClick={isMobileVersion ? handleNextPart : toggleShowSet}
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M5 20.0217L34.6483 20M23.355 31.6667L35 20L23.3533 8.33337"
                        stroke="#B0B1B5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </li>
              )}
              {times.map(t => (
                <li className="timetable__grid-time-item" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            {adaptive.map(stud => (
              <div className="wrap" key={stud}>
                {isLedWorkout && (
                  <ul className="timetable__grid-studioname">{stud}</ul>
                )}
                {timetableGrid.map(({ time, studios }) => {
                  const studioClass = studios.find(s => s.studio === stud);
                  const timeSlot = schedule.find(slot =>
                    slot.classes.some(c => c.time === studioClass?.class?.time),
                  );

                  return (
                    <div key={time}>
                      {studioClass && studioClass.class ? (
                        <div className="timetable__grid-studioname-item">
                          <div className="timetable__grid-studioname-title-icon">
                            <h3
                              className={
                                studioClass.class.capacity === '0'
                                  ? 'disabled-title'
                                  : 'timetable__grid-studioname-item-title '
                              }
                            >
                              {isLedWorkout
                                ? studioClass.class.name
                                : studioClass.class.trainer}
                            </h3>
                            {isLedWorkout && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={adaptiveTimetable ? '20' : '30'}
                                height={adaptiveTimetable ? '8' : '10'}
                                viewBox="0 0 30 9"
                                fill="none"
                              >
                                <circle
                                  cx="4.16667"
                                  cy="4.16667"
                                  r="4.16667"
                                  {...(studioClass.class.hard &&
                                  parseInt(studioClass.class.hard) >= 1
                                    ? {
                                        fill: `${studioClass.class.capacity === '0' ? '#716560' : '#BEAFA9'}`,
                                      }
                                    : {
                                        stroke: `${studioClass.class.capacity === '0' ? '#716560' : '#BEAFA9'}`,
                                      })}
                                />
                                <circle
                                  cx="14.8815"
                                  cy="4.16667"
                                  r="4.16667"
                                  {...(studioClass.class.hard &&
                                  parseInt(studioClass.class.hard) >= 2
                                    ? {
                                        fill: `${studioClass.class.capacity === '0' ? '#716560' : '#BEAFA9'}`,
                                      }
                                    : {
                                        stroke: `${studioClass.class.capacity === '0' ? '#716560' : '#BEAFA9'}`,
                                      })}
                                />
                                <circle
                                  cx="25.5964"
                                  cy="4.16667"
                                  r="4.16667"
                                  {...(studioClass.class.hard &&
                                  parseInt(studioClass.class.hard) >= 3
                                    ? {
                                        fill: `${studioClass.class.capacity === '0' ? '#716560' : '#BEAFA9'}`,
                                      }
                                    : {
                                        stroke: `${studioClass.class.capacity === '0' ? '#716560' : '#BEAFA9'}`,
                                      })}
                                />
                              </svg>
                            )}
                          </div>
                          <div className="timetable__grid-studioname-time-trainer">
                            <div className="timetable__grid-studioname-atributs">
                              <p
                                className={
                                  studioClass.class.capacity !== '0'
                                    ? `timetable__grid-studioname-text ${isLedWorkout ? 'pr-4' : 'pr-7'}`
                                    : `disabled-text ${isLedWorkout ? 'pr-4' : 'pr-7'}`
                                }
                              >
                                Time:
                              </p>
                              <p
                                className={
                                  studioClass.class.capacity !== '0'
                                    ? 'timetable__grid-studioname-text'
                                    : 'disabled-text'
                                }
                              >
                                {timeSlot?.time}
                              </p>
                            </div>
                            <div className="timetable__grid-studioname-atributs">
                              <p
                                className={
                                  studioClass.class.capacity !== '0'
                                    ? 'timetable__grid-studioname-text'
                                    : 'disabled-text'
                                }
                              >
                                {isLedWorkout ? 'Trainer:' : 'Location:'}
                              </p>
                              <p
                                className={
                                  studioClass.class.capacity !== '0'
                                    ? 'timetable__grid-studioname-text'
                                    : 'disabled-text'
                                }
                              >
                                {isLedWorkout
                                  ? studioClass.class.trainer
                                  : 'Gym'}
                              </p>
                            </div>
                          </div>
                          <div
                            className={
                              studioClass.class.capacity === '0'
                                ? 'hidden'
                                : 'timetable__grid-studioname-hover-button'
                            }
                          >
                            <button
                              className="timetable__grid-studioname-book-button"
                              onClick={() =>
                                handleBookWorkout(studioClass.class)
                              }
                            >
                              Book now
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="timetable__grid-studioname-item empty"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <CustomAlert />
      </section>
      <Footer />
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
    </div>
  );
};

export default React.memo(Timetable);

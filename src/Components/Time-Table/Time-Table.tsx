/* eslint-disable max-len */
import React, { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import './timetable.scss';
import 'swiper/css';
import Footer from '../Footer/Footer';
// import { addDays, format } from 'date-fns';
import Swiper from 'swiper';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setCurrentDayIndex, setDays } from '../Redux/Slices/Calendar';

interface Props {
  themeColor: Theme;
}

export const TimeTable: React.FC<Props> = ({ themeColor }) => {
  const days = useAppSelector(state => state.calendar.days);
  const currentDayIndex = useAppSelector(
    state => state.calendar.currentDayIndex,
  );
  const dispatch = useAppDispatch();
  const swiperRef = useRef<Swiper | null>(null);

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

  const studio = [
    'Flex studio',
    'Mind studio',
    'Cycle studio',
    'Cardio studio',
    'Power studio',
  ];

  const times = [
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ];

  const timetable = [
    {
      time: '7:00 - 8:00',
      classes: [
        {
          studio: 'Flex studio',
          name: 'Hatha Yoga',
          trainer: 'Daryna Milovska',
          id: '1',
        },
        {
          studio: 'Cycle studio',
          name: 'Hill Climb',
          trainer: 'Yuliya Shevchenko',
          id: '7',
        },
        {
          studio: 'Cardio studio',
          name: 'HIIT',
          trainer: 'Roman Kovalenko',
          id: '2',
        },
      ],
    },
    {
      time: '8:00 - 9:00',
      classes: [
        {
          studio: 'Mind studio',
          name: 'Barre',
          trainer: 'Daryna Milovska',
          id: '8',
        },
        {
          studio: 'Power studio',
          name: 'Circuit Training',
          trainer: 'Oleksandr Kovalchuk',
          id: '3',
        },
      ],
    },
    {
      time: '12:00 - 13:00',
      classes: [
        {
          studio: 'Power studio',
          name: 'HI-SIT',
          trainer: 'Olexander Kovalchuk',
          id: '4',
        },
        {
          studio: 'Power studio',
          name: 'Circuit Training',
          trainer: 'Natalia Voloshyna',
          id: '5',
        },
      ],
    },
  ];

  //create grid-elements
  const timetableGrid = times.map(t => ({
    time: t,
    studios: studio.map(stud => ({
      studio: stud,
      class:
        timetable
          .filter(slot => slot.time.startsWith(t))
          .flatMap(slot => slot.classes.filter(c => c.studio === stud))[0] ||
        null,
    })),
  }));
  //create grid-elements

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
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [days]);
  //swiper logic

  return (
    <div className="timetable-wrapper">
      <section className="timetable">
        <Header themeColor={themeColor} />
        <div className="timetable__title-description-container">
          <h1 className="timetable__title">Timetable</h1>
          <p className="timetable__descriptions">
            Check out our detailed timetable to enjoy a variety of classes
            tailored to suit your needs. Plan workouts and book a spot today!
          </p>
        </div>
        <h3 className="timetable__title-group">Group Workout</h3>
        <div className="timetable__calendar">
          <div className="timetable__calendar-header">
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
            <ReactSwiper
              onSwiper={(swiper: any) => {
                swiperRef.current = swiper;
              }}
              centeredSlides={false}
              spaceBetween={0}
              slidesPerView={7}
              slidesPerGroup={7}
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
          </div>
          <div className="timetable__grid">
            <ul className="timetable__grid-time">
              <li className="timetable__grid-time-item-1"></li>
              {times.map(t => (
                <li className="timetable__grid-time-item" key={t}>
                  {t}
                </li>
              ))}
            </ul>
            {studio.map(stud => (
              <div className="wrap" key={stud}>
                <ul className="timetable__grid-studioname">{stud}</ul>
                {timetableGrid.map(({ time, studios }) => {
                  const studioClass = studios.find(s => s.studio === stud);
                  const timeSlot = timetable.find(slot =>
                    slot.classes.some(c => c.name === studioClass?.class?.name),
                  );

                  return (
                    <div key={time}>
                      {studioClass && studioClass.class ? (
                        <div className="timetable__grid-studioname-item">
                          <div className="timetable__grid-studioname-title-icon">
                            <h3 className="timetable__grid-studioname-item-title">
                              {studioClass.class.name}
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="30"
                              height="9"
                              viewBox="0 0 30 9"
                              fill="none"
                            >
                              <path
                                d="M4.16667 8.33272C6.46785 8.33272 8.33333 6.46724 8.33333 4.16606C8.33333 1.86487 6.46785 -0.000610352 4.16667 -0.000610352C1.86548 -0.000610352 0 1.86487 0 4.16606C0 6.46724 1.86548 8.33272 4.16667 8.33272Z"
                                fill="#BEAFA9"
                              />
                              <path
                                d="M14.881 8.33272C17.1822 8.33272 19.0477 6.46724 19.0477 4.16606C19.0477 1.86487 17.1822 -0.000610352 14.881 -0.000610352C12.5798 -0.000610352 10.7144 1.86487 10.7144 4.16606C10.7144 6.46724 12.5798 8.33272 14.881 8.33272Z"
                                fill="#BEAFA9"
                              />
                              <path
                                d="M29.2623 4.16606C29.2623 6.1911 27.6207 7.83272 25.5956 7.83272C23.5706 7.83272 21.929 6.1911 21.929 4.16606C21.929 2.14101 23.5706 0.49939 25.5956 0.49939C27.6207 0.49939 29.2623 2.14101 29.2623 4.16606Z"
                                stroke="#BEAFA9"
                              />
                            </svg>
                          </div>
                          <div className="timetable__grid-studioname-time-trainer">
                            <div className="timetable__grid-studioname-atributs">
                              <p className="timetable__grid-studioname-text">
                                Time:
                              </p>
                              <p className="timetable__grid-studioname-text">
                                {timeSlot?.time ?? ''}
                              </p>
                            </div>
                            <div className="timetable__grid-studioname-atributs">
                              <p className="timetable__grid-studioname-text">
                                Trainer:
                              </p>
                              <p className="timetable__grid-studioname-text">
                                {studioClass.class.trainer}
                              </p>
                            </div>
                          </div>
                          <div className="timetable__grid-studioname-hover-button">
                            <button className="timetable__grid-studioname-book-button">
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
      </section>
      <Footer />
    </div>
  );
};

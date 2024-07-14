/* eslint-disable max-len */
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import './workoutPlans.scss';
import Footer from '../Footer/Footer';
import Card from './Card';
import { CardType, initialStateCart } from './initialCartData';
import useScrollToTop from '../../Hooks/location';
import { Auth } from '../Auth/Auth';
import { useAppSelector } from '../../Hooks/hooks';
import useResponsive from '../../Hooks/sizing';
import PageMenu from '../PageMenu/PageMenu';

interface Props {
  themeColor: Theme;
  workoutName: string;
}

export const WorkoutPlans: React.FC<Props> = ({ themeColor, workoutName }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const [cards, setCards] = useState<CardType[]>(initialStateCart);
  const { isSmallScreen } = useResponsive();

  useEffect(() => {
    setCards(initialStateCart);
  }, []);

  const worcoutsBlock = ['Flex & Stretch', 'Strength & Mass', 'Shape & Tone'];

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="workout bg-[#111115]">
        <div className="workout__title-description-container">
          <h2 className="workout__title">Workout plans</h2>
          {isSmallScreen && (
            <h3 className="workout__title-group mb-6">{workoutName}</h3>
          )}
          <p className="workout__descriptions">
            Join our group sessions led by experienced trainers who create
            dynamic workout programs designed to challenge and motivate.
          </p>
        </div>
        {!isSmallScreen && (
          <h3 className="workout__title-group mt-6">{workoutName}</h3>
        )}
        {worcoutsBlock.map(workout => (
          <Fragment key={workout}>
            <h3 className="workout__workouts">{workout}</h3>
            <article className="workout__list">
              {cards
                .filter(card => card.category === workout)
                .map(card => (
                  <Card card={card} key={card.id} />
                ))}
            </article>
          </Fragment>
        ))}
      </section>
      <Footer />
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
    </div>
  );
};

export default React.memo(WorkoutPlans);

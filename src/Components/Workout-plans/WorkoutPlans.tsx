/* eslint-disable max-len */
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import './workoutPlans.scss';
import Footer from '../Footer/Footer';
import Card from './Card';
import { CardType, initialStateCart } from './initialCartData';
import useScrollToTop from '../../Hooks/location';

interface Props {
  themeColor: Theme;
  workoutName: string;
}

export const WorkoutPlans: React.FC<Props> = ({ themeColor, workoutName }) => {
  useScrollToTop();
  const [cards, setCards] = useState<CardType[]>(initialStateCart);

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
          <p className="workout__descriptions">
            Join our group sessions led by experienced trainers who create
            dynamic workout programs designed to challenge and motivate.
          </p>
        </div>
        <h3 className="workout__title-group">{workoutName}</h3>
        {worcoutsBlock.map(workout => (
          <Fragment key={workout}>
            <h3 className="workout__workouts">{workout}</h3>
            <article className="workout__list">
              {cards.map(card => (
                <Card card={card} key={card.id} />
              ))}
            </article>
          </Fragment>
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default WorkoutPlans;

/* eslint-disable max-len */
import React, { Fragment } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import testImg from './Pictures/test.png';
import './workoutPlans.scss';
import Footer from '../Footer/Footer';
import Card from './Card';

interface Props {
  themeColor: Theme;
  workoutName: string;
}

export const WorkoutPlans: React.FC<Props> = ({ themeColor, workoutName }) => {
  const initialState = [
    {
      img: testImg,
      description:
        'Experience deep relaxation and improved flexibility through gentle poses and focused breathing techniques in Hatha Yoga sessions led by Daryna Milovska.',
      title: 'Hatha Yoga',
      isTop: false,
    },
    {
      img: testImg,
      description:
        'Experience deep relaxation and improved flexibility through gentle poses and focused breathing techniques in Hatha Yoga sessions led by Daryna Milovska.',
      title: 'Hatha Yoga',
      isTop: true,
    },
    {
      img: testImg,
      description:
        'Experience deep relaxation and improved flexibility through gentle poses and focused breathing techniques in Hatha Yoga sessions led by Daryna Milovska.',
      title: 'Hatha Yoga',
      isTop: false,
    },
    {
      img: testImg,
      description:
        'Experience deep relaxation and improved flexibility through gentle poses and focused breathing techniques in Hatha Yoga sessions led by Daryna Milovska.',
      title: 'Hatha Yoga',
      isTop: true,
    },
  ];

  const worcoutsBlock = ['Flex & Stretch', 'Strength & Mass', 'Shape & Tone'];

  return (
    <div className="wrapper">
      <section className="workout bg-[#111115]">
        <Header themeColor={themeColor} />
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
              {initialState.map(card => (
                <Card card={card} key={card.title} />
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

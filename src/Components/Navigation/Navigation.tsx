import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  const navItems = ['Timetable', 'Workout plans', 'Trainers', 'Price'];

  return (
    <section className="navigation">
      <nav className="navigation__nav">
        <ul className="navigation__nav-list">
          {navItems.map(item => (
            <NavLink to={''} key={item}>
              <li className="navigation__nav-items">{item}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </section>
  );
};

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { useAppSelector } from '../../Hooks/hooks';
import { Theme } from '../Redux/Slices/themeMode';

interface Props {
  themeColor: Theme;
}

export const Navigation: React.FC<Props> = ({ themeColor }) => {
  const theme = useAppSelector(state => state.theme.theme);
  const navItems = [
    'Timetable',
    'Workout plans',
    'Trainers',
    'Price',
    'Contacts',
  ];

  const getLinkClass = (isActive: boolean) => {
    const baseClass = 'navigation__links';
    const themeClass = themeColor
      ? 'navigation__links-dark'
      : 'navigation__links';
    const activeClass = isActive
      ? theme === themeColor
        ? 'isActive'
        : 'navigation-links-dark__isActive'
      : '';

    return `${baseClass} ${themeClass} ${activeClass}`;
  };

  return (
    <section className="navigation">
      <nav className="navigation__nav">
        <ul className="navigation__nav-list">
          {navItems.map(item => (
            <NavLink
              to={`/${item}`}
              key={item}
              className={({ isActive }) => getLinkClass(isActive)}
            >
              <li
                className={
                  theme === themeColor
                    ? 'navigation__nav-items'
                    : 'navigation__nav-items-dark'
                }
              >
                {item}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </section>
  );
};

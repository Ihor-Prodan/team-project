import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.scss';
import { useAppSelector } from '../../Hooks/hooks';
import { Theme } from '../Redux/Slices/themeMode';
import navItems from './Helpers/navItems';

interface Props {
  themeColor: Theme;
}

export const Navigation: React.FC<Props> = ({ themeColor }) => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null,
  );
  const theme = useAppSelector(state => state.theme.theme);

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

  const getIconClass = (index: number) => {
    const baseIconClass =
      theme === themeColor
        ? 'navigation__nav-items-icon'
        : 'navigation__nav-items-icon-dark';

    const rotateClass = activeDropdownIndex === index ? 'rotate-180' : '';

    return `${baseIconClass} ${rotateClass}`;
  };

  const handleIsDropdown = (index: number) => {
    setActiveDropdownIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="navigation">
      <nav className="navigation__nav">
        <ul className="navigation__nav-list">
          {navItems.map((item, index) => (
            <NavLink
              onClick={e =>
                (item.dropdownItems?.length && e?.preventDefault()) ||
                handleIsDropdown(index)
              }
              to={`/${item.path}`}
              key={item.path}
              className={({ isActive }) =>
                getLinkClass(isActive || activeDropdownIndex === index)
              }
            >
              <div className="navigation__nav-items-drobdown-conteiner">
                <li
                  className={
                    theme === themeColor
                      ? 'navigation__nav-items'
                      : 'navigation__nav-items-dark'
                  }
                >
                  {item.name}
                </li>
                {index < 2 && (
                  <>
                    <svg
                      className={getIconClass(index)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4.66797 6.66602L8.0013 9.99935L11.3346 6.66602"
                        stroke="#28282C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {activeDropdownIndex === index && (
                      <div
                        className={
                          theme === themeColor
                            ? 'dropDown__menu'
                            : 'dropDown__menu-dark'
                        }
                      >
                        <ul className="dropDown__menu-list">
                          {item.dropdownItems?.map(el => (
                            <NavLink
                              to={`/${item.path}/${el.path}`}
                              key={el.name}
                            >
                              <li
                                className={
                                  theme === themeColor
                                    ? 'dropDown__menu-item'
                                    : 'dropDown__menu-item-dark'
                                }
                              >
                                {el.name}
                              </li>
                            </NavLink>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}
              </div>
            </NavLink>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default React.memo(Navigation);

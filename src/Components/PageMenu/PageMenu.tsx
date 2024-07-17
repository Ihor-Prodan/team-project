import React, { useState } from 'react';
import './menu.scss';
import { Theme } from '../Redux/Slices/themeMode';
import Header from '../Header/Header';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import navItems from '../Navigation/Helpers/navItems';
import { NavLink, useNavigate } from 'react-router-dom';
import { setIsModal } from '../Redux/Slices/Modal';

interface Props {
  themeColor: Theme;
}

export const PageMenu: React.FC<Props> = ({ themeColor }) => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null,
  );
  const isOpen = useAppSelector(state => state.menu.isOpen);
  const currentUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const theme = Theme.light;
  const navigate = useNavigate();

  const getLinkClass = (isActive: boolean) => {
    const baseClass = 'navigation__links';
    const themeClass =
      themeColor === Theme.dark
        ? 'navigation__links-dark'
        : 'navigation__links';
    const activeClass = isActive
      ? theme !== themeColor
        ? 'navigation-links-dark__isActive'
        : 'isActive'
      : '';

    return `${baseClass} ${themeClass} ${activeClass}`;
  };

  const getIconClass = (index: number) => {
    const baseIconClass =
      theme === themeColor
        ? 'navigation__nav-items-icon-dark'
        : 'navigation__nav-items-icon';

    const rotateClass = activeDropdownIndex === index ? 'rotate-180' : '';

    return `${baseIconClass} ${rotateClass}`;
  };

  const handleIsDropdown = (index: number) => {
    setActiveDropdownIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const isUser = () => {
    if (!currentUser) {
      dispatch(setIsModal(true));
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="wrapper-menu">
      <section className={`menu ${isOpen ? 'open' : ''}`}>
        <Header themeColor={Theme.dark} />
        <div className="menu__nav">
          <ul className="menu__nav-list">
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
                          stroke="#F3F4F6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {activeDropdownIndex === index && (
                        <div
                          className={
                            theme === themeColor
                              ? 'menu__menu'
                              : 'menu__menu-dark'
                          }
                        >
                          <ul className="menu__menu-list">
                            {item.dropdownItems?.map(el => (
                              <NavLink
                                to={`/${item.path}/${el.path}`}
                                key={el.name}
                              >
                                <li
                                  className={
                                    theme === themeColor
                                      ? 'menu__menu-item-dark'
                                      : 'menu__menu-item'
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
        </div>
        <div className="menu__profileAndButton">
          <p
            onClick={isUser}
            className={
              themeColor
                ? 'navigation__nav-items-dark mt-0.5'
                : 'navigation__nav-items mt-0.5'
            }
          >
            Profile
          </p>
          <button className="menu__cart-button">book a workout</button>
        </div>
      </section>
    </div>
  );
};

export default React.memo(PageMenu);

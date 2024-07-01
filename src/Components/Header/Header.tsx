/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';
import { useAppSelector } from '../../Hooks/hooks';
import { Theme } from '../Redux/Slices/themeMode';
import { NavLink } from 'react-router-dom';

interface Props {
  themeColor: Theme;
}

export const Header: React.FC<Props> = ({ themeColor }) => {
  const theme = useAppSelector(state => state.theme.theme);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  //Header-scroll function
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      setIsScrolledUp(scrollTop < lastScrollTop);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);
  //Header-scroll function

  return (
    <header
      className={`header ${isScrolledUp ? '' : 'sticky'} ${theme === themeColor ? 'header' : 'header-dark'}`}
    >
      <NavLink to={'/'}>
        <svg
          className="header__logo"
          xmlns="http://www.w3.org/2000/svg"
          width="221"
          height="30"
          viewBox="0 0 221 30"
          fill="none"
        >
          <path
            d="M50.64 1.19993V18.1599C50.64 20.8533 50.3067 23.0266 49.64 24.6799C49 26.3066 47.9467 27.4933 46.48 28.2399C45.0133 28.9599 43.0533 29.3199 40.6 29.3199C38.04 29.3199 36 28.9599 34.48 28.2399C32.96 27.4933 31.8533 26.3066 31.16 24.6799C30.4933 23.0266 30.16 20.8533 30.16 18.1599V1.19993H34.16V18.1599C34.16 20.0799 34.3467 21.6133 34.72 22.7599C35.12 23.8799 35.7733 24.6799 36.68 25.1599C37.6133 25.6133 38.8533 25.8399 40.4 25.8399C41.9467 25.8399 43.16 25.6133 44.04 25.1599C44.9467 24.6799 45.6 23.8799 46 22.7599C46.4267 21.6133 46.64 20.0799 46.64 18.1599V1.19993H50.64Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M62.6369 1.19993V22.9599C62.6369 23.8133 62.8502 24.4533 63.2769 24.8799C63.7035 25.2799 64.3569 25.4799 65.2369 25.4799H75.1169L75.3169 28.5599C73.5302 28.6933 71.7169 28.7733 69.8769 28.7999C68.0369 28.8266 66.1969 28.8399 64.3569 28.8399C62.3302 28.8399 60.8769 28.3466 59.9969 27.3599C59.1169 26.3466 58.6769 25.0799 58.6769 23.5599V1.19993H62.6369Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M88.98 0.719931C90.3133 0.746597 91.6867 0.813264 93.1 0.919931C94.54 1.0266 95.9667 1.23993 97.38 1.55993L97.1 4.39993C95.9533 4.3466 94.66 4.3066 93.22 4.27993C91.8067 4.25326 90.4333 4.23993 89.1 4.23993C88.1667 4.23993 87.3667 4.2666 86.7 4.31993C86.0333 4.37326 85.4867 4.51993 85.06 4.75993C84.6333 4.99993 84.3133 5.3866 84.1 5.91993C83.9133 6.45326 83.82 7.1866 83.82 8.11993C83.82 9.53326 84.0867 10.5333 84.62 11.1199C85.1533 11.6799 86.02 12.1066 87.22 12.3999L92.78 13.8799C94.9133 14.4133 96.38 15.3199 97.18 16.5999C97.98 17.8533 98.38 19.5466 98.38 21.6799C98.38 23.2799 98.1933 24.5733 97.82 25.5599C97.4733 26.5466 96.9133 27.3066 96.14 27.8399C95.3933 28.3733 94.42 28.7466 93.22 28.9599C92.02 29.1733 90.5933 29.2799 88.94 29.2799C88.0333 29.2799 86.8333 29.2399 85.34 29.1599C83.8467 29.0799 82.1267 28.8533 80.18 28.4799L80.46 25.5599C82.0333 25.6133 83.3133 25.6666 84.3 25.7199C85.3133 25.7466 86.18 25.7599 86.9 25.7599C87.62 25.7599 88.34 25.7599 89.06 25.7599C90.3933 25.7599 91.4467 25.6666 92.22 25.4799C92.9933 25.2666 93.54 24.8666 93.86 24.2799C94.18 23.6666 94.34 22.7866 94.34 21.6399C94.34 20.6533 94.22 19.8799 93.98 19.3199C93.7667 18.7599 93.4067 18.3466 92.9 18.0799C92.42 17.7866 91.7933 17.5466 91.02 17.3599L85.3 15.7999C83.3 15.2399 81.8867 14.3333 81.06 13.0799C80.2333 11.8266 79.82 10.1599 79.82 8.07993C79.82 6.47993 79.9933 5.1866 80.34 4.19993C80.7133 3.21326 81.2733 2.47993 82.02 1.99993C82.7667 1.49326 83.7133 1.15993 84.86 0.99993C86.0067 0.813264 87.38 0.719931 88.98 0.719931Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M110.516 1.15993C111.85 1.15993 113.21 1.15993 114.596 1.15993C115.983 1.15993 117.343 1.1866 118.676 1.23993C120.036 1.2666 121.33 1.31993 122.556 1.39993L122.396 4.47993H111.396C110.596 4.47993 110.01 4.67993 109.636 5.07993C109.263 5.47993 109.076 6.11993 109.076 6.99993V22.9999C109.076 23.8799 109.263 24.5333 109.636 24.9599C110.01 25.3599 110.596 25.5599 111.396 25.5599H122.396L122.556 28.5999C121.33 28.6799 120.036 28.7333 118.676 28.7599C117.343 28.7866 115.983 28.7999 114.596 28.7999C113.21 28.8266 111.85 28.8399 110.516 28.8399C108.863 28.8399 107.543 28.3999 106.556 27.5199C105.596 26.6133 105.103 25.4133 105.076 23.9199V6.07993C105.103 4.55993 105.596 3.35993 106.556 2.47993C107.543 1.59993 108.863 1.15993 110.516 1.15993ZM105.796 12.7199H120.836V15.7999H105.796V12.7199Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M150.602 0.679932C151.589 0.679932 152.522 0.706598 153.402 0.759931C154.309 0.813263 155.176 0.906597 156.003 1.03993C156.856 1.1466 157.682 1.31993 158.482 1.55993L158.083 4.51993C157.229 4.43993 156.376 4.3866 155.523 4.35993C154.696 4.3066 153.883 4.27993 153.083 4.27993C152.283 4.25326 151.509 4.23993 150.762 4.23993C149.349 4.23993 148.149 4.37326 147.163 4.63993C146.176 4.9066 145.389 5.4266 144.803 6.19993C144.243 6.97326 143.829 8.07993 143.562 9.51993C143.296 10.9599 143.163 12.8399 143.163 15.1599C143.163 17.7999 143.336 19.8933 143.682 21.4399C144.056 22.9866 144.656 24.1066 145.482 24.7999C146.336 25.4933 147.469 25.8399 148.883 25.8399C149.869 25.8399 150.762 25.7066 151.562 25.4399C152.363 25.1733 153.109 24.8266 153.803 24.3999C154.523 23.9466 155.202 23.4933 155.842 23.0399L156.363 25.3599C155.909 25.8933 155.256 26.4799 154.402 27.1199C153.576 27.7333 152.602 28.2533 151.482 28.6799C150.362 29.1066 149.096 29.3199 147.682 29.3199C145.629 29.3199 143.949 28.8133 142.643 27.7999C141.363 26.7866 140.416 25.2266 139.803 23.1199C139.216 20.9866 138.923 18.2533 138.923 14.9199C138.923 11.2933 139.296 8.43993 140.042 6.35993C140.789 4.27993 142.016 2.81326 143.723 1.95993C145.429 1.1066 147.722 0.679932 150.602 0.679932ZM159.243 12.8399V28.7999H156.322L155.682 24.7199L155.322 23.8399V12.8399H159.243Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M185.921 1.19993L176.601 19.5599H172.961L163.601 1.19993H167.841L173.441 12.5599C173.681 13.0666 173.894 13.5999 174.081 14.1599C174.267 14.6933 174.454 15.2266 174.641 15.7599H174.921C175.107 15.2266 175.294 14.6933 175.481 14.1599C175.694 13.5999 175.907 13.0799 176.121 12.5999L181.721 1.19993H185.921ZM176.761 16.8399V28.7999H172.761V16.8399H176.761Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M217.571 1.19993C218.611 1.19993 219.145 1.7466 219.171 2.83993L220.291 28.7999H216.371L215.371 4.43993H214.571L208.731 24.2399C208.518 25.1199 207.958 25.5599 207.051 25.5599H203.771C202.838 25.5599 202.251 25.1199 202.011 24.2399L196.171 4.43993H195.371L194.451 28.7999H190.531L191.611 2.83993C191.665 1.7466 192.198 1.19993 193.211 1.19993H197.531C198.385 1.19993 198.945 1.63993 199.211 2.51993L204.051 18.8399C204.265 19.4533 204.438 20.0666 204.571 20.6799C204.705 21.2933 204.865 21.9333 205.051 22.5999H205.731C205.918 21.9333 206.078 21.2933 206.211 20.6799C206.371 20.0666 206.545 19.4266 206.731 18.7599L211.571 2.51993C211.785 1.63993 212.345 1.19993 213.251 1.19993H217.571Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M7.06247 14.5881C7.14315 14.5881 14.3929 14.3501 14.5943 14.3501C17.3267 14.3501 19.5368 12.0847 19.515 9.30363C19.4932 6.54892 17.1512 4.34574 14.4388 4.34574H13.4183L13.4153 5.36568C13.4142 5.90107 13.8205 6.35809 14.3469 6.38322C15.8739 6.4556 17.1771 7.44443 17.2295 9.0494C17.2725 10.3595 16.5924 11.9016 14.6331 11.9812C14.6331 11.9812 6.91996 12.1038 6.79865 12.1038C1.61354 12.1044 0 12.9688 0.0135443 19.1919C0.0135443 19.3558 0 28.8002 0 28.8002H1.76429C2.31725 28.8002 2.76598 28.345 2.76598 27.7827C2.76598 27.7827 2.7277 20.7257 2.76598 18.1421C2.81191 15.041 3.76178 14.5696 7.06247 14.5881Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
          <path
            d="M14.4859 0.799932H0V9.14544C0 9.70715 0.44814 10.163 1.00169 10.163H2.46683C2.47625 10.163 2.4845 10.1552 2.4845 10.145V3.21786C2.4845 3.20829 2.49215 3.19991 2.50216 3.19991H14.5884C17.8331 3.19991 20.4766 5.78833 20.6297 9.04554C20.7952 12.5654 17.9709 15.4882 14.5018 15.4882C14.5018 15.4882 9.2325 15.4882 7.47645 15.4882C4.21699 15.4882 3.8136 16.5727 3.8136 19.209V28.782C3.8136 28.7916 3.82126 28.7999 3.83127 28.7999H5.28934C5.8423 28.7999 6.29103 28.3447 6.29103 27.7824V20.2953C6.31753 18.6652 6.25393 17.9145 8.2367 17.8887H14.5884C19.1116 17.8887 22.8009 14.2619 22.9923 9.71492C23.1967 4.83958 19.29 0.799932 14.4859 0.799932Z"
            fill={themeColor === Theme.dark ? '#fff' : '#111115'}
          />
        </svg>
      </NavLink>

      <div className="header__nav-and-button">
        <Navigation themeColor={themeColor} />
        <button
          className={
            themeColor === Theme.dark ? 'header__button-dark' : 'header__button'
          }
        >
          Book a workout
        </button>
      </div>
    </header>
  );
};

export default Header;
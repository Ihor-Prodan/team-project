/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import './header.scss';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { Theme } from '../Redux/Slices/themeMode';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { setIsModal } from '../Redux/Slices/Modal';
import useResponsive from '../../Hooks/sizing';
import { setIsOpenMenu } from '../Redux/Slices/Menu';

interface Props {
  themeColor: Theme;
}

export const Header: React.FC<Props> = ({ themeColor }) => {
  const { isLargeScreen, isSmallScreen } = useResponsive();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme.theme);
  const [isScrolledUp, setIsScrolledUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const currentUser = useAppSelector(state => state.user.user);
  const navigate = useNavigate();
  const isOpen = useAppSelector(state => state.menu.isOpen);

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

  const location = useLocation();
  const isProfilePage = location.pathname.includes('profile');

  //link-class function (after, before, hover)
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
  //link-class function (after, before, hover)

  const isUser = () => {
    if (!currentUser) {
      dispatch(setIsModal(true));
    } else {
      navigate('/timetable/trainer-led-workout');
    }
  };

  return (
    <header
      className={`header ${isScrolledUp ? '' : 'sticky'} ${theme === themeColor ? 'header' : 'header-dark'}`}
    >
      <div className="header__logoAndNav">
        <NavLink to={'/'}>
          <svg
            className="header__logo"
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="24"
            viewBox="0 0 180 24"
            fill="none"
          >
            <path
              d="M41.3779 0.917596V14.5377C41.3779 16.7006 41.1056 18.446 40.5609 19.7737C40.0379 21.0801 39.1772 22.0331 37.9788 22.6327C36.7804 23.2109 35.1789 23.5 33.1743 23.5C31.0825 23.5 29.4156 23.2109 28.1736 22.6327C26.9316 22.0331 26.0274 21.0801 25.4608 19.7737C24.9161 18.446 24.6437 16.7006 24.6437 14.5377V0.917596H27.9121V14.5377C27.9121 16.0796 28.0647 17.311 28.3697 18.2318C28.6966 19.1313 29.2304 19.7737 29.9712 20.1592C30.7339 20.5233 31.7471 20.7053 33.0108 20.7053C34.2746 20.7053 35.266 20.5233 35.9851 20.1592C36.7259 19.7737 37.2598 19.1313 37.5866 18.2318C37.9352 17.311 38.1095 16.0796 38.1095 14.5377V0.917596H41.3779Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M51.1806 0.917596V18.3925C51.1806 19.0777 51.3549 19.5917 51.7035 19.9344C52.0522 20.2556 52.586 20.4162 53.3051 20.4162H61.378L61.5414 22.8897C60.0815 22.9967 58.5999 23.061 57.0964 23.0824C55.5929 23.1038 54.0895 23.1145 52.586 23.1145C50.93 23.1145 49.7425 22.7183 49.0235 21.926C48.3044 21.1122 47.9449 20.095 47.9449 18.8743V0.917596H51.1806Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M72.7056 0.532122C73.795 0.553537 74.9172 0.607076 76.072 0.692737C77.2486 0.778398 78.4144 0.94972 79.5692 1.2067L79.3404 3.48743C78.4035 3.4446 77.3467 3.41248 76.1701 3.39106C75.0152 3.36965 73.8931 3.35894 72.8036 3.35894C72.041 3.35894 71.3873 3.38035 70.8426 3.42318C70.2979 3.46601 69.8512 3.5838 69.5025 3.77654C69.1539 3.96927 68.8924 4.27979 68.7181 4.7081C68.5656 5.1364 68.4893 5.72532 68.4893 6.47486C68.4893 7.60987 68.7072 8.41294 69.143 8.88408C69.5788 9.3338 70.2869 9.67644 71.2675 9.91201L75.8105 11.1006C77.5537 11.5289 78.7521 12.257 79.4058 13.2849C80.0595 14.2914 80.3863 15.6513 80.3863 17.3645C80.3863 18.6494 80.2338 19.6881 79.9287 20.4804C79.6455 21.2728 79.1879 21.8831 78.556 22.3115C77.9459 22.7398 77.1506 23.0396 76.1701 23.2109C75.1896 23.3822 74.0238 23.4679 72.6729 23.4679C71.932 23.4679 70.9515 23.4358 69.7313 23.3715C68.5111 23.3073 67.1057 23.1252 65.5151 22.8254L65.7439 20.4804C67.0294 20.5233 68.0753 20.5661 68.8815 20.6089C69.7095 20.6304 70.4177 20.6411 71.006 20.6411C71.5943 20.6411 72.1826 20.6411 72.7709 20.6411C73.8604 20.6411 74.7211 20.5661 75.353 20.4162C75.9849 20.2449 76.4315 19.9236 76.693 19.4525C76.9545 18.96 77.0852 18.2533 77.0852 17.3324C77.0852 16.54 76.9872 15.919 76.7911 15.4693C76.6168 15.0196 76.3226 14.6876 75.9086 14.4735C75.5164 14.2379 75.0043 14.0452 74.3725 13.8953L69.6986 12.6425C68.0644 12.1927 66.9096 11.4646 66.2341 10.4581C65.5587 9.45158 65.2209 8.11313 65.2209 6.44274C65.2209 5.15782 65.3626 4.11918 65.6458 3.32682C65.9509 2.53445 66.4085 1.94553 67.0186 1.56006C67.6287 1.15317 68.4022 0.885474 69.3391 0.756982C70.2761 0.607076 71.3982 0.532122 72.7056 0.532122Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M90.3028 0.885474C91.3923 0.885474 92.5036 0.885474 93.6366 0.885474C94.7697 0.885474 95.8809 0.906889 96.9704 0.949721C98.0816 0.971136 99.1384 1.01397 100.141 1.07821L100.01 3.55167H91.0219C90.3682 3.55167 89.8888 3.71229 89.5838 4.03352C89.2787 4.35475 89.1262 4.86871 89.1262 5.57542V18.4246C89.1262 19.1313 89.2787 19.656 89.5838 19.9986C89.8888 20.3198 90.3682 20.4804 91.0219 20.4804H100.01L100.141 22.9218C99.1384 22.986 98.0816 23.0289 96.9704 23.0503C95.8809 23.0717 94.7697 23.0824 93.6366 23.0824C92.5036 23.1038 91.3923 23.1145 90.3028 23.1145C88.9519 23.1145 87.8733 22.7612 87.0671 22.0545C86.2827 21.3263 85.8796 20.3627 85.8578 19.1634V4.83659C85.8796 3.61592 86.2827 2.65223 87.0671 1.94553C87.8733 1.23883 88.9519 0.885474 90.3028 0.885474ZM86.4461 10.169H98.7353V12.6425H86.4461V10.169Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M123.057 0.5C123.864 0.5 124.626 0.521415 125.345 0.564245C126.086 0.607075 126.794 0.682029 127.47 0.789106C128.167 0.874766 128.842 1.01396 129.496 1.2067L129.169 3.5838C128.472 3.51955 127.775 3.47672 127.077 3.45531C126.402 3.41248 125.737 3.39106 125.084 3.39106C124.43 3.36965 123.798 3.35894 123.188 3.35894C122.033 3.35894 121.053 3.46601 120.246 3.68017C119.44 3.89432 118.798 4.31192 118.318 4.93296C117.861 5.554 117.523 6.44274 117.305 7.59916C117.087 8.75558 116.978 10.2654 116.978 12.1285C116.978 14.2486 117.12 15.9297 117.403 17.1718C117.708 18.4139 118.198 19.3133 118.874 19.8701C119.571 20.4269 120.497 20.7053 121.652 20.7053C122.458 20.7053 123.188 20.5982 123.842 20.3841C124.495 20.1699 125.106 19.8915 125.672 19.5489C126.26 19.1848 126.816 18.8208 127.339 18.4567L127.764 20.3198C127.393 20.7481 126.86 21.2193 126.162 21.7332C125.487 22.2258 124.692 22.6434 123.776 22.986C122.861 23.3287 121.826 23.5 120.671 23.5C118.994 23.5 117.621 23.0931 116.553 22.2793C115.507 21.4655 114.734 20.2128 114.233 18.5209C113.753 16.8077 113.514 14.6127 113.514 11.9358C113.514 9.02328 113.819 6.73184 114.429 5.06145C115.039 3.39106 116.041 2.21322 117.436 1.52793C118.83 0.842644 120.704 0.5 123.057 0.5ZM130.117 10.2654V23.0824H127.731L127.208 19.8059L126.914 19.0992V10.2654H130.117Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M151.916 0.917596L144.3 15.662H141.326L133.678 0.917596H137.143L141.718 10.0405C141.914 10.4474 142.089 10.8757 142.241 11.3254C142.394 11.7537 142.546 12.182 142.699 12.6103H142.928C143.08 12.182 143.233 11.7537 143.385 11.3254C143.56 10.8757 143.734 10.4581 143.908 10.0726L148.484 0.917596H151.916ZM144.431 13.4777V23.0824H141.163V13.4777H144.431Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M177.777 0.917596C178.627 0.917596 179.063 1.35661 179.085 2.23464L180 23.0824H176.797L175.98 3.51955H175.326L170.554 19.4204C170.38 20.1271 169.922 20.4804 169.182 20.4804H166.501C165.739 20.4804 165.26 20.1271 165.063 19.4204L160.292 3.51955H159.638L158.886 23.0824H155.683L156.566 2.23464C156.609 1.35661 157.045 0.917596 157.873 0.917596H161.403C162.1 0.917596 162.558 1.27095 162.776 1.97765L166.73 15.0838C166.905 15.5763 167.046 16.0689 167.155 16.5615C167.264 17.054 167.395 17.568 167.547 18.1034H168.103C168.256 17.568 168.386 17.054 168.495 16.5615C168.626 16.0689 168.768 15.5549 168.92 15.0196L172.875 1.97765C173.049 1.27095 173.507 0.917596 174.248 0.917596H177.777Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M5.77074 11.6693C5.83667 11.6693 11.7604 11.4781 11.925 11.4781C14.1576 11.4781 15.9635 9.65883 15.9457 7.42546C15.9279 5.21322 14.0143 3.44391 11.798 3.44391H10.9641L10.9617 4.26299C10.9607 4.69295 11.2927 5.05998 11.7229 5.08015C12.9706 5.13828 14.0354 5.93238 14.0782 7.22129C14.1134 8.27336 13.5576 9.51183 11.9567 9.57573C11.9567 9.57573 5.6543 9.67421 5.55518 9.67421C1.31842 9.67469 0 10.3689 0.011067 15.3665C0.011067 15.4981 0 23.0826 0 23.0826H1.4416C1.89343 23.0826 2.26008 22.717 2.26008 22.2655C2.26008 22.2655 2.22881 16.5982 2.26008 14.5234C2.29762 12.033 3.07375 11.6544 5.77074 11.6693Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
            <path
              d="M11.8364 0.596369H0V7.29841C0 7.74951 0.366175 8.11557 0.81848 8.11557H2.01565C2.02334 8.11557 2.03008 8.10933 2.03008 8.10116V2.53814C2.03008 2.53045 2.03634 2.52373 2.04452 2.52373H11.9202C14.5715 2.52373 16.7315 4.60242 16.8566 7.21819C16.9918 10.0449 14.684 12.3921 11.8494 12.3921C11.8494 12.3921 7.54388 12.3921 6.10901 12.3921C3.4457 12.3921 3.1161 13.263 3.1161 15.3802V23.068C3.1161 23.0757 3.12235 23.0824 3.13053 23.0824H4.32192C4.77375 23.0824 5.1404 22.7168 5.1404 22.2652V16.2526C5.16206 14.9435 5.11009 14.3406 6.73021 14.3199H11.9202C15.6161 14.3199 18.6307 11.4073 18.787 7.75575C18.954 3.8405 15.7619 0.596369 11.8364 0.596369Z"
              fill={themeColor === Theme.dark ? '#F3F4F6' : '#111115'}
            />
          </svg>
        </NavLink>
        {!isSmallScreen && <Navigation themeColor={themeColor} />}
      </div>
      <div className="header__profile-and-button">
        {isSmallScreen ? (
          isOpen ? (
            <svg
              onClick={() => dispatch(setIsOpenMenu(false))}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                d="M23.2621 21.9947L32.739 12.5142C32.9062 12.3463 33 12.119 32.9998 11.8821C32.9997 11.6452 32.9056 11.418 32.7382 11.2503C32.4031 10.9171 31.8129 10.9154 31.4744 11.252L22 20.7326L12.5223 11.2495C12.1855 10.9171 11.5953 10.9188 11.2602 11.2512C11.177 11.334 11.1112 11.4325 11.0665 11.541C11.0218 11.6495 10.9992 11.7658 11 11.8831C11 12.1221 11.0926 12.3459 11.2602 12.5117L20.7371 21.9939L11.261 31.477C11.0938 31.6452 11.0002 31.8728 11.0006 32.1098C11.0011 32.3469 11.0957 32.5742 11.2635 32.7417C11.426 32.9024 11.6559 32.9949 11.8933 32.9949H11.8984C12.1366 32.9941 12.3665 32.9007 12.5256 32.7383L22 23.2577L31.4778 32.7408C31.6453 32.9074 31.8693 33 32.1067 33C32.2241 33.0003 32.3404 32.9775 32.4489 32.9327C32.5575 32.888 32.6561 32.8222 32.7391 32.7393C32.8221 32.6563 32.8879 32.5577 32.9327 32.4493C32.9775 32.3408 33.0003 32.2246 33 32.1072C33 31.8691 32.9074 31.6444 32.739 31.4787L23.2621 21.9947Z"
                fill="#F3F4F6"
              />
            </svg>
          ) : (
            <svg
              onClick={() => dispatch(setIsOpenMenu(true))}
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <path
                d="M7.33398 27.5H36.6673M7.33398 16.5H36.6673"
                stroke={themeColor === Theme.light ? '#111115' : '#F3F4F6'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
        ) : (
          <NavLink
            to={'/profile/user-info'}
            className={() => getLinkClass(isProfilePage)}
          >
            <p
              onClick={isUser}
              className={
                theme === themeColor
                  ? 'navigation__nav-items mt-0.5'
                  : 'navigation__nav-items-dark mt-0.5'
              }
            >
              Profile
            </p>
          </NavLink>
        )}
        {isLargeScreen && (
          <button
            onClick={isUser}
            className={
              themeColor === Theme.dark
                ? 'header__button-dark'
                : 'header__button'
            }
          >
            Book a workout
          </button>
        )}
      </div>
    </header>
  );
};

export default React.memo(Header);

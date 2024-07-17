/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './userPage.scss';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import Footer from '../Footer/Footer';
import MemberShips from './MemberShips';
import MyWorkout from './MyWorkout';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { NavLink, useNavigate } from 'react-router-dom';
import { removeUser } from '../Redux/Slices/User';
import './Helpers/formatForm';
import PageMenu from '../PageMenu/PageMenu';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import UserInfo from './UserInfo';

interface Props {
  themeColor: Theme;
  isMyWorkout: boolean;
  isMembership: boolean;
  isUserInfo: boolean;
}

type UserData = {
  fullName: string;
  email: string;
  password: string;
  number: string;
  card: string;
  cardDate: string;
  cvv: string;
};

export const clearForm = (
  field: keyof UserData,
  setFormData: React.Dispatch<React.SetStateAction<UserData>>,
) => {
  setFormData(prevData => ({
    ...prevData,
    [field]: '',
  }));
};

export const UserPage: React.FC<Props> = ({
  themeColor,
  isMembership,
  isMyWorkout,
  isUserInfo,
}) => {
  // const [selectedMenu, setSelectedMenu] = useState<string>('user-info');
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.user.user);

  const [isMobilVersion, setIsMobilVersion] = useState<boolean>(
    window.innerWidth <= 536,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobilVersion(window.innerWidth <= 536);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobilVersion, setIsMobilVersion]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  const list = [
    { name: 'Personal info', path: '/user-info' },
    { name: 'Membership', path: '/membership' },
    { name: 'Trainer-led workouts', path: '/my-workout' },
  ];

  const handleRemoveUser = () => {
    dispatch(removeUser(currentUser));
    navigate('/');
  };

  return (
    <div className="wrapper-userPage">
      <Header themeColor={themeColor} />
      <section className="userPage">
        {isMobilVersion && (
          <div className="userPage__back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 7L9 12L14 17"
                stroke="#716560"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="userPage__back-button" onClick={() => navigate(-1)}>
              Back
            </p>
          </div>
        )}

        <h2 className="userPage__title">Profile</h2>
        <div className="userPage__info-container">
          <div className="userPage__info-container-menu">
            {isMobilVersion && isUserInfo ? (
              <UserInfo
                isMyWorkout={false}
                isMembership={false}
                isUserInfo={false}
              />
            ) : (
              <ul className="userPage__info-container-menuList">
                {list.map((item, ind) => (
                  <li
                    key={ind}
                    className="userPage__info-container-menuList-icon"
                  >
                    <NavLink
                      to={`/profile${item.path}`}
                      className={({ isActive }) =>
                        isActive
                          ? 'isActiveList'
                          : 'userPage__info-container-menuItem'
                      }
                    >
                      {item.name}
                    </NavLink>
                    {isMobilVersion && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M10 17L15 12L10 7"
                          stroke="#111115"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </li>
                ))}
                <li
                  className="userPage__info-container-menuItem mt-8 flex w-full justify-between"
                  onClick={handleRemoveUser}
                >
                  Log out
                  {isMobilVersion && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10 17L15 12L10 7"
                        stroke="#111115"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </li>
              </ul>
            )}
          </div>
          {isUserInfo && !isMembership && !isMyWorkout && !isMobilVersion && (
            <UserInfo
              isMyWorkout={false}
              isMembership={false}
              isUserInfo={false}
            />
          )}
          {isMembership && !isMobilVersion && !isMyWorkout && <MemberShips />}
          {isMyWorkout && !isMobilVersion && !isMembership && <MyWorkout />}
        </div>
        <PageMenu themeColor={Theme.dark} />
      </section>
      <Footer />
    </div>
  );
};

export default React.memo(UserPage);

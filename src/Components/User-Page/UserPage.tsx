/* eslint-disable max-len */
import React, { ChangeEvent, useEffect, useState } from 'react';
import './userPage.scss';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import Footer from '../Footer/Footer';
import MemberShips from './MemberShips';
import MyWorkout from './MyWorkout';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { NavLink } from 'react-router-dom';
import { removeUser, updateUser } from '../Redux/Slices/User';
import {
  formatCreditCardNumber,
  formatCVV,
  formatDateForm,
  formatPhoneNumber,
} from './Helpers/formatForm';

interface Props {
  themeColor: Theme;
  isMyWorkout: boolean;
  isMembership: boolean;
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
}) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(state => state.user.user);
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [formData, setFormData] = useState<UserData>({
    fullName: '',
    email: '',
    password: '',
    number: '',
    card: '',
    cardDate: '',
    cvv: '',
  });

  const list = [
    { name: 'Personal info', path: '/profile' },
    { name: 'Membership', path: '/membership' },
    { name: 'Trainer-led workouts', path: '/my-workout' },
  ];

  const handleSubmit = () => {
    // e.preventDefault();
    dispatch(
      updateUser({
        ...currentUser,
        firstName: formData.fullName.split(' ')[0] || currentUser?.firstName,
        lastName: formData.fullName.split(' ')[1] || currentUser?.lastName,
        email: formData.email || currentUser?.email,
        dataCard: {
          cardNumber: formData.card || currentUser?.dataCard.cardNumber,
          date: formData.cardDate || currentUser?.dataCard.date,
          cvv: formData.cvv || currentUser?.dataCard.cvv,
          phoneNumber: formData.number || currentUser?.dataCard.phoneNumber,
        },
      }),
    );
  };

  useEffect(() => {
    if (
      formData.fullName ||
      formData.email ||
      formData.number ||
      formData.card ||
      formData.cardDate ||
      formData.cvv
    ) {
      handleSubmit();
    }
  }, [formData]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof UserData,
  ) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: e.target.value,
    }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);

    setFormData(prevData => ({
      ...prevData,
      number: formattedPhoneNumber,
    }));
  };

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCardNumber = formatCreditCardNumber(e.target.value);

    setFormData(prevData => ({
      ...prevData,
      card: formattedCardNumber,
    }));
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedDate = formatDateForm(e.target.value);

    setFormData({ ...formData, cardDate: formattedDate });
  };

  const handleCVVChange = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedCVV = formatCVV(e.target.value);

    setFormData({ ...formData, cvv: formattedCVV });
  };

  const handleRemoveUser = () => {
    dispatch(removeUser(currentUser));
  };

  const handleFocus = (id: string) => {
    setActiveInput(id);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  return (
    <div className="wrapper-userPage">
      <Header themeColor={themeColor} />
      <section className="userPage">
        <h2 className="userPage__title">Profile</h2>
        <div className="userPage__info-container">
          <div className="userPage__info-container-menu">
            <ul className="userPage__info-container-menuList">
              {list.map((item, ind) => (
                <li key={ind}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? 'isActiveList'
                        : 'userPage__info-container-menuItem'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li
                className="userPage__info-container-menuItem mt-8"
                onClick={handleRemoveUser}
              >
                Log out
              </li>
            </ul>
          </div>
          {!isMembership && !isMyWorkout && (
            <div className="userPage__info-container-modalInfo">
              <div className="userPage__info-container-modalInfo-top">
                <h3 className="userPage__info-container-modalInfo-top-title">
                  Personal info
                </h3>
                <button
                  onClick={handleSubmit}
                  className="userPage__info-container-modalInfo-top-save"
                  type="button"
                >
                  Save
                </button>
              </div>
              <form
                className="userPage__info-container-modalInfo-forms"
                // onChange={e => handleSubmit(e)}
              >
                <div className="userPage__info-container-modalInfo-forms-personal">
                  <div className="userPage__info-container-modalInfo-forms-personal-info">
                    <p className="userPage__info-container-modalInfo-forms-personal-name">
                      Full name
                    </p>
                    <svg
                      onClick={() => clearForm('fullName', setFormData)}
                      className={`userPage__info-container-modalInfo-forms-personal-input-clear ${
                        activeInput === 'fullName' ? 'active' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                        fill="#B0B1B5"
                      />
                    </svg>
                    <input
                      onFocus={() => handleFocus('fullName')}
                      onBlur={handleBlur}
                      value={formData.fullName}
                      onChange={e => handleInputChange(e, 'fullName')}
                      className="userPage__info-container-modalInfo-forms-personal-input"
                      placeholder={
                        currentUser
                          ? `${currentUser.firstName} ${currentUser.lastName}`
                          : 'Serhiy Antonovych'
                      }
                    ></input>
                  </div>
                  <div className="userPage__info-container-modalInfo-forms-personal-info">
                    <p className="userPage__info-container-modalInfo-forms-personal-name">
                      Email
                    </p>
                    <svg
                      onClick={() => clearForm('email', setFormData)}
                      className={`userPage__info-container-modalInfo-forms-personal-input-clear ${
                        activeInput === 'email' ? 'active' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                        fill="#B0B1B5"
                      />
                    </svg>
                    <input
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      value={formData.email}
                      onChange={e => handleInputChange(e, 'email')}
                      className="userPage__info-container-modalInfo-forms-personal-input"
                      placeholder={
                        currentUser
                          ? `${currentUser.email}`
                          : 'Pulsegym@example.ua'
                      }
                    ></input>
                  </div>
                  <div className="userPage__info-container-modalInfo-forms-personal-info">
                    <p className="userPage__info-container-modalInfo-forms-personal-name">
                      {' '}
                      Mobile number
                    </p>
                    <svg
                      onClick={() => clearForm('number', setFormData)}
                      className={`userPage__info-container-modalInfo-forms-personal-input-clear ${
                        activeInput === 'number' ? 'active' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                        fill="#B0B1B5"
                      />
                    </svg>
                    <input
                      onFocus={() => handleFocus('number')}
                      onBlur={handleBlur}
                      value={formData.number}
                      onChange={handlePhoneChange}
                      className="userPage__info-container-modalInfo-forms-personal-input"
                      placeholder={
                        currentUser?.dataCard.phoneNumber !== ''
                          ? `${currentUser?.dataCard.phoneNumber}`
                          : '12 345 67 89'
                      }
                    ></input>
                  </div>
                </div>
                <div className="userPage__info-container-modalInfo-forms-cartInfo">
                  <p className="userPage__info-container-modalInfo-forms-cartInfo-name">
                    Card
                  </p>
                  <p className="userPage__info-container-modalInfo-forms-cartInfo-description mt-[-10px]">
                    Add a card for quick payment in Pulse gym
                  </p>
                  <div className="userPage__info-container-modalInfo-forms-cartInfo-info">
                    <div className="userPage__info-container-modalInfo-forms-personal-info">
                      <p className="userPage__info-container-modalInfo-forms-personal-name">
                        Credit card number
                      </p>
                      <svg
                        onClick={() => clearForm('card', setFormData)}
                        className={`userPage__info-container-modalInfo-forms-personal-input-clear ${
                          activeInput === 'card' ? 'active' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                          fill="#B0B1B5"
                        />
                      </svg>
                      <input
                        onFocus={() => handleFocus('card')}
                        onBlur={handleBlur}
                        value={formData.card}
                        onChange={handleCardNumberChange}
                        className="userPage__info-container-modalInfo-forms-personal-input"
                        placeholder={
                          currentUser?.dataCard.cardNumber !== ''
                            ? `${currentUser?.dataCard.cardNumber}`
                            : '1234 1234 1234 1234'
                        }
                      ></input>
                    </div>
                    <div className="userPage__info-container-modalInfo-forms-cartInfo-info-cardData">
                      <div className="userPage__info-container-modalInfo-forms-personal-info">
                        <p className="userPage__info-container-modalInfo-forms-personal-name">
                          Expiration Date
                        </p>
                        <svg
                          className={`userPage__info-container-modalInfo-forms-personal-input-clear ${
                            activeInput === 'cardDate' ? 'active' : ''
                          }`}
                          onClick={() => clearForm('cardDate', setFormData)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                            fill="#B0B1B5"
                          />
                        </svg>
                        <input
                          onFocus={() => handleFocus('cardDate')}
                          onBlur={handleBlur}
                          value={formData.cardDate}
                          onChange={handleDateChange}
                          className="userPage__info-container-modalInfo-forms-personal-input w-full"
                          placeholder={
                            currentUser?.dataCard.date !== ''
                              ? `${currentUser?.dataCard.date}`
                              : 'MM/YY'
                          }
                        ></input>
                      </div>
                      <div className="userPage__info-container-modalInfo-forms-personal-info">
                        <p className="userPage__info-container-modalInfo-forms-personal-name">
                          CVV
                        </p>
                        <svg
                          onClick={() => clearForm('cvv', setFormData)}
                          className={`userPage__info-container-modalInfo-forms-personal-input-clear ${
                            activeInput === 'cvv' ? 'active' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                            fill="#B0B1B5"
                          />
                        </svg>
                        <input
                          onFocus={() => handleFocus('cvv')}
                          onBlur={handleBlur}
                          value={formData.cvv}
                          onChange={handleCVVChange}
                          className="userPage__info-container-modalInfo-forms-personal-input w-full"
                          placeholder={
                            currentUser?.dataCard.cvv !== ''
                              ? `${currentUser?.dataCard.cvv}`
                              : '•••'
                          }
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
          {isMembership && <MemberShips />}
          {isMyWorkout && <MyWorkout />}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default React.memo(UserPage);

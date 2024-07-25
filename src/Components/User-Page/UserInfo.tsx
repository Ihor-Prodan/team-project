/* eslint-disable max-len */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { updateUser } from '../Redux/Slices/User';
import './userPage.scss';
import {
  formatCreditCardNumber,
  formatCVV,
  formatDateForm,
  formatPhoneNumber,
} from './Helpers/formatForm';

interface Props {
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

const UserInfo: React.FC<Props> = ({
  isMembership,
  isMyWorkout,
  isUserInfo,
}) => {
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const currentUser = useAppSelector(state => state.user.user);
  const [formData, setFormData] = useState<UserData>({
    fullName: `${currentUser?.firstName} ${currentUser?.lastName}`,
    email: currentUser?.email || '',
    password: '',
    number: currentUser?.dataCard.phoneNumber || '',
    card: currentUser?.dataCard.cardNumber || '',
    cardDate: currentUser?.dataCard.date || '',
    cvv: currentUser?.dataCard.cvv || '',
  });
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    // e.preventDefault();
    if (
      formData.fullName.trim() !== '' ||
      formData.email.trim() !== '' ||
      formData.card.trim() !== '' ||
      formData.cardDate.trim() !== '' ||
      formData.cvv.trim() !== '' ||
      formData.number.trim() !== ''
    ) {
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
    }
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

  const handleFocus = (id: string) => {
    setActiveInput(id);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  const visiblePassword = () => {
    setIsVisiblePassword(prev => !prev);
  };

  // const handleBlur = (field: keyof UserData) => {
  //   if (formData[field].trim() !== '') {
  //     clearForm(field, setFormData);
  //   }
  // };

  // console.log(userFullName.split(' ').join(''));

  return (
    <div className="userPage__info-container-modalInfo">
      <div
        className={
          !isMyWorkout && !isMembership && isUserInfo
            ? 'userPage__info-container-modalInfo-top'
            : 'userPage__info-container-modalInfo-top-workout'
        }
      >
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
      <form className="userPage__info-container-modalInfo-forms">
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
              placeholder="Serhiy Antonovych"
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
              placeholder="Pulsegym@example.ua"
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
              className="userPage__info-container-modalInfo-forms-personal-input-tel"
              placeholder="12 345 67 89"
            ></input>
            <p className="absolute left-4 bottom-3">+380</p>
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
                placeholder="1234 1234 1234 1234"
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
                  placeholder="MM/YY"
                ></input>
              </div>
              <div className="userPage__info-container-modalInfo-forms-personal-info">
                <p className="userPage__info-container-modalInfo-forms-personal-name">
                  CVV
                </p>
                {/* <svg
                 
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
                </svg> */}
                <svg
                  onClick={visiblePassword}
                  className="userPage__info-container-modalInfo-forms-personal-input-clear active"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    d="M1 5.88802C4.2 -1.22309 13.8 -1.22309 17 5.88802"
                    stroke="#B0B1B5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.9987 9.4427C8.6485 9.4427 8.30174 9.37373 7.97821 9.23972C7.65467 9.1057 7.3607 8.90928 7.11308 8.66166C6.86546 8.41403 6.66903 8.12006 6.53502 7.79653C6.40101 7.47299 6.33203 7.12623 6.33203 6.77604C6.33203 6.42585 6.40101 6.07909 6.53502 5.75555C6.66903 5.43202 6.86546 5.13805 7.11308 4.89042C7.3607 4.6428 7.65467 4.44637 7.97821 4.31236C8.30174 4.17835 8.6485 4.10937 8.9987 4.10938C9.70594 4.10938 10.3842 4.39033 10.8843 4.89042C11.3844 5.39052 11.6654 6.0688 11.6654 6.77604C11.6654 7.48328 11.3844 8.16156 10.8843 8.66166C10.3842 9.16175 9.70594 9.4427 8.9987 9.4427Z"
                    stroke="#B0B1B5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  onFocus={() => handleFocus('cvv')}
                  onBlur={handleBlur}
                  value={formData.cvv}
                  onChange={handleCVVChange}
                  className="userPage__info-container-modalInfo-forms-personal-input w-full"
                  placeholder={
                    isVisiblePassword ? `${currentUser?.dataCard.cvv}` : '•••'
                  }
                ></input>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default React.memo(UserInfo);

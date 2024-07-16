/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import './auth.scss';
import pictures from './Pictures/Sign-up.png';
import picturesLogin from './Pictures/login.png';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setIsConfirm, setIsModal } from '../Redux/Slices/Modal';
import Joi from 'joi';
import { useNavigate } from 'react-router-dom';
import { userLoad } from '../Redux/Slices/User';
import ReactDOM from 'react-dom';

interface FormData {
  fullName?: string;
  email: string;
  password: string;
}

const schemaSignUp = Joi.object({
  fullName: Joi.string().required().messages({
    'string.empty': 'Enter your first name and last name',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Enter your email',
      'string.email': 'Enter your email',
    }),
  password: Joi.string()
    .min(8)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .messages({
      'string.empty': 'Password must be at least 8 characters long',
      'string.min': 'Password must be at least 8 characters long',
      'string.pattern.base':
        'Password must include latin letters and/or numbers',
    }),
});

const schemaLogin = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Enter your email',
      'string.email': 'Enter your email',
    }),
  password: Joi.string().required().messages({
    'string.empty': 'Password must be at least 8 characters long',
    'string.pattern.base': 'Password must include latin letters and/or numbers',
  }),
});

export const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const navigate = useNavigate();
  const currentUser = useAppSelector(state => state.user.user);
  const isConfirm = useAppSelector(state => state.modal.isConfirm);
  const [newScreen, setNewScreen] = useState(window.innerWidth <= 1060);

  useEffect(() => {
    const handleResize = () => {
      setNewScreen(window.innerWidth <= 1060);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [newScreen, setNewScreen]);

  const handleFocus = (id: string) => {
    setActiveInput(id);
  };

  const handleBlur = () => {
    setActiveInput(null);
  };

  const validateForm = (data: FormData) => {
    const schema = isConfirm ? schemaLogin : schemaSignUp;
    const { error } = schema.validate(data, { abortEarly: false });

    if (!error) {
      return {};
    }

    const findErrors: Record<string, string> = {};

    error.details.forEach(detail => {
      findErrors[detail.path[0]] = detail.message;
    });

    return findErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    const formErrors = validateForm({ ...formData, [name]: value });

    setErrors(formErrors);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formErrors = validateForm(formData);

    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      const fullNameArray = formData.fullName?.split(' ');
      let firstName = '';
      let lastName = '';

      if (fullNameArray && fullNameArray.length > 0) {
        firstName = fullNameArray[0];
        lastName = fullNameArray.slice(1).join(' ');
      }

      const user = {
        firstName,
        lastName,
        email: formData.email,
        password: formData.password,
        membership: {
          duration: '',
          date: '',
          giveOne: '',
          giveTwo: '',
          giveThree: '',
        },
        workout: [
          {
            trainerName: '',
            date: '',
            time: '',
            location: '',
          },
        ],
        dataCard: {
          cardNumber: '',
          cvv: '',
          date: '',
          phoneNumber: '',
        },
      };

      if (user.email !== currentUser?.email) {
        dispatch(userLoad(user));
      }

      setFormData({
        email: '',
        password: '',
      });

      navigate('/profile');

      // eslint-disable-next-line no-console
      console.log('Form submitted', user);
    }
  };

  const visiblePassword = () => {
    setIsVisiblePassword(prev => !prev);
  };

  const clearForm = (em: string) => {
    if (em === 'email') {
      setFormData({
        ...formData,
        email: '',
      });
    }

    if (em === 'name') {
      setFormData({
        ...formData,
        fullName: '',
      });
    }
  };

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="wrapper">
      <section className="autorization">
        <div className="autorization__modal">
          <div className="autorization__modal-buttons">
            {isConfirm && (
              <button
                type="button"
                className="autorization__modal-BackButton"
                onClick={() => dispatch(setIsConfirm(false))}
              >
                Back
              </button>
            )}

            <button
              type="button"
              className="autorization__modal-closeButton"
              onClick={() => dispatch(setIsModal(false))}
            >
              Close
            </button>
          </div>{' '}
          <div className="autorization__modal-container">
            <img
              src={isConfirm ? picturesLogin : pictures}
              className={
                isConfirm
                  ? 'autorization__modal-container-image-confirm'
                  : 'autorization__modal-container-image'
              }
              alt="sign-up"
            ></img>
            <div className="autorization__modal-container-auth">
              <h2 className="autorization__modal-container-auth-title">
                {isConfirm ? 'Log in' : 'Sign up'}
              </h2>
              <form
                className="autorization__modal-forms"
                onSubmit={handleSubmit}
              >
                {!isConfirm && (
                  <div className="autorization__modal-forms-container">
                    <p className="autorization__modal-forms-name">Full name</p>
                    <div className="relative">
                      <svg
                        onClick={() => clearForm('name')}
                        className={`autorization__modal-forms-input-close--1 ${
                          activeInput === 'fullName' ? 'active' : ''
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width={newScreen ? '16' : '24'}
                        height={newScreen ? '16' : '24'}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                          fill="#B0B1B5"
                        />
                      </svg>
                      <input
                        name="fullName"
                        value={formData.fullName || ''}
                        onChange={handleChange}
                        onFocus={() => handleFocus('fullName')}
                        onBlur={handleBlur}
                        className={
                          errors.fullName
                            ? 'error'
                            : 'autorization__modal-forms-input'
                        }
                        placeholder="John Doe"
                      ></input>
                    </div>
                    <p
                      className={
                        errors.fullName
                          ? 'errorMessage'
                          : 'autorization__modal-forms-errormessage'
                      }
                    >
                      {'Enter your first name and last name' || errors.fullName}
                    </p>
                  </div>
                )}
                <div className="autorization__modal-forms-container">
                  <p className="autorization__modal-forms-name">Email</p>
                  <div className="relative">
                    <svg
                      onClick={() => clearForm('email')}
                      className={`autorization__modal-forms-input-close--2 ${
                        activeInput === 'email' ? 'active' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width={newScreen ? '16' : '24'}
                      height={newScreen ? '16' : '24'}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
                        fill="#B0B1B5"
                      />
                    </svg>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      className={
                        errors.email
                          ? 'error'
                          : 'autorization__modal-forms-input'
                      }
                      placeholder="Pulsegym@example.ua"
                    ></input>
                  </div>
                  <p
                    className={
                      errors.email
                        ? 'errorMessage'
                        : 'autorization__modal-forms-errormessage'
                    }
                  >
                    {'Enter your email' || errors.email}
                  </p>
                </div>
                <div className="autorization__modal-forms-container">
                  <p className="autorization__modal-forms-name">Password</p>
                  <div className="relative">
                    <svg
                      onClick={visiblePassword}
                      className={`autorization__modal-forms-input-close--3 ${
                        activeInput === 'password' ? 'active' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width={newScreen ? '14' : '18'}
                      height={newScreen ? '6' : '10'}
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
                      name="password"
                      type={isVisiblePassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      onFocus={() => handleFocus('password')}
                      onBlur={handleBlur}
                      className={
                        errors.password
                          ? 'error'
                          : 'autorization__modal-forms-input'
                      }
                      placeholder="••••••••"
                    ></input>
                  </div>
                  {!isConfirm ? (
                    <>
                      <p
                        className={
                          errors.password
                            ? 'errorMessage ml-2'
                            : 'autorization__modal-forms-errormessage ml-2'
                        }
                      >
                        * Must be at least 8 characters long
                      </p>
                      <p
                        className={
                          errors.password
                            ? 'errorMessage ml-2'
                            : 'autorization__modal-forms-errormessage ml-2'
                        }
                      >
                        * Must include latin letters and/or numbers
                      </p>
                    </>
                  ) : (
                    <button className="autorization__modal-forms-resendCode">
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="autorization__modal-forms-buttonsContainer">
                  <button className="autorization__modal-forms-button-continue">
                    Continue
                  </button>
                  <button className="autorization__modal-forms-button-google">
                    {isConfirm ? 'Log in with Google' : 'Sign up with Google'}
                  </button>
                </div>
                <div className="autorization__modal-loginContainer mt-[-3px]">
                  <p className="autorization__modal-message">
                    {!isConfirm
                      ? 'Already have an account?'
                      : 'You don’t have an account?'}
                  </p>
                  {!isConfirm ? (
                    <p
                      className="autorization__modal-login"
                      onClick={() => dispatch(setIsConfirm(true))}
                    >
                      Log in
                    </p>
                  ) : (
                    <p
                      className="autorization__modal-login"
                      onClick={() => dispatch(setIsConfirm(false))}
                    >
                      Sign up
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>,
    modalRoot,
  );
};

export default React.memo(Auth);

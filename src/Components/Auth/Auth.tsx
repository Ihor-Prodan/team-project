/* eslint-disable max-len */
import React from 'react';
import './auth.scss';
import pictures from './Pictures/Sign-up.png';
import { useAppDispatch } from '../../Hooks/hooks';
import { setIsModal } from '../Redux/Slices/Modal';

export const Auth: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="wrapper">
      <section className="autorization">
        <div className="autorization__modal">
          {' '}
          <button
            type="button"
            className="autorization__modal-closeButton"
            onClick={() => dispatch(setIsModal(false))}
          >
            Close
          </button>
          <div className="autorization__modal-container">
            <div className="autorization__modal-container-imageWraper">
              <img
                src={pictures}
                className="autorization__modal-container-imageWraper-image"
                alt="sing-up"
              ></img>
            </div>
            <div className="autorization__modal-container-auth">
              <h2 className="autorization__modal-container-auth-title">
                Sign up
              </h2>
              <form className="autorization__modal-forms">
                <div className="autorization__modal-forms-container">
                  <p className="autorization__modal-forms-name">Full name</p>
                  <input className="autorization__modal-forms-input"></input>
                  <p className="autorization__modal-forms-errormessage">
                    Enter your first name and last name
                  </p>
                </div>
                <div className="autorization__modal-forms-container">
                  <p className="autorization__modal-forms-name">Email</p>
                  <input className="autorization__modal-forms-input"></input>
                  {/* <p className="autorization__modal-forms-errormessage">
                    Enter your email
                  </p> */}
                </div>
                <div className="autorization__modal-forms-container">
                  <p className="autorization__modal-forms-name">
                    Mobile number
                  </p>
                  <input className="autorization__modal-forms-input"></input>
                  <p className="autorization__modal-forms-errormessage">
                    We will send a code to your number to verify your account
                  </p>
                </div>
                <div className="autorization__modal-forms-buttonsContainer">
                  <button className="autorization__modal-forms-button-continue">
                    Continue
                  </button>
                  <button className="autorization__modal-forms-button-google">
                    Sign up with Google
                  </button>
                </div>
                <div className="autorization__modal-loginContainer">
                  <p className="autorization__modal-message">
                    Already have an account?
                  </p>
                  <p className="autorization__modal-login">Log in</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

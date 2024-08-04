/* eslint-disable max-len */
import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import poster from './Pictures/posterContact.png';
import './contacts.scss';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/location';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';
import PageMenu from '../PageMenu/PageMenu';
import { useNavigate } from 'react-router-dom';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import { setIsModal } from '../Redux/Slices/Modal';

interface Props {
  themeColor: Theme;
}

export const Contacts: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  const isUser = () => {
    if (!currentUser) {
      dispatch(setIsModal(true));
    }

    if (!currentUser?.membership.date) {
      navigate('/prices');
    } else {
      navigate('/timetable/trainer-led-workout');
    }
  };

  return (
    <div className="wrapper">
      <Header themeColor={themeColor} />
      <section className="contacts">
        <img className="contacts__poster" src={poster} alt="poster"></img>
        <div className="contacts__container">
          <div className="contacts__container-visitUs">
            <h4 className="contacts__container-title">Visit us</h4>
            <p className="contacts__container-visitUs-content">
              Address:
              <a
                href="https://www.google.com/maps/search/?api=1&query=Velyka+Vasylkivska+Street,+72,+Kyiv,+Ukraine"
                className="contacts__container-visitUs-content-text"
                target="_blank"
                rel="noopener noreferrer"
              >
                Velyka Vasylkivska Street, 72, Kyiv
              </a>
            </p>
            <div className="contacts__container-visitUs-content-opening">
              <p className="contacts__container-visitUs-content-opening-hours">
                Opening hours:
              </p>
              <p className="contacts__container-visitUs-content-opening-day">
                Monday – Friday: 6:00 – 22:00
              </p>
              <p className="contacts__container-visitUs-content-opening-day">
                Saturday – Sunday: 8:00 – 20:00
              </p>
            </div>
          </div>
          <div className="contacts__container-contactUs">
            <h4 className="contacts__container-title">Contact us</h4>
            <p className="contacts__container-content">
              Telephone number:
              <a
                href="tel:+380441234567"
                className="contacts__container-content-text"
              >
                +380 (44) 123-4567
              </a>
            </p>
            <p className="contacts__container-content">
              Email:
              <a
                className="contacts__container-content-text"
                href="mailto:info@pulsegym.ua"
              >
                info@pulsegym.ua
              </a>
            </p>
          </div>
          <div className="contacts__container-description">
            <p className="contacts__container-description-text">
              We’re here to help you on your fitness journey!
            </p>
            <p className="contacts__container-description-text">
              Curious to try our gym? Book a workout session and experience it
              firsthand!
            </p>
            <button className="contacts__ready-button" onClick={isUser}>
              Book a workout
              <svg
                className="contacts__ready-button-arrow-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12.013L20.789 12M14.013 19L21 12L14.012 5"
                  strokeWidth="1"
                  stroke="#111115"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer />
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
    </div>
  );
};

export default React.memo(Contacts);

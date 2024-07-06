/* eslint-disable max-len */
import React from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import poster from './Pictures/posterContact.png';
import './contacts.scss';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/location';
import { useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';

interface Props {
  themeColor: Theme;
}

export const Contacts: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);

  return (
    <div className="wrapper">
      <Header themeColor={themeColor} />
      <section className="contacts">
        <img className="contacts__poster" src={poster} alt="poster"></img>
        <div className="contacts__container">
          <div className="contacts__container-visitUs">
            <h4 className="contacts__container-title">Visit us</h4>
            <p className="contacts__container-visitUs-content">
              Adress:
              <span className="contacts__container-visitUs-content-text">
                Kyiv, Velyka Vasylkivska Street, 72
              </span>
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
              <span className="contacts__container-content-text">
                +380 (44) 123-4567
              </span>
            </p>
            <p className="contacts__container-content">
              Email:
              <span className="contacts__container-content-text">
                info@pulsegym.ua
              </span>
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
          </div>
        </div>
      </section>
      <Footer />
      {isModalVisible && <Auth />}
    </div>
  );
};

export default Contacts;

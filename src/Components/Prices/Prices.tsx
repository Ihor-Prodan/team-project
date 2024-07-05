import React from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import './prices.scss';
import { GivIcon, GroupIcon, GymIcon, LockerIcon } from './Helpers/priceIcons';
import Footer from '../Footer/Footer';
import pricesCard from './Helpers/priceCardInfo';
import useScrollToTop from '../../Hooks/location';

interface Props {
  themeColor: Theme;
}

export const Prices: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="prices">
        <h2 className="prices__title">membership Prices</h2>
        <div className="prices__grid">
          {pricesCard.map(item => (
            <div className="prices__grid-card" key={item.monts}>
              <div className="prices__grid-card-container-top">
                {item.best && (
                  <div className="prices__grid-card-top">Best offer</div>
                )}

                <p className="prices__grid-card-container-top-title">
                  {item.monts} months
                </p>
                <p className="prices__grid-card-container-top-text text-nowrap">
                  {item.slogan}
                </p>
              </div>
              <div className="prices__grid-card-container-content">
                <div className="prices__grid-card-content">
                  <div>
                    <GymIcon />
                  </div>
                  <p className="prices__grid-card-content-text">Gym Access</p>
                </div>
                <div className="prices__grid-card-content">
                  <div className="ml-1">
                    <GroupIcon />
                  </div>
                  <p className="prices__grid-card-content-text ml-0.5">
                    Unlimited Group Classes
                  </p>
                </div>
                <div className="prices__grid-card-content">
                  <div className="ml-1">
                    <LockerIcon />
                  </div>
                  <p className="prices__grid-card-content-text ml-1">
                    Locker Room Facilities
                  </p>
                </div>
                <span className="prices__grid-card-line"></span>
              </div>
              <div className="prices__grid-card-bottom">
                <div className="prices__grid-card-benefits-container">
                  <div
                    className="prices__grid-card-benefits"
                    key={item.giveOne}
                  >
                    <div>{item.giveOne && <GivIcon />}</div>
                    <p className="prices__grid-card-benefits-container-text">
                      {item.giveOne}
                    </p>
                  </div>
                  <div className="prices__grid-card-benefits">
                    {item.giveTwo && (
                      <div>
                        <GivIcon />
                      </div>
                    )}
                    <p className="prices__grid-card-benefits-container-text">
                      {item.giveTwo}
                    </p>
                  </div>
                  <div className="prices__grid-card-benefits">
                    {item.giveThree && (
                      <div>
                        <GivIcon />
                      </div>
                    )}
                    <p className="prices__grid-card-benefits-container-text">
                      {item.giveThree}
                    </p>
                  </div>
                </div>
                {/* <div className="prices__grid-card-price-bottom-priceAndButton"> */}
                <p className="prices__grid-card-price">
                  {item.price}
                  <span className="prices__grid-card-price-month">
                    / 3 months
                  </span>
                </p>
                <button className="prices__grid-card-button">
                  Get membership
                </button>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

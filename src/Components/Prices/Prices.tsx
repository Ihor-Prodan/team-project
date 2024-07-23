import React, { useEffect } from 'react';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import './prices.scss';
import { GivIcon, GroupIcon, GymIcon, LockerIcon } from './Helpers/priceIcons';
import Footer from '../Footer/Footer';
import pricesCard, { Membership } from './Helpers/priceCardInfo';
import useScrollToTop from '../../Hooks/location';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { setIsModal } from '../Redux/Slices/Modal';
import { Auth } from '../Auth/Auth';
import { updateUser, User } from '../Redux/Slices/User';
import PageMenu from '../PageMenu/PageMenu';
import { useNavigate } from 'react-router-dom';
import { setIsOpenMenu } from '../Redux/Slices/Menu';
import CustomAlert from '../CustomAlert/CustomAlert';
import { showAlert } from '../Redux/Slices/Alert';

interface Props {
  themeColor: Theme;
}

export const Prices: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const dispatch = useAppDispatch();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  const handleBuyMembership = (item: Membership): User | void => {
    const currentDate = new Date();

    const addMonths = (date: Date, months: number) => {
      const result = new Date(date);

      result.setMonth(result.getMonth() + months);

      return result;
    };

    const formatDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}.${month}.${day}`;
    };

    const endDate = formatDate(addMonths(currentDate, parseInt(item.duration)));

    if (currentUser) {
      if (currentUser.membership && currentUser.membership.duration) {
        dispatch(
          showAlert({
            message: 'You already have an active membership.',
            type: 'Active Membership Notice',
          }),
        );

        return;
      }

      const updatedUser: User = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: currentUser.password,
        membership: {
          duration: item.duration,
          date: endDate,
          giveOne: item.giveOne,
          giveTwo: item.giveTwo,
          giveThree: item.giveThree,
          slogan: item.slogan,
          access: item.access,
          unlimited: item.unlimited,
          locker: item.locker,
          price: item.price,
          best: item.best,
        },
        workouts: currentUser.workouts,
        dataCard: currentUser.dataCard,
      };

      dispatch(updateUser(updatedUser));

      return updatedUser;
    }

    if (!currentUser) {
      dispatch(setIsModal(true));
    }
  };

  return (
    <div className="wrapper bg-[#111115]">
      <Header themeColor={themeColor} />
      <section className="prices">
        <h2 className="prices__title">membership Prices</h2>
        <div className="prices__grid">
          <CustomAlert />
          {pricesCard.map(item => (
            <div className="prices__grid-card" key={item.duration}>
              <div className="prices__grid-card-container-top">
                {item.best && (
                  <div className="prices__grid-card-top">Best offer</div>
                )}

                <p className="prices__grid-card-container-top-title">
                  {item.duration} months
                </p>
                <p className="prices__grid-card-container-top-text text-nowrap">
                  {item.slogan}
                </p>
              </div>
              <div className="prices__grid-card-container-content">
                <div className="prices__grid-card-content">
                  <div>
                    <GymIcon isMember={currentUser?.membership.duration} />
                  </div>
                  <p className="prices__grid-card-content-text">Gym Access</p>
                </div>
                <div className="prices__grid-card-content">
                  <div className="ml-1">
                    <GroupIcon isMember={currentUser?.membership.duration} />
                  </div>
                  <p className="prices__grid-card-content-text ml-0.5">
                    Unlimited Group Classes
                  </p>
                </div>
                <div className="prices__grid-card-content">
                  <div className="ml-1">
                    <LockerIcon isMember={currentUser?.membership.duration} />
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
                    <div>
                      {item.giveOne && (
                        <GivIcon isMember={currentUser?.membership.duration} />
                      )}
                    </div>
                    <p className="prices__grid-card-benefits-container-text">
                      {item.giveOne}
                    </p>
                  </div>
                  <div className="prices__grid-card-benefits">
                    {item.giveTwo && (
                      <div>
                        <GivIcon isMember={currentUser?.membership.duration} />
                      </div>
                    )}
                    <p className="prices__grid-card-benefits-container-text">
                      {item.giveTwo}
                    </p>
                  </div>
                  <div className="prices__grid-card-benefits">
                    {item.giveThree && (
                      <div>
                        <GivIcon isMember={currentUser?.membership.duration} />
                      </div>
                    )}
                    <p className="prices__grid-card-benefits-container-text">
                      {item.giveThree}
                    </p>
                  </div>
                </div>
                <p className="prices__grid-card-price">
                  {item.price}
                  <span className="prices__grid-card-price-month">
                    / 3 months
                  </span>
                </p>
                <button
                  className="prices__grid-card-button"
                  onClick={() => handleBuyMembership(item)}
                >
                  Get membership
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
    </div>
  );
};

export default React.memo(Prices);

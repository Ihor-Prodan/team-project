/* eslint-disable max-len */
import React, { useEffect } from 'react';
import './userPage.scss';
import {
  GivIcon,
  GroupIcon,
  GymIcon,
  LockerIcon,
} from '../Prices/Helpers/priceIcons';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { useNavigate } from 'react-router-dom';
import { setIsOpenMenu } from '../Redux/Slices/Menu';

export const Memberships: React.FC = () => {
  const currentUser = useAppSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  return (
    <div className="userPage__info-container-modalInfo">
      <div className="userPage__info-container-modalInfo-top">
        <h3 className="userPage__info-container-modalInfo-top-title">
          Membership
        </h3>
      </div>
      <p className="userPage__info-container-modalInfo-forms-cartInfo-description max-w-[561px] mt-[-24px]">
        You can try trial workouts at the start of your membership, and if
        you&apos;re not satisfied, cancel membership within one month.
      </p>
      <div className="userPage__info-container-member-content mt-8">
        {!currentUser?.membership.date && (
          <div className="userPage__info-container-member">
            <p className="userPage__info-container-member-text">
              You do not have any membership yet
            </p>
            <button
              className="userPage__info-container-member-button"
              onClick={() => navigate('/prices')}
            >
              select membership
            </button>
          </div>
        )}
      </div>
      {currentUser?.membership.date && (
        <div className="userPage__info-container-member-isMember mt-[-40px]">
          <div className="userPage__info-container-member-isMember-duration">
            <p className="userPage__info-container-member-isMember-duration-months">
              {currentUser.membership.duration} months
            </p>
            <p className="userPage__info-container-member-isMember-duration-data mt-1">
              Due to {currentUser.membership.date.slice(0, 10)}
            </p>
          </div>
          <div className="userPage__info-container-member-isMember-benefits">
            <div className="userPage__info-container-member-isMember-benefits-container">
              <div className="prices__grid-card-content">
                <div>
                  <GymIcon isMember={true} />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text">
                  Gym Access
                </p>
              </div>
              <div className="prices__grid-card-content">
                <div className="ml-1">
                  <GroupIcon isMember={true} />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text ml-0.5">
                  Unlimited Group Classes
                </p>
              </div>
              <div className="prices__grid-card-content">
                <div className="ml-1">
                  <LockerIcon isMember={true} />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text ml-1">
                  Locker Room Facilities
                </p>
              </div>
            </div>
            <span className="userPage__info-container-member-isMember-benefits-line"></span>
            <div className="userPage__info-container-member-isMember-benefits-container">
              <div className="prices__grid-card-content">
                <div>
                  <GivIcon isMember={true} />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text">
                  {currentUser.membership.giveOne}
                </p>
              </div>
              <div className="prices__grid-card-content">
                {currentUser.membership.giveTwo && (
                  <div>
                    <GivIcon isMember={true} />
                  </div>
                )}
                <p className="userPage__info-container-member-isMember-benefits-text ">
                  {currentUser.membership.giveTwo}
                </p>
              </div>
              <div className="prices__grid-card-content">
                {currentUser.membership.giveThree && (
                  <div>
                    <GivIcon isMember={true} />
                  </div>
                )}
                <p className="userPage__info-container-member-isMember-benefits-text ">
                  {currentUser.membership.giveThree}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Memberships);

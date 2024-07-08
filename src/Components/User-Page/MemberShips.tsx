/* eslint-disable max-len */
import React, { useState } from 'react';
import './userPage.scss';
import {
  GivIcon,
  GroupIcon,
  GymIcon,
  LockerIcon,
} from '../Prices/Helpers/priceIcons';

export const Memberships: React.FC = () => {
  const [haveMember, setHaveMember] = useState(false);

  const handleMemberChange = () => {
    setHaveMember(prev => !prev);
  };

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
        {!haveMember && (
          <div className="userPage__info-container-member">
            <p className="userPage__info-container-member-text">
              You do not have any membership yet
            </p>
            <button
              className="userPage__info-container-member-button"
              onClick={handleMemberChange}
            >
              select membership
            </button>
          </div>
        )}
      </div>
      {haveMember && (
        <div className="userPage__info-container-member-isMember mt-[-40px]">
          <div className="userPage__info-container-member-isMember-duration">
            <p className="userPage__info-container-member-isMember-duration-months">
              12 months
            </p>
            <p className="userPage__info-container-member-isMember-duration-data mt-1">
              Due to 01.01.2025
            </p>
          </div>
          <div className="userPage__info-container-member-isMember-benefits">
            <div className="userPage__info-container-member-isMember-benefits-container">
              <div className="prices__grid-card-content">
                <div>
                  <GymIcon />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text">
                  Gym Access
                </p>
              </div>
              <div className="prices__grid-card-content">
                <div className="ml-1">
                  <GroupIcon />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text ml-0.5">
                  Unlimited Group Classes
                </p>
              </div>
              <div className="prices__grid-card-content">
                <div className="ml-1">
                  <LockerIcon />
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
                  <GivIcon />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text">
                  1 Free Trainer-Led Workout
                </p>
              </div>
              <div className="prices__grid-card-content">
                <div>
                  <GivIcon />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text ">
                  2 Trial Group Classes
                </p>
              </div>
              <div className="prices__grid-card-content">
                <div>
                  <GivIcon />
                </div>
                <p className="userPage__info-container-member-isMember-benefits-text ">
                  2 Trial Days Gym Access
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

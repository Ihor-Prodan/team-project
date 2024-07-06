import React from 'react';
import './policy.scss';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/location';
import { useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';

interface Props {
  themeColor: Theme;
}

const RefundPolicy: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);

  return (
    <div className="wrapper">
      <Header themeColor={themeColor} />
      <section className="policy">
        <h2 className="policy__title">Return and Refund Policy</h2>
        <p className="policy__descriptions">
          At Pulse Gym, we strive to ensure your satisfaction with our services.
          This Return and Refund Policy explains your rights regarding
          membership fees, products, and services, and how to request a refund
          if needed.
        </p>
        <div className="">
          <h3 className="policy__titles-sections">1. Membership Refunds</h3>
          <ul>
            <li className="policy__text">
              Cooling-Off Period: New members can cancel their membership within
              the first [7/14/30] days for a full refund, provided no services
              have been used.
            </li>
            <li className="policy__text">
              Prorated Refunds: If you cancel your membership after the
              cooling-off period but before the end of your billing cycle, you
              may be eligible for a prorated refund for unused services.
            </li>
            <li className="policy__text">
              Non-Refundable Fees: Joining fees, administrative fees, and any
              promotional discounts are non-refundable.
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="policy__titles-sections">
            2. Class and Session Refunds
          </h3>
          <ul>
            <li className="policy__text">
              Cancellation Policy: Classes or personal training sessions must be
              canceled at least [24/48] hours in advance to qualify for a refund
              or rescheduling.
            </li>
            <li className="policy__text">
              No-Show Policy: If you do not attend a scheduled class or session
              without prior notice, no refund will be issued.
            </li>
            <li className="policy__text">
              Package Refunds: Refunds for unused classes or sessions in a
              package are prorated based on the original package price and the
              number of used sessions.
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="policy__titles-sections">
            3. How to Request a Refund
          </h3>
          <ul>
            <li className="policy__text">
              Contact Us: To request a refund, please contact our customer
              service team at [123-456-7890] or [support@yourgym.com] with your
              membership or order details.
            </li>
            <li className="policy__text">
              Processing Time: Refund requests are processed within [7/10]
              business days. Refunds are issued to the original payment method.
            </li>
            <li className="policy__text">
              Confirmation: Once your refund is processed, we will send you a
              confirmation email with the details of the refund.
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="policy__titles-sections">4. Contact Information</h3>
          <p className="policy__text">
            We implement industry-standard security measures to protect your
            personal information from unauthorized access, disclosure, or
            misuse. However, no security system is foolproof, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div className="">
          <h3 className="policy__titles-sections">5. Contact Us</h3>
          <p className="policy__text mb-9">
            If you have any questions or need assistance with our Return and
            Refund Policy, please reach out to us:
          </p>
          <ul>
            <li className="policy__text">Email: info@pulsegym.ua</li>
            <li className="policy__text">Phone: +380 (44) 123-4567</li>
            <li className="policy__text">
              Address: Kyiv, Velyka Vasylkivska Street, 72
            </li>
          </ul>
        </div>
      </section>
      <Footer />
      {isModalVisible && <Auth />}
    </div>
  );
};

export default RefundPolicy;

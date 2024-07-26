import React, { useEffect } from 'react';
import './policy.scss';
import Header from '../Header/Header';
import { Theme } from '../Redux/Slices/themeMode';
import Footer from '../Footer/Footer';
import useScrollToTop from '../../Hooks/location';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { Auth } from '../Auth/Auth';
import PageMenu from '../PageMenu/PageMenu';
import { useNavigate } from 'react-router-dom';
import { setIsOpenMenu } from '../Redux/Slices/Menu';

interface Props {
  themeColor: Theme;
}

const PrivacyPolicy: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);
  const currentUser = useAppSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsOpenMenu(false));
  }, [navigate]);

  return (
    <div className="wrapper">
      <Header themeColor={themeColor} />
      <section className="policy">
        <h2 className="policy__title">PRIVACY POLICY</h2>
        <p className="policy__descriptions">
          At Pulse Gym, your privacy is a priority. This Privacy Policy outlines
          how we collect, use, and protect your personal information when you
          interact with our services.
        </p>

        <h3 className="policy__titles-sections">1. Information We Collect</h3>
        <ul>
          <li className="policy__text">
            Personal Information: We may collect your name, email address, phone
            number, payment information, and other personal details when you
            register, book sessions, or communicate with us.
          </li>
          <li className="policy__text">
            Usage Data: We collect information about how you interact with our
            website and services, including IP address, browser type, access
            times, and pages viewed.
          </li>
          <li className="policy__text">
            Health Information: With your consent, we may collect health-related
            information to provide appropriate fitness guidance and ensure your
            safety.
          </li>
        </ul>

        <h3 className="policy__titles-sections">
          2. How We Use Your Information
        </h3>
        <ul>
          <li className="policy__text">
            Service Delivery: To provide and manage your memberships, schedule
            classes, and deliver personalized fitness programs.
          </li>
          <li className="policy__text">
            Communication: To send you updates, respond to inquiries, and inform
            you about promotions or new services.
          </li>
          <li className="policy_text">
            Improvement: To enhance our services, analyze usage trends, and
            develop new features.
          </li>
          <li className="policy__text">
            Legal Compliance: To comply with applicable laws, regulations, and
            legal processes.
          </li>
        </ul>

        <h3 className="policy__titles-sections">3. Information Sharing</h3>
        <p className="policy__text">
          We do not sell or rent your personal information. We may share your
          information with:
        </p>
        <ul>
          <li className="policy__text">
            Service Providers: Trusted third parties who assist us in operating
            our gym, processing payments, and improving our services.
          </li>
          <li className="policy__text">
            Legal Requirements: If required by law, regulation, or legal
            process, we may disclose your information to government authorities
            or other entities.
          </li>
        </ul>

        <h3 className="policy__titles-sections">4. Data Security</h3>
        <p className="policy__text">
          We implement industry-standard security measures to protect your
          personal information from unauthorized access, disclosure, or misuse.
          However, no security system is foolproof, and we cannot guarantee
          absolute security.
        </p>

        <h3 className="policy__titles-sections">5. Your Choices</h3>
        <ul>
          <li className="policy__text">
            Access and Update: You may access and update your personal
            information by contacting us.
          </li>
          <li className="policy__text">
            Marketing Communications: You can opt-out of receiving marketing
            communications by following the unsubscribe instructions in our
            emails or contacting us directly.
          </li>
        </ul>

        <h3 className="policy__titles-sections">
          6. Cookies and Tracking Technologies
        </h3>
        <p className="policy__text">
          Our website uses cookies and similar technologies to enhance your
          experience. You can control cookie settings through your browser.
          Refer to our [Cookie Policy] for more details.
        </p>

        <h3>7. Children&apos;s Privacy</h3>
        <p className="policy__text">
          Our services are not intended for individuals under 16. We do not
          knowingly collect personal information from children under 16.
        </p>

        <h3 className="policy__titles-sections">8. Changes to This Policy</h3>
        <p className="policy__text">
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting the new policy on our
          website with the effective date.
        </p>

        <h3 className="policy__titles-sections">9. Contact Us</h3>
        <p className="policy__text mb-9">
          If you have any questions or concerns about this Privacy Policy or how
          we handle your information, please contact us at:
        </p>
        <ul>
          <li className="policy__text">Email: info@pulsegym.ua</li>
          <li className="policy__text">Phone: +380 (44) 123-4567</li>
          <li className="policy__text">
            Address: Kyiv, Velyka Vasylkivska Street, 72
          </li>
        </ul>
      </section>
      <Footer />
      {isModalVisible && !currentUser && <Auth />}
      <PageMenu themeColor={Theme.dark} />
    </div>
  );
};

export default React.memo(PrivacyPolicy);

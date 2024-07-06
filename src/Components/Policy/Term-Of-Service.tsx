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

const TermsOfService: React.FC<Props> = ({ themeColor }) => {
  useScrollToTop();
  const isModalVisible = useAppSelector(state => state.modal.isModal);

  return (
    <div className="wrapper">
      <Header themeColor={themeColor} />
      <section className="policy">
        <h2 className="policy__title">TERMS OF SERVICE</h2>
        <p className="policy__descriptions">
          Welcome to Pulse Gym. By accessing or using our services, you agree to
          comply with and be bound by the following Terms of Service. Please
          read these terms carefully before using our services.
        </p>

        <h3 className="policy__titles-sections">1. Acceptance of Terms</h3>
        <p className="policy__text">
          By accessing our gym, website, or any of our services, you agree to
          these Terms of Service. If you do not agree to these terms, please do
          not use our services.
        </p>

        <h3 className="policy__titles-sections">2. Membership and Access</h3>
        <ul>
          <li className="policy__text">
            Eligibility: Membership is available to individuals aged 16 and
            older. Members under 18 must have a parent or legal guardian’s
            consent.
          </li>
          <li className="policy__text">
            Payment: Membership fees are due in advance and are non-refundable.
            We reserve the right to apply additional fees as described in your
            membership agreement.
          </li>
          <li className="policy__text">
            Termination: We reserve the right to terminate your membership or
            deny access to our services for any reason, including violation of
            these terms or inappropriate behavior.
          </li>
        </ul>

        <h3 className="policy__titles-sections">3. Use of Facilities</h3>
        <ul>
          <li className="policy__text">
            Hours of Operation: Our gym hours are subject to change. Please
            check our website or contact us for current hours.
          </li>
          <li className="policy__text">
            Guidelines: Use gym equipment responsibly and follow all posted
            guidelines. Notify staff immediately of any equipment malfunctions.
          </li>
          <li className="policy__text">
            Personal Conduct: Respect other members and staff. Abusive,
            disruptive, or inappropriate behavior will not be tolerated.
          </li>
          <li className="policy__text">
            Personal Belongings: We are not responsible for lost or stolen
            items. Please secure your belongings in lockers provided.
          </li>
        </ul>

        <h3 className="policy__titles-sections">4. Health and Safety</h3>
        <p className="policy__text">
          Health Considerations: Consult your physician before beginning any
          exercise program. Notify our staff of any health conditions that may
          affect your ability to participate in activities.
        </p>
        <p className="policy__text">
          Safety Rules: Follow all safety rules and staff instructions. Report
          any injuries or safety issues immediately.
        </p>

        <h3 className="policy__titles-sections">5. Online Services</h3>
        <p className="policy__text">
          Website Use: Your use of our website is subject to these terms and our
          Privacy Policy. Do not misuse our site or interfere with its
          operation.
        </p>
        <p className="policy__text">
          Account Security: You are responsible for maintaining the
          confidentiality of your account information and for all activities
          that occur under your account.
        </p>

        <h3 className="policy__titles-sections">6. Payment and Billing</h3>
        <p className="policy__text">
          Payment Methods: We accept various payment methods as described during
          the membership registration process.
        </p>
        <p className="policy__text">
          Billing: Recurring payments are processed automatically. You are
          responsible for keeping your payment information up-to-date.
          Cancellations: Membership cancellations must be in accordance with our
          cancellation policy outlined in your membership agreement.
        </p>

        <h3 className="policy__titles-sections">7. Intellectual Property</h3>
        <p className="policy__text">
          Content: All content on our website, including text, graphics, and
          logos, is the property of Pulse Gym and protected by copyright and
          trademark laws.
        </p>
        <p className="policy__text">
          Restrictions: You must not use our website’s logos and marks as
          trademarks of our company. Unauthorized use is prohibited.
        </p>

        <h3 className="policy__titles-sections">8. Limitation of Liability</h3>
        <p className="policy__text">
          We are not liable for any injury, loss, or damage that may result from
          using our facilities or services, whether caused by our negligence.
          Your use of our services is at your own risk.
        </p>

        <h3 className="policy__titles-sections">9. Changes to Terms</h3>
        <p className="policy__text">
          We may modify these Terms of Service at any time. Changes will be
          effective upon posting on our website. Continued use of our services
          constitutes acceptance of the revised terms.
        </p>

        <h3 className="policy__titles-sections">10. Governing Law</h3>
        <p className="policy__text">
          These terms are governed by the laws of [Your State/Country], without
          regard to its conflict of law principles.
        </p>

        <h3 className="policy__titles-sections">11. Contact Us</h3>
        <p className="policy__text mb-9">
          If you have any questions about these Terms of Service, please contact
          us:
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
      {isModalVisible && <Auth />}
    </div>
  );
};

export default TermsOfService;

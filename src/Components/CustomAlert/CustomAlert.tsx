import React from 'react';
import { useAppDispatch, useAppSelector } from '../../Hooks/hooks';
import { hideAlert } from '../Redux/Slices/Alert';
import './alert.scss';

export const CustomAlert: React.FC = () => {
  const alert = useAppSelector(state => state.alertMessage);
  const dispatch = useAppDispatch();

  if (!alert.isVisible) {
    return null;
  }

  return (
    <>
      <div className="custom-alert">
        <div className="custom-alert-content">
          <span className="custom-alert-content-typeMessage">{alert.type}</span>
          <svg
            onClick={() => dispatch(hideAlert())}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              // eslint-disable-next-line max-len
              d="M12.6884 11.9971L17.8576 6.82592C17.9488 6.73432 18 6.61035 17.9999 6.48114C17.9998 6.35192 17.9485 6.22801 17.8572 6.13654C17.6744 5.95479 17.3525 5.95387 17.1679 6.13746L12 11.3087L6.83032 6.13608C6.64662 5.95479 6.32469 5.95571 6.14192 6.137C6.09655 6.18216 6.06064 6.2359 6.03627 6.29508C6.01191 6.35426 5.99958 6.4177 6.00001 6.48169C6.00001 6.61204 6.05053 6.73412 6.14192 6.82454L11.3111 11.9967L6.14238 17.1693C6.05116 17.261 6.00008 17.3851 6.00034 17.5145C6.0006 17.6438 6.05218 17.7677 6.14375 17.8591C6.23239 17.9468 6.35776 17.9972 6.48727 17.9972H6.49002C6.61999 17.9968 6.74536 17.9458 6.83216 17.8573L12 12.686L17.1697 17.8586C17.2611 17.9495 17.3832 18 17.5127 18C17.5768 18.0002 17.6402 17.9877 17.6994 17.9633C17.7586 17.9389 17.8124 17.903 17.8577 17.8578C17.903 17.8125 17.9389 17.7588 17.9633 17.6996C17.9877 17.6404 18.0002 17.577 18 17.513C18 17.3831 17.9495 17.2606 17.8576 17.1702L12.6884 11.9971Z"
              fill="#111115"
            />
          </svg>
        </div>
        <p className="custom-alert-content-alertMessage">{alert.message}</p>
      </div>
    </>
  );
};

export default React.memo(CustomAlert);

/* eslint-disable max-len */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './footer.scss';
import { contacts, navItems, policy, social } from './Helpers/footerNav';

export const Footer: React.FC = () => {
  return (
    <>
      <section className="footer">
        <div className="footer__top">
          <div className="footer__block-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="339"
              height="44"
              viewBox="0 0 339 44"
              fill="none"
            >
              <path
                d="M77.7686 0.798568V26.8443C77.7686 30.9805 77.2567 34.3181 76.2329 36.8571C75.25 39.3552 73.6324 41.1776 71.38 42.3243C69.1276 43.43 66.1176 43.9829 62.35 43.9829C58.4186 43.9829 55.2857 43.43 52.9514 42.3243C50.6171 41.1776 48.9176 39.3552 47.8529 36.8571C46.829 34.3181 46.3171 30.9805 46.3171 26.8443V0.798568H52.46V26.8443C52.46 29.7929 52.7467 32.1476 53.32 33.9086C53.9343 35.6286 54.9376 36.8571 56.33 37.5943C57.7633 38.2905 59.6676 38.6386 62.0429 38.6386C64.4181 38.6386 66.2814 38.2905 67.6329 37.5943C69.0252 36.8571 70.0286 35.6286 70.6429 33.9086C71.2981 32.1476 71.6257 29.7929 71.6257 26.8443V0.798568H77.7686Z"
                fill="#EDEDED"
              />
              <path
                d="M96.1923 0.798568V34.2157C96.1923 35.5262 96.52 36.509 97.1752 37.1643C97.8304 37.7786 98.8338 38.0857 100.185 38.0857H115.358L115.665 42.8157C112.921 43.0205 110.137 43.1433 107.311 43.1843C104.485 43.2252 101.659 43.2457 98.8338 43.2457C95.7214 43.2457 93.4895 42.4881 92.1381 40.9729C90.7866 39.4167 90.1109 37.4714 90.1109 35.1371V0.798568H96.1923Z"
                fill="#EDEDED"
              />
              <path
                d="M136.648 0.0614278C138.695 0.10238 140.805 0.20476 142.975 0.36857C145.186 0.53238 147.377 0.859999 149.548 1.35143L149.118 5.71286C147.357 5.63095 145.371 5.56952 143.159 5.52857C140.989 5.48762 138.88 5.46714 136.832 5.46714C135.399 5.46714 134.17 5.50809 133.146 5.59C132.123 5.6719 131.283 5.89714 130.628 6.26571C129.973 6.63428 129.481 7.22809 129.154 8.04714C128.867 8.86619 128.724 9.99238 128.724 11.4257C128.724 13.5962 129.133 15.1319 129.952 16.0329C130.771 16.8929 132.102 17.5481 133.945 17.9986L142.484 20.2714C145.76 21.0905 148.012 22.4829 149.241 24.4486C150.469 26.3733 151.084 28.9738 151.084 32.25C151.084 34.7071 150.797 36.6933 150.224 38.2086C149.691 39.7238 148.831 40.8909 147.644 41.71C146.497 42.529 145.002 43.1024 143.159 43.43C141.316 43.7576 139.125 43.9214 136.586 43.9214C135.194 43.9214 133.351 43.86 131.058 43.7371C128.765 43.6143 126.123 43.2662 123.134 42.6929L123.564 38.2086C125.98 38.2905 127.945 38.3724 129.461 38.4543C131.017 38.4952 132.348 38.5157 133.454 38.5157C134.559 38.5157 135.665 38.5157 136.771 38.5157C138.818 38.5157 140.436 38.3724 141.624 38.0857C142.811 37.7581 143.651 37.1438 144.142 36.2429C144.634 35.3009 144.879 33.9495 144.879 32.1886C144.879 30.6733 144.695 29.4857 144.326 28.6257C143.999 27.7657 143.446 27.1309 142.668 26.7214C141.931 26.2709 140.968 25.9024 139.781 25.6157L130.996 23.22C127.925 22.36 125.755 20.9676 124.485 19.0429C123.215 17.1181 122.581 14.5586 122.581 11.3643C122.581 8.90714 122.847 6.92095 123.379 5.40571C123.953 3.89048 124.813 2.76429 125.959 2.02714C127.106 1.24905 128.56 0.737142 130.321 0.491426C132.082 0.20476 134.191 0.0614278 136.648 0.0614278Z"
                fill="#EDEDED"
              />
              <path
                d="M169.721 0.737141C171.769 0.737141 173.858 0.737141 175.987 0.737141C178.117 0.737141 180.205 0.778094 182.253 0.86C184.341 0.900952 186.328 0.982855 188.211 1.10571L187.966 5.83571H171.073C169.844 5.83571 168.943 6.14285 168.37 6.75714C167.797 7.37143 167.51 8.35429 167.51 9.70571V34.2771C167.51 35.6286 167.797 36.6319 168.37 37.2871C168.943 37.9014 169.844 38.2086 171.073 38.2086H187.966L188.211 42.8771C186.328 43 184.341 43.0819 182.253 43.1229C180.205 43.1638 178.117 43.1843 175.987 43.1843C173.858 43.2252 171.769 43.2457 169.721 43.2457C167.182 43.2457 165.155 42.57 163.64 41.2186C162.166 39.8262 161.408 37.9833 161.367 35.69V8.29286C161.408 5.95857 162.166 4.11571 163.64 2.76428C165.155 1.41285 167.182 0.737141 169.721 0.737141ZM162.473 18.49H185.57V23.22H162.473V18.49Z"
                fill="#EDEDED"
              />
              <path
                d="M231.282 0C232.798 0 234.231 0.0409519 235.582 0.122856C236.975 0.204759 238.306 0.348093 239.575 0.552857C240.886 0.716665 242.155 0.982854 243.384 1.35143L242.77 5.89714C241.459 5.77428 240.149 5.69238 238.838 5.65143C237.569 5.56952 236.32 5.52857 235.091 5.52857C233.862 5.48762 232.675 5.46714 231.528 5.46714C229.358 5.46714 227.515 5.6719 226 6.08143C224.484 6.49095 223.276 7.28952 222.375 8.47714C221.515 9.66476 220.88 11.3643 220.471 13.5757C220.061 15.7871 219.857 18.6743 219.857 22.2371C219.857 26.2914 220.123 29.5062 220.655 31.8814C221.229 34.2567 222.15 35.9767 223.42 37.0414C224.73 38.1062 226.47 38.6386 228.641 38.6386C230.156 38.6386 231.528 38.4338 232.757 38.0243C233.985 37.6148 235.132 37.0824 236.197 36.4271C237.302 35.7309 238.347 35.0348 239.33 34.3386L240.128 37.9014C239.432 38.7205 238.429 39.6214 237.118 40.6043C235.849 41.5462 234.354 42.3448 232.634 43C230.914 43.6552 228.969 43.9829 226.798 43.9829C223.645 43.9829 221.065 43.2048 219.058 41.6486C217.092 40.0924 215.639 37.6967 214.697 34.4614C213.796 31.1852 213.345 26.9876 213.345 21.8686C213.345 16.299 213.919 11.9171 215.065 8.72285C216.212 5.52857 218.096 3.27619 220.717 1.96571C223.338 0.655238 226.86 0 231.282 0ZM244.551 18.6743V43.1843H240.067L239.084 36.9186L238.531 35.5671V18.6743H244.551Z"
                fill="#EDEDED"
              />
              <path
                d="M285.521 0.798568L271.208 28.9943H265.618L251.244 0.798568H257.755L266.355 18.2443C266.724 19.0224 267.051 19.8414 267.338 20.7014C267.625 21.5205 267.911 22.3395 268.198 23.1586H268.628C268.915 22.3395 269.201 21.5205 269.488 20.7014C269.816 19.8414 270.143 19.0429 270.471 18.3057L279.071 0.798568H285.521ZM271.454 24.8171V43.1843H265.311V24.8171H271.454Z"
                fill="#EDEDED"
              />
              <path
                d="M334.127 0.798568C335.724 0.798568 336.543 1.63809 336.584 3.31714L338.304 43.1843H332.284L330.749 5.77428H329.52L320.552 36.1814C320.224 37.5329 319.364 38.2086 317.972 38.2086H312.934C311.501 38.2086 310.6 37.5329 310.232 36.1814L301.263 5.77428H300.034L298.622 43.1843H292.602L294.26 3.31714C294.342 1.63809 295.161 0.798568 296.717 0.798568H303.352C304.662 0.798568 305.522 1.47428 305.932 2.82571L313.364 27.8886C313.692 28.8305 313.958 29.7724 314.163 30.7143C314.368 31.6562 314.613 32.639 314.9 33.6629H315.944C316.231 32.639 316.477 31.6562 316.682 30.7143C316.927 29.7724 317.193 28.7895 317.48 27.7657L324.913 2.82571C325.241 1.47428 326.101 0.798568 327.493 0.798568H334.127Z"
                fill="#EDEDED"
              />
              <path
                d="M10.8459 21.359C10.9698 21.359 22.1033 20.9934 22.4126 20.9934C26.6088 20.9934 30.0029 17.5144 29.9694 13.2435C29.936 9.01309 26.3393 5.62964 22.1739 5.62964H20.6066L20.6021 7.19597C20.6003 8.01817 21.2243 8.72003 22.0328 8.75862C24.3778 8.86978 26.3791 10.3883 26.4596 12.8531C26.5256 14.865 25.4811 17.2333 22.4723 17.3555C22.4723 17.3555 10.6271 17.5438 10.4408 17.5438C2.47793 17.5447 0 18.8722 0.0208002 28.4291C0.0208002 28.6808 0 43.1847 0 43.1847H2.70945C3.55864 43.1847 4.24776 42.4856 4.24776 41.6221C4.24776 41.6221 4.18897 30.7846 4.24776 26.8168C4.3183 22.0545 5.77702 21.3306 10.8459 21.359Z"
                fill="#EDEDED"
              />
              <path
                d="M22.2462 0.184286H0V13.0006C0 13.8632 0.688214 14.5632 1.53831 14.5632H3.78834C3.80281 14.5632 3.81547 14.5513 3.81547 14.5357V3.89753C3.81547 3.88284 3.82723 3.86997 3.84261 3.86997H22.4036C27.3866 3.86997 31.4462 7.84504 31.6814 12.8472C31.9355 18.2526 27.5982 22.7412 22.2707 22.7412C22.2707 22.7412 14.1785 22.7412 11.4817 22.7412C6.47609 22.7412 5.85661 24.4067 5.85661 28.4553V43.1567C5.85661 43.1714 5.86836 43.1843 5.88374 43.1843H8.12292C8.97211 43.1843 9.66123 42.4852 9.66123 41.6216V30.1236C9.70192 27.6202 9.60425 26.4673 12.6492 26.4278H22.4036C29.3499 26.4278 35.0157 20.8579 35.3096 13.8752C35.6235 6.38804 29.624 0.184286 22.2462 0.184286Z"
                fill="#EDEDED"
              />
            </svg>
          </div>
          <div className="footer__block-contact">
            {contacts.map(contact => (
              <a className="footer__contact-link" key={contact}>
                <p className="footer__contact">{contact}</p>
              </a>
            ))}
          </div>
          <div className="footer__block-nav">
            <section className="footer__navigation">
              <nav className="footer__navigation__nav">
                <ul className="footer__navigation__nav-list">
                  {navItems.map(item => (
                    <NavLink
                      to={item.path}
                      key={item.path}
                      className="footer__navigation__nav-links"
                    >
                      <li className="footer__navigation__nav-items">
                        {item.name}
                      </li>
                    </NavLink>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
          <div className="footer__block-social">
            {social.map(soc => (
              <a className="footer__social-link" key={soc}>
                <p className="footer__social">{soc}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__policy">
            {policy.map(item => (
              <Link
                to={item.path}
                className="footer__policy-link"
                key={item.path}
              >
                <p className="footer__policy-item">{item.name}</p>
              </Link>
            ))}
          </div>
          <div className="footer__bottom-copyring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clipPath="url(#clip0_30_172)">
                <path
                  d="M1 8C1 9.85652 1.7375 11.637 3.05025 12.9497C4.36301 14.2625 6.14348 15 8 15C9.85652 15 11.637 14.2625 12.9497 12.9497C14.2625 11.637 15 9.85652 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1C6.14348 1 4.36301 1.7375 3.05025 3.05025C1.7375 4.36301 1 6.14348 1 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.146 4.992C6.934 4.992 6.219 5.912 6.219 7.494V8.554C6.219 10.125 6.922 11.016 8.146 11.016C9.125 11.016 9.787 10.43 9.875 9.598H11.17V9.691C11.07 11.139 9.816 12.158 8.14 12.158C6.049 12.158 4.871 10.822 4.871 8.555V7.482C4.871 5.221 6.072 3.844 8.141 3.844C9.822 3.844 11.076 4.898 11.17 6.416V6.504H9.875C9.787 5.625 9.107 4.992 8.146 4.992Z"
                  fill="#A7A7A7"
                />
              </g>
              <defs>
                <clipPath id="clip0_30_172">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="footer__copyring-text">
              Pulse Gym 2024. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Footer);

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import jwt from 'jwt-decode';
const cx = classNames.bind(styles);

const Header = () => {
  const refMenu = React.useRef(null);

  const navigate = useNavigate();

  const handleSubmit = () => {
    refMenu.current.classList.toggle(cx('active'));
  };
  const token = localStorage.getItem('token');
  const payload = jwt(token);
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header>
      <div className={cx('wrapper')}>
        <div className={cx('logo')}>
          <h2>Chungduc_</h2>
        </div>
        <div className={cx('navbar')}>
          <ul ref={refMenu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <p className={cx('logout')} onClick={logout}>
                Log Out <FontAwesomeIcon icon={faSignInAlt} />
              </p>
            </li>
          </ul>
        </div>
        <div className={cx('menu-bars')} onClick={handleSubmit}>
          <FontAwesomeIcon className={cx('icon')} icon={faBars} />
        </div>
      </div>
    </header>
  );
};

export default Header;

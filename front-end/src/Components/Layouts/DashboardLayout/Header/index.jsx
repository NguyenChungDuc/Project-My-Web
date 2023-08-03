import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login');
  };
  return (
    <header>
      <div className={cx('wrapper')}>
        <div className={cx('logo')}>
          <h2>DashBoard Page</h2>
        </div>
        <div className={cx('navbar')}>
          <ul>
            <li>
              <Link to="/homedashboard">Home Dashboard</Link>
            </li>
            <li onClick={logout}>
              <Link to="/contact">
                Log Out <FontAwesomeIcon icon={faSignInAlt} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './HomeDashBoard.module.scss';

const cx = classNames.bind(styles);
function HomeDashboard() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('option')}>
        <h3>Pricing Page</h3>
        <Link to="/pricingdashboard">
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default HomeDashboard;

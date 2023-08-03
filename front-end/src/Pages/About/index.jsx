import React from 'react';
import { Link } from 'react-router-dom';
import imgContact from '../../Components/Assets/contact.png';
import classNames from 'classnames/bind';
import styles from './About.module.scss';

const cx = classNames.bind(styles);
const AboutPage = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('about-introduce')}>
        <div className={cx('about-introduce_img')}>
          <img src={imgContact} alt="" />
        </div>
        <div className={cx('about-introduce_detail')}>
          <div className={cx('form-detail')}>
            <h1>Lectors Welcome</h1>
            <p>
              If you have an idea about your course or other educational
              materials and building your community, let us know! Don’t waste
              your potential and get fair conditions for spreading your
              knowledge.
            </p>
            <Link to="/contact">
              <button type="button">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

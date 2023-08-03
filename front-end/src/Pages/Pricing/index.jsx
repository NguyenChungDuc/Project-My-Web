import React from 'react';
import classNames from 'classnames/bind';
import styles from './Pricing.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function PricingPage() {
  return (
    <div className={cx('wrapper')}>
      <h1>Secure Payment</h1>
      <h3>
        You can check the accepted payment methods
        <Link to="/about"> here</Link>
      </h3>
      <div className={cx('form-pricing')}>
        <div className={cx('block-price')}>
          <div className={cx('form-price')}>
            <h4>BASIC</h4>
            <h2>
              $50 <span>/ Starting price</span>
            </h2>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Single page</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Free hosting</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Free domain name</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Responsive Design</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Some Customization</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-time')} icon={faTimes} />
              <p>Dedicated support</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-time')} icon={faTimes} />
              <p>SEO optimization</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-time')} icon={faTimes} />
              <p>Monthly reports</p>
            </div>
          </div>
        </div>
        <div className={cx('block-price')}>
          <div className={cx('form-price')}>
            <h4>ADVANCED</h4>
            <h2>
              $149 <span>/ Starting price</span>
            </h2>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>5+ pages</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Free hosting</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Free domain name</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Responsive Design</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Some Customization</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Dedicated support</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-time')} icon={faTimes} />
              <p>SEO optimization</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-time')} icon={faTimes} />
              <p>Monthly reports</p>
            </div>
          </div>
        </div>
        <div className={cx('block-price')}>
          <div className={cx('form-price')}>
            <h4>ULTIMATE</h4>
            <h2>
              $235 <span>/ Starting price</span>
            </h2>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>5+ pages</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Free hosting</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Free domain name</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Responsive Design</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Some Customization</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Dedicated support</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>SEO optimization</p>
            </div>
            <div className={cx('study-list')}>
              <FontAwesomeIcon className={cx('icon-check')} icon={faCheck} />
              <p>Monthly reports</p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('order')}>
        <div className={cx('form-order')}>
          <h5>Order your website Now !</h5>
          <p>Recieve your website before paying anything.</p>
        </div>
        <div className={cx('button')}>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;

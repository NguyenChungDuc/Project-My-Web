import React from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const ContactPage = () => {
  return (
    <div className={cx('wrapper')}>
      <h1>Contact Us</h1>
      <h3>How can I help you ? </h3>
      <div className={cx('wrapper-contact')}>
        <form action="" className={cx('message-contact')}>
          <h1>Get In Touch</h1>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message" id="" cols="50" rows="10"></textarea>
          <button type="button">Send</button>
        </form>
        <div className={cx('social-contact')}>
          <div className={cx('social-contact_form')}>
            <h3>You can also contact us via email or on our socials</h3>
            <div className={cx('icon-social')}>
              <Link
                target="blank"
                to="https://www.facebook.com/chungduc.nguyen.353/"
              >
                <FontAwesomeIcon id={cx('icon')} icon={faFacebookSquare} />
              </Link>
              <Link target="blank" to="https://www.instagram.com/chungduc_/">
                <FontAwesomeIcon id={cx('icon')} icon={faInstagram} />
              </Link>
              <Link target="blank" to="https://mail.google.com/mail/u/0/#inbox">
                <FontAwesomeIcon id={cx('icon')} icon={faEnvelope} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

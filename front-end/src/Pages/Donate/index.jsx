import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Donate.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const cx = classNames.bind(styles);

function DonatePage() {
  // create div ref
  const divRef = React.useRef(null);

  const handleOnclick = () => {
    // console.log('Success');
    divRef.current.classList.toggle(cx('active'));
  };
  return (
    <div className={cx('wrapper')}>
      <Tippy
        interactive
        delay={[800, 200]}
        animation={false}
        placement="left"
        render={() => (
          <div className={cx('helo')}>
            <h1>Support Chungduc_ if you find the site useful...</h1>
          </div>
        )}
      >
        <FontAwesomeIcon
          onClick={handleOnclick}
          icon={faGift}
          style={{
            '--fa-primary-color': '#0a60f5',
            '--fa-secondary-color': '#1c6bf2',
          }}
          className={cx('icon')}
        />
      </Tippy>
      <div className={cx('donate')} ref={divRef}>
        <div className={cx('form-donate')}>
          <h1>
            Support <span>Chungduc_</span> if you <hr /> find the site useful...
          </h1>
          <div className={cx('animation-donate')}>
            <div className={cx('loader')}>
              <span className={cx('t')}>T</span>
              <span className={cx('h')}>H</span>
              <span className={cx('a')}>A</span>
              <span className={cx('n')}>N</span>
              <span className={cx('k')}>K</span>
              <span className={cx('n')}> </span>
              <span className={cx('y')}>Y</span>
              <span className={cx('o')}>O</span>
              <span className={cx('u')}>U</span>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="Enter you name" />
            <textarea
              placeholder="Say something nice ... "
              rows="4"
              cols="50"
            ></textarea>
            <Link to="/">
              <button type="button">Support Me</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonatePage;

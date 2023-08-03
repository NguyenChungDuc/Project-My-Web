import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import articles1 from '../../Components/Assets/articles1.png';
import articles2 from '../../Components/Assets/articles2.png';
import articles3 from '../../Components/Assets/articles3.png';
import Donate from '../Donate';
import classNames from 'classnames/bind';
import styles from '../Home/Home.module.scss';

const cx = classNames.bind(styles);
const HomePage = () => {
  const refScroll = useRef(null);
  const handleScroll = () => {
    refScroll.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('information')}>
        <div className={cx('form-information')}>
          <h2>Hi , My name is </h2>
          <TypeAnimation
            sequence={[
              'Nguyen',
              1500,
              'NguyenChung', //  Continuing previous Text
              1500,
              'NguyenChungDuc',
              1500,
              'NguyenChung',
              1500,
              'Nguyen',
              1500,
              ' ',
              1500,
            ]}
            style={{
              fontSize: '40px',
              display: 'block',
              color: '#04abb4',
              fontWeight: 'bold',
              letterSpacing: '5px',
              margin: '15px 0',
            }}
            repeat={Infinity}
          />
          <h3>I am a Web Developer</h3>
          <button type="button">
            <Link to="/about">More About Us</Link>
          </button>
        </div>
      </div>
      <div>
        <Donate />
      </div>
      <div className={cx('scroll-down')} onClick={handleScroll}>
        <FontAwesomeIcon className={cx('icon')} icon={faChevronDown} />
      </div>
      <div ref={refScroll} className={cx('articles')}>
        <h1>Articles</h1>
        <div className={cx('block-articles')}>
          <div className={cx('form-articles')}>
            <div className={cx('form-articles_body')}>
              <img src={articles1} alt="" />
              <h1>General</h1>
              <h2>
                Why do you need a <br />
                website ?
              </h2>
              <p>
                Nowadays, the a majority of the customers will visit your
                website before making a purchase, here ...
              </p>
              <Link to="/general">
                <button type="button">Read More</button>
              </Link>
            </div>
          </div>
          <div className={cx('form-articles')}>
            <div className={cx('form-articles_body')}>
              <img src={articles2} alt="" />
              <h1>Branding</h1>
              <h2>
                How to build a successful
                <br />
                brand ?
              </h2>
              <p>
                Building a brand is a difficult task. Here are some tips to
                follow to create a successful brand: ...
              </p>
              <Link to="/brand">
                <button type="button">Read More</button>
              </Link>
            </div>
          </div>
          <div className={cx('form-articles')}>
            <div className={cx('form-articles_body')}>
              <img src={articles3} alt="" />
              <h1>Seo</h1>
              <h2>
                Why do you need a <br />
                website ?
              </h2>
              <p>
                SEO stands for “search engine optimization.” It means the
                process of improving your site to increase its ...
              </p>
              <Link to="/seo">
                <button type="button">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('about-source')}>
        <div className={cx('about-source_title')}>
          <TypeAnimation
            sequence={[
              'Looking',
              1000,
              'Looking for', //  Continuing previous Text
              1000,
              'Looking for code',
              1000,
              'Looking for code snippets',
              1000,
              'Looking for code snippets ?',
              1000,
              'Looking for code snippets',
              1000,
              'Looking for code ',
              1000,
              'Looking for ',
              1000,
              'Looking ',
              1000,
              '',
              1000,
            ]}
            style={{ fontSize: '3em', fontWeight: 'bold', color: '#01939c' }}
            repeat={Infinity}
          />
          <p>Explore free code snippets for your projects.</p>
        </div>
        <div className={cx('block-source')}>
          <div className={cx('block-source_left')}></div>
          <div className={cx('block-source_right')}>
            <p>
              We've got every code snippet you need.
              <br /> From beginner-level to advanced, we offer a wide variety of
              free code snippets.
            </p>
            <button type="button">Check Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

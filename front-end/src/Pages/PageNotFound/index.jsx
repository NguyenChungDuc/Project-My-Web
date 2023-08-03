import React from 'react';
import classNames from 'classnames/bind';
import style from './PageNotFound.module.scss';

const cx = classNames.bind(style);
function Test() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('form-page')}>
        <h1>404</h1>
        <h3>Ooops , page not found</h3>
        <p>Sorry , but the requested page is not found .</p>
      </div>
    </div>
  );
}

export default Test;

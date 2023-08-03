import React from 'react';
import Header from './Header';
const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};

export default DefaultLayout;

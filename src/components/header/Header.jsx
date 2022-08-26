import React from 'react';
import './header.css';
import banner from '../../images/banner.jpg';

const Header = () => {
  return (
    <div className="banner">
      <img
        src={banner}
        alt="banner"
        className="parallax"
      ></img>
    </div>
  );
};

export default Header;

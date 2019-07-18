import React from 'react';
import headerCss from './Header.module.css';

const Header = () => (
  <header className={headerCss.header}>
    <h1 className={headerCss.text}>NBA games per season</h1>
  </header>
);

export default Header;
